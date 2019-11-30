import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import styles from "./style.module.css";

import Repositories from "./Repositories";
import { ProfileDetails } from "../../fragments";
import { fetchProfileDetails, fetchRepositories } from "../../redux/actions";
const { TabPane } = Tabs;
const Profile = () => {
  const dispatch = useDispatch();

  //Store Variables
  const repositories = useSelector(store => store.app.repositories);
  const profile = useSelector(store => store.app.profile);

  // Functions
  const dispatchFetchProfileDetails = () => dispatch(fetchProfileDetails());
  const dispatchFetchRepositories = () => dispatch(fetchRepositories());

  // Effects
  useEffect(() => {
    dispatchFetchProfileDetails();
    dispatchFetchRepositories();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.profilesection}>
        <ProfileDetails profile={profile.data} loading={profile.loading} />
      </div>
      <div className={styles.mainsection}>
        <Tabs defaultActiveKey="2" size="default" animated={false}>
          <TabPane tab="Overview" key="1"></TabPane>
          <TabPane tab="Repositories" key="2">
            <Repositories
              repositories={repositories.data}
              loading={repositories.loading}
            />
          </TabPane>
          <TabPane tab="Projects" key="3"></TabPane>
          <TabPane tab="Stars" key="4"></TabPane>
          <TabPane tab="Followers" key="5"></TabPane>
          <TabPane tab="Following" key="6"></TabPane>
        </Tabs>
      </div>
    </div>
  );
};

Profile.prototypes = {};

export default Profile;
