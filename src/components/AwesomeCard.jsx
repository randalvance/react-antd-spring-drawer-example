import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { Button, Card, Skeleton } from "antd";
import { FullScreenContext } from "../contexts/FullScreenContext";

const MaxCard = styled(Card)`
  width: 100%;
  height: 100%;
`;

const AwesomeCard = ({ cardId, title, children }) => {
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

  const maximizeButton = (
    <Button type="primary" onClick={handleMaximize}>
      {isFullScreen ? "Minimize" : "Maximize"}
    </Button>
  );
  return (
    ((isFullScreen && fullScreenId === cardId) || !isFullScreen) && (
      <MaxCard title={title} extra={maximizeButton}>
        {isTransitioningToFullScreen ? <Skeleton /> : children}
      </MaxCard>
    )
  );
};

export default AwesomeCard;
