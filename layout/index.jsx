import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <Container>
      <Head />
      <Navbar />
      <Content content={props.content} />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  width: 100%;
`;
