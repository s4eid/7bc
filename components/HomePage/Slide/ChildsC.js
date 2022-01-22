import React from "react";
import { motion } from "framer-motion";
import sliderComment from "./sliderC.module.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ChildsC({ person, direction, page, paginate }) {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    //     exit: (direction) => {
    //       return {
    //         zIndex: 0,
    //         x: direction < 0 ? 1000 : -1000,
    //         opacity: 0,
    //       };
    //     },
  };
  return (
    <motion.div
      className={sliderComment.childs}
      key={page}
      variants={variants}
      custom={direction}
      initial="enter"
      animate="center"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      <div className={sliderComment.slideHolder}>
        <Image
          src={person.link}
          layout="fill"
          loading="lazy"
          placeholder="blur"
          blurDataURL={person.link}
          className={sliderComment.imageItems}
        />
      </div>
    </motion.div>
  );
}
