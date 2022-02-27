import React from "react";
import { motion } from "framer-motion";
import slide from "./slide.module.css";
import Image from "next/image";
export default function ChildsC({ img, direction, page }) {
  return (
    <motion.div
      className={slide.childs}
      key={page}
      custom={direction}
      initial="enter"
      animate="center"
    >
      <div className={slide.slideHolder}>
        <Image layout="fill" src={img} className={slide.slideZoom} />
      </div>
    </motion.div>
  );
}
