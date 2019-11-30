import React from "react";
import { Spin } from "antd";
import styles from "./style.module.css";

export default ({ show }) =>
  show ? (
    <div className={styles.containerLoader} onClick={e => e.stopPropagation}>
      <Spin />
    </div>
  ) : (
    <div></div>
  );
