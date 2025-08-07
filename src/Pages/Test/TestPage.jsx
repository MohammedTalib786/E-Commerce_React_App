import React, { useState } from 'react'
import TestComp from './TestComp';
import ThreeScene from './ThreeScene';
import IPhoneLook from './IPhoneLook';
import IPhoneLookTwo from './IPhoneLookTwo';
import SingleIPhoneLook from './SingleIPhoneLook';
import WatchCanvas from './WatchCanvas';
import MainCanvas from './MainCanvas';


const TestPage = () => {

    return (
        <div className="bg-amber-200 " >

            <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-cyan-200 ">
                    <p>Using Single Canvas to for multiple Elements</p>
                </div>
                <div className="w-[50%] bg-blue-300 " >
                    <MainCanvas />
                </div>
            </div>

            {/* <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-cyan-200 ">
                    Left
                </div>
                <div className="w-[50%] bg-blue-300 " >
                    <WatchCanvas />

                </div>
            </div> */}


            {/* <TestComp additionalclassName="class3 class4" />
            <ThreeScene /> */}

            {/* <div className="cont flex p-[50px] min-h-[550px] " >
                <div className="w-[50%] bg-amber-500 ">
                    Left
                </div>
                <div className="w-[50%] bg-pink-400 " >
                    <IPhoneLook />


                </div>
            </div> */}

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