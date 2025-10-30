// Main Application Module
// Handles user context, device detection, and chat widget initialization

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const raw_referrer = urlParams.get('referrer');
let referrer = raw_referrer?.replace(/^'|'$/g, '') || "KHL";
console.log("Referral:", referrer);

// User IP address (fetched asynchronously)
let userIP = null;

/**
 * Fetch user's IP address
 */
(async () => {
    userIP = await fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(({ ip }) => ip)
        .catch(() => null);

    console.log("IP fetched:", userIP);
})();

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
        VisitorIP: { value: userIP || "unavailable", isDisplayable: true },
        Referral:  { value: referrer, isDisplayable: true },
        DeviceType: { value: getDeviceType(), isDisplayable: true },
        UserAgent: { value: getFullUserAgent(), isDisplayable: true }
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
});
