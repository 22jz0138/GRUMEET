import Link from "next/link";
import styles  from './Header.module.css'; 

const Header = () =>{
  return (
    <header className={styles.top_header}>
        <nav className={styles.navigation}> 
          <Link href={'/'}>
            <h1 className={styles.title}>
            Gurumeet
            </h1>
          </Link>
            <ul className={styles.header_ul}>
              <Link href={'/'}>
                <li>Home</li>
              </Link>
                <li><a href="#">Favorite</a></li>
                <li><a href="#">MyPage</a></li>
            </ul>
        </nav>
    </header>
  );
}
  export default Header;