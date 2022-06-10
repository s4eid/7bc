import React, { useState, useRef, useEffect } from "react";
import ourProducts from "./ourProducts.module.css";
import Product from "./Product";
import { motion } from "framer-motion";
export default function OurProducts({ products }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className={ourProducts.container}>
      <div className={ourProducts.mainContainer}>
        <h1 id="discover" className={ourProducts.title}>
          Popular
        </h1>
      </div>
      <div className={ourProducts.carpetMainContainer}>
        <motion.div ref={carousel} className={ourProducts.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={ourProducts.innerCarousel}
          >
            {products.map((p, index) => (
              <motion.div className={ourProducts.item}>
                <Product c={p} key={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* <button
        className={ourCarpets.more}
        onClick={() => router.push("/carpets")}
      >
        More
      </button> */}
    </div>
  );
}
