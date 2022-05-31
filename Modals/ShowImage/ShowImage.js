import React, { useState } from "react";
import showImage from "./showImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Image from "next/image";
export default function ShowImage({ openM, setOpenM }) {
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
      </div>
    </div>
  );
}
