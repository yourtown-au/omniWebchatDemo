# Chat Widget Customization Documentation

## Overview

This document describes the customizations implemented for the **Microsoft Dynamics 365 Omnichannel LiveChat Widget (LCW v2)** used by Yourtown services such as **Kids Helpline (KHL)** and **Parentline**.

### 1. Header Banner Image
- **Description**: Custom header branding using configurable logo and title
- **Purpose**: Provides clear identification of the support service (KHL, Parentline, etc.)
- **Implementation**: Header icon and title are dynamically set based on the selected agent configuration
- **Images Source**: Hosted externally (SharePoint) and referenced via URL - https://yourtownau.sharepoint.com/sites/FundraisingDev/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FFundraisingDev%2FShared%20Documents%2FTest%5FWebChat&viewid=c26f4d51%2Dc1b6%2D4e61%2D930b%2Dea601bef4551

### 2. Chat Button Launcher Logo
- **Description**: Custom launcher button displaying service branding
- **Purpose**: Provides a recognizable entry point for users to start the chat
- **Implementation**: Uses the `launcherLogoURL` property in the branding configuration
- **Design**: Launcher image is centered and scaled using CSS background properties

```
selectedEnvironment
selectedAgent
chatOpen
lcwQueueLocked
```

This enables:

#### General Styles
- Modern shadow for depth: `0 16px 48px rgba(0,0,0,0.18)`
- Rounded corners: `18px border-radius`
- Positioned in bottom right: `bottom: 20px, right: 20px`
- Modern typography: `Segoe UI`

#### Header Styles
- **Background Color**: Dynamic branding color per agent
- **Custom Header Logo**: Displayed next to title
- **Text Styling**: 
  - White text for readability
  - Bold title styling
  - Proper spacing and padding
- **Controls**: 
  - Minimize button
  - Close button
  - Hover interaction styling

#### Chat Bubble Styling
- **Bot Messages**: 
  - Light background `#EAF3F3`
  - Dark readable text
- **User Messages**: 
  - Branded background color
  - White text
  - Hover interaction styling
- Rounded chat bubbles with improved readability

#### Suggested Action Buttons
- Rounded pill-shaped buttons
- Border color matches branding color
- Hover interaction styling
- Consistent padding and spacing

#### Footer / Input Area
- Light background `#F3FAFA`
- Subtle border top
- Clean spacing

#### Footer Styles
- **Background**: Light gray `#f8f9fa`
- **Rounded corners**: Bottom corners only
- **Padding**: Consistent spacing

Defined in:

```
CHAT_CONFIGS
```

---

# 9. Agent Types Supported

The widget can load different agent experiences.

1. **js/chat-widget.js**
   - Enhanced `lcwCustomizationCallback` function with comprehensive styling
   - Added modern UI properties for all widget components
   - Applies dynamic branding configuration
   - Image paths use relative URLs (`assets/images/...`) to work across different deployment contexts
   - **Added `v2` attribute** to script element for customization callback support

Each agent has its own:

3. **Branding Configuration**
   - Each agent has its own branding configuration including:
        - Header title
        - Brand colors
        - Launcher logo
        - Bot avatar
        - Header icon

### Widget Version 2 Requirement

Example:

```html
<script
id="Microsoft_Omnichannel_LCWidget"
src="https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js"
v2
data-app-id="..."
data-org-id="..."
data-org-url="..."
data-customization-callback="lcwCustomizationCallback">
</script>
```

Without the `v2` attribute, style customizations will not apply.

---

# Files Modified

## 1. js/chat-widget.js

Contains:

- Environment configuration
- Agent configuration
- Branding configuration
- Customization callback
- Queue overlay logic
- Widget lifecycle management

---

## 2. styles.css

Contains UI styling for:

- Environment selector
- Agent selector
- Page layout
- Branding themes

---

# Browser Support

The widget customization supports modern browsers:

| Browser | Supported Version |
|--------|------------------|
Chrome | 120+ |
Edge | 120+ |
Firefox | 120+ |
Safari | 17+ |

---

# Testing

The widget has been tested for:

- Agent switching
- Environment switching
- Queue lock behaviour
- Refresh session restore
- Supervisor force close handling
- Chat close cleanup
- Suggested action layout
- Launcher rendering

The widget customizations are applied to all agent types:
- **KHL Agent** - General support (Copilot-based agent)
- **Conversational – KHL** - Conversational (Copilot-based agent)
- **Support Agent with Custom Instruction** - Experimental agent
- **Pre-conversation Survey** - Survey-enabled agent(Form based)
- **ParentLine Agent** - ParentLine support (Copilot-based agent)
- Each agent loads a separate Omnichannel App ID configuration and branding setup.

# Deployment Notes

When deploying:

1. Ensure SharePoint-hosted images are accessible.
2. Confirm CSP policies allow loading external images.
3. Verify CDN access to:

```
oc-cdn-public-oce.azureedge.net
```

4. Test widget in DEV / UAT / PRD.
5. Confirm correct App IDs for each environment.

1. Ensure the `assets/images/` directory is included in the deployment
2. Ensure external image URLs (e.g., SharePoint-hosted assets) are accessible
3. Verify CSP (Content Security Policy) allows loading of local images
4. Test in all supported environments (DEV, UAT, PRD)
5. Confirm external CDN resources are accessible
6. Verify LiveChat widget loads correctly for each agent configuration

# Future Enhancements

Possible future improvements:
- Add animation to the chat button (pulse effect)
- Implement theme switching (light/dark mode)
- Add more customization options for different agent types
- Create responsive banner images for mobile devices
- Add accessibility enhancements (ARIA labels, keyboard navigation)
- Add responsive adjustments for smaller screens

LiveChat customization  
https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/customize-chat-widget

Develop a custom widget  
https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/develop-live-chat-widget