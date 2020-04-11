import React from "react";
import { Typography, Card, Row, Col } from "antd";

const PastMeetup = () => {
  const { Title, Text } = Typography;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title level={4}>Past Meetups</Title>
        <Text style={{ marginRIght: "-20px" }}>see all</Text>
      </div>

      <div style={{ padding: 10 }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="27 November 2019" bordered={false}>
              <Text style={{ fontWeight: "bold" }}>
                #39 JakartaJS Meetup with kumparan
              </Text>
              <br />
              <br />
              <Text style={{ fontWeight: "bold" }}>100</Text>
              <Text> wents</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="27 October 2019" bordered={false}>
              <Text style={{ fontWeight: "bold" }}>
                #38 JakartaJS Meetup with kumparan
              </Text>
              <br />
              <br />
              <Text style={{ fontWeight: "bold" }}>70</Text>
              <Text> wents</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="27 September 2019" bordered={false}>
              <Text style={{ fontWeight: "bold" }}>
                #37 JakartaJS Meetup with kumparan
              </Text>
              <br />
              <br />
              <Text style={{ fontWeight: "bold" }}>90</Text>
              <Text> wents</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PastMeetup;
