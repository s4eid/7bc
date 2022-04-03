import React from "react";
import filter from "./filter.module.css";
export default function Filter({ index }) {
  return (
    <div className={filter.mainContainer}>
      <div className={filter.selectContainer}>
        <select name="price" id="price">
          <option value="" selected disabled hidden>
            Price
          </option>
          <option value="high_to_low">High To Low</option>
          <option value="low_to_high">Low To High</option>
          {/* <option value="papularity">Papularity</option> */}
        </select>
        <select name="origin" id="origin">
          <option value="" selected disabled hidden>
            Origin
          </option>
          <option value="Turkey">Turkey</option>
          <option value="Iran">Iran</option>
          <option value="Afghan">Afghan</option>
        </select>
        <select name="size" id="size">
          <option value="" selected disabled hidden>
            Size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className={filter.info}>
        <p>Pieces:{index}</p>
      </div>
    </div>
  );
}
