import express from 'express';
import sqlite from 'better-sqlite3';
import cors from 'cors';

const DUMMY_NEWS = [
    {
      "id": 1,
      "title": "Breaking: New Advances in Mental Health Therapy",
      "content": "Scientists have developed new techniques to improve mental health therapy effectiveness. The research focuses on personalized approaches to treatment.",
      "slug": "mental-health-therapy-advances",
      "image": "https://picsum.photos/id/13/200/300",
      "date": "2024-10-12"
    },
    {
      "id": 2,
      "title": "Top Destinations for Blissful Living in 2024",
      "content": "Explore some of the most tranquil and blissful destinations around the world, perfect for those seeking peace and relaxation.",
      "slug": "top-blissful-destinations-2024",
      "image": "https://picsum.photos/id/43/200/300",
      "date": "2024-11-01"
    }, 
    {
      "id": 3,
      "title": "How to Incorporate Mindfulness into Daily Life",
      "content": "Mindfulness techniques can significantly improve mental well-being. Discover ways to integrate mindfulness into everyday routines.",
      "slug": "mindfulness-daily-life",
      "image": "https://picsum.photos/id/129/200/300",
      "date": "2024-09-30"
    },
    {
      "id": 4,
      "title": "The Future of AI in Healthcare",
      "content": "AI continues to revolutionize the healthcare industry. Learn how AI tools are making diagnosis faster and more accurate.",
      "slug": "future-ai-healthcare",
      "image": "https://picsum.photos/id/91/200/300",
      "date": "2024-10-15"
    },
    {
      "id": 5,
      "title": "Travel Guide: Must-Visit Natural Wonders",
      "content": "From waterfalls to ancient forests, here are some awe-inspiring natural wonders to add to your travel bucket list.",
      "slug": "natural-wonders-travel-guide",
      "image": "https://picsum.photos/id/51/200/300",
      "date": "2024-08-20"
    },
    {
      "id": 6,
      "title": "Mental Health Apps: Do They Really Help?",
      "content": "Mental health apps are on the rise, but how effective are they? We examine the pros and cons of digital mental health tools.",
      "slug": "mental-health-apps-help",
      "image": "https://picsum.photos/id/19/200/300",
      "date": "2024-09-18"
    },
    {
      "id": 7,
      "title": "The Future of AI in Healthcare",
      "content": "AI continues to revolutionize the healthcare industry. Learn how AI tools are making diagnosis faster and more accurate.",
      "slug": "future-ai-healthcare-0",
      "image": "https://picsum.photos/id/92/200/300",
      "date": "2023-10-15"
    },
    {
      "id": 8,
      "title": "Travel Guide: Must-Visit Natural Wonders",
      "content": "From waterfalls to ancient forests, here are some awe-inspiring natural wonders to add to your travel bucket list.",
      "slug": "natural-wonders-travel-guide-0",
      "image": "https://picsum.photos/id/55/200/300",
      "date": "2023-08-20"
    },
    {
      "id": 9,
      "title": "Mental Health Apps: Do They Really Help?",
      "content": "Mental health apps are on the rise, but how effective are they? We examine the pros and cons of digital mental health tools.",
      "slug": "mental-health-apps-help-0",
      "image": "https://picsum.photos/id/99/200/300",
      "date": "2023-09-18"
    },
    {
      "id": 10,
      "title": "The Future of AI in Healthcare",
      "content": "AI continues to revolutionize the healthcare industry. Learn how AI tools are making diagnosis faster and more accurate.",
      "slug": "future-ai-healthcare-1",
      "image": "https://picsum.photos/id/01/200/300",
      "date": "2022-10-15"
    },
    {
      "id": 11,
      "title": "Travel Guide: Must-Visit Natural Wonders",
      "content": "From waterfalls to ancient forests, here are some awe-inspiring natural wonders to add to your travel bucket list.",
      "slug": "natural-wonders-travel-guide-1",
      "image": "https://picsum.photos/id/59/200/300",
      "date": "2022-08-20"
    },
    {
      "id": 12,
      "title": "Mental Health Apps: Do They Really Help?",
      "content": "Mental health apps are on the rise, but how effective are they? We examine the pros and cons of digital mental health tools.",
      "slug": "mental-health-apps-help-1",
      "image": "https://picsum.photos/id/109/200/300",
      "date": "2021-09-18"
    }
  ]
  

const db = sqlite('data.db');

function initDb() {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get();

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

const app = express();

app.use(cors())

app.get('/news', (req, res) => {
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news);
});

initDb();

app.listen(8080);