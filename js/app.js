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
    const ua = navigator.userAgentData;

    if (ua && ua.platform) {
        return ua.platform;
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

    Object.keys(map).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = map[id] || "Loading...";
    });
}

// Full User Agent
function getFullUserAgent() {
    return navigator.userAgent;
}

// LiveChat Context Injection
function setChatContext() {
    const ctx = {
        VisitorIP: { value: visitorData.ip || "unavailable", isDisplayable: true },
        Referral: { value: referrer, isDisplayable: true },
        DeviceType: { value: visitorData.device || "Unknown", isDisplayable: true },
        UserAgent: { value: getFullUserAgent(), isDisplayable: true },
        Location: { value: visitorData.location || "unavailable", isDisplayable: true },
        Coordinates: { value: visitorData.coordinates || "unavailable", isDisplayable: true }
    };

    if (window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK?.setContextProvider) {
        Microsoft.Omnichannel.LiveChatWidget.SDK.setContextProvider(() => ctx);
        console.log("Context set:", ctx);
    } else {
        console.warn("LiveChat SDK not ready.");
    }
}

// Listen for LCW ready event
window.addEventListener("lcw:ready", function () {
    console.log("Widget ready event received.");
    setChatContext();
});

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
    if (typeof initAuth === "function") {
        initAuth();
    }
    updateVisitorDisplay();
});