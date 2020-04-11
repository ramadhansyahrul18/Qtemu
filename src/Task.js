import React from "react";
import { Layout, Menu, Typography, Divider } from "antd";

import DetailCard from "./components/DetailCard";
import NextMeetup from "./components/NextMeetup";
import AboutMeetup from "./components/AboutMeetup";
import MembersCard from "./components/MembersCard";
import PastMeetup from "./components/PastMeetup";

const Task = () => {
  const { Header } = Layout;
  const { Text } = Typography;

  return (
    <>
      <Layout>
        {/* header */}
        <Header
          style={{
            background: "#fff",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07)"
          }}
        >
          <div>
            <Text>Qtemu</Text>
            
            <text a href>Create Meetup</text>
            <text>Explore</text>
          </div>
        </Header>

        {/* <br /> */}
        <Layout style={{ padding: 10 }}>
          <DetailCard />
          <NextMeetup />
          <AboutMeetup />
          <MembersCard />
          <PastMeetup />

          <Divider />
        </Layout>
      </Layout>
    </>
  );
};

export default Task;
