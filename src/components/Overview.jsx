import React, { useContext } from "react";
import { useSpring } from "react-spring";
import useReactResizeAware from "react-resize-aware";
import { Col, Row } from "antd";
import styled from "styled-components";
import { FullScreenContext } from "../contexts/FullScreenContext";
import AwesomeCard from "./AwesomeCard";

const Container = styled(Col)`
  height: 100vh;
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
  height: 300px;
  padding: 10px;
`;

const Overview = () => {
  const { isFullScreen } = useContext(FullScreenContext);
  const [resizeListener, sizes] = useReactResizeAware();

  return (
    <Container>
      {resizeListener}
      <CardContainer type="flex" gutter={[10, 10]}>
        <AwesomeCard title="Awesome Card 1" cardId="awesome-card-01" md={24} xl={12}>
          <h1>This is the first card!</h1>
        </AwesomeCard>
        <AwesomeCard title="Awesome Card 2" cardId="awesome-card-02" md={24} xl={12}>
          <h1>This is the second card!</h1>
        </AwesomeCard>
        <AwesomeCard title="Awesome Card 3" cardId="awesome-card-03" md={24} xl={24}>
          <h1>This is the third card!</h1>
        </AwesomeCard>
      </CardContainer>
    </Container>
  );
};

export default Overview;
