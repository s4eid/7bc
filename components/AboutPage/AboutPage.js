import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import React from "react";
import about from "./about.module.css";
import Story from "./Story/Story";
import Team from "./Team/Team";

export default function AboutPage() {
  return (
    <div className={about.mainContainer}>
      <div className={about.heroC}>
        <div className={about.titleContainer}>
          <h1 className={about.titleSub}>We Will Make Your Place Royal</h1>
          <h1 className={about.title}>Seven Brothers Collection</h1>
          <div className={about.sosial}>
            <Image
              src={"/rugOptimize.png"}
              layout="fixed"
              height={70}
              width={70}
            />
          </div>
        </div>
        <div className={about.heroContainer}>
          <Image
            src="https://images.unsplash.com/photo-1638310533874-6c124c012e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            layout="fill"
            className={about.heroImage}
          />
        </div>
      </div>
      <Story />
      <Team />
    </div>
  );
}
