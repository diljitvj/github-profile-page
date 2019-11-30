import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RepositoryDetail from ".";
import "../../styles/common.css";

storiesOf("Fragments|RepositoryDetail", module).add("Basic", () => {
  const repository = {
    name: "repository-name",
    description: "🚀✨ Help beginners contribute to open source projects",
    fork: true,
    url: "#",
    forks: 32222,
    language: "HTML",
    license: { name: "MIT License" },
    updatedOn: new Date(),
    homepage: "forked-from/forked-from"
  };
  return (
    <div>
      <RepositoryDetail repository={repository} />
    </div>
  );
});
