import React, { createContext, useState } from 'react';

export const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
    const [isFullScreen, setIsFullScreen] = useState(true);
    return (
        <FullScreenContext.Provider value={{
            isFullScreen,
            setIsFullScreen
        }}>
            {children}
        </FullScreenContext.Provider>
    )
};