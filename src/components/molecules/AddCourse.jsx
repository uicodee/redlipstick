import React, { useState } from "react";
import { Row, Col, Typography, Button, Modal, Space, Input } from "antd";

const { TextArea } = Input;
function AddCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        centered
        title="Добавить курс"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Space direction="vertical" style={{ display: "flex", width: "100%" }}>
          <Input placeholder="Название курса" />
          <Input type="number" placeholder="Продолжительность курса" />
          <Input placeholder="Цена" />
          <TextArea rows={4} placeholder="Описание" />
        </Space>
      </Modal>
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
    </>
  );
}

export default AddCourse;
