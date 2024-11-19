import { getNewsYear } from "@/app/lib/news";
import Link from "next/link";
import styles from './page.module.css';

const ArchivePage = () =>{
    const years = getNewsYear()
    return <header id="year-header" className={styles.yearsHeader}>
        <ul>
            {
                years.map((year)=><li key={year}>
                    <Link href={`/archive/${year}`}>{year}</Link>
                </li>)
            }
        </ul>
    </header>
}

export default ArchivePage;