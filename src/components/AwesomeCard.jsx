import React, { useCallback, useContext, useEffect } from "react";
import { animated, useSpring } from 'react-spring';
import useReactResizeAware from "react-resize-aware";
import styled from "styled-components";
import { Button, Card, Col, Skeleton } from "antd";
import { FullScreenContext } from "../contexts/FullScreenContext";

const MaxCard = styled(Card)`
  width: 100%;
  height: 100%;
`;

const AnimatedCol = animated(Col);

const AwesomeCard = ({ cardId, title, children, ...props }) => {
  const [resizeListener, sizes] = useReactResizeAware();
  const {
    fullScreenId,
    isFullScreen,
    isTransitioningToFullScreen,
    enterFullScreen,
    exitFullScreen
  } = useContext(FullScreenContext);
  const handleMaximize = useCallback(() => {
    if (fullScreenId === cardId) {
      exitFullScreen();
      return;
    }
    enterFullScreen(cardId);
  }, [cardId, fullScreenId, enterFullScreen, exitFullScreen]);

  const fullScreenSizes = {
    span: 24,
    xs: 24,
    md: 24,
    lg: 24,
    xl: 24,
    xxl: 24,
  };

  const maximizeButton = (
    <Button type="primary" onClick={handleMaximize}>
      {isFullScreen ? "Minimize" : "Maximize"}
    </Button>
  );
  return (
      <AnimatedCol
        {...props}
        {...(isFullScreen ? fullScreenSizes : {})}
        style={
          {
            ...props.style,
            display: (isFullScreen && fullScreenId !== cardId) ? 'none' : 'block',
            height: isFullScreen ? 'calc(100vh - 10px)' : 'auto'
          }
        }
      >
        {resizeListener}
        <MaxCard title={title} extra={maximizeButton}>
          {JSON.stringify(sizes)}
          {isTransitioningToFullScreen ? <Skeleton /> : children}
        </MaxCard>
      </AnimatedCol>
  );
};

export default AwesomeCard;
