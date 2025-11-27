# Bible Verses for Every Mood

A React + TypeScript application that provides Bible verses tailored to your current mood.

## Features
- Mood selection screen
- Beautiful background images for each mood
- "Next Verse" functionality to cycle through verses
- Responsive design with Tailwind CSS

## Prerequisites
- Node.js (v18 or later recommended)
- npm (v9 or later recommended)

## Setup & Running

Since this project was scaffolded in an environment without Node.js, you will need to install dependencies first.

1. Open a terminal in the project directory:
   ```bash
   cd bible-mood-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown (usually `http://localhost:5173`).

## Project Structure
- `src/data/verses.ts`: Contains the mood and verse data.
- `src/pages/`: Contains the page components (Home, MoodPage).
- `src/components/`: Contains reusable components (Layout).
- `public/images/`: Contains the background images.

## Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for instructions on how to deploy this app to Vercel, Netlify, or GitHub Pages.
