import React from "react";
import { Typography, Card } from "antd";

const NextMeetup = () => {
  const { Paragraph, Title, Text } = Typography;

  return (
    <div>
      <Title level={4}>Next Meetup</Title>
      <div style={{ padding: 10 }}>
        <Card>
          <Paragraph>Awesome Meetup</Paragraph>
          <Text style={{ color: "grey" }}>25 january 2020</Text>
          <br />
          <br />
          <Paragraph>
            Hello, Javascrpt & Nodejs ninjas! 
            <br></br>
            Get Ready for our Monthly meetup
            JakartaJS! this will be our fifth meetup 2020 
            <br></br>
            The Meetup format will
            contain some short stories and technical talks. 
            <br></br>
            If you have a short announcement you'd  like to share with the audience, you may do so during open mic announcements.
            <br></br>

            Remember to bring a photo ID to get through building security.
            <br></br>
            .....
            <br></br>
            see you there!
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default NextMeetup;
