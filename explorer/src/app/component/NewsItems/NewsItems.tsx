import { Inews } from "@/app/lib/interfaces/news";
import Link from "next/link";
import styles from "./newsItems.module.css";
import Image from "next/image";
const NewsItems = ({ news }: { news: Inews[] }) => {
  return (
    <>
      {news.map((n) => {
        return (
          <Link href={`../news/${n.slug}`} key={n.id}>
            <div>
              <div className={styles.imageContainer}>
                <Image src={n.image} alt={n.title} fill />
              </div>
              <div id="news-details">
                <h4>{n.title}</h4>
                <p>{n.date}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default NewsItems;
