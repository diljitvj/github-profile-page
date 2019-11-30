import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Avatar from ".";
import "../../styles/common.css";

storiesOf("Components", module).add("Avatar", () => {
  return (
    <div>
      <Avatar
        imageUrl="https://avatars1.githubusercontent.com/u/7427552?v=4"
        name="Supreet"
      />
    </div>
  );
});
