# Blog Summariser
# 📰 Blog Summariser App

A full-stack Next.js 14 application that:

- 🔗 Scrapes blog content from a URL
- 🧠 Simulates an AI-generated summary
- 🌐 Translates the summary to Urdu using a custom JS dictionary
- 💾 Saves the full blog text to MongoDB
- 📤 Saves the summary to Supabase
- 🎨 Built using ShadCN UI and deployed on Vercel

---

## 📸 Demo

> Live: https://nexium-anas-assign2-two.vercel.app/ 
> *(replace with actual link after deployment)*

---

## 🚀 Features

- 🔍 Blog scraping using `cheerio`
- ✂️ Static summary generator (first 3 sentences)
- 🌍 Urdu translation using a manual word dictionary
- 🗃️ MongoDB storage for full blog content
- 🧾 Supabase storage for summaries
- 💅 ShadCN UI components
- ⚡ Deployed on Vercel

---

## 🧪 How It Works

1. Enter any blog URL (e.g. `https://blog.logrocket.com/...`)
2. Click **"Summarise"**
3. View:
   - English summary
   - Urdu summary
4. Click **"Save"** to store:
   - Summary in Supabase
   - Full blog in MongoDB

---

## 🧱 Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, ShadCN UI
- **Scraping:** `cheerio`
- **Backend APIs:** Route handlers (`/api/...`)
- **Database 1:** MongoDB (for full blog text)
- **Database 2:** Supabase (for summaries)
- **Deployment:** Vercel

---

## 🛠️ Local Setup

```bash
git clone https://github.com/your-username/blog-summariser.git
cd blog-summariser
npm install
