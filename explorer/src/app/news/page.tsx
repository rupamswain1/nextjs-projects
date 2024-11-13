import Image from "next/image";
import styles from "./page.module.css";
import { mockNews } from "../../mockData/mockNews";
import Link from "next/link";
const News = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2>NEWS PAGE</h2>
      </header>
      <section id="news" className={styles.newsContainer}>
        {mockNews.map((news) => {
          return (
            <Link
              href={`news/${news.slug}`}
              key={news.id}
            >
              <div >
                <div className={styles.imageContainer}>
                  <Image src={news.image} alt={news.title} fill />
                </div>
                <div id="news-details">
                  <h4>{news.title}</h4>
                  <p>{news.date}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
export default News;
