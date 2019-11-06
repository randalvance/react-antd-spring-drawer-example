import React, { createContext, useCallback, useEffect, useState } from 'react';

export const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
    const [isFullScreen, setIsFullScreen] = useState(true);
    const [isTransitioningToFullScreen, setIsTransitioningToFullScreen] = useState(false);
    const setIsFullScreenCallback = useCallback((value) => {
        setIsFullScreen(value);
    }, [setIsFullScreen]);
    
    useEffect(() => {
        setIsTransitioningToFullScreen(true);
        // Wait for animations to complete
        const timeout = setTimeout(() => {
            setIsTransitioningToFullScreen(false);
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, [isFullScreen]);

    return (
        <FullScreenContext.Provider value={{
            isFullScreen,
            isTransitioningToFullScreen,
            setIsFullScreen: setIsFullScreenCallback,
        }}>
            {children}
        </FullScreenContext.Provider>
    )
};