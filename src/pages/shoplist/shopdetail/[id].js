import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import styles from "@/styles/Home.module.css";

export default function ShopDetail  ()  {
  let router = useRouter();
    const [listdata, setListdata] = useState(null);
    useEffect(() => {
      const exid = router.query.id;
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/detailapi?id=${exid}`);
                const result = await response.json();
                setListdata(result);
            } catch (error) {
                console.error('Error fetching data from server:', error);
            }
        };
        fetchData();
    }, []);

  return (
    <>
        <Head>
            <title>店舗詳細</title>
        </Head>
        <Header/>
        <main>
        {listdata && listdata.results.shop.map((item, i) => (  //＜TODO＞component化
        <> 
          <div key={item.id}>
              <div className={styles.first_view}>
                <div>
                  <span>{item.catch}</span>
                  <h1>{item.name}</h1>
                </div>
                <Image
                  className={styles.fv_image}
                  src={item.photo.pc.l}
                  alt={item.name}
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.detail_area}>
              <h2>店舗詳細</h2>
                <ul className={styles.shopdetail_wrap}>
                  <li className={styles.shopdetail_list}>
                    <h4>営業時間</h4>
                    <p>{item.open}</p>
                  </li>
                  <li className={styles.shopdetail_list}>
                    <h4>定休日</h4>
                    <p>{item.close}</p>
                  </li>
                  <li className={styles.shopdetail_list}>
                    <h4>住所</h4>
                    <p>{item.address}</p>
                  </li>
                  <li className={styles.shopdetail_list}>
                    <h4>お店のジャンル</h4>
                    <p>{item.genre.name}</p>
                  </li>
                  <li className={styles.shopdetail_list}>
                    <h4>価格帯</h4>
                    <p>{item.budget.name}</p>
                  </li>
                </ul>
              </div>
          </div>
          <div>
          {/* ＜TODO＞component化 */}
            <ul className={styles.topic_wrap}>
              <li className={styles.topic_li}>
                <p>飲み放題</p>
                <Image
                className={styles.topic_img}
                src='/drink.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.free_drink}</p>
              </li>
              <li className={styles.topic_li}>
               <p>食べ放題</p>
                <Image
                className={styles.topic_img}
                src='/food.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.free_food}</p>
              </li>
              <li className={styles.topic_li}>
               <p>個室</p>
                <Image
                className={styles.topic_img}
                src='/Room.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.private_room}</p>
              </li>
              <li className={styles.topic_li}>
               <p>駐車場</p>
                <Image
                className={styles.topic_img}
                src='/Parking.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.parking}</p>
              </li>
              <li className={styles.topic_li}>
                <p>バリアフリー環境</p>
                <Image
                className={styles.topic_img}
                src='/barrier_free.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.barrier_free}</p></li>
              <li className={styles.topic_li}>
               <p>Wi-Fi</p>
                <Image
                className={styles.topic_img}
                src='/WIFI.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.wifi}</p>
              </li>
              <li className={styles.topic_li}>
               <p>喫煙/禁煙</p>
                <Image
                className={styles.topic_img}
                src='/Nosmoking.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.non_smoking}</p>
              </li>
              <li className={styles.topic_li}>
               <p>カード利用</p>
                <Image
                className={styles.topic_img}
                src='/card.jpg'
                alt={item.name}
                width={200}
                height={200}
                />
                <p>{item.card}</p>
              </li>
            </ul>
          </div>
          </>
        ))}
      </main>
       <Footer/>
    </>
  );
};