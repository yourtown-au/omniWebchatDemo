# omniWebchatDemo
poc demo

## Features

- **Modern UI**: Customized Microsoft Dynamics 365 Omnichannel LiveChat Widget with modern, inviting design
- **Multiple Agents**: Support for KHL Agent, Support Agent with Custom Instruction, Pre-conversation Survey, and ParentLine Agent
- **Environment Support**: DEV, UAT, and PRD environments
- **Custom Branding**: Header banner and avatar images for a more personal experience

## Chat Widget Customization

The live chat widget has been customized with:
- Inviting header banner image featuring a support agent
- Custom avatar on the chat button
- Modern UI with rounded corners and shadows
- Enhanced color scheme matching the site theme

For detailed information about the widget customizations, see [WIDGET_CUSTOMIZATION.md](WIDGET_CUSTOMIZATION.md).

## GitHub Pages Setup

This repository is configured to publish to GitHub Pages automatically.

### How it works

- The `index.html` file in the root directory is published as a public website
- The deployment happens automatically when changes are pushed to the `main` branch
- GitHub Actions workflow (`.github/workflows/pages.yml`) handles the deployment

### Enabling GitHub Pages

To enable GitHub Pages for this repository, a repository admin needs to:

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - Set **Source** to "GitHub Actions"
3. The workflow will automatically deploy on the next push to `main`

Once enabled, the site will be available at: `https://yourtown-au.github.io/omniWebchatDemo/`
