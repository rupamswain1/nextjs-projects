
import styles from "./page.module.css";
import { mockNews } from "../../mockData/mockNews";
import NewsItems from "../component/NewsItems/NewsItems";
const News = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2>NEWS PAGE</h2>
      </header>
      <section id="news" className={styles.newsContainer}>
        <NewsItems news={mockNews} />
      </section>
    </div>
  );
};
export default News;
