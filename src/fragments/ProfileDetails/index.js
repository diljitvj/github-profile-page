import React from "react";

import styles from "./style.module.css";
import { Avatar, Button, IconLabel, ComponentLoader } from "../../components";
import { MailIcon, LocationIcon, OrganizationIcon } from "../../icons";

const ProfileDetails = ({ profile, loading }) => {
  if (loading) return <ComponentLoader show />;
  const { avatarUrl, name, company, location, login, email, bio } = profile;

  return (
    <div>
      <Avatar imageUrl={avatarUrl} name={name} />
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.login}>{login}</div>
      </div>
      <div className={styles.biowrapper}>
        <div className={styles.bio}>{bio}</div>
        <div className={styles.buttonwrapper}>
          <Button type="secondary" fullWidth>
            Edit Bio
          </Button>
        </div>
      </div>
      <div className={styles.detailswrapper}>
        <div>
          <IconLabel Icon={OrganizationIcon} label={company} />
        </div>
        <div>
          <IconLabel Icon={LocationIcon} label={location} />
        </div>
        <div>
          <IconLabel Icon={MailIcon} label={email} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
