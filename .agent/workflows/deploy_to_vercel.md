---
description: How to deploy the Digital Dose application to Vercel
---

# Deploy to Vercel

Since your code is already pushed to GitHub, deploying to Vercel is very straightforward.

## Step 1: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and log in (or sign up) using your **GitHub** account.
2. On your dashboard, click the **"Add New..."** button and select **"Project"**.

## Step 2: Import Repository
1. You should see a list of your GitHub repositories.
2. Find `DigitalDose` in the list and click **"Import"**.

## Step 3: Configure Project
Vercel should automatically detect that this is a **Vite** project.
- **Framework Preset**: `Vite`
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (leave as default)
- **Output Directory**: `dist` (leave as default)

## Step 4: Deploy
1. Click **"Deploy"**.
2. Wait for the build to complete (usually < 1 minute).
3. Once finished, you will get a live URL (e.g., `digital-dose.vercel.app`).

## Step 5: (Optional) Custom Domain
If you have a custom domain, go to **Settings > Domains** in your new Vercel project to add it.
