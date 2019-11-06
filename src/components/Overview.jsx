import React, { useCallback, useContext } from "react";
import { Button, Card, Col, Row } from "antd";
import styled from "styled-components";
import { FullScreenContext } from "../contexts/FullScreenContext";
import CardContent1 from "./CardContent1";
import CardContent2 from "./CardContent2";

const Container = styled(Col)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  flex: 1;
  box-sizing: border-box;
`;

const CardContainer = styled(Row)`
  width: 100%;
  height: 100vh;
  padding: 10px;
`;

const MaxCard = styled(Card)`
  width: 100%;
`;

const Overview = () => {
  const { isFullScreen, setIsFullScreen } = useContext(FullScreenContext);

  const handleToggleSidebar = useCallback(() => {
    setIsFullScreen(!isFullScreen);
  }, [isFullScreen, setIsFullScreen]);

  return (
    <Container>
      <CardContainer gutter={10}>
        <Col md={12}>
          <MaxCard title="Card 1">
            <CardContent1 />
            <Button type="primary" onClick={handleToggleSidebar}>
              Toggle Side Bar
            </Button>
          </MaxCard>
        </Col>
        <Col md={12}>
          <MaxCard title="Card 2">
            <CardContent2 />
            <Button type="primary" onClick={handleToggleSidebar}>
              Toggle Side Bar
            </Button>
          </MaxCard>
        </Col>
      </CardContainer>
    </Container>
  );
};

export default Overview;
