import React from "react";
import { Button, Card as CardComponent } from "antd";
const { Meta } = CardComponent;

function Card({ imageUrl, title, description }) {
  return (
    <CardComponent
      //   loading={true}
      hoverable
      type="inner"
      style={{ marginBottom: "20px" }}
      cover={<img src={imageUrl} />}
    >
      <Meta title={title} description={description} />
    </CardComponent>
  );
}

export default Card;
