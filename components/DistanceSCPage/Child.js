import React, { useState } from "react";
import distance from "./distanceSC.module.css";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Child({ text, name }) {
  const [content, setContent] = useState(false);
  return (
    <div className={distance.holder}>
      <div className={distance.topicC}>
        <div className={distance.toggleC} onClick={() => setContent(!content)}>
          <h1 className={distance.subTitle}>{name}</h1>
          <FontAwesomeIcon
            className={distance.icon}
            icon={!content ? faAngleRight : faAngleDown}
          />
        </div>
        {content ? (
          <div className={distance.content}>
            {text.map((t, index) => (
              <p key={index}>{t}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
