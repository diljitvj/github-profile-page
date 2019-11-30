import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ForkIcon, LicenseIcon } from "../../icons";

import IconLabel from ".";
import "../../styles/common.css";

storiesOf("Components|IconLabel", module)
  .add("Forks", () => {
    return (
      <div>
        <IconLabel Icon={ForkIcon} label="23,345" />
      </div>
    );
  })
  .add("Licence", () => {
    return (
      <div>
        <IconLabel Icon={LicenseIcon} label="MIT License" />
      </div>
    );
  });
