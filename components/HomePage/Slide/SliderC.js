import React, { useState } from "react";
import { slideItems } from "../../../data/heroSlide";
import { AnimatePresence } from "framer-motion";
import sliderComment from "./sliderC.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrap } from "popmotion";
import ChildsC from "./ChildsC";
export default function SliderC() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, slideItems.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className={sliderComment.mainContainer}>
        <AnimatePresence
          initial={false}
          className={sliderComment.container}
          custom={direction}
        >
          <ChildsC
            person={slideItems[imageIndex]}
            direction={direction}
            page={page}
            paginate={paginate}
          />
        </AnimatePresence>
        <FontAwesomeIcon
          className={sliderComment.iconR}
          onClick={() => paginate(1)}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          className={sliderComment.iconL}
          onClick={() => paginate(-1)}
          icon={faChevronLeft}
        />
      </div>
    </>
  );
}
