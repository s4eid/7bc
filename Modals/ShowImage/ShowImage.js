import React from "react";
import showImage from "./showImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function ShowImage({ openM, setOpenM, paginate }) {
  if (!openM) return null;
  return (
    <div className={showImage.overlay}>
      <div className={showImage.mainContainer}>
        <div className={showImage.container}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setOpenM(!openM)}
            className={showImage.close}
          />
          <Image src={openM} layout="fill" />
        </div>
        <FontAwesomeIcon
          className={showImage.iconR}
          onClick={() => paginate(1)}
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          className={showImage.iconL}
          onClick={() => paginate(-1)}
          icon={faChevronLeft}
        />
      </div>
    </div>
  );
}
