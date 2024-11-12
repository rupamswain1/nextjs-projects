import Image from "next/image";
import styles from "./page.module.css";
import { mockNews } from "../../mockData/mockNews";
const News = () => {
  return (
    <div>
      <header>
        <h2>NEWS PAGE</h2>
      </header>
      <section id="news">
        {mockNews.map((news) => {
            console.log({news})
          return (
            <div key={news.id} className={styles.imageContainer}>
                <div className={styles.imageContainer}>
              <Image src={news.image} alt={news.title} fill />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default News;
