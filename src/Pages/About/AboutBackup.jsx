import React from 'react'
import Slider from '../../components/Slider/Slider'
import Accordian from '../../components/Accordian/Accordian'
import InUseAccordExample from '../../components/Accordian/InUseAccordExample'


const About = () => {
  return (
    <div className="py-10 container m-auto  ">

      <h1 className=" text-3xl font-bold text-center pb-5 ">About Us</h1>

      <div className="container m-auto py-8 ">
        <Slider />

      </div>

      <Accordian />

      <div className="py-[20px] my-[30px] bg-red-300 "></div>

      <InUseAccordExample />


    </div>

  )
}

export default About