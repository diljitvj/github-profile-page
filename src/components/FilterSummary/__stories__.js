import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FilterSummary from ".";
import "../../styles/common.css";

storiesOf("Components|FilterSummary", module)
  .add("Only type", () => {
    return (
      <div>
        <FilterSummary
          type="public"
          resultCount={10}
          onClear={action("On Clear")}
        />
      </div>
    );
  })
  .add("Only language", () => {
    return (
      <div>
        <FilterSummary
          language="HTML"
          resultCount={10}
          onClear={action("On Clear")}
        />
      </div>
    );
  })
  .add("Both type & language", () => {
    return (
      <div>
        <FilterSummary
          type="public"
          language="HTML"
          resultCount={10}
          onClear={action("On Clear")}
        />
      </div>
    );
  });
