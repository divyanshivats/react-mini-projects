📢 Top Hacker News Articles
A React app that displays the top 10 trending articles from Hacker News using its official public API.

🔗 Live Demo: topnews-articles-from-hackernews.vercel.app

🚀 Features
Fetches top 10 articles from Hacker News

Displays article title, author, score, and link

Dark-themed, mobile-responsive card layout

Clean loading state while data is fetched

Fully built using React functional components

🧠 Tech Stack
⚛️ React (Hooks, Functional Components)

🎨 Custom CSS (Responsive dark UI)

🌐 Hacker News API

🔁 Async data fetching with fetch and useEffect

🛠️ Getting Started
bash
Copy
Edit
# 1. Clone the repository
git clone https://github.com/your-username/top-hackernews-articles.git

# 2. Navigate to the project folder
cd top-hackernews-articles

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
📁 Project Structure
bash
Copy
Edit
src/
├── components/         # Reusable UI components
├── hooks/              # Custom data-fetching hook
├── pages/              # Page component for displaying articles
├── services/           # API logic (fetchTopNewsId, getArticles)
├── styles/             # CSS styles (dark theme, responsive layout)
├── App.jsx
└── index.js
📚 API Reference
🔗 Top Stories IDs
https://hacker-news.firebaseio.com/v0/topstories.json

🔗 Story Details
https://hacker-news.firebaseio.com/v0/item/{id}.json

💡 Future Improvements
Add filters for "New", "Best", etc.

Add article search (by title/author)

Add pagination or "Load more" feature

Add bookmarking/favorites using localStorage

🙌 Acknowledgements
Data powered by Hacker News API
