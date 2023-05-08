import Card from "@/components/molecules/Card";
import HeaderComponent from "@/components/molecules/Header";
import { Col, Layout, Row } from "antd";
import React from "react";
const { Content } = Layout;
function Home() {
    
  const items = [
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
    {
      imageUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Some title",
      description: "Some description",
    },
  ];
  return (
    <>
      <HeaderComponent />
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
            {/* <Card
              imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              title="Some title"
              description="Some description"
            /> */}
            <Row gutter={20} style={{ justifyContent: "start" }}>
              {items.map((item) => (
                <Col xs={12} sm={12} md={8} lg={8} xl={6}>
                  <Card
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default Home;
