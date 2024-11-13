import { mockNews } from "@/mockData/mockNews";
import Image from "next/image";
import styles from './page.module.css';
const NewsItem: React.FunctionComponent<{ params: { slug: string } }> = ({
  params,
}) => {
  const news = mockNews.filter((news) => news.slug === params.slug)[0];

  return (
    <div className={styles.newsContainer}>
      <header>
        <h2>{news.title}</h2>
        <p>{news.date}</p>
      </header>
      <article>
        <div className={styles.imageContainer}>
          <Image src={news.image} alt={news.title} fill />
        </div>
        {news.content}
      </article>
    </div>
  );
};

export default NewsItem;
