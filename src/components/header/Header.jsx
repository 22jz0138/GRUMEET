import Link from "next/link";
import styles  from './Header.module.css'; 

//ヘッダーcomponentの作成　将来的にアカウント登録機能を目指す

const Header = () =>{
  return (
    <header className={styles.top_header}>
        <nav className={styles.navigation}> 
          <Link href={'/'}>
            <h1 className={styles.title}>
            Grumeet
            </h1>
          </Link>
            <ul className={styles.header_ul}>
              <Link href={'/'}>
                <li>Home</li>
              </Link>                     {/* TODO ログイン機能の追加 お気に入り機能の追加 */}
                <li><a href="#">Favorite</a></li>   
                <li><a href="#">MyPage</a></li>   
            </ul>
        </nav>
    </header>
  );
}
  export default Header;