import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";

const DetailCard = props => {
  const { Location, Members, Organizers } = props;
  const { Text } = Typography;

  return (
    <div style={{ marginBottom: 20 }}>
      <Card>
        <Row>
          <Col span={8}>
            <div style={{ backgroundColor: "grey", height: 150, width: 150 }} />
          </Col>
          <Col span={16}>
            <Text style={{ fontWeight: "bold" }}>Hacktiv8 Indonesia</Text>
            <br />
            <Text>Location : {Location ? Location : "Jakarta"}</Text>
            <br />
            <Text>Members : {Members ? Location : "1000"}</Text>
            <br />
            <Text>Organizers : {Organizers ? Organizers : "Adhy"}</Text>
            <br />
            <br />

            <Button type={"primary"}>Join Us</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default DetailCard;
