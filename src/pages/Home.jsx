import Card from "@/components/molecules/Card";
import HeaderComponent from "@/components/molecules/Header";
import {
  Button,
  Col,
  Input,
  InputNumber,
  Layout,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
const { Content } = Layout;
const { TextArea } = Input;
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  setTimeout(() => setIsLoading(false), 3000);
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
          <Modal
            centered
            title="Добавить курс"
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
          >
            <Space direction="vertical" style={{ display: "flex" }}>
              <Input placeholder="Название курса" />
              <Input placeholder="Продолжительность курса" />
              <Input placeholder="Цена" />
              <TextArea rows={4} placeholder="Описание" />
            </Space>
          </Modal>
          <Col xs={20} sm={20} md={18} lg={18} xl={18}>
            <Row gutter={20} style={{ justifyContent: "space-between" }}>
              <Col xs={10} sm={12} md={8} lg={8} xl={6}>
                <Typography.Title level={3}>Курсы</Typography.Title>
              </Col>
              <Col xs={12} sm={12} md={8} lg={8} xl={6}>
                <Button
                  style={{ float: "right" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Добавить курс
                </Button>
              </Col>
            </Row>
            <Row gutter={20} style={{ justifyContent: "start" }}>
              {items.map((item) => (
                <Col xs={12} sm={12} md={8} lg={8} xl={6}>
                  <Card
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                    isLoading={isLoading}
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
