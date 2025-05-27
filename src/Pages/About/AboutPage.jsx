import React from 'react'
import Slider from '../../components/Slider/Slider'
import { TestAccord } from '../../components/TestAccord/TestAccord'
import { Button } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="py-10 container m-auto h-screen ">

      <h1 className=" text-3xl font-bold text-center pb-5 ">About Us</h1>

      <div className="container m-auto py-8 ">
        <Slider />

      </div>

      <TestAccord />
      <Button>Button</Button>

    </div>

  )
}

export default About