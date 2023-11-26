

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
