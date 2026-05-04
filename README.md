# Dr. G G MD Nawaz Ali's Portfolio

# Install dependecies 
After cloning the repo, issue: 

npm install 

# How to run: 

npm start


# To create Json file from a resume: 
npm run generate-json resumes/resume.docx

# 🚀 Deployment Guide (GitHub Pages)

This project is deployed using **GitHub Pages** with **Parcel**.

---

## 📦 1. Install Deployment Dependency

```bash
npm install --save-dev gh-pages
```

---

## ⚙️ 2. Update `package.json`

Add the following:

```json
"homepage": "https://NawazAli20.github.io/NawazPortfolio",
```

Update scripts:

```json
"scripts": {
  "start": "parcel src/index.html --open -p 8080",
  "build": "parcel build src/index.html --public-url /NawazPortfolio/",
  "deploy": "gh-pages -d dist",
  "generate-json": "node scripts/generatePortfolioJson.js"
}
```

---

## 🌐 3. Configure React Router

Since GitHub Pages uses a sub-path (`/NawazPortfolio`), update your router:

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/NawazPortfolio">
```

---

## 🛠️ 4. Build the Project

```bash
npm run build
```

---

## 🚀 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This will create and push a `gh-pages` branch.

---

## ⚙️ 6. Enable GitHub Pages

Go to your repository:

👉 Settings → Pages

Set:

* **Source**: Deploy from branch
* **Branch**: `gh-pages`
* **Folder**: `/ (root)`

---

## 🔗 7. Access Your Website

Your site will be live at:

👉 https://NawazAli20.github.io/NawazPortfolio

---

## 🖼️ Notes on Assets

If using images from `public/`:

```jsx
<img src="/NawazPortfolio/Pics/Nawaz1.jpg" />
```

OR (recommended):

```jsx
import img from "../assets/Nawaz1.jpg";
<img src={img} />
```
## 🎉 Done!

Your React portfolio is now live on GitHub Pages.
