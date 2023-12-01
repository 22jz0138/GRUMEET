## 日本語

# GRUMEET  

#　GRUMEETとは?
GURUMEET は若い世代や、障害を持つ方々をターゲットとした飲食店検索アプリです。
# DEMO
下記画像がトップページになる検索画面です
この画面では現在位置からの距離（半径）を選択し検索ボタンを押下します

<img width="1128" alt="GRUMEET_1" src="https://github.com/22jz0138/GRUMEET/assets/146900702/ad5a7738-49cc-4551-ba19-888f2ba80d01">

ブラウザで位置情報の取得の許可をしてください

<img width="1128" alt="GRUMEET_2" src="https://github.com/22jz0138/GRUMEET/assets/146900702/48b33a9c-4159-4bbc-893e-163f3d2ad01b">

検索ボタンを押すと選択した距離の範囲にある飲食店が一覧形式で表示されます

<img width="1128" alt="GRUMEET_3" src="https://github.com/22jz0138/GRUMEET/assets/146900702/16470b4f-2923-4e3b-b5b2-e6f509c70874">

一つの店舗をクリックすると、選択した店舗の詳細内容が表示されます。

<img width="1128" alt="GRUMEET_4" src="https://github.com/22jz0138/GRUMEET/assets/146900702/e20767aa-e1f0-4463-b72f-da6cbd835b4c">


下にスクロールすると、詳細情報とともに
ピックアップ項目があり、そのお店のサービスや環境が一目でわかるようになっています

<img width="1128" alt="GRUMEET_5" src="https://github.com/22jz0138/GRUMEET/assets/146900702/a69433d3-4e20-4ac9-b0e1-3757d91ffefa">


#  特徴
GRUMEETは他の飲食店検索アプリとはことなり。
サービスや環境の案内にこだわっています。
GRUMEETは、「施設の設備や環境、サービスが分からないから、外食に行くのが億劫」という方にオススメです。

# 実行環境・使用技術

- ホットペッパーグルメサーチAPI
- google font API
- Node.js v18.18.0
- Geolocation API
- React	  18.2.0
- Next.js 14.0.2
- Material UI 5.14.18

## 動作確認済みブラウザ
Microsoft Edge
バージョン 119.0.2151.72 

Google Chrome
バージョン: 119.0.6045.160
動作確認済み
### 動作対象OS
Windows11 バージョン22H2 

# APIs

- HotPepper Gourmet Search API:https://webservice.recruit.co.jp/doc/hotpepper/guideline.html
- google font API:https://developers.google.com/fonts?hl=ja
- Geolocation API:https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API

# Usage
ルートディレクトリに.envファイルを作成
上記ファイルに
API_KEY = **************
「*****」にはあなたが取得したAPI_KEYを入力してください

APIKEY は下記URLから取得してください
https://webservice.recruit.co.jp/register

# Author

 日本電子専門学校
 高度情報処理科
 二宮 


## English（Translation）

# GRUMEET  

# What is GRUMEET?
GURUMEET is a restaurant search application targeting the younger generation and people with disabilities.

# DEMO
Here is the search screen.
On this screen, you can select the distance
Search for restaurants within a specified distance from your current location
<img width="1128" alt="GRUMEET_1" src="https://github.com/22jz0138/GRUMEET/assets/146900702/ee658582-c466-45d7-8f3e-815e8cf0941a">

After specifying the distance, press the search button.
you will be redirected to the store list page.
<img width="1128" alt="GRUMEET_3" src="https://github.com/22jz0138/GRUMEET/assets/146900702/7c9d1d48-0d71-4274-b117-b068edce71cd">

Click on a store displayed to see detailed information about that store.
<img width="1128" alt="GRUMEET_4" src="https://github.com/22jz0138/GRUMEET/assets/146900702/69dd6a1b-5b68-430f-a5cb-f317b6519c1c">

Scroll down for basic information about the restaurant and
services and environment at a glance.
<img width="1128" alt="GRUMEET_5" src="https://github.com/22jz0138/GRUMEET/assets/146900702/75373b0f-9b62-4bca-a272-e07569055843">

# Features
GRUMEET is different from other search applications.
It was created with a focus on service and environment, so
We recommend GRUMEET to those who are too lazy to go out to eat because they don't know the facilities, environment, and services of the facility.

# Requirement

- HotPepper Gourmet Search API:https://webservice.recruit.co.jp/doc/hotpepper/guideline.html
- google font API:https://developers.google.com/fonts?hl=ja
- Geolocation API:https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API
- React	  18.2.0 :https://ja.react.dev/learn/installation
- Next.js 14.0.2 : https://nextjs-ja-translation-docs.vercel.app/docs/getting-started
- Material UI 5.14.18 :https://mui.com/material-ui/getting-started/installation/

# Usage
First, create an .env file in the root directory.
After that,　
API_KEY = ＊＊＊＊＊＊＊＊
and type
//* is your API KEY

APIKEY can be obtained from the following URL
https://webservice.recruit.co.jp/register

# Author

 Japan Electronics College
 Department of Advanced Information Processing
 By Ninomiya
