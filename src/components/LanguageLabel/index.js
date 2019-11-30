import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const languageColorMap = {
  JavaScript: "yellow",
  CSS: "#563d7c",
  HTML: "red"
};

const LanguageLabel = ({ language, className = "" }) =>
  language && (
    <div className={clsx(className, styles.wrapper)}>
      <span
        className={styles.badge}
        style={{
          backgroundColor: languageColorMap[language]
        }}
      ></span>
      <span>{language}</span>
    </div>
  );

LanguageLabel.propTypes = {
  language: PropTypes.string,
  className: PropTypes.string
};

export default LanguageLabel;
