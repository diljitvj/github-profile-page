import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RepositoryDetail from ".";
import "../../styles/common.css";

storiesOf("Fragments|RepositoryDetail", module).add("Basic", () => {
  return (
    <div>
      <RepositoryDetail
        name="repository-name"
        description="🚀✨ Help beginners contribute to open source projects"
        fork
        forks="32,222"
        language="HTML"
        license="MIT License"
        updatedOn={new Date()}
        homepage="forked-from/forked-from"
        url=""
      />
    </div>
  );
});
