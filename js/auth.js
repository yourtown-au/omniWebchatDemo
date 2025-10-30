// Authentication module
// Handles access code verification and session management

const AUTH_CONFIG = {
    ACCESS_CODE: 'code123',
    SESSION_KEY: 'isAuthenticated'
};

/**
 * Check if user is already authenticated in this session
 */
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem(AUTH_CONFIG.SESSION_KEY);
    if (isAuthenticated === 'true') {
        unlockContent();
    }
}

/**
 * Verify the access code entered by the user
 */
function checkAccessCode() {
    const input = document.getElementById('accessCode');
    const errorMessage = document.getElementById('errorMessage');
    const code = input.value;
    
    if (code === AUTH_CONFIG.ACCESS_CODE) {
        sessionStorage.setItem(AUTH_CONFIG.SESSION_KEY, 'true');
        unlockContent();
    } else {
        errorMessage.classList.add('show');
        input.value = '';
        input.focus();
        
        // Shake animation for the modal
        const modal = document.querySelector('.access-modal');
        modal.style.animation = 'shake 0.5s';
        setTimeout(() => {
            modal.style.animation = '';
        }, 500);
    }
}

/**
 * Unlock the main content after successful authentication
 */
function unlockContent() {
    document.getElementById('accessOverlay').style.display = 'none';
    document.getElementById('contentWrapper').classList.add('unlocked');
    
    // Load chat widget with default agent
    const selectedAgent = document.querySelector('input[name="agent"]:checked').value;
    loadChatWidget(selectedAgent);
}

/**
 * Initialize authentication on page load
 */
function initAuth() {
    checkAuthentication();
    
    const accessCodeInput = document.getElementById('accessCode');
    if (accessCodeInput) {
        accessCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAccessCode();
            }
        });
        accessCodeInput.focus();
    }
}
