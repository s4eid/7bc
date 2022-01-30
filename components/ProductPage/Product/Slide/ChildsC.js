import React from "react";
import { motion } from "framer-motion";
import slide from "./slide.module.css";
import { Magnifier } from "react-image-magnifiers";

export default function ChildsC({ img, direction, page }) {
  return (
    <motion.div
      className={slide.childs}
      key={page}
      custom={direction}
      initial="enter"
      animate="center"
      // drag="none"
      // dragConstraints={{ left: 0, right: 0 }}
      // dragElastic={1}
      // onDragEnd={(e, { offset, velocity }) => {
      //   const swipe = swipePower(offset.x, velocity.x);

      //   if (swipe < -swipeConfidenceThreshold) {
      //     paginate(1);
      //   } else if (swipe > swipeConfidenceThreshold) {
      //     paginate(-1);
      //   }
      // }}
    >
      <div className={slide.slideHolder}>
        <Magnifier imageSrc={img} className={slide.slideZoom} />
      </div>
    </motion.div>
  );
}
