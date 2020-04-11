import React from "react";
import { Layout, Card } from "antd";

const AntDesign = () => {
  return (
    <div>
      <Layout>
        <Layout.Header>
          <p style={{ color: "white" }}>asdasd</p>
        </Layout.Header>
      </Layout>
      <br />
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default AntDesign;
