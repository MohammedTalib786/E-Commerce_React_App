import React, { useState } from 'react'

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

        </div>
    )
}

export default TestPage