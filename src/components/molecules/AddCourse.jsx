import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Modal,
  Space,
  Input,
  Drawer,
} from "antd";

const { TextArea } = Input;
function AddCourse() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Drawer
        title="Добавить курс"
        placement="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        autoFocus={false}
        extra={
          <Space>
            <Button type="primary" onClick={() => setIsDrawerOpen(false)}>
              Создать
            </Button>
          </Space>
        }
      >
        <Space direction="vertical" style={{ display: "flex", width: "100%" }}>
          <Input placeholder="Название курса" />
          <Input
            type="number"
            placeholder="Продолжительность курса"
            // size="large"
          />
          <Input placeholder="Цена" />
          <TextArea rows={4} placeholder="Описание" />
        </Space>
      </Drawer>
      <Row gutter={20} style={{ justifyContent: "space-between" }}>
        <Col xs={10} sm={12} md={8} lg={8} xl={6}>
          <Typography.Title level={3}>Курсы</Typography.Title>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xl={6}>
          <Button
            style={{ float: "right" }}
            onClick={() => setIsDrawerOpen(true)}
          >
            Добавить курс
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default AddCourse;
