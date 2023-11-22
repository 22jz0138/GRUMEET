import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Header from '@/components/header/Header';
import Head from 'next/head';
import styles from "@/styles/Home.module.css";
import Image from 'next/image';


export default function ShopDetail  ()  {
  let router = useRouter();
    const [data, setData] = useState(null);

    useEffect(() => {
      console.log(router);
      const exid = router.query.id;
      console.log(router.query);

        
      
        // サーバーサイドのAPIエンドポイントに非同期リクエストを送信
        const fetchData = async () => {
            try {
                // APIエンドポイントへのリクエスト
                const response = await fetch(`/api/detailapi?id=${exid}`);
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
        // console.log(res);
    }, []); // 空の依存配列で一度だけ実行



  return (
    <>
        <Head>
            <title>店舗詳細</title>
            <link rel="icon" href="/favicon.png" />
            <link  href="https://fonts.googleapis.com/css2?family=Monomaniac+One&display=swap" />
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&family=Monomaniac+One&family=Noto+Sans+JP:wght@200&display=swap" rel="stylesheet"/> 
        </Head>
        <Header/>
        <main>
          {/* todo component化 */}
          <div>
            <div>
              <section>
                <span></span>
                <h1></h1>
              {/* todo component化 */}
          <section>
            <h2></h2>
          </section>





              </section>

            </div>
          </div>
          
          {/* todo component化 */}
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <button></button>

          <footer>
            {/* こぴーらいと */}
          </footer>

        {/* <ul>
        {data && data.results.shop.map((item, i) => (
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
              ))}
            </ul>  */}
            </main>      
    </>
  );
};

