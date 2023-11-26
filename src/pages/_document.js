import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <link  href="https://fonts.googleapis.com/css2?family=Monomaniac+One&display=swap" /> 
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&family=Monomaniac+One&family=Noto+Sans+JP:wght@200&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
