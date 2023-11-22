import Link from "next/link";
import styles  from './Header.module.css'; 
import Image from "next/image";
//リンクで



function Header(){
  return (
    <header className={styles.top_header}>
        <nav className={styles.navigation}> 
            <h1 className={styles.title}>
            <a>Gurumeet</a>
            </h1>
            <ul className={styles.header_ul}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}
  export default Header;