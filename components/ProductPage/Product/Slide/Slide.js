import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";
import slide from "./slide.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrap } from "popmotion";
import ChildsC from "./ChildsC";
export default function SliderC({ imgs }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, imgs.length, page);
  const indexOfImage = imgs.length;
  const currentIndex = imageIndex + 1;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className={slide.mainContainer}>
        <div className={slide.pageInfo}>
          <p>{currentIndex}/</p>
          <p>{indexOfImage}</p>
        </div>
        <AnimatePresence
          initial={false}
          className={slide.container}
          custom={direction}
        >
          <ChildsC
            img={imgs[imageIndex]}
            direction={direction}
            imageIndex={imageIndex}
            page={page}
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
