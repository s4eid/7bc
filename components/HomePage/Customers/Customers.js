import React, { useState, useEffect, useRef } from "react";
import customers from "./customers.module.css";
import { customersImages } from "../../../data/customers";
import { motion } from "framer-motion";
export default function Customers() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className={customers.container}>
      <div className={customers.mainContainer}>
        <h1 className={customers.title}>Projects</h1>
      </div>
      <div className={customers.customersMainContainer}>
        <motion.div ref={carousel} className={customers.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={customers.innerCarousel}
          >
            {customersImages.map((c, index) => (
              <motion.div className={customers.item}>
                <img
                  src={c}
                  key={index}
                  alt="projects"
                  // layout="responsive"
                  // height={350}
                  // width={300}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <button
        className={customers.more}
        //       onClick={() => router.push("/")}
      >
        More
      </button>
    </div>
  );
}
