import Header from "@/components/header/Header";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


// ShopListpage コンポーネントの定義
export default function ShopListpage({ result }) {
    // state の初期化
    const [data, setData] = useState(null);

    // useEffect フックの使用
    useEffect(() => {
        // クライアントサイドでセッションストレージから値を取得
        const lat = sessionStorage.getItem('lat');
        const lng = sessionStorage.getItem('lng');
        const range = sessionStorage.getItem('selectedRange');
        // サーバーサイドのAPIエンドポイントに非同期リクエストを送信
        const fetchData = async () => {
            try {
                // APIエンドポイントへのリクエスト
                const response = await fetch(`/api/hotapi?lat=${lat}&lng=${lng}&range=${range}`);
                // レスポンスの JSON データの取得
                const result = await response.json();
                // 取得したデータを state にセット
                setData(result);
            } catch (error) {
                // エラーハンドリング: サーバーサイドからのデータ取得エラー
                console.error('Error fetching data from server:', error);
            }
        };
        fetchData();// fetchData 関数の実行
    }, []); // 空の依存配列で一度だけ実行




    return(
        <>
          <Head>
            <title>近隣店舗一覧</title>
            <link rel="icon" href="/favicon.png" />
            <link  href="https://fonts.googleapis.com/css2?family=Monomaniac+One&display=swap" />
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&family=Monomaniac+One&family=Noto+Sans+JP:wght@200&display=swap" rel="stylesheet"/> 
          </Head>
          <Header />
          <main className={styles.main_area}>
            <ul>
              {data && data.results.shop.map((item, i) => (
                // <Link href={`shopdetail/[id]?id=${item.id}`}>
                <Link href={{pathname: `shopdetail/shop`, query: {id:item.id}}}>
                  <li key={i} className={styles.shop}>
                  <div className={styles.leftSide}>
                      <Image
                        src={item.photo.pc.m}
                        alt={item.name}
                        width={168}
                        height={168}
                      />
                  </div>
                  <div className={styles.rightSide}>
                    <div className={styles.catch}>{item.catch}</div>
                    <h3 className={styles.name}>
                      <a href={item.urls.pc}>{item.name}</a>
                    </h3>
                    <div className={styles.address}>
                      <span className={styles.bold}>住所：</span>
                      {item.address}
                    </div>
                    <div className={styles.open}>
                      <span className={styles.bold}>営業時間：</span>
                      {item.open}
                    </div>
                    <small>SHOPID:{item.id}</small>
                  </div>  
                </li>
                </Link>
              ))}
            </ul>       
          </main>
        </>
    )
  }