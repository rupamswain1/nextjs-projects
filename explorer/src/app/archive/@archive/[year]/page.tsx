import NewsItems from "@/app/component/NewsItems/NewsItems";
import { getNewsByYear } from "@/app/lib/news";
import style from './page.module.css'
const YearNews = ({ params }: { params: { year: string } }) => {
  const year = params.year;
  const news = getNewsByYear(year);

  return (
    <>
      <h1>{year}</h1>
      <div className={style.newsContainer}>
        <NewsItems news={news} />
      </div>
    </>
  );
};

export default YearNews;
