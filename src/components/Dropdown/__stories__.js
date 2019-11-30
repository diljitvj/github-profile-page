import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Dropdown from ".";
import "../../styles/common.css";

storiesOf("Components", module).add("Dropdown", () => {
  return (
    <div>
      <Dropdown
        name="Type"
        value="public"
        options={[
          { name: "All", value: "all" },
          { name: "Public", value: "public" }
        ]}
        onChange={action("option changed")}
      />
    </div>
  );
});
