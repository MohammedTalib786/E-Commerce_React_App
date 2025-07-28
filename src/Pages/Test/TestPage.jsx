import React, { useState } from 'react'
import TestComp from './TestComp';

const TestPage = () => {

    const [displayElement, setDisplayElement] = useState('button');

    const handleClick = () => {
        setDisplayElement(displayElement === 'button' ? 'paragraph' : 'button');
    };

    return (
        <div className="h-screen">

            <div>
                {displayElement === 'button' ? (
                    <button onClick={handleClick}>Click to Change to Paragraph</button>
                ) : (
                    <p onClick={handleClick}>Click to Change to Button</p>
                )}
            </div>

            <TestComp additionalClass="class3 class4" />

        </div>
    )
}

export default TestPage