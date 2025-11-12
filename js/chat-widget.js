// Chat Widget Module
// Handles Microsoft Omnichannel LiveChat widget loading and configuration

// Configuration for different chat agents and environments
const CHAT_CONFIGS = {
    'dev': {
        'default': {
            id: 'Microsoft_Omnichannel_LCWidget',
            primarySrc: 'https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js',
            fallbackSrc: 'https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js',
            attributes: {
                'v2': '',
                'data-app-id': '4683a226-31e3-454a-b171-9af9ccace994',
                'data-lcw-version': 'prod',
                'data-org-id': '025ebcf6-780b-f011-9aee-002248e344cd',
                'data-org-url': 'https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com'
            }
        },
        'specialist': {
            id: 'Microsoft_Omnichannel_LCWidget',
            primarySrc: 'https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js',
            fallbackSrc: 'https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js',
            attributes: {
                'v2': '',
                'data-app-id': '7eaac707-889b-4572-98c2-b9bb1eb80b03',
                'data-lcw-version': 'prod',
                'data-org-id': '025ebcf6-780b-f011-9aee-002248e344cd',
                'data-org-url': 'https://m-025ebcf6-780b-f011-9aee-002248e344cd.au.omnichannelengagementhub.com'
            }
        }
    },
    'uat': {
        'default': {
            id: 'Microsoft_Omnichannel_LCWidget',
            primarySrc: 'https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js',
            fallbackSrc: 'https://ocprodpublicocegs.blob.core.windows.net/livechatwidget/scripts/LiveChatBootstrapper.js',
            attributes: {
                'v2': '',
                'data-app-id': 'UAT_APP_ID_PLACEHOLDER',
                'data-lcw-version': 'prod',
                'data-org-id': 'UAT_ORG_ID_PLACEHOLDER',
                'data-org-url': 'UAT_ORG_URL_PLACEHOLDER'
            }
        }
    },
    'prd': {
        // Production environment - no agents enabled by default
    }
};

// Environment-specific agent availability
const AGENT_AVAILABILITY = {
    'dev': {
        'default': true,
        'specialist': true
    },
    'uat': {
        'default': true,
        'specialist': false
    },
    'prd': {
        'default': false,
        'specialist': false
    }
};

// Current environment state
let currentEnvironment = 'dev';

// Selectors for chat widget cleanup
const IFRAME_SELECTORS = 'iframe[id*="oc-lcw"], iframe[title*="Chat"], iframe[src*="livechatwidget"]';
const CONTAINER_SELECTORS = 'div[id*="oc-lcw"], div[class*="oc-lcw"]';

/**
 * Remove existing chat widget elements
 */
function cleanupChatWidget() {
    // Remove existing script
    const existingScript = document.getElementById('Microsoft_Omnichannel_LCWidget');
    if (existingScript) {
        existingScript.remove();
    }
    
    // Remove all chat widget iframes
    const chatIframes = document.querySelectorAll(IFRAME_SELECTORS);
    chatIframes.forEach(iframe => iframe.remove());
    
    // Remove widget container divs
    const chatContainers = document.querySelectorAll(CONTAINER_SELECTORS);
    chatContainers.forEach(container => container.remove());
    
    // Clear the global Microsoft Omnichannel object
    if (window.Microsoft && window.Microsoft.Omnichannel && window.Microsoft.Omnichannel.LiveChatWidget) {
        delete window.Microsoft.Omnichannel.LiveChatWidget;
    }
}

/**
 * Create chat widget script element
 * @param {string} src - Script source URL
 * @param {Object} config - Chat configuration object
 * @returns {HTMLScriptElement} Script element
 */
function createChatScript(src, config) {
    const script = document.createElement('script');
    script.id = config.id;
    script.src = src;
    script.async = true;
    Object.keys(config.attributes).forEach(key => {
        script.setAttribute(key, config.attributes[key]);
    });
    return script;
}

/**
 * Load the chat widget with specified agent type
 * @param {string} agentType - Agent type ('default' or 'specialist')
 */
function loadChatWidget(agentType = 'default') {
    cleanupChatWidget();
    
    // Check if agent is available in current environment
    if (!isAgentAvailable(agentType)) {
        console.warn(`Agent type '${agentType}' is not available in '${currentEnvironment}' environment`);
        return;
    }
    
    const envConfigs = CHAT_CONFIGS[currentEnvironment];
    if (!envConfigs || !envConfigs[agentType]) {
        console.warn(`No configuration found for agent '${agentType}' in environment '${currentEnvironment}'`);
        return;
    }
    
    const chatConfig = envConfigs[agentType];
    
    const script = createChatScript(chatConfig.primarySrc, chatConfig);
    script.onerror = function(el) {
        if (el.target.parentNode) {
            el.target.remove();
        }
        const fallbackScript = createChatScript(chatConfig.fallbackSrc, chatConfig);
        document.body.appendChild(fallbackScript);
    };
    document.body.appendChild(script);
    
    console.log(`Chat widget loaded for agent type: ${agentType} in environment: ${currentEnvironment}`);
}

/**
 * Check if an agent is available in the current environment
 * @param {string} agentType - Agent type to check
 * @returns {boolean} True if agent is available
 */
function isAgentAvailable(agentType) {
    return AGENT_AVAILABILITY[currentEnvironment] && 
           AGENT_AVAILABILITY[currentEnvironment][agentType] === true;
}

/**
 * Update agent options UI based on current environment
 */
function updateAgentAvailability() {
    document.querySelectorAll('.agent-option').forEach(option => {
        const agentType = option.querySelector('input[type="radio"]').value;
        const isAvailable = isAgentAvailable(agentType);
        
        if (isAvailable) {
            option.classList.remove('disabled');
            option.onclick = function() { selectAgent(agentType); };
        } else {
            option.classList.add('disabled');
            option.onclick = null;
        }
    });
    
    // Select first available agent
    const firstAvailable = document.querySelector('.agent-option:not(.disabled)');
    if (firstAvailable) {
        const agentType = firstAvailable.querySelector('input[type="radio"]').value;
        firstAvailable.classList.add('selected');
        document.getElementById(`agent-${agentType}`).checked = true;
        loadChatWidget(agentType);
    }
}

/**
 * Select environment and update agent availability
 * @param {string} environment - Environment to select ('dev', 'uat', or 'prd')
 */
function selectEnvironment(environment) {
    // Update UI selection
    document.querySelectorAll('.environment-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Update radio button
    document.getElementById(`env-${environment}`).checked = true;
    
    // Update current environment
    currentEnvironment = environment;
    
    // Clear current agent selection
    document.querySelectorAll('.agent-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Update agent availability and select first available
    updateAgentAvailability();
    
    console.log(`Environment changed to: ${environment}`);
}

/**
 * Select agent and reload chat widget
 * @param {string} agentType - Agent type to select
 */
function selectAgent(agentType) {
    // Check if agent is available
    if (!isAgentAvailable(agentType)) {
        console.warn(`Agent '${agentType}' is not available in environment '${currentEnvironment}'`);
        return;
    }
    
    // Update UI selection
    document.querySelectorAll('.agent-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Update radio button
    document.getElementById(`agent-${agentType}`).checked = true;
    
    // Reload chat widget with selected agent
    loadChatWidget(agentType);
}
