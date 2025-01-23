import './style.css'
import React, { useState } from 'react';

const Buttons = () => {
    const [count, setCount] = useState(0);
    const decrementCount = (number) => {
        setCount(prevCount => prevCount - number);
    };
    const incrementCount = (number) => {
        setCount(prevCount => prevCount + number);
    };
    return (
        <>
            <div className="Wraper">
                <span>{count}</span>
                <button className='Button' onClick={() => decrementCount(1)}>-</button>
                <button className='Button' onClick={() => incrementCount(1)}>+</button>
                <button className='Button' onClick={() => incrementCount(100)}>+100</button>
                <button className='Button' onClick={() => decrementCount(25)}>-25</button>
                <button className='Button' onClick={() => incrementCount(10)}>+10</button>
            </div>

        </>
    );


};
export default Buttons;