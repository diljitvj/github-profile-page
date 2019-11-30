import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

import { LanguageLabel, IconLabel } from "../../components";
import { LicenseIcon, ForkIcon } from "../../icons";
import styles from "./style.module.css";

const RepositoryDetail = ({
  url,
  name,
  fork,
  forks,
  license,
  homepage,
  language,
  updatedOn,
  description
}) => (
  <div className={styles.wrapper}>
    <h3 className={styles.reponame}>
      <a href={url}>{name}</a>
    </h3>
    {fork && <div className={styles.forkdetail}>forked from {homepage}</div>}
    {description && <div className={styles.description}>{description}</div>}
    <div className={styles.parameters}>
      {language && (
        <LanguageLabel className={styles.paramater} language={language} />
      )}
      {forks && (
        <IconLabel className={styles.paramater} label={forks} Icon={ForkIcon} />
      )}
      {license && (
        <IconLabel
          className={styles.paramater}
          label={license}
          Icon={LicenseIcon}
        />
      )}
      <div className={styles.paramater}>
        Updated on {moment(updatedOn).format("DD MMM YYYY")}
      </div>
    </div>
  </div>
);

RepositoryDetail.propTypes = {};

export default RepositoryDetail;
