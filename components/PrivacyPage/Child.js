import React, { useState } from "react";
import privacy from "./privacy.module.css";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Child({ text, name }) {
  const [content, setContent] = useState(false);
  return (
    <div className={privacy.holder}>
      <div className={privacy.topicC}>
        <div className={privacy.toggleC} onClick={() => setContent(!content)}>
          <h1 className={privacy.subTitle}>{name}</h1>
          <FontAwesomeIcon
            className={privacy.icon}
            icon={!content ? faAngleRight : faAngleDown}
          />
        </div>
        {content ? (
          <div className={privacy.content}>
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
