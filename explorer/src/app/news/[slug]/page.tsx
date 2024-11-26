import { mockNews } from "@/mockData/mockNews";
import Image from "next/image";
import styles from './page.module.css';
import { notFound } from "next/navigation";
import Link from "next/link";
const NewsItem: React.FunctionComponent<{ params: { slug: string } }> = ({
  params,
}) => {
  const news = mockNews.filter((news) => news.slug === params.slug)[0];
  if(!news){
    notFound();
  }
  return (
    <div className={styles.newsContainer}>
      <header>
        <h2>{news.title}</h2>
        <p>{news.date}</p>
      </header>
      <article>
        <div className={styles.imageContainer}>
          <Link href={`/news/${params.slug}/image`}>
            <Image src={news.image} alt={news.title} fill />
          </Link>
        </div>
        {news.content}
      </article>
    </div>
  );
};

export default NewsItem;
