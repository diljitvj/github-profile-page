import clsx from "clsx";
import React from "react";

import styles from "./style.module.css";

const IconLabel = ({ Icon, label, className = "" }) =>
  label && (
    <div className={clsx(className, styles.wrapper)}>
      <Icon className={styles.icon} />
      <span>{label}</span>
    </div>
  );

export default IconLabel;
