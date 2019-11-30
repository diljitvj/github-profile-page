import clsx from "clsx";
import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";

const Dropdown = ({ name = "", value, options = [], onChange = () => {} }) => {
  //States
  const [open, setOpen] = useState(false);

  //Functions
  const getSelectedName = () => {
    return options.find(o => o.value === value).name || "";
  };

  const handleOptionChange = option => {
    onChange(option);
    setOpen(false);
  };

  return (
    <Fragment>
      <div
        className={clsx(styles.backdrop, {
          [styles.show]: open
        })}
        onClick={setOpen.bind(null, false)}
      />
      <div className={styles.wrapper}>
        <span className={styles.button} onClick={setOpen.bind(null, !open)}>
          <i>{name}</i>: {getSelectedName()}{" "}
          <span className={styles.dropdowncaret} />
        </span>
        {open && (
          <div className={styles.optionswrapper}>
            <div className={styles.optionsheader}>Select type</div>
            <div className={styles.optionslist}>
              {options.map(option => (
                <div
                  className={clsx(styles.option, {
                    [styles.selected]: value === option.value
                  })}
                  onClick={() => handleOptionChange(option)}
                >
                  <svg
                    className={styles.tick}
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="12"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
                    ></path>
                  </svg>
                  {option.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

export default Dropdown;
