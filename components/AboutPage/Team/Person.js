import Image from "next/image";
import React from "react";
import person from "./team.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Person({ p }) {
  return (
    <div className={person.personContainer}>
      <FontAwesomeIcon icon={faUser} className={person.personImage} />
      {/* <Image src={p.img} layout="fixed" height={160} width={150} /> */}
      <p className={person.name}>{p.name}</p>
      <p className={person.job}>{p.job}</p>
    </div>
  );
}
