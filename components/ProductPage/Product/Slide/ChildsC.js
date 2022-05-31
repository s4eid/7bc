import React, { useState } from "react";
import { motion } from "framer-motion";
import slide from "./slide.module.css";
import Image from "next/image";
import ShowImage from "../../../../Modals/ShowImage/ShowImage";
export default function ChildsC({ img, direction, page, paginate }) {
  const [openM, setOpenM] = useState(null);
  return (
    <motion.div
      className={slide.childs}
      key={page}
      custom={direction}
      initial="enter"
      animate="center"
    >
      <div className={slide.slideHolder}>
        <Image
          onClick={() => setOpenM(img)}
          layout="fill"
          src={img}
          alt="product_image"
          className={slide.slideZoom}
        />
      </div>
      {openM && (
        <ShowImage setOpenM={setOpenM} paginate={paginate} openM={img} />
      )}
    </motion.div>
  );
}
