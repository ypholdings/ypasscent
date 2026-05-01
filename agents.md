# Agents Documentation for ypasscent

## Project Overview
`ypasscent` is a static marketing website for YP Ascent Partners. The site is built using plain HTML, CSS, and JavaScript, with a focus on a polished homepage, contact form, and GitHub Pages deployment.

## Key Project Files
- `index.html` - The landing page with navigation, hero section, city image carousel, and open roles section.
- `contact.html` - Contact page with a form for applicants and company contact details.
- `css/style.css` - Global styling, layout rules, responsive behavior, and carousel/hero card styling.
- `js/main.js` - JavaScript for page interactions: navbar scroll effect, reveal animations, carousel behavior, and EmailJS form submission.
- `.github/workflows/deploy.yml` - GitHub Actions workflow for deploying the static site to GitHub Pages.
- `images/` - Local image assets used by the carousel and branding.
- `CNAME` - Custom domain configuration for GitHub Pages (`ypascent.com`).

## Deployment Configuration
### Workflow
The site is deployed from `main` to the `gh-pages` branch using the `JamesIves/github-pages-deploy-action@v4` action.

Current workflow file: `.github/workflows/deploy.yml`

Important settings:
- trigger: `push` to `main`
- required permissions:
  - `contents: write`
  - `pages: write`
- deploy folder: `.` (repo root)
- target branch: `gh-pages`
- clean deploy: `true`

### Domain
- `CNAME` contains `ypascent.com`
- GitHub Pages should be configured to serve from `gh-pages` for the repository.

## Email Form Service
The contact form uses EmailJS to send form submissions by email.

### HTML Form Fields
The `contact.html` form uses these `name` attributes:
- `first_name`
- `last_name`
- `email`
- `role`
- `message`

These names must match the EmailJS template variable names.

### EmailJS Script
Loaded in `contact.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3.3.0/dist/email.min.js"></script>
<script src="js/main.js"></script>
```

### JavaScript Initialization
In `js/main.js`, EmailJS is initialized with the public key and the form is submitted with a specific service/template:
- Public Key: `1bDA6vW1zOjHQYXeL`
- Service ID: `service_ilp7779`
- Template ID: `template_kkr3z12`

### EmailJS Notes
- The service requires matching EmailJS template variables and a valid Gmail/SMTP configuration in EmailJS.
- The current implementation includes a loading check to ensure the EmailJS library is available before sending.
- If the EmailJS script fails to load, the contact button will alert that the service is not ready.

## Carousel and Image Assets
The homepage carousel displays three city-specific photographs:
- `images/taipei.jpg`
- `images/singapore.jpg`
- `images/switzerland.jpg`

These are local files, not remote CDN resources, so they are served directly from the repository.

### Carousel Behavior
Implemented in `js/main.js`:
- auto-rotates every 4 seconds
- supports manual dot navigation
- updates active label state for city names

## Mobile Layout Notes
Responsive CSS is defined in `css/style.css`.

Important mobile adjustments:
- Navigation collapses to a simpler layout for small screens.
- Hero section becomes single-column.
- The hero stat grid is centered and the stat cards are reduced in padding and width for mobile devices.

## How to Update Project Parameters
### Change EmailJS settings
1. Update `contact.html` script URL if the EmailJS package version changes.
2. Update `js/main.js` values:
   - `emailjs.init("PUBLIC_KEY")`
   - `emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', event.target)`
3. Make sure the EmailJS template variables match the form `name` attributes.

### Change deployment branch or folder
Update `.github/workflows/deploy.yml`:
- `branch` for deploy target
- `folder` for deploy source
- `permissions` if GitHub permission settings change

## Summary
This repo is a static site with:
- GitHub Pages deployment
- EmailJS form handling
- local carousel photography assets
- responsive layout for mobile

Use `agents.md` as the authoritative reference for the project structure, services used, and configuration values.
