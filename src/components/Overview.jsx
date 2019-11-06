import React, { useCallback, useContext } from "react";
import { Button, Col } from "antd";
import styled from "styled-components";
import { FullScreenContext } from "../contexts/FullScreenContext";

const AnimatedCol2 = styled(Col)`
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

const Overview = () => {
  const { isFullScreen, setIsFullScreen } = useContext(FullScreenContext);

  const handleToggleSidebar = useCallback(() => {
    setIsFullScreen(!isFullScreen);
  }, [isFullScreen, setIsFullScreen]);

  return (
    <AnimatedCol2>
      <Button type="primary" onClick={handleToggleSidebar}>
        Toggle Side Bar
      </Button>
    </AnimatedCol2>
  );
};

export default Overview;
