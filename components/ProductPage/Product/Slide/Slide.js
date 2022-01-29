import React, { useState } from "react";
import { carpetImage } from "../../../../data/carpetDetails";

import { AnimatePresence } from "framer-motion";
import slide from "./slide.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrap } from "popmotion";
import ChildsC from "./ChildsC";
export default function SliderC() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, carpetImage.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className={slide.mainContainer}>
        <AnimatePresence
          initial={false}
          className={slide.container}
          custom={direction}
        >
          <ChildsC
            img={carpetImage[imageIndex]}
            direction={direction}
            page={page}
            paginate={paginate}
          />
        </AnimatePresence>
        <FontAwesomeIcon
          className={slide.iconR}
          onClick={() => paginate(1)}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          className={slide.iconL}
          onClick={() => paginate(-1)}
          icon={faChevronLeft}
        />
      </div>
    </>
  );
}
