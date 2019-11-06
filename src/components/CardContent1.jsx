import React, { useContext } from 'react';
import { Skeleton } from 'antd';
import { FullScreenContext } from '../contexts/FullScreenContext';

const CardContent1 = () => {
    const { isTransitioningToFullScreen } = useContext(FullScreenContext);

    return isTransitioningToFullScreen ? <Skeleton /> : <h1>Card 1 Contents</h1>
};

export default CardContent1;