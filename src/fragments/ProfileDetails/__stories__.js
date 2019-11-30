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
    blog: "",
    location: "India",
    email: null,
    hireable: null,
    bio: "Front end developer since 1.5 years",
    created_at: "2014-04-28T09:44:57Z",
    updated_at: "2019-06-21T13:24:31Z"
  };
  return (
    <div style={{ width: "260px" }}>
      <ProfileDetails profile={profile} />
    </div>
  );
});
