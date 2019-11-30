import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ProfileDetails from ".";
import "../../styles/common.css";

storiesOf("Fragments|ProfileDetails", module).add("Basic", () => {
  const profile = {
    login: "supreetsingh247",
    avatarUrl: "https://avatars1.githubusercontent.com/u/7427552?v=4",
    name: "Supreet Singh",
    company: "Target Corporation",
    location: "India",
    email: null,
    bio: "Front end developer since 1.5 years"
  };
  return (
    <div style={{ width: "260px" }}>
      <ProfileDetails profile={profile} />
    </div>
  );
});
