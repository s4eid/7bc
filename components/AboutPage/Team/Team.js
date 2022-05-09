import React from "react";
import team from "./team.module.css";
import { teamData } from "../../../data/team";
import Person from "./Person";

export default function Team() {
  return (
    <div className={team.container}>
      <h1>Team</h1>
      <div className={team.personHolder}>
        {teamData.map((p, index) => (
          <Person p={p} key={index} />
        ))}
      </div>
    </div>
  );
}
