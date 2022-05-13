import React from "react";
import addBasket from "./addBasket.module.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CartP from "./CartP";
import { useRouter } from "next/router";

export default function AddBasket({ setOpen, open }) {
  if (!open) return null;
  const { product } = useSelector((d) => d);
  const router = useRouter();
  return (
    <div className={addBasket.overlay}>
      <motion.div
        initial={{
          x: "100vw",
          //   opacity: 0,
        }}
        animate={{
          x: "50vw",
          //   opacity: 1,
          //   scale: 1.5,
        }}
        // transition={{ type: "spring", stiffness: 100 }}
        className={addBasket.mainContainer}
      >
        <div className={addBasket.cartItemC}>
          {product.cartItems.map((p, index) => (
            <CartP key={index} p={p} />
          ))}
        </div>
        <div className={addBasket.buttonContainer}>
          <button className={addBasket.closeBtn} onClick={() => setOpen(false)}>
            Close
          </button>
          <button
            className={addBasket.cartBtn}
            onClick={() => router.push("/basket")}
          >
            Go To Cart
          </button>
        </div>
      </motion.div>
    </div>
  );
}
