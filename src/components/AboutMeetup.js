import React from "react";
import { Typography, Card } from "antd";

const AboutMeetup = () => {
  const { Paragraph, Title } = Typography;

  return (
    <div>
      <Title level={4}>About Meetup</Title>
      <div style={{ padding: 10 }}>
        <Paragraph>
          Come and Meet other Developers interested in the Javascrpt and it's
          Library
        </Paragraph>
        <Paragraph>
          Twitter : @JakartaJS and we use the hashtag #jakartajs
        </Paragraph>
      </div>
    </div>
  );
};

export default AboutMeetup;
