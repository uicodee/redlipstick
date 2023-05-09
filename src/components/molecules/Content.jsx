import React, { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import AddCourse from "./AddCourse";
import Cards from "./Cards";
import PhotoService from "@/services/PhotoService";

const { Content } = Layout;

function ContentComponent() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    PhotoService.getPhotos(1).then((data) => {
      setItems(data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Content>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <Col xs={20} sm={20} md={18} lg={18} xl={18}>
          <AddCourse />
          <Cards items={items} isLoading={isLoading} />
        </Col>
      </Row>
    </Content>
  );
}

export default ContentComponent;
