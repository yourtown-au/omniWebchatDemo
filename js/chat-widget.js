// js/chat-widget.js
// Loads Microsoft Omnichannel LiveChat widget by env + agent
// Applies per-agent branding (logo/header/bot avatar) via LCW v2 customization callback
// Also applies page theme via body class (brand-khl / brand-parentline / brand-survey)

const CHAT_CONFIGS = {
    dev: {
        default: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc: "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc: "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "4683a226-31e3-454a-b171-9af9ccace994",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url": "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        },
        specialist: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc: "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc: "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "7eaac707-889b-4572-98c2-b9bb1eb80b03",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url": "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        },
        survey: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc: "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc: "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "e2672d5e-7f32-4de2-b399-ae06db3ba7bc",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url": "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        },
        parentline: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc: "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc: "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "81c886b8-52e2-4794-bfa7-442826895195",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url": "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        },
        conversational: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc: "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc: "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "144797c1-0e81-4734-b3b3-3c667d2b8bd8",
                "data-lcw-version": "prod",
                "data-org-id": "025ebcf6-780b-f011-9aee-002248e344cd",
                "data-org-url": "https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        }
    },

    uat: {
        default: {
            id: "Microsoft_Omnichannel_LCWidget",
            primarySrc: "https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            fallbackSrc: "https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js",
            attributes: {
                "data-app-id": "af764db0-8d9e-4bf8-b55b-9edfccd00bf6",
                "data-lcw-version": "prod",
                "data-org-id": "0deaf548-7a4d-f011-be52-0022489321ca",
                "data-org-url": "https://m-0deaf548-7a4d-f011-be52-0022489321ca.au.omnichannelengagementhub.com",
                "data-customization-callback": "lcwCustomizationCallback"
            }
        }
    },

    prd: {}
};

const AGENT_AVAILABILITY = {
    dev: { default: true, specialist: true, survey: true, parentline: true, conversational: true },
    uat: { default: true, specialist: false, survey: false, parentline: false, conversational: false },
    prd: { default: false, specialist: false, survey: false, parentline: false, conversational: false }
};

// Per-agent BRANDING (widget logo/header/bot avatar) 
const BRANDING = {
    // KHL Agent (your "default")
    default: {
        headerTitle: "Kids Helpline",
        brand: "#5B2D90",
        brandHover: "#4A2377",
        widgetBg: "#ffffff",
        launcherLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        botAvatarUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        headerLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc"
    },

    // Experimental agent (optional - using KHL look)
    specialist: {
        headerTitle: "KHL Agent (Experimental)",
        brand: "#5B2D90",
        brandHover: "#4A2377",
        widgetBg: "#ffffff",
        launcherLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        botAvatarUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        headerLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc"
    },

    // Pre-conversation Survey
    survey: {
        headerTitle: "Pre-conversation Survey",
        brand: "#0F4C81",
        brandHover: "#0C3E69",
        widgetBg: "#ffffff",
        launcherLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS", // TODO: replace
        botAvatarUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_AIAgent%20(1).png?csf=1&web=1&e=SAqGwF", // TODO: replace
        headerLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS"
    },

    // Parentline
    parentline: {
        headerTitle: "parentline counselling",
        brand: "#3D8F98",
        brandHover: "#327982",
        widgetBg: "#ffffff",
        launcherLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS", // TODO: replace
        botAvatarUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_AIAgent%20(1).png?csf=1&web=1&e=SAqGwF", // TODO: replace
        headerLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/Parentline_P_Logo.png?csf=1&web=1&e=g8OjgS"
    },
    // Conversational - KHL
    conversational: {
        headerTitle: "Conversational - KHL",
        brand: "#777c33",
        brandHover: "#666a2b",
        widgetBg: "#ffffff",

        launcherLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        botAvatarUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc",
        headerLogoUrl: "https://yourtownau.sharepoint.com/:i:/r/sites/FundraisingDev/Shared%20Documents/Test_WebChat/khl_webchat_logo.png?csf=1&web=1&e=N85bkc"
    }
};

let currentEnvironment = "dev";
let currentAgentType = "default"; // used by branding callback

const IFRAME_SELECTORS = 'iframe[id*="oc-lcw"], iframe[title*="Chat"], iframe[src*="livechatwidget"]';
const CONTAINER_SELECTORS = 'div[id*="oc-lcw"], div[class*="oc-lcw"]';
const BUTTON_SELECTORS = 'button[id*="lcw"], button[class*="lcw"]';

/**
 * Demo page branding (CSS) using body class.
 * Maps default/specialist -> khl look, so your CSS can be: brand-khl, brand-parentline, brand-survey
 */
function applyBrandTheme(agentType) {

    const khlAgents = ["default", "specialist", "conversational"];

    const key = khlAgents.includes(agentType)
        ? "khl"
        : agentType;

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
    document.querySelectorAll("[data-env-badge]").forEach(el => {
        el.textContent = envText;
    });
}

function cleanupChatWidget() {
    const existingScript = document.getElementById("Microsoft_Omnichannel_LCWidget");
    if (existingScript) existingScript.remove();

    document.querySelectorAll(IFRAME_SELECTORS).forEach((i) => i.remove());
    document.querySelectorAll(CONTAINER_SELECTORS).forEach((c) => c.remove());
    document.querySelectorAll(BUTTON_SELECTORS).forEach((b) => b.remove());

    try {
        if (window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK) {
            delete window.Microsoft.Omnichannel.LiveChatWidget.SDK;
        }
        if (window.Microsoft?.Omnichannel?.LiveChatWidget) {
            delete window.Microsoft.Omnichannel.LiveChatWidget;
        }
    } catch (e) { /* ignore */ }
}

function createChatScript(src, config) {
    const script = document.createElement("script");
    script.id = config.id;
    script.src = src;
    script.async = true;

    // for LCW v2 customizations
    script.setAttribute("v2", "");

    Object.keys(config.attributes).forEach((key) => script.setAttribute(key, config.attributes[key]));
    return script;
}

function loadChatWidget(agentType = "default") {
    cleanupChatWidget();

    if (!isAgentAvailable(agentType)) {
        console.warn(`Agent '${agentType}' is not available in '${currentEnvironment}'`);
        return;
    }

    const envConfigs = CHAT_CONFIGS[currentEnvironment];
    if (!envConfigs || !envConfigs[agentType]) {
        console.warn(`No config for agent '${agentType}' in environment '${currentEnvironment}'`);
        return;
    }

    // store current agent for the widget styling callback
    currentAgentType = agentType;

    const chatConfig = envConfigs[agentType];

    const script = createChatScript(chatConfig.primarySrc, chatConfig);
    script.onerror = function (ev) {
        try { ev?.target?.remove?.(); } catch (e) { /* ignore */ }
        const fallback = createChatScript(chatConfig.fallbackSrc, chatConfig);
        document.body.appendChild(fallback);
    };

    document.body.appendChild(script);
    console.log(`Loaded LCW for agent '${agentType}' in env '${currentEnvironment}'`);
}

function isAgentAvailable(agentType) {
    return AGENT_AVAILABILITY[currentEnvironment] && AGENT_AVAILABILITY[currentEnvironment][agentType] === true;
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
        const firstAvailableRadio = Array.from(document.querySelectorAll('input[name="agent"]'))
            .find(r => !r.disabled);

        if (firstAvailableRadio) {
            firstAvailableRadio.checked = true;
            selected = firstAvailableRadio;
        }
    }

    if (selected) {
        const agentType = selected.value;

        document.querySelectorAll(".agent-option").forEach((c) => c.classList.remove("selected"));
        selected.closest(".agent-option")?.classList.add("selected");

        applyBrandTheme(agentType);
        loadChatWidget(agentType);
    }
}

function selectEnvironment(environment, element) {
    document.querySelectorAll(".environment-option")
        .forEach(o => o.classList.remove("selected"));

    if (element) element.classList.add("selected");

    const radio = document.getElementById(`env-${environment}`);
    if (radio) radio.checked = true;

    currentEnvironment = environment;

    document.querySelectorAll(".agent-option")
        .forEach(o => o.classList.remove("selected"));

    updateAgentAvailability();
}

function selectAgent(agentType, element) {

    document.querySelectorAll(".agent-option")
        .forEach(o => o.classList.remove("selected"));

    if (element) {
        element.classList.add("selected");
    }

    document.getElementById(`agent-${agentType}`).checked = true;

    applyBrandTheme(agentType);
    loadChatWidget(agentType);
}

// Expose for inline onclick
window.selectEnvironment = selectEnvironment;
window.selectAgent = selectAgent;
window.loadChatWidget = loadChatWidget;
window.updateAgentAvailability = updateAgentAvailability;

// LCW v2 Customization Callback
// Must match data-customization-callback="lcwCustomizationCallback"
function lcwCustomizationCallback() {
    const cfg = BRANDING[currentAgentType] || BRANDING.default;

    const BRAND = cfg.brand;
    const BRAND_HOVER = cfg.brandHover;
    const WIDGET_BG = cfg.widgetBg;
    const LAUNCHER_LOGO = cfg.launcherLogoUrl;
    const BOT_AVATAR = cfg.botAvatarUrl;
    const HEADER_LOGO = cfg.headerLogoUrl;

    return {
        styleProps: {
            generalStyleProps: {
                width: "420px",
                height: "650px",
                borderRadius: "18px",
                bottom: "24px",
                right: "24px",
                fontFamily: "Segoe UI, Arial, sans-serif",
                boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
                overflow: "hidden"
            }
        },

        chatButtonProps: {
            styleProps: {
                generalStyleProps: {
                    position: "fixed",
                    width: "150px",
                    height: "64px",
                    borderRadius: "12px",
                    backgroundColor: WIDGET_BG,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.18)"
                },
                hoverStyleProps: { backgroundColor: "rgba(0,0,0,0.04)" }
            },
            iconStyleProps: {
                width: "150px",
                height: "64px",
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
                minimizeButtonProps: { iconName: "MiniContract" },
                closeButtonProps: { iconName: "Leave" }
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
                titleText: "Close Chat",
                subtitleText: "Do you really want to close this chat?",
                confirmButtonText: "Close",
                cancelButtonText: "Cancel"
            },
            styleProps: {
                generalStyleProps: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    borderRadius: "18px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 -14px 30px rgba(0,0,0,0.18)",
                    borderTop: "1px solid rgba(17,24,39,0.10)",
                    padding: "14px 16px 16px"
                },
                confirmButtonStyleProps: {
                    backgroundColor: BRAND,
                    color: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid " + BRAND,
                    padding: "10px 18px",
                    fontWeight: "600"
                },
                cancelButtonStyleProps: {
                    backgroundColor: "#ffffff",
                    color: BRAND,
                    borderRadius: "10px",
                    border: "1px solid " + BRAND,
                    padding: "10px 18px",
                    fontWeight: "600"
                },
                confirmButtonHoveredStyleProps: {
                    backgroundColor: BRAND_HOVER,
                    border: "1px solid " + BRAND_HOVER
                },
                cancelButtonHoveredStyleProps: {
                    backgroundColor: "rgba(0,0,0,0.06)"
                },
                buttonGroupStyleProps: {
                    flexFlow: "column",
                    width: "100%",
                    gap: "10px",
                    marginTop: "10px"
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

                // Actions (Yes/No) styling
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

            // Bot avatar override (replaces initials)
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
                avatarTextStyleProps: { display: "none" }
            }
        }
    };
}

function wireAgentSelection() {
    document.querySelectorAll('input[name="agent"]').forEach((radio) => {
        radio.addEventListener("change", function () {
            const agentType = this.value;

            document.querySelectorAll(".agent-option").forEach((c) => c.classList.remove("selected"));
            this.closest(".agent-option")?.classList.add("selected");

            applyBrandTheme(agentType);
            loadChatWidget(agentType);
        });
    });
}

// "data-customization-callback" value
window.lcwCustomizationCallback = lcwCustomizationCallback;

// init page theme + load initial widget on page load
document.addEventListener("DOMContentLoaded", function () {
    applyBrandTheme(currentAgentType);
    updateEnvBadges();
    updateAgentAvailability();
    wireAgentSelection();
});