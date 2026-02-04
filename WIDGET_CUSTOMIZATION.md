# Chat Widget Customization Documentation

## Overview
This document describes the customizations made to the Microsoft Dynamics 365 Omnichannel LiveChat Widget to provide a modern, inviting user experience with custom branding and imagery.

## Customizations Implemented

### 1. Header Banner Image
- **Location**: `assets/images/chat-banner.svg`
- **Description**: A welcoming banner featuring a support agent with headset, chat bubbles, and gradient background
- **Purpose**: Makes the chat widget more inviting and professional
- **Colors**: Purple gradient (#667eea to #764ba2) matching the site theme

### 2. Chat Button Avatar
- **Location**: `assets/images/chat-avatar.svg`
- **Description**: A circular avatar showing a friendly support agent with headset
- **Purpose**: Provides a friendly, human touch to the chat button
- **Design**: Modern, minimalist illustration with matching color scheme

### 3. Widget Styling Enhancements

The `lcwCustomizationCallback` function in `js/chat-widget.js` implements the following modern UI enhancements:

#### General Styles
- Modern shadow for depth: `0 8px 24px rgba(0, 0, 0, 0.15)`
- Rounded corners: `16px border-radius`
- Positioned in bottom right: `bottom: 20px, right: 20px`

#### Header Styles
- **Background Image**: Uses the custom banner (`chat-banner.svg`)
- **Height**: Minimum 120px to showcase the banner
- **Text Styling**: 
  - White text with shadow for readability
  - Modern typography with increased font sizes
  - Proper padding for visual hierarchy

#### Chat Button Styles
- **Size**: 64x64px circular button
- **Background**: Purple gradient (#667eea) with custom avatar image
- **Shadow**: Floating effect with colored shadow (`0 4px 16px rgba(102, 126, 234, 0.4)`)
- **Border**: 3px white border for emphasis
- **Transition**: Smooth hover effects (0.3s ease)

#### Footer Styles
- **Background**: Light gray (#f8f9fa)
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

2. **Assets Created**
   - `assets/images/chat-banner.svg` - Header banner image
   - `assets/images/chat-avatar.svg` - Chat button avatar

### Browser Support

The customizations use standard CSS properties supported in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Testing

The widget customizations are applied to all agent types:
- **KHL Agent** - General support
- **Support Agent with Custom Instruction** - Experimental agent (primary target)
- **Pre-conversation Survey** - Survey-enabled agent
- **ParentLine Agent** - ParentLine support

## Deployment Notes

When deploying to production:

1. Ensure the `assets/images/` directory is included in the deployment
2. Verify CSP (Content Security Policy) allows loading of local images
3. Test in all supported environments (DEV, UAT, PRD)
4. Confirm external CDN resources are accessible

## Future Enhancements

Possible future improvements:
- Add animation to the chat button (pulse effect)
- Implement theme switching (light/dark mode)
- Add more customization options for different agent types
- Create responsive banner images for mobile devices
- Add accessibility enhancements (ARIA labels, keyboard navigation)

## References

- [Microsoft Docs: Customize live chat widgets](https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/customize-chat-widget)
- [Microsoft Docs: Develop a custom live chat widget](https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/develop-live-chat-widget)
