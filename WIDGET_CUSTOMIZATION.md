# Chat Widget Customization Documentation

## Overview
This document describes the customizations made to the Microsoft Dynamics 365 Omnichannel LiveChat Widget to provide a modern, inviting user experience with custom branding and imagery.

## Customizations Implemented

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

### 3. Widget Styling Enhancements

The `lcwCustomizationCallback` function in `js/chat-widget.js` implements the following modern UI enhancements:

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

## Technical Implementation

### Using LiveChat Widget 2.0

The customizations use the Microsoft Omnichannel LiveChat Widget 2.0 customization API through the `data-customization-callback` attribute. This approach:

1. **Does not require SDK installation** - works with the existing script-based widget
2. **Maintains compatibility** - all widget functionality remains intact
3. **Easy to update** - styling can be modified without changing core widget code
4. **Performance optimized** - uses CSS-based styling applied at widget initialization

### Files Modified

1. **js/chat-widget.js**
   - Enhanced `lcwCustomizationCallback` function with comprehensive styling
   - Added modern UI properties for all widget components
   - Applies dynamic branding configuration
   - Image paths use relative URLs (`assets/images/...`) to work across different deployment contexts
   - **Added `v2` attribute** to script element for customization callback support

2. **Assets Created**
   - `assets/images/chat-banner.svg` - Header banner image
   - `assets/images/chat-avatar.svg` - Chat button avatar

3. **Branding Configuration**
   - Each agent has its own branding configuration including:
        - Header title
        - Brand colors
        - Launcher logo
        - Bot avatar
        - Header icon

### Widget Version 2 Requirement

The customization callback requires the LiveChat Widget script to have the `v2` attribute set. This is automatically added by the `createChatScript` function in `js/chat-widget.js`. The script tag will look like:

```html
<script
    id="Microsoft_Omnichannel_LCWidget"
    src="https://oc-cdn-public-oce.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js"
    v2
    data-app-id="..."
    data-org-id="..."
    data-org-url="..."
    data-customization-callback="lcwCustomizationCallback"
></script>
```

Without the `v2` attribute, the customization callback will be invoked but the `styleProps` will not be applied.

### Browser Support

The customizations use standard CSS properties supported in all modern browsers:
- Chrome 120+
- Firefox 120+
- Safari 17+
- Edge 120+

## Testing

The widget customizations are applied to all agent types:
- **KHL Agent** - General support (Copilot-based agent)
- **Conversational – KHL** - Conversational (Copilot-based agent)
- **Support Agent with Custom Instruction** - Experimental agent
- **Pre-conversation Survey** - Survey-enabled agent(Form based)
- **ParentLine Agent** - ParentLine support (Copilot-based agent)
- Each agent loads a separate Omnichannel App ID configuration and branding setup.

### Known Issues

**Microsoft Backend Regression (as of early 2025):**
There are community reports of a backend regression affecting the `data-customization-callback` functionality in the LiveChat Widget v2. Some users report that customizations are not being applied despite correct configuration. This appears to be an issue with Microsoft's Omnichannel service rather than the implementation.

**Workarounds if customizations don't apply:**
1. Verify the `v2` attribute is present on the script tag (this implementation includes it automatically)
2. Check browser console for any error messages
3. Monitor [Microsoft's Dynamics 365 Known Issues page](https://learn.microsoft.com/en-us/dynamics365/customer-service/implement/omnichannel-readme) for updates
4. Consider opening a support ticket with Microsoft if customizations remain non-functional

## Deployment Notes

When deploying to production:

1. Ensure the `assets/images/` directory is included in the deployment
2. Ensure external image URLs (e.g., SharePoint-hosted assets) are accessible
3. Verify CSP (Content Security Policy) allows loading of local images
4. Test in all supported environments (DEV, UAT, PRD)
5. Confirm external CDN resources are accessible
6. Verify LiveChat widget loads correctly for each agent configuration

## Future Enhancements

Possible future improvements:
- Add animation to the chat button (pulse effect)
- Implement theme switching (light/dark mode)
- Add more customization options for different agent types
- Create responsive banner images for mobile devices
- Add accessibility enhancements (ARIA labels, keyboard navigation)
- Add responsive adjustments for smaller screens

## References

- [Microsoft Docs: Customize live chat widgets](https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/customize-chat-widget)
- [Microsoft Docs: Develop a custom live chat widget](https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/develop-live-chat-widget)
