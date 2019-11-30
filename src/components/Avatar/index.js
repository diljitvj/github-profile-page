import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const Avatar = ({ name, imageUrl }) => (
  <img className={styles.avatar} src={imageUrl} alt={name} />
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default Avatar;
