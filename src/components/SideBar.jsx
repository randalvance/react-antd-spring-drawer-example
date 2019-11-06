import React, { useContext } from 'react';
import { Col } from 'antd';
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { FullScreenContext } from '../contexts/FullScreenContext';

let SideBarWrapper = styled(Col)`
  height: 100vh;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  flex-basis: 300px;
`;

SideBarWrapper = animated(SideBarWrapper);

const SideBar = () => {
    const { isFullScreen } = useContext(FullScreenContext);
    const style = useSpring({
        transform: isFullScreen ? "translate(-300px, 0px)" : "translate(0px, 0px)",
        flexBasis: isFullScreen ? '0' : '300px',
        width: isFullScreen ? 0 : 300
    });

    return <SideBarWrapper style={style}>Side Bar</SideBarWrapper>
};

export default SideBar;