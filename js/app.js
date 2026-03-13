// Main Application Module
// Handles user context, device detection, and chat widget initialization

// URL Parameters
const urlParams = new URLSearchParams(window.location.search);
const raw_referrer = urlParams.get("referrer");
let referrer = raw_referrer?.replace(/^'|'$/g, "") || "KHL";
console.log("Referral:", referrer);

// Visitor Data Store
let visitorData = {
    ip: null,
    location: null,
    coordinates: null,
    device: null,
    browser: null,
    sessionStartTime: new Date().toLocaleString()
};

// Prevent duplicate context registration
let contextProviderSet = false;
let contextRetryTimer = null;
let lastSdkInstance = null;

// Fetch IP + Location
(async function initVisitorData() {
    try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        visitorData.ip = ipData.ip;
        console.log("IP fetched:", visitorData.ip);

        if (/^(\d{1,3}\.){3}\d{1,3}$/.test(visitorData.ip)) {
            try {
                const geoResponse = await fetch(`https://ipapi.co/${visitorData.ip}/json/`);
                const geoData = await geoResponse.json();

                if (geoData.city && geoData.country_name) {
                    visitorData.location = `${geoData.city}, ${geoData.region}, ${geoData.country_name}`;
                } else {
                    visitorData.location = "Location unavailable";
                }

                console.log("Geolocation fetched:", visitorData.location);
            } catch (geoError) {
                console.warn("Geolocation fetch failed:", geoError);
                visitorData.location = "Location unavailable";
            }
        } else {
            visitorData.location = "Location unavailable";
        }
    } catch (error) {
        console.error("IP fetch failed:", error);
        visitorData.ip = "Unavailable";
        visitorData.location = "Unavailable";
    }

    // Browser Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                visitorData.coordinates =
                    `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
                updateVisitorDisplay();
            },
            () => {
                visitorData.coordinates = "Unavailable";
                updateVisitorDisplay();
            }
        );
    } else {
        visitorData.coordinates = "Not supported";
    }

    visitorData.device = getDeviceType();
    visitorData.browser = getBrowserInfo();

    updateVisitorDisplay();
})();

// Browser Detection
function getBrowserInfo() {
    const ua = navigator.userAgent;

    if (ua.includes("Firefox")) return "Firefox";
    if (ua.includes("SamsungBrowser")) return "Samsung Internet";
    if (ua.includes("OPR") || ua.includes("Opera")) return "Opera";
    if (ua.includes("Trident")) return "Internet Explorer";
    if (ua.includes("Edg")) return "Edge";
    if (ua.includes("Chrome")) return "Chrome";
    if (ua.includes("Safari")) return "Safari";

    return "Unknown";
}

// Device Detection
function getDeviceType() {
    const uaData = navigator.userAgentData;

    if (uaData && uaData.platform) {
        return uaData.platform;
    }

    const fallbackUA = navigator.userAgent;

    if (/iPad/.test(fallbackUA)) return "iPad";
    if (/iPhone/.test(fallbackUA)) return "iPhone";
    if (/Android/.test(fallbackUA)) return "Android";
    if (/Windows/.test(fallbackUA)) return "Windows";
    if (/Macintosh/.test(fallbackUA)) return "Mac";

    return "Unknown";
}

// Update Visitor Display
function updateVisitorDisplay() {
    const map = {
        visitorIP: visitorData.ip,
        visitorDevice: visitorData.device,
        visitorLocation: visitorData.location,
        visitorCoordinates: visitorData.coordinates,
        visitorBrowser: visitorData.browser,
        sessionTime: visitorData.sessionStartTime
    };

    Object.keys(map).forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = map[id] || "Loading...";
        }
    });
}

// Build chat context payload
function buildChatContext() {
    return {
        VisitorIP: { value: visitorData.ip || "unavailable", isDisplayable: true },
        Referral: { value: referrer, isDisplayable: true },
        DeviceType: { value: visitorData.device || "Unknown", isDisplayable: true },
        UserAgent: { value: navigator.userAgent, isDisplayable: true },
        Location: { value: visitorData.location || "unavailable", isDisplayable: true },
        Coordinates: { value: visitorData.coordinates || "unavailable", isDisplayable: true }
    };
}

// Safe context setter
function setChatContextWhenReady() {
    if (contextRetryTimer) {
        clearInterval(contextRetryTimer);
        contextRetryTimer = null;
    }

    let tries = 0;
    const maxTries = 20;

    contextRetryTimer = setInterval(() => {
        tries++;

        const sdk = window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK;

        if (!sdk || typeof sdk.setContextProvider !== "function") {
            if (tries >= maxTries) {
                clearInterval(contextRetryTimer);
                contextRetryTimer = null;
                console.warn("LiveChat SDK not ready after retries.");
            }
            return;
        }

        if (sdk !== lastSdkInstance) {
            contextProviderSet = false;
            lastSdkInstance = sdk;
        }

        if (contextProviderSet) {
            clearInterval(contextRetryTimer);
            contextRetryTimer = null;
            console.log("Context provider already set for current SDK.");
            return;
        }

        try {
            const ctx = buildChatContext();
            sdk.setContextProvider(() => ctx);

            contextProviderSet = true;
            clearInterval(contextRetryTimer);
            contextRetryTimer = null;

            console.log("Context set:", ctx);
        } catch (e) {
            console.warn("SDK exists but not ready yet, retrying...", e);

            if (tries >= maxTries) {
                clearInterval(contextRetryTimer);
                contextRetryTimer = null;
                console.warn("Unable to set chat context after retries.");
            }
        }
    }, 300);
}

function resetChatContextRegistration() {
    contextProviderSet = false;
    lastSdkInstance = null;

    if (contextRetryTimer) {
        clearInterval(contextRetryTimer);
        contextRetryTimer = null;
    }

    console.log("Chat context registration state reset.");
}

window.resetChatContextRegistration = resetChatContextRegistration;

// Re-register context whenever LCW signals ready
window.addEventListener("lcw:ready", function () {
    console.log("lcw:ready received");
    contextProviderSet = false;
    setChatContextWhenReady();
});

// Widget gets recreated/opened, try again safely
window.addEventListener("lcw:startChat", function () {
    if (!contextProviderSet) {
        console.log("lcw:startChat received - retrying context set");
        setChatContextWhenReady();
    }
});

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
    if (typeof initAuth === "function") {
        initAuth();
    }

    updateVisitorDisplay();
});