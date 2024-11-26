import { mockNews } from "@/mockData/mockNews";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const ImageInterceptor = ({ params }: { params: { slug: string } }) => {
  const news = mockNews.filter((news) => news.slug === params.slug)[0];
  if (!news) {
    notFound();
  }

  return<>
    <h1>Intercepted</h1>
    <div className={styles.fullImage}>
      <Image src={news.image} alt={news.title} fill />
    </div>
  </>;
};
export default ImageInterceptor;
