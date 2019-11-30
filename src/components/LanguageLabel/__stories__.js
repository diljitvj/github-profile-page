import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import LanguageLabel from ".";
import "../../styles/common.css";

storiesOf("Components|LanguageLabel", module)
  .add("HTML", () => {
    return (
      <div>
        <LanguageLabel language="HTML" />
      </div>
    );
  })
  .add("JavaScript", () => {
    return (
      <div>
        <LanguageLabel language="JavaScript" />
      </div>
    );
  })
  .add("CSS", () => {
    return (
      <div>
        <LanguageLabel language="CSS" />
      </div>
    );
  });
