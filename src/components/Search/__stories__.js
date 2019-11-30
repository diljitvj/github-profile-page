import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { debounce } from "lodash";
import Search from ".";
import "../../styles/common.css";

storiesOf("Components|Search", module)
  .add("Full width", () => {
    return (
      <div>
        <Search
          fullWidth
          placeholder="Search repository"
          onChange={debounce(action("on change"), 300)}
        />
      </div>
    );
  })
  .add("Normal", () => {
    return (
      <div>
        <Search
          placeholder="Search repository"
          onChange={debounce(action("on change"), 300)}
        />
      </div>
    );
  });
