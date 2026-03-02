# Academic Portfolio

A clean, minimal, and responsive academic portfolio built with React, Vite, Tailwind CSS, and TypeScript.

## Features
- **Data-Driven**: All content is managed in a single `src/data.ts` file.
- **Responsive**: Fully optimized for mobile and desktop viewing.
- **GitHub Pages Ready**: Pre-configured for seamless deployment.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customizing Content

All your profile information, projects, publications, and CV details are stored in `src/data.ts`. Simply edit this file to update your portfolio.

### Updating Your Profile Image
1. Upload your image to `public/images/` (e.g., `my-photo.jpg`).
2. Update the `image` property in `src/data.ts` to point to `./images/my-photo.jpg`.

### Updating Your CV
1. Upload your CV PDF to the `public/` folder (e.g., `cv.pdf`).
2. Update the `cvUrl` property in `src/data.ts` to point to `/cv.pdf`.

## Deploying to GitHub Pages

This project includes a GitHub Actions workflow that automatically builds and deploys your site to GitHub Pages whenever you push to the `main` branch.

### Setup Instructions:

1. Push this repository to GitHub.
2. Go to your repository's **Settings** tab.
3. Click on **Pages** in the left sidebar.
4. Under **Build and deployment**, change the **Source** dropdown from "Deploy from a branch" to **"GitHub Actions"**.
5. Ensure your `vite.config.ts` has the correct `base` path set to your repository name (e.g., `base: '/asifsiddque.github.io/'`).
6. Push a commit to the `main` branch to trigger the deployment.

Your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.
