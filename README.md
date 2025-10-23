# omniWebchatDemo
poc demo

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
