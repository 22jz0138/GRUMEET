import Header from "@/components/header/Header";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import ShopPagination from "@/components/ShopPagination/ShopPagination";


export default function ShopListpage() {
    const [shopsdata, setShopsdata] = useState(null);
    const [start, setStart] = useState();

    useEffect(() => {
        const lat = sessionStorage.getItem('lat');
        const lng = sessionStorage.getItem('lng');
        const range = sessionStorage.getItem('selectedRange');
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/hotapi?lat=${lat}&lng=${lng}&range=${range}&start=${start}`);
                const result = await response.json();
                setShopsdata(result);
            } catch (error) {
                console.error('Error fetching data from server:', error);
            }
        };
        fetchData();
    }, [start]); 
    
    const handleChildStartChange = (value) => {
      const changeValue = (value - 1) * 10 + 1; 
      setStart(changeValue);
    }

    return(
        <>
          <Head>
            <title>近隣店舗一覧</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <main className={styles.main_area}>
            <ul>
              {shopsdata && shopsdata.results.shop.map((item) => ( //＜TODO＞　component化
                <Link key={item.id} href={{pathname: `shopdetail/[id]`, query: {id:item.id}}}>
                  <li  className={styles.shop}>
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
                      <p>{item.name}</p>
                    </h3>
                    <div className={styles.address}>
                      <span className={styles.bold}>住所：</span>
                      {item.address}
                    </div>
                    <div className={styles.open}>
                      <span className={styles.bold}>営業時間：</span>
                      {item.open}
                    </div>
                  </div>  
                </li>
                </Link>
              ))}
            </ul>
            <ShopPagination
              shopdata = {shopsdata}
              onvalue = {handleChildStartChange}
            />
          </main>
          <Footer/>
        </>
    )
  }