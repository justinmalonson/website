# Netlify Deployment

## Framework

TanStack Start (React) on Vite with server-side rendering.

## Netlify Settings

- Build command: `npm run build`
- Publish directory: `dist/client`
- Node version: use a current Netlify-supported LTS release

The repository is configured for Netlify with `@netlify/vite-plugin-tanstack-start` in [vite.config.ts](/Users/justinm/Downloads/website/vite.config.ts:1) and build settings in [netlify.toml](/Users/justinm/Downloads/website/netlify.toml:1).

## Required Environment Variables

- `VITE_WEB3FORMS_ACCESS_KEY`
  Placeholder example is in [.env.example](/Users/justinm/Downloads/website/.env.example:1).
  This powers the contact form submission on `/contact`.

## Deploy Steps

1. In Netlify, create a new site from `https://github.com/justinmalonson/website`.
2. Confirm the build command is `npm run build`.
3. Confirm the publish directory is `dist/client`.
4. Add `VITE_WEB3FORMS_ACCESS_KEY` in Site configuration > Environment variables.
5. Trigger the first deploy.

## Custom Domain Setup for `justinmalonson.com`

1. In Netlify, open the site and go to Domain management.
2. Add `justinmalonson.com` as the custom domain.
3. If you want the simplest apex setup, choose Netlify DNS and update the registrar to Netlify’s assigned nameservers.
4. If you keep external DNS, add `www` as a CNAME to `<your-site-name>.netlify.app`.
5. For the apex domain, either use Netlify DNS or follow your DNS provider’s supported apex-to-Netlify setup.
6. Set the preferred primary domain in Netlify. Netlify will automatically redirect between the apex domain and `www` for that pair.
7. Wait for DNS validation and automatic HTTPS provisioning to complete before switching traffic.

## Routes to Validate After Deploy

- `/`
- `/about`
- `/expertise`
- `/contact`

These routes are handled by the TanStack Start Netlify integration, so direct URL access should resolve without a static SPA redirect.
