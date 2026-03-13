# Chat Widget Customization Documentation

## Overview

This document describes the customizations implemented for the **Microsoft Dynamics 365 Omnichannel LiveChat Widget (LCW v2)** used by Yourtown services such as **Kids Helpline (KHL)** and **Parentline**.

The widget has been customized to provide:

- Consistent branding across services
- Improved UI/UX
- Configurable environments (DEV / UAT / PRD)
- Multiple agent configurations
- Queue messaging control
- Modern styling using the **LiveChat Widget v2 customization API**

The implementation uses the **`data-customization-callback`** approach to dynamically apply styling and behaviour.

---

# Customizations Implemented

## 1. Header Branding

### Description
The widget header displays a **dynamic service logo and title** depending on the selected agent configuration.

### Purpose
This clearly identifies the support service being accessed by the visitor.

Examples:

| Service | Header Title |
|-------|--------------|
| Kids Helpline | Kids Helpline |
| Parentline | Parentline counselling |
| Conversational KHL | Conversational – KHL |

### Implementation

Header configuration is defined in:

```
js/chat-widget.js
```

Using:

```javascript
headerProps: {
  controlProps: {
    headerIconProps: { src: HEADER_LOGO },
    headerTitleProps: { text: cfg.headerTitle }
  }
}
```

Header images are hosted externally on **SharePoint**.

### Image Source

```
https://yourtownau.sharepoint.com/sites/FundraisingDev/Shared%20Documents/Test_WebChat
```

---

# 2. Custom Chat Launcher Button

### Description
The chat launcher button uses a **custom branded logo instead of the default Microsoft icon**.

### Purpose

Provides a recognizable entry point for the support service.

### Implementation

The launcher is styled via:

```
chatButtonProps.iconStyleProps
```

Example:

```javascript
iconStyleProps: {
  width: "50px",
  height: "40px",
  backgroundImage: `url('${LAUNCHER_LOGO}')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}
```

The launcher position is **controlled by the LiveChat widget**, preventing clipping issues.

---

# 3. Widget Layout and Dimensions

The main widget panel dimensions are controlled using:

```javascript
const PANEL_DIMENSIONS = {
  width: 420,
  height: 650,
  right: 24,
  bottom: 24,
  borderRadius: 18
};
```

These values control:

- Chat panel width
- Chat panel height
- Placement from bottom/right
- Rounded corners

Applied through:

```
styleProps.generalStyleProps
```

Example:

```javascript
styleProps: {
  generalStyleProps: {
    width: `${PANEL_DIMENSIONS.width}px`,
    height: `${PANEL_DIMENSIONS.height}px`,
    bottom: `${PANEL_DIMENSIONS.bottom}px`,
    right: `${PANEL_DIMENSIONS.right}px`
  }
}
```

---

# 4. Chat UI Styling

## Message Bubbles

### Bot Messages

```
Background: #EAF3F3
Text color: #111827
```

### User Messages

```
Background: Brand color
Text color: White
```

Rounded bubbles improve readability.

---

# 5. Suggested Action Buttons

Suggested actions appear as **pill-shaped buttons**.

### Styling

```
Border radius: 999px
Padding: 8px 18px
Hover effect enabled
```

Example:

```javascript
suggestedActionBorderRadius: 999
suggestedActionBorderColor: BRAND
```

### Stacked Layout

For the **Parentline agent**, suggested actions are displayed vertically.

This is enabled using:

```
data-suggested-action-layout="stacked"
```

Example:

```javascript
"data-suggested-action-layout": "stacked"
```

---

# 6. Queue Message Lock (Custom Overlay)

A custom **queue overlay system** has been implemented.

### Purpose

Prevent users from typing messages while:

- Waiting in queue
- Counsellor disconnected
- Chat session inactive

### Behaviour

| Event | Behaviour |
|------|----------|
User enters queue | Message area locked |
Agent joins chat | Message area unlocked |
Counsellor leaves | Message area locked again |
Supervisor force closes | Overlay removed |
Chat closed | Overlay removed |

### Implementation

A custom module in `chat-widget.js`:

```
QueueLock
```

This module:

- Detects widget iframe
- Positions an overlay above the message composer
- Blocks user interaction

Example overlay message:

```
“You’re in the queue. Messaging will be enabled when a counsellor is assigned.”
```

---

# 7. Session Persistence

Session state is preserved using **sessionStorage**.

Stored values include:

```
selectedEnvironment
selectedAgent
chatOpen
lcwQueueLocked
```

This enables:

- Restoring chat after refresh
- Restoring queue lock state
- Maintaining selected environment

---

# 8. Environment Support

The widget supports multiple environments:

| Environment | Purpose |
|-------------|--------|
DEV | Development testing |
UAT | User acceptance testing |
PRD | Production deployment |

Each environment loads different **Omnichannel App IDs**.

Defined in:

```
CHAT_CONFIGS
```

---

# 9. Agent Types Supported

The widget can load different agent experiences.

| Agent | Description |
|------|-------------|
KHL Agent | General Copilot-based support |
Conversational – KHL | Conversational AI agent |
Specialist Agent | Experimental AI agent |
Survey Agent | Pre-conversation survey workflow |
Parentline Agent | Parentline counselling |

Each agent has its own:

- Branding
- Launcher logo
- Header title
- Omnichannel App ID

---

# Technical Implementation

## LiveChat Widget Version

This implementation uses **LiveChat Widget v2**.

The script tag must include:

```
v2
```

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

---

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

---

# Future Enhancements

Possible future improvements:

- Animated launcher button
- Dark mode theme
- Mobile-optimized layout
- Accessibility improvements (ARIA labels)
- Configurable widget dimensions
- Analytics integration
- Chatbot fallback experiences

---

# References

Microsoft documentation:

LiveChat customization  
https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/customize-chat-widget

Develop a custom widget  
https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/develop-live-chat-widget