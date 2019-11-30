import clsx from "clsx";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ClearIcon } from "../../icons";

import styles from "./style.module.css";

const FilterSummary = ({ resultCount, type, language, onClear = () => {} }) => (
  <div className={styles.wrapper}>
    <div className={styles.summarytext}>
      <b>{resultCount}</b> result(s) for <b>{type || ""}</b> repositories{" "}
      {language && (
        <Fragment>
          written in <b>language</b>
        </Fragment>
      )}
    </div>
    <span className={styles.clearbutton} onClick={onClear}>
      <ClearIcon className={styles.icon} />
      <span> Clear Filter</span>
    </span>
  </div>
);

FilterSummary.propTypes = {};

export default FilterSummary;