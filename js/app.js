// Main Application Module
// Handles user context, device detection, and chat widget initialization

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const raw_referrer = urlParams.get('referrer');
let referrer = raw_referrer?.replace(/^'|'$/g, '') || "KHL";
console.log("Referral:", referrer);

// User data storage
let visitorData = {
    ip: null,
    location: null,
    coordinates: null,
    device: null,
    browser: null,
    sessionStartTime: new Date().toLocaleString()
};

/**
 * Fetch user's IP address and location
 */
(async () => {
    try {
        // Fetch IP address
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();
        visitorData.ip = ipData.ip;
        console.log("IP fetched:", visitorData.ip);
        
        // Try to get geolocation information from IP
        try {
            // Validate IP format before using it
            if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(visitorData.ip)) {
                throw new Error("Invalid IP format");
            }
            
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
    } catch (error) {
        console.error("IP fetch failed:", error);
        visitorData.ip = "Unavailable";
        visitorData.location = "Unavailable";
    }
    
    // Try to get browser geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                visitorData.coordinates = `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
                console.log("Browser geolocation:", visitorData.coordinates);
                updateVisitorDisplay();
            },
            (error) => {
                console.warn("Browser geolocation denied or unavailable:", error.message);
                visitorData.coordinates = "Unavailable";
                updateVisitorDisplay();
            }
        );
    } else {
        visitorData.coordinates = "Not supported by browser";
    }
    
    // Get device and browser info
    visitorData.device = getDeviceType();
    visitorData.browser = getBrowserInfo();
    
    // Update display (will be updated again when geolocation completes if available)
    updateVisitorDisplay();
})();

/**
 * Get browser information
 * @returns {string} Browser name
 */
function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = "Unknown";
    
    if (ua.indexOf("Firefox") > -1) {
        browser = "Firefox";
    } else if (ua.indexOf("SamsungBrowser") > -1) {
        browser = "Samsung Internet";
    } else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) {
        browser = "Opera";
    } else if (ua.indexOf("Trident") > -1) {
        browser = "Internet Explorer";
    } else if (ua.indexOf("Edge") > -1) {
        browser = "Edge (Legacy)";
    } else if (ua.indexOf("Edg") > -1) {
        browser = "Edge";
    } else if (ua.indexOf("Chrome") > -1) {
        browser = "Chrome";
    } else if (ua.indexOf("Safari") > -1) {
        browser = "Safari";
    }
    
    return browser;
}

/**
 * Update visitor information display
 */
function updateVisitorDisplay() {
    const ipElement = document.getElementById('visitorIP');
    const deviceElement = document.getElementById('visitorDevice');
    const locationElement = document.getElementById('visitorLocation');
    const coordinatesElement = document.getElementById('visitorCoordinates');
    const browserElement = document.getElementById('visitorBrowser');
    const sessionTimeElement = document.getElementById('sessionTime');
    
    if (ipElement) ipElement.textContent = visitorData.ip || "Loading...";
    if (deviceElement) deviceElement.textContent = visitorData.device || "Loading...";
    if (locationElement) locationElement.textContent = visitorData.location || "Loading...";
    if (coordinatesElement) coordinatesElement.textContent = visitorData.coordinates || "Loading...";
    if (browserElement) browserElement.textContent = visitorData.browser || "Loading...";
    if (sessionTimeElement) sessionTimeElement.textContent = visitorData.sessionStartTime || "Loading...";
}

/**
 * Get full user agent string
 * @returns {string} User agent string
 */
function getFullUserAgent() {
    return navigator.userAgent;
}

/**
 * Detect device type from user agent
 * @returns {string} Device type
 */
function getDeviceType() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // iPad (older iOS versions report "iPad")
    if (/iPad/.test(ua)) {
        return "iPad";
    }

    // iPad (iPadOS 13+ identifies as Mac, but has touch support)
    if (/Macintosh/.test(ua) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
        return "iPad";
    }

    // iPhone
    if (/iPhone/.test(ua)) {
        return "iPhone";
    }

    // Android
    if (/Android/.test(ua)) {
        return "Android";
    }

    // Windows
    if (/Windows/.test(ua)) {
        return "Windows";
    }

    // Mac
    if (/Macintosh/.test(ua)) {
        return "Mac";
    }

    // Fallback
    return "Unknown";
}

/**
 * Initialize chat context when widget is ready
 */
window.addEventListener("lcw:ready", function () {
    console.log("Widget ready. Setting context...");
    const ctx = {
        VisitorIP: { value: visitorData.ip || "unavailable", isDisplayable: true },
        Referral:  { value: referrer, isDisplayable: true },
        DeviceType: { value: visitorData.device || "Unknown", isDisplayable: true },
        UserAgent: { value: getFullUserAgent(), isDisplayable: true },
        Location: { value: visitorData.location || "unavailable", isDisplayable: true },
        Coordinates: { value: visitorData.coordinates || "unavailable", isDisplayable: true }
    };

    if (window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK?.setContextProvider) {
        Microsoft.Omnichannel.LiveChatWidget.SDK.setContextProvider(() => ctx);
        console.log("Context set:", ctx);
    } else {
        console.warn("SDK not ready to set context.");
    }
});

/**
 * Initialize application on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
    initAuth();
    // Update visitor display when DOM is ready
    updateVisitorDisplay();
});
