# omniWebchatDemo

Proof-of-concept web application demonstrating a **customized Microsoft Dynamics 365 Omnichannel Live Chat Widget (LCW v2)** implementation.

- **Modern UI**: Customized Microsoft Dynamics 365 Omnichannel LiveChat Widget with modern, inviting design
- **Multiple Agents**: Support for KHL Agent,Conversational - KHL, Support Agent with Custom Instruction, Pre-conversation Survey, and ParentLine Agent
- **Environment Support**: DEV, UAT, and PRD environments
- **Dynamic Agent Switching**: Users can switch agents from the UI without reloading the page.
- **Custom Branding**: Header banner and avatar images for a more personal experience

---

# Features

## Modern Chat UI
Customized Microsoft Dynamics 365 Omnichannel LiveChat Widget with a modern, inviting user experience including:

- Rounded UI components
- Soft shadows
- Branded chat bubbles
- Custom header icons
- Custom launcher button branding

---

## Multiple Agent Experiences

The demo supports multiple agent configurations:

| Agent | Description |
|------|-------------|
| **KHL Agent** | General support Copilot-based agent |
| **Conversational – KHL** | Conversational AI agent |
| **Support Agent with Custom Instruction** | Experimental agent |
| **Pre-conversation Survey** | Survey-driven chat experience |
| **ParentLine Agent** | Parentline counselling support |

Each agent loads a **separate Omnichannel App ID configuration** and **branding setup**.

---

## Environment Support

The application supports multiple environments:

| Environment | Purpose |
|-------------|--------|
| **DEV** | Development testing |
| **UAT** | User acceptance testing |
| **PRD** | Production deployment |

Environment selection dynamically loads the corresponding **Omnichannel configuration and App IDs**.

---

## Dynamic Agent Switching

Users can switch between agents directly from the UI without refreshing the page.

The widget is automatically:

- unloaded
- cleaned up
- reloaded with the selected agent configuration

This allows quick testing of multiple chat scenarios.

---

## Custom Branding

Each agent experience supports dynamic branding including:

- Header title
- Brand color theme
- Launcher logo
- Bot avatar
- Header icon

Branding assets are hosted externally on **SharePoint** and loaded dynamically.

---

## Suggested Action Layout (Stacked)

Some chat experiences (e.g., **Parentline**) use a stacked layout for suggested actions.

```
data-suggested-action-layout="stacked"
```

This displays options vertically instead of horizontally to improve usability.

---

## Queue Lock Behaviour

A custom **Queue Lock overlay system** has been implemented to control the chat input area.

### Behaviour

| Scenario | Result |
|--------|-------|
User waiting in queue | Message input is locked |
Agent joins conversation | Input unlocked |
Counsellor leaves chat | Input locked again |
Supervisor force closes conversation | Overlay removed |
Chat widget closed | Overlay removed |

This prevents users from typing messages when the chat cannot accept them.

---

## Session Persistence

The demo preserves session state using **sessionStorage**.

Stored values include:

```
selectedEnvironment
selectedAgent
chatOpen
lcwQueueLocked
```

This allows:

- restoring the widget after page refresh
- restoring queue lock state
- maintaining the selected agent/environment

---

# Chat Widget Customization

The LiveChat widget has been customized using the **LCW v2 customization callback**.

Key UI customizations include:

The live chat widget has been customized with:
- Custom header branding and icons
- Custom avatar on the chat button
- Custom launcher button logos
- Agent-specific themes
- Modern UI with rounded corners, soft shadows and Branded chat bubbles
- Custom bot avatar icons
- Dynamic agent configuration per environment

---

# GitHub Pages Setup

This repository is configured to publish automatically to **GitHub Pages**.

## How it works

- The `index.html` file in the root directory is published as a public website
- Deployment happens automatically when changes are pushed to the **main branch**
- A GitHub Actions workflow handles the build and deployment

Workflow file:

```
.github/workflows/pages.yml
```

---

# Enabling GitHub Pages

To enable GitHub Pages for this repository, a repository admin must:

1. Go to **Repository Settings**
2. Select **Pages**
3. Under **Build and deployment**:
   - Set **Source** to **GitHub Actions**

The site will deploy automatically after the next push.

---

# Demo URL

Once GitHub Pages is enabled, the demo will be available at:

```
https://yourtown-au.github.io/omniWebchatDemo/
```

---

# Future Improvements

Potential enhancements include:

- Animated launcher button
- Dark mode theme support
- Mobile optimized layout
- Accessibility improvements (ARIA support)
- Additional analytics and telemetry
- Additional Copilot integrations
- Enhanced agent configuration management

---

# References

Microsoft Documentation:

Customize Live Chat Widget  
https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/customize-chat-widget

Develop Custom Live Chat Widget  
https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/develop-live-chat-widget