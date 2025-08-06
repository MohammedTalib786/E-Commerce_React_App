import React, { useState } from 'react'
import TestComp from './TestComp';
import ThreeScene from './ThreeScene';
import IPhoneLook from './IPhoneLook';
import IPhoneLookTwo from './IPhoneLookTwo';
import SingleIPhoneLook from './SingleIPhoneLook';



const TestPage = () => {

    return (
        <div className="bg-amber-200 " >


            <TestComp additionalclassName="class3 class4" />
            <ThreeScene />

            <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-amber-500 ">
                    Left
                </div>
                <div className="w-[50%] bg-pink-400 " >
                    <IPhoneLook />
                    

                </div>
            </div>

            <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-amber-500 ">
                    Left
                </div>
                <div className="w-[50%] bg-pink-400 " >
                    <SingleIPhoneLook />
                    

                </div>
            </div>

        </div>
    )
}

export default TestPage