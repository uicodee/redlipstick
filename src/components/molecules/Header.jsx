import { Layout, Menu, Row, Col, Typography } from "antd";
import React from "react";
import {
  BookOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  BarChartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import reactLogo from "@/assets/react.svg";
const { Header } = Layout;
const { Link } = Typography;
function HeaderComponent() {
  const items = [
    {
      key: "courses",
      label: <Link href="/courses">Курсы</Link>,
      icon: <BookOutlined />,
    },
    {
      key: "tests",
      label: <Link href="/tests">Тесты</Link>,
      icon: <QuestionCircleOutlined />,
    },
    {
      key: "chat",
      label: <Link href="/chat">Чат</Link>,
      icon: <MessageOutlined />,
    },
    {
      key: "statistics",
      label: <Link href="/statistics">Статистика</Link>,
      icon: <BarChartOutlined />,
    },
  ];
  return (
    <Header
      style={{
        backgroundColor: "#fff",
        margin: 0,
        padding: 0,
      }}
    >
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={8} sm={8} md={6} lg={6} xl={6}>
          <div className="logo">
            {/* <img
              src={Logo}
              style={{ verticalAlign: "middle", width: "60px" }}
            /> */}
            <img src={reactLogo} style={{ verticalAlign: "middle" }} />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className="menu"
            items={items}
            style={{
              justifyContent: "end",
            }}
            overflowedIndicator={<MenuOutlined />}
          />
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderComponent;
