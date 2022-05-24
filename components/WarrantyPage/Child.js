import React, { useState } from "react";
import warranty from "./warranty.module.css";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Child({ text, name }) {
  const [content, setContent] = useState(false);
  return (
    <div className={warranty.holder}>
      <div className={warranty.topicC}>
        <div className={warranty.toggleC} onClick={() => setContent(!content)}>
          <h1 className={warranty.subTitle}>{name}</h1>
          <FontAwesomeIcon
            className={warranty.icon}
            icon={!content ? faAngleRight : faAngleDown}
          />
        </div>
        {content ? (
          <div className={warranty.content}>
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
