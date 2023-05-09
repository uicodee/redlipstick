import AddCourse from "@/components/molecules/AddCourse";
import Card from "@/components/molecules/Card";
import Cards from "@/components/molecules/Cards";
import ContentComponent from "@/components/molecules/Content";
import HeaderComponent from "@/components/molecules/Header";
import PhotoService from "@/services/PhotoService";
import {
  Button,
  Col,
  Input,
  Layout,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";
const { Content } = Layout;

function Home() {
  
  return (
    <>
      <HeaderComponent />
      <ContentComponent />
    </>
  );
}

export default Home;
