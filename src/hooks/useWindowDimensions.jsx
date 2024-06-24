import { useState, useEffect } from 'react';

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(function () {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        return function () { window.removeEventListener('resize', handleResize);} //cleanup function (Unmounting)
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;