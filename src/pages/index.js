import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/header/Header';
import styles from '@/styles/Home.module.css';
import Search from '@/components/Search/Search';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <Head>
        <title>グルMEET</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
       
      </Head>
      <Header />
      <main>
        <Image
        src='/KV.jpg'
        layout='fill'
        objectFit='cover'
        className={styles.kv}
        />
        <Search />
      </main>
    </>
  );
};

