import NewsItems from "@/app/component/NewsItems/NewsItems";
import {
  getMonthsForYear,
  getNewsByMonths,
  getNewsByYear,
  getNewsYear,
} from "@/app/lib/news";
import styles from "./page.module.css";
import Link from "next/link";
import { Inews } from "@/app/lib/interfaces/news";
const YearNews = ({ params }: { params: { filter: string[] } }) => {
  const filters = params.filter;
  const year = filters?.[0];
  const month = filters?.[1];
  let headerValues: string[] = [];
  let news: Inews[] = [];
  if (!year && !month) {
    headerValues = getNewsYear();
  } else if (year && !month) {
    headerValues = getMonthsForYear(year);
    news = getNewsByYear(year);
  } else if (month) {
    headerValues = getMonthsForYear(year);
    news = getNewsByMonths(year, month);
  }

  return (
    <>
      <header id="year-header" className={styles.yearsHeader}>
        <ul>
          {headerValues.map((value) => (
            <li key={value}>
              <Link
                href={year ? `/archive/${year}/${value}` : `/archive/${value}`}
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      {((!year && !month) || !news.length) && (
        <p>No News Available, please select a filter</p>
      )}
      <div className={styles.newsContainer}>
        <NewsItems news={news} />
      </div>
    </>
  );
};

export default YearNews;
