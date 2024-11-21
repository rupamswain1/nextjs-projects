import NewsItems from "@/app/component/NewsItems/NewsItems";
import { getLatestNews } from "@/app/lib/news";

const DefaultLatestpage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>latest News page</h1>
      <div id="newsContainer" className="newsContainer">
        <NewsItems news={latestNews}></NewsItems>
      </div>
    </>
  );
};
export default DefaultLatestpage;
