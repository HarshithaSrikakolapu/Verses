# Deployment Guide

Since this is a static React application built with Vite, you can deploy it to any static site hosting service. Here are three popular, free options.

## Option 1: Vercel (Recommended)
Vercel is the easiest way to deploy Vite apps.

1. **Push your code to GitHub**:
   - Create a new repository on GitHub.
   - Push your local code to it.

2. **Deploy on Vercel**:
   - Go to [Vercel.com](https://vercel.com) and sign up/login.
   - Click **"Add New..."** -> **"Project"**.
   - Import your GitHub repository.
   - Vercel will automatically detect "Vite".
   - Click **"Deploy"**.

Your app will be live in less than a minute!

## Option 2: Netlify
Similar to Vercel, Netlify is great for static sites.

1. **Push your code to GitHub**.
2. **Deploy on Netlify**:
   - Go to [Netlify.com](https://netlify.com).
   - Click **"Add new site"** -> **"Import from existing project"**.
   - Connect to GitHub and select your repo.
   - Build settings should auto-populate:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click **"Deploy"**.

## Option 3: GitHub Pages
You can host directly from your GitHub repository.

1. **Install `gh-pages`**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`**:
   Add a `homepage` field and deployment scripts:
   ```json
   {
     "homepage": "https://<your-username>.github.io/bible-mood-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist",
       ...
     }
   }
   ```

3. **Update `vite.config.ts`**:
   Set the base path:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: "/bible-mood-app/", // Match your repo name
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```
