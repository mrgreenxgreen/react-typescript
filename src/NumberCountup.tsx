import React, { useState,useEffect, useRef } from 'react';

interface NumberCountupProps {
    realValue: number;
}

const NumberCountup: React.FC<NumberCountupProps> = ({ realValue }) => {
    const numberElement = useRef<HTMLDivElement>(null);
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentValue((prevValue) => prevValue + 1);

            if (currentValue >= realValue) {
                clearInterval(intervalId);
            }
        }, 50);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div ref={numberElement}>{currentValue.toFixed(2)}</div>
    );
};

export default NumberCountup;
