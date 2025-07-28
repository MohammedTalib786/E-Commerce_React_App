import React from 'react'

const TestComp = ({
    additionalClass,
}) => {
    return (
        <>
            <h2>TestComp</h2>
            <div className="w-full bg-yellow-300 " >
                <button className={`class1 class2 ${additionalClass} `} >Test</button>
            </div>

        </>
    )
}

export default TestComp