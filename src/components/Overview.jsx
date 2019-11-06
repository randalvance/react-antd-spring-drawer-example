import React, { useCallback, useContext } from "react";
import { Button, Card, Col, Row } from "antd";
import styled from "styled-components";
import { FullScreenContext } from "../contexts/FullScreenContext";
import AwesomeCard from "./AwesomeCard";

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
  height: 300px;
`;

const Overview = () => {
  const { fullScreenId, enterFullScreen, exitFullScreen } = useContext(FullScreenContext);

  const handleMaximizeChart1 = useCallback(() => {
    if (fullScreenId === 'chart-01') {
      exitFullScreen();
      return;
    }
    enterFullScreen('chart-01');
  }, [fullScreenId, enterFullScreen, exitFullScreen]);
  const handleMaximizeChart2 = useCallback(() => {
    if (fullScreenId === 'chart-02') {
      exitFullScreen();
      return;
    }
    enterFullScreen('chart-02');
  }, [fullScreenId, enterFullScreen, exitFullScreen]);

  return (
    <Container>
      <CardContainer gutter={10}>
        <Col md={12}>
          <AwesomeCard title="Awesome Card 1" cardId="awesome-card-01">
            <h1>This is the first card!</h1>
          </AwesomeCard>
        </Col>
        <Col md={12}>
          <AwesomeCard title="Awesome Card 2" cardId="awesome-card-02">
            <h1>This is the second card!</h1>
          </AwesomeCard>
        </Col>
      </CardContainer>
    </Container>
  );
};

export default Overview;
