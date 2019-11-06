import React, { createContext, useCallback, useEffect, useState, useMemo } from 'react';

export const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
    const [fullScreenId, setFullScreenId] = useState('');
    const [isTransitioningToFullScreen, setIsTransitioningToFullScreen] = useState(false);
    const isFullScreen = useMemo(() => fullScreenId.length > 0, [fullScreenId]);
    const enterFullScreen = useCallback((value) => {
        setFullScreenId(value);
    }, [setFullScreenId]);
    const exitFullScreen = useCallback((value) => {
        setFullScreenId('');
    }, [setFullScreenId]);
    
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
            fullScreenId,
            isFullScreen,
            isTransitioningToFullScreen,
            enterFullScreen,
            exitFullScreen,
        }}>
            {children}
        </FullScreenContext.Provider>
    )
};