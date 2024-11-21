
import styles from './Header.module.css'
import NavLink from "../NavLink/NavLink";
const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink
            href="/"
            name="Home"
          />

        </li>
        <li>
        <NavLink
            href="/news"
            name="News"
          />
        </li>
        <li>
        <NavLink
            href="/archive"
            name="Archive"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
