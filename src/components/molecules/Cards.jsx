import React from "react";
import { Row, Col } from "antd";
import Card from "./Card";

function Cards({ items, isLoading }) {
  return (
    <Row gutter={20} style={{ justifyContent: "start" }}>
      {items.map((item) => (
        <Col xs={12} sm={12} md={8} lg={8} xl={6}>
          <Card
            imageUrl={item.url}
            title={item.title}
            description={item.title}
            isLoading={isLoading}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
