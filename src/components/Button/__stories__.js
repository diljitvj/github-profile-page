import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from ".";
import "../../styles/common.css";

storiesOf("Components|Button", module)
  .add("Primary", () => {
    return (
      <div>
        <Button type="primary" onClick={action("clicked")}>
          Button
        </Button>
      </div>
    );
  })
  .add("Secondary", () => {
    return (
      <div>
        <Button type="secondary" onClick={action("clicked")}>
          Button
        </Button>
      </div>
    );
  })
  .add("Full Width", () => {
    return (
      <div>
        <Button type="secondary" fullWidth onClick={action("clicked")}>
          Button
        </Button>
      </div>
    );
  });
