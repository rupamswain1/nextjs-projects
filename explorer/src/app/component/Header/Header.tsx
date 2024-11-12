import Link from "next/link";
import styles from './Header.module.css'
const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href="/" className={styles.headerLink+" font-lg"}>Home</Link>
        </li>
        <li>
          <Link href="/news" className={styles.headerLink+" font-lg"}>News</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
