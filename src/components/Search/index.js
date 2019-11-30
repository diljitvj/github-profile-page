import clsx from "clsx";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const Search = ({
  onChange = () => {},
  placeholder,
  value = "",
  fullWidth = false,
  className = ""
}) => (
  <input
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    className={clsx(styles.input, className, {
      [styles.fullwidth]: fullWidth
    })}
  />
);

Search.propTypes = {
  fullWidth: PropTypes.bool
};

export default Search;
