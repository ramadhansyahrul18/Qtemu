import React from "react";
import { Typography, Card, Row, Col } from "antd";

const MembersCard = () => {
  const { Title, Text } = Typography;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title level={4}>Members</Title>
        <Text style={{ marginRIght: "-20px" }}>see all</Text>
      </div>

      <div style={{ padding: 10 }}>
        <Card>
          <Row>
            <Col span={3}>
              <div
                style={{
                  borderRadius: 50,
                  backgroundColor: "grey",
                  width: 50,
                  height: 50
                }}
              />
            </Col>
            <Col span={16}>
              <Text style={{ fontWeight: "bold" }}>Organizer</Text>
              <Row>
                <Col span={10}>Adhy Wiranata</Col>
                <Col>4 others</Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default MembersCard;
