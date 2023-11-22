

import React from 'react';

const Dropdown = ({ onSelectRange }) => {
  const handleRangeChange = (event) => {
    const selectedRange = event.target.value;
    sessionStorage.setItem('selectedRange',selectedRange);
    onSelectRange(selectedRange);
  };

  return (
    <div>
      <label htmlFor="RangeDropdown">距離：</label>
      <select id="RangeDropdown" onChange={handleRangeChange}>
        <option>検索範囲を選択してください</option>
        <option value="1">300m</option>
        <option value="2">500m</option>
        <option value="3">1000m</option>
        <option value="4">2000m</option>
        <option value="5">3000m</option>
      </select>
    </div>
  );
};

export default Dropdown;





// import { useState } from "react";
// import styles from "@/components/dropdown/Dropdown.module.css";

// const Dropdown = () => {
//     const [selectedRange, setselectedRange] = useState('')

//     const range = [
//         { label: '範囲を選択してください', value: '' },
//         { label: '300m', value: 1 },
//         { label: '500m', value: 2 },
//         { label: '1000m', value: 3 },
//         { label: '2000m', value: 4 },
//         { label: '3000m', value: 5 },
//       ];

//       const handleSelect = (e) => {
//         setselectedRange(e.target.value);
//       };

//       return(
//         <div>
//             <select className={styles.dropdown} value={selectedRange} onChange={handleSelect}>
//                 {range.map((option) => (
//                 <option key={option.value} value={option.value}>
//                     {option.label}
//                 </option>
//                 ))}
//             </select>
//         </div>
//       )
// };

// export default Dropdown;