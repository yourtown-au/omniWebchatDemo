const CHAT_CONFIGS = {
    dev: {
        default: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc:
                "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc:
                "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "4683a226-31e3-454a-b171-9af9ccace994",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url":
                    "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback",
                "data-suggested-action-layout": "stacked"
            }
        },
        specialist: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc:
                "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc:
                "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "7eaac707-889b-4572-98c2-b9bb1eb80b03",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url":
                    "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        },
        survey: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc:
                "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc:
                "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "e2672d5e-7f32-4de2-b399-ae06db3ba7bc",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url":
                    "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback",
                "data-suggested-action-layout": "stacked"
            }
        },
        parentline: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc:
                "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc:
                "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "81c886b8-52e2-4794-bfa7-442826895195",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url":
                    "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback",
                "data-suggested-action-layout": "stacked"
            }
        },
        conversational: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc:
                "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc:
                "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "144797c1-0e81-4734-b3b3-3c667d2b8bd8",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url":
                    "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback",
                "data-suggested-action-layout": "stacked"
            }
        }
    },
    uat: {
        default: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc:
                "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc:
                "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "af764db0-8d9e-4bf8-b55b-9edfccd00bf6",
                "data-lcw-version": "prod",
                "data-org-id": "0deaf548-7a4d-f011-be52-0022489321ca",
                "data-org-url":
                    "https://m-0deaf548-7a4d-f011-be52-0022489321ca.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        }
    },
    prd: {}
};

const AGENT_AVAILABILITY = {
    dev: {
        default: true,
        specialist: true,
        survey: true,
        parentline: true,
        conversational: true
    },
    uat: {
        default: true,
        specialist: false,
        survey: false,
        parentline: false,
        conversational: false
    },
    prd: {
        default: false,
        specialist: false,
        survey: false,
        parentline: false,
        conversational: false
    }
};

const BRANDING = {
    default: {
        headerTitle: "Kids Helpline",
        brand: "#5B2D90",
        brandHover: "#4A2377",
        widgetBg: "#ffffff",
        launcherLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        botAvatarUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        headerLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc"
    },
    specialist: {
        headerTitle: "KHL Agent (Experimental)",
        brand: "#5B2D90",
        brandHover: "#4A2377",
        widgetBg: "#ffffff",
        launcherLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        botAvatarUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        headerLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc"
    },
    survey: {
        headerTitle: "Pre-conversation Survey",
        brand: "#0F4C81",
        brandHover: "#0C3E69",
        widgetBg: "#ffffff",
        launcherLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS",
        botAvatarUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_AIAgent%20(1).png?csf=1&web=1&e=SAqGwF",
        headerLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS"
    },
    parentline: {
        headerTitle: "parentline counselling",
        brand: "#3D8F98",
        brandHover: "#327982",
        widgetBg: "#ffffff",
        launcherLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS",
        botAvatarUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_AIAgent%20(1).png?csf=1&web=1&e=SAqGwF",
        headerLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS"
    },
    conversational: {
        headerTitle: "Conversational - KHL",
        brand: "#777c33",
        brandHover: "#666a2b",
        widgetBg: "#ffffff",
        launcherLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        botAvatarUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        headerLogoUrl:
            "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc"
    }
};

let currentEnvironment = "dev";
let currentAgentType = "default";

const PANEL_DIMENSIONS = {
    width: 420,
    height: 650,
    right: 24,
    bottom: 24,
    borderRadius: 18
};

const IFRAME_SELECTORS =
    'iframe[id*="oc-lcw"], iframe[title*="Chat"], iframe[src*="livechatwidget"], iframe[src*="omnichannelengagementhub.com"]';
const CONTAINER_SELECTORS = 'div[id*="oc-lcw"], div[class*="oc-lcw"]';
const BUTTON_SELECTORS = 'button[id*="lcw"], button[class*="lcw"]';

function applyBrandTheme(agentType) {
    const khlAgents = ["default", "specialist", "conversational"];
    const key = khlAgents.includes(agentType) ? "khl" : agentType;

    document.body.classList.remove(
        "brand-default",
        "brand-khl",
        "brand-parentline",
        "brand-survey",
        "brand-specialist",
        "brand-conversational"
    );
    document.body.classList.add(`brand-${key}`);
}

function updateEnvBadges() {
    const envText = (currentEnvironment || "dev").toUpperCase();
    document.querySelectorAll("[data-env-badge]").forEach((el) => {
        el.textContent = envText;
    });
}

function cleanupChatWidget() {
    const existingScript = document.getElementById("Microsoft_Omnichannel_LCWidget");
    if (existingScript) existingScript.remove();

    document.querySelectorAll(IFRAME_SELECTORS).forEach((iframe) => {
        try {
            iframe.remove();
        } catch { }
    });

    document.querySelectorAll(CONTAINER_SELECTORS).forEach((container) => {
        try {
            container.remove();
        } catch { }
    });

    document.querySelectorAll(BUTTON_SELECTORS).forEach((button) => {
        try {
            button.remove();
        } catch { }
    });

    try {
        QueueLock.unlock(true);
    } catch { }

    if (typeof window.resetChatContextRegistration === "function") {
        window.resetChatContextRegistration();
    }

    try {
        if (window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK) {
            delete window.Microsoft.Omnichannel.LiveChatWidget.SDK;
        }
        if (window.Microsoft?.Omnichannel?.LiveChatWidget) {
            delete window.Microsoft.Omnichannel.LiveChatWidget;
        }
    } catch { }
}

function createChatScript(src, config) {
    const script = document.createElement("script");
    script.id = config.id;
    script.src = src;
    script.async = true;
    script.setAttribute("v2", "");
    Object.keys(config.attributes).forEach((key) => {
        script.setAttribute(key, config.attributes[key]);
    });
    return script;
}

function isAgentAvailable(agentType) {
    return AGENT_AVAILABILITY[currentEnvironment]?.[agentType] === true;
}

function loadChatWidget(agentType = "default") {
    cleanupChatWidget();

    if (!isAgentAvailable(agentType)) return;

    const envConfigs = CHAT_CONFIGS[currentEnvironment];
    if (!envConfigs || !envConfigs[agentType]) return;

    currentAgentType = agentType;
    sessionStorage.setItem("selectedEnvironment", currentEnvironment);
    sessionStorage.setItem("selectedAgent", agentType);
    sessionStorage.setItem("chatOpen", "true");

    const chatConfig = envConfigs[agentType];
    const script = createChatScript(chatConfig.primarySrc, chatConfig);

    script.onerror = function (ev) {
        try {
            ev?.target?.remove?.();
        } catch { }
        const fallback = createChatScript(chatConfig.fallbackSrc, chatConfig);
        document.body.appendChild(fallback);
    };

    document.body.appendChild(script);
}

function updateAgentAvailability() {
    document.querySelectorAll(".agent-option").forEach((card) => {
        const radio = card.querySelector('input[type="radio"]');
        if (!radio) return;

        const agentType = radio.value;
        const available = isAgentAvailable(agentType);

        radio.disabled = !available;
        card.classList.toggle("disabled", !available);

        if (!available && radio.checked) {
            radio.checked = false;
        }
    });

    let selected = document.querySelector('input[name="agent"]:checked');

    if (!selected) {
        const firstAvailableRadio = Array.from(
            document.querySelectorAll('input[name="agent"]')
        ).find((radio) => !radio.disabled);

        if (firstAvailableRadio) {
            firstAvailableRadio.checked = true;
            selected = firstAvailableRadio;
        }
    }

    if (selected) {
        const agentType = selected.value;

        document.querySelectorAll(".agent-option").forEach((card) => {
            card.classList.remove("selected");
        });
        selected.closest(".agent-option")?.classList.add("selected");

        applyBrandTheme(agentType);
        loadChatWidget(agentType);
    }
}

function selectEnvironment(environment, element) {
    document.querySelectorAll(".environment-option").forEach((option) => {
        option.classList.remove("selected");
    });

    if (element) element.classList.add("selected");

    const radio = document.getElementById(`env-${environment}`);
    if (radio) radio.checked = true;

    currentEnvironment = environment;
    sessionStorage.setItem("selectedEnvironment", environment);

    updateEnvBadges();

    document.querySelectorAll(".agent-option").forEach((option) => {
        option.classList.remove("selected");
    });

    updateAgentAvailability();
}

function wireAgentSelection() {
    document.querySelectorAll('input[name="agent"]').forEach((radio) => {
        radio.addEventListener("change", function () {
            const agentType = this.value;

            document.querySelectorAll(".agent-option").forEach((card) => {
                card.classList.remove("selected");
            });
            this.closest(".agent-option")?.classList.add("selected");

            applyBrandTheme(agentType);
            loadChatWidget(agentType);
        });
    });
}

function selectAgent(agentType, element) {
    document.querySelectorAll(".agent-option").forEach((option) => {
        option.classList.remove("selected");
    });

    if (element) {
        element.classList.add("selected");
    }

    const radio = document.getElementById(`agent-${agentType}`);
    if (radio) radio.checked = true;

    applyBrandTheme(agentType);
    loadChatWidget(agentType);
}

window.selectEnvironment = selectEnvironment;
window.selectAgent = selectAgent;
window.loadChatWidget = loadChatWidget;
window.updateAgentAvailability = updateAgentAvailability;

function lcwCustomizationCallback() {
    const cfg = BRANDING[currentAgentType] || BRANDING.default;
    const BRAND = cfg.brand;
    const WIDGET_BG = cfg.widgetBg;
    const LAUNCHER_LOGO = cfg.launcherLogoUrl;
    const BOT_AVATAR = cfg.botAvatarUrl;
    const HEADER_LOGO = cfg.headerLogoUrl;

    return {
        styleProps: {
            generalStyleProps: {
                width: `${PANEL_DIMENSIONS.width}px`,
                height: `${PANEL_DIMENSIONS.height}px`,
                borderRadius: `${PANEL_DIMENSIONS.borderRadius}px`,
                bottom: `${PANEL_DIMENSIONS.bottom}px`,
                right: `${PANEL_DIMENSIONS.right}px`,
                fontFamily: "Segoe UI, Arial, sans-serif",
                boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
                overflow: "hidden"
            }
        },
        chatButtonProps: {
            styleProps: {
                generalStyleProps: {
                    position: "fixed",
                    borderRadius: "12px",
                    backgroundColor: WIDGET_BG,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.18)",
                    zIndex: 9999
                },
                hoverStyleProps: {
                    backgroundColor: "rgba(0,0,0,0.04)"
                }
            },
            iconStyleProps: {
                width: "50px",
                height: "40px",
                cursor: "pointer",
                backgroundImage: `url('${LAUNCHER_LOGO}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }
        },
        headerProps: {
            controlProps: {
                headerIconProps: {
                    src: HEADER_LOGO,
                    alt: cfg.headerTitle,
                    width: "28px",
                    height: "28px"
                },
                headerTitleProps: {
                    text: cfg.headerTitle
                },
                minimizeButtonProps: {
                    iconName: "MiniContract"
                },
                closeButtonProps: {
                    iconName: "Leave"
                }
            },
            styleProps: {
                generalStyleProps: {
                    backgroundColor: BRAND,
                    borderRadius: "18px 18px 0 0",
                    padding: "10px 10px"
                },
                titleStyleProps: {
                    marginLeft: "10px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#ffffff"
                },
                minimizeButtonStyleProps: {
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.18)"
                },
                minimizeButtonHoverStyleProps: {
                    backgroundColor: "rgba(255,255,255,0.28)"
                },
                closeButtonStyleProps: {
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.18)"
                },
                closeButtonHoverStyleProps: {
                    backgroundColor: "rgba(255,255,255,0.28)"
                }
            }
        },
        loadingPaneProps: {
            controlProps: {
                titleText: "We will be with you shortly...",
                subtitleText: "Connecting you to a counsellor...",
                hideSpinnerText: true,
                spinnerSize: 3,
                iconImageProps: {
                    src: HEADER_LOGO,
                    alt: cfg.headerTitle,
                    width: "80px",
                    height: "80px"
                }
            }
        },
        confirmationPaneProps: {
            controlProps: {
                hideTitle: true,
                hideSubtitle: true
            },
            styleProps: {
                generalStyleProps: {
                    position: "absolute",
                    width: "100px",
                    height: "90px",
                    right: "10px",
                    top: "10px",
                    left: "unset",
                    minHeight: "unset",
                    maxHeight: "unset",
                    borderRadius: "10px"
                },
                buttonGroupStyleProps: {
                    marginBottom: 0,
                    flexFlow: "column"
                },
                confirmButtonStyleProps: {
                    borderColor: "black",
                    color: "black",
                    borderRadius: "10px",
                    backgroundColor: "#ffdae9"
                },
                confirmButtonHoveredStyleProps: {
                    borderColor: "black",
                    color: "black",
                    borderRadius: "10px",
                    backgroundColor: "#ffa8cb"
                },
                confirmButtonFocusedStyleProps: {
                    borderColor: "black",
                    color: "black",
                    borderRadius: "10px",
                    backgroundColor: "#ffa8cb"
                },
                cancelButtonStyleProps: {
                    borderRadius: "10px"
                },
                cancelButtonHoveredStyleProps: {
                    borderRadius: "10px"
                },
                cancelButtonFocusedStyleProps: {
                    borderRadius: "10px"
                }
            }
        },
        webChatContainerProps: {
            webChatStyles: {
                backgroundColor: "#ffffff",
                bubbleBorderWidth: 0,
                bubbleBorderRadius: 14,
                bubbleBackground: "#EAF3F3",
                bubbleTextColor: "#111827",
                bubbleFromUserBorderRadius: 14,
                bubbleFromUserBackground: BRAND,
                bubbleFromUserTextColor: "#ffffff",
                bubbleMaxWidth: 320,
                bubbleMinWidth: 40,
                sendBoxBackground: "#F3FAFA",
                sendBoxBorderTop: "1px solid rgba(17,24,39,0.08)",
                suggestedActionBorderRadius: 999,
                suggestedActionBorderWidth: 1,
                suggestedActionBorderColor: BRAND,
                suggestedActionBackground: "#F3F6F9",
                suggestedActionTextColor: BRAND,
                suggestedActionPadding: "8px 18px",
                suggestedActionMargin: "4px 8px 4px 0",
                suggestedActionHeight: 38,
                suggestedActionFontSize: 14,
                suggestedActionHoverBackground: "rgba(0,0,0,0.06)",
                suggestedActionHoverTextColor: BRAND,
                suggestedActionHoverBorderColor: BRAND
            },
            renderingMiddlewareProps: {
                avatarStyleProps: {
                    backgroundImage: `url('${BOT_AVATAR}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%"
                },
                avatarTextStyleProps: {
                    display: "none"
                }
            }
        }
    };
}

window.lcwCustomizationCallback = lcwCustomizationCallback;

const QueueLock = (() => {
    let locked = false;
    let overlay = null;
    let iframe = null;
    let domObserver = null;
    let rafId = null;

    function findIframe() {
        return document.querySelector(IFRAME_SELECTORS);
    }

    function ensureIframeReady() {
        return new Promise((resolve) => {
            const existing = findIframe();
            if (existing) return resolve(existing);

            if (domObserver) domObserver.disconnect();
            domObserver = new MutationObserver(() => {
                const foundIframe = findIframe();
                if (foundIframe) {
                    domObserver.disconnect();
                    domObserver = null;
                    resolve(foundIframe);
                }
            });
            domObserver.observe(document.body, { childList: true, subtree: true });
        });
    }

    function ensureOverlay() {
        if (overlay) return overlay;

        overlay = document.createElement("div");
        overlay.id = "lcw-queue-overlay";
        overlay.style.position = "fixed";
        overlay.style.zIndex = "2147483647";
        overlay.style.pointerEvents = "auto";
        overlay.style.background = "rgba(255,255,255,0)";
        overlay.style.display = "none";

        const banner = document.createElement("div");
        banner.style.position = "absolute";
        banner.style.left = "10px";
        banner.style.right = "12px";
        banner.style.bottom = "35px";
        banner.style.padding = "10px 30px";
        banner.style.borderRadius = "10px";
        banner.style.background = "rgba(17,24,39,0.92)";
        banner.style.color = "#fff";
        banner.style.fontSize = "14px";
        banner.style.lineHeight = "1.5";
        banner.textContent =
            "You’re in the queue. Messaging will be enabled when a counsellor is assigned.";

        overlay.appendChild(banner);
        document.body.appendChild(overlay);
        return overlay;
    }

    function positionOverlay() {
        if (!locked) return;
        if (!iframe) iframe = findIframe();
        if (!iframe || !overlay) return;

        const rect = iframe.getBoundingClientRect();
        if (rect.width < 10 || rect.height < 10) return;

        const composerBlockHeight = 96;

        overlay.style.left = `${Math.round(rect.left)}px`;
        overlay.style.top = `${Math.round(rect.bottom - composerBlockHeight)}px`;
        overlay.style.width = `${Math.round(rect.width)}px`;
        overlay.style.height = `${composerBlockHeight}px`;
        overlay.style.borderRadius = "0 0 18px 18px";
    }

    function startTracking() {
        const tick = () => {
            positionOverlay();
            rafId = requestAnimationFrame(tick);
        };
        if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function stopTracking() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
    }

    async function lockNow() {
        locked = true;
        const overlayEl = ensureOverlay();
        overlayEl.style.display = "block";

        try {
            document.body.focus();
        } catch { }

        iframe = await ensureIframeReady();
        positionOverlay();
        startTracking();
    }

    function unlockNow(hardCleanup = false) {
        locked = false;
        if (overlay) overlay.style.display = "none";
        stopTracking();

        if (hardCleanup) {
            if (overlay) overlay.remove();
            overlay = null;
            iframe = null;
            if (domObserver) domObserver.disconnect();
            domObserver = null;
        }
    }

    return {
        lock: lockNow,
        unlock: unlockNow
    };
})();

document.addEventListener("DOMContentLoaded", () => {
    document.body.tabIndex = -1;

    wireAgentSelection();

    const savedEnvironment = sessionStorage.getItem("selectedEnvironment");
    if (savedEnvironment && CHAT_CONFIGS[savedEnvironment]) {
        currentEnvironment = savedEnvironment;

        const envRadio = document.getElementById(`env-${savedEnvironment}`);
        if (envRadio) envRadio.checked = true;

        document.querySelectorAll(".environment-option").forEach((option) => {
            option.classList.remove("selected");
        });
        document.querySelector(`label[for="env-${savedEnvironment}"]`)?.classList.add("selected");
    }

    updateEnvBadges();
    updateAgentAvailability();

    const selectedAgent = sessionStorage.getItem("selectedAgent");
    const chatOpen = sessionStorage.getItem("chatOpen") === "true";

    if (selectedAgent && chatOpen && isAgentAvailable(selectedAgent)) {
        const radio = document.querySelector(`input[name="agent"][value="${selectedAgent}"]`);
        if (radio) {
            radio.checked = true;
            document.querySelectorAll(".agent-option").forEach((card) => {
                card.classList.remove("selected");
            });
            radio.closest(".agent-option")?.classList.add("selected");
        }

        applyBrandTheme(selectedAgent);
        loadChatWidget(selectedAgent);
    }
});

function persistQueueState(isLocked) {
    if (isLocked) {
        sessionStorage.setItem("lcwQueueLocked", "true");
    } else {
        sessionStorage.removeItem("lcwQueueLocked");
    }
}

function restoreQueueStateIfNeeded() {
    const shouldLock = sessionStorage.getItem("lcwQueueLocked") === "true";
    if (!shouldLock) return;

    setTimeout(() => {
        QueueLock.lock();
    }, 800);
}

window.addEventListener("lcw:ready", () => {
    restoreQueueStateIfNeeded();
});

window.addEventListener("lcw:onMessageReceived", (e) => {
    const detail = e?.detail || {};
    const tags = (e?.tags || detail?.tags || detail?.channelData?.tags || []).map((tag) =>
        String(tag).toLowerCase()
    );
    const msgType = String(e?.msgType || detail?.messageType || "").toLowerCase();
    const text = String(detail?.text || "").toLowerCase();

    if (
        tags.includes("queueposition") ||
        tags.includes("customerqueueposition") ||
        tags.includes("customerqueuepositionnext")
    ) {
        persistQueueState(true);
        QueueLock.lock();
        return;
    }

    if (tags.includes("agentaccepted")) {
        persistQueueState(false);
        QueueLock.unlock(false);
        return;
    }

    const counsellorLeft =
        msgType === "system" &&
        (text.includes("left chat") ||
            text.includes("left the session") ||
            text.includes("counsellor left")) &&
        !text.includes("ai agent") &&
        !text.includes("copilot agent") &&
        !text.includes("__agent__") &&
        !text.includes("__admin__") &&
        !text.includes("__system__") &&
        !text.includes("customer left");

    if (counsellorLeft) {
        persistQueueState(true);
        QueueLock.lock();
        return;
    }

    if (tags.includes("supervisorforceclosedconversation")) {
        persistQueueState(false);
        QueueLock.unlock(true);
    }
});

window.addEventListener("lcw:closeChat", () => {
    persistQueueState(false);
    sessionStorage.removeItem("selectedAgent");
    sessionStorage.removeItem("chatOpen");
    QueueLock.unlock(true);
});