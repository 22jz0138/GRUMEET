import { useState } from 'react';
import Link from 'next/link';
import styles from "@/components/Search/Search.module.css";
import Dropdown from '../dropdown/Dropdown';
import Creditmark from '../creditmark/Creditmark';


function Search  ()  {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [enablelocation, setEnablelocation] = useState(false)

  const successCallback = (position) => {
    const newLatitude = position.coords.latitude;
    const newLongitude = position.coords.longitude;
    setLatitude(newLatitude);
    setLongitude(newLongitude);
    setEnablelocation(true);
  };

  const errorCallback = (error) => {
    alert("位置情報が取得できませんでした");
  };

  const handleRangeSelect = (selectedRange) => {
    setSelectedRange(selectedRange);
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    sessionStorage.setItem('lat',latitude);
    sessionStorage.setItem('lng',longitude);
  };

  return (
    <div className={styles.kv}>
      <div className={styles.search_area}>
        <div className={styles.search_area_children}>
          <h2>近くのお店を探そう！</h2>
        </div>
        {/* <div className={styles.search_area_children}>  //TODO component化
          <h4>キーワードで検索</h4>
        </div>
        <div className={styles.search_area_children}>
          <Searchbox/>
        </div> */}
        <div className={styles.search_area_children}>
          <h4>距離で検索</h4>
        </div>
        <div className={styles.search_area_children}>
          {/* onSelectRange プロパティを追加 */}
          <Dropdown onSelectRange={handleRangeSelect} />
        </div>
        <div className={styles.search_area_children}>
          {/* 現在位置の取得をトリガーにした検索はここで行う */}
          <p className={styles.warning} style={{display: !enablelocation ?"":"none"}}>位置情報の取得を有効にしてください</p>
          <Link href="/shoplist/shoplistpage">
            <button id="btn" onClick={handleClick} disabled={!enablelocation}>
              <p>検索開始！！</p>
            </button>
          </Link>
        </div>
        <div className={styles.search_area_children}>
          <Creditmark/>
        </div>
      </div>
    </div>
  );
};

export default Search;