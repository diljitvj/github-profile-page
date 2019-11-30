import clsx from "clsx";
import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import { DownCaretIcon } from "../../icons";

const Dropdown = ({
  name = "",
  value,
  options = [],
  onChange = () => {},
  className = ""
}) => {
  //States
  const [open, setOpen] = useState(false);

  //Functions
  const getSelectedName = () => {
    return options.find(o => o.value === value).name || "";
  };

  const handleOptionChange = newValue => {
    onChange(newValue);
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
      <div className={clsx(styles.wrapper, className)}>
        <span
          className={clsx(styles.button, {
            [styles.open]: open
          })}
          onClick={setOpen.bind(null, !open)}
        >
          <i>{name}</i>: {getSelectedName()}{" "}
          <span className={styles.dropdowncaret} />
        </span>
        {open && (
          <div className={styles.optionswrapper}>
            <div className={styles.optionsheader}>Select {name}</div>
            <div className={styles.optionslist}>
              {options.map(option => (
                <div
                  className={clsx(styles.option, {
                    [styles.selected]: value === option.value
                  })}
                  key={option.value}
                  onClick={() => handleOptionChange(option.value)}
                >
                  <DownCaretIcon className={styles.tick} />
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
  options: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Dropdown;
