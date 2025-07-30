import React, { useRef } from 'react'

import about from '../../assets/about-page/about-spotlight.webp'
import purpose from '../../assets/about-page/purpose.webp'
import mission from '../../assets/about-page/mission.webp'
import paraImg from '../../assets/about-page/business-hands-joined-together-teamwork 1.png'

import NumberCounter from '../../components/AnimatedNumber/NumberCounter'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import './about-us.css'

import { motion, useInView } from "framer-motion";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (

    <div
      className="lg:w-[100%] flex flex-col items-center"


      

    >


      <motion.div
      
      className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full h-[80vh] flex" style={{ backgroundImage: `url(${about})` }} 

      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      // style={{ marginBottom: "100vh", padding: "2rem", background: "#eee" }}
      >
        <div className="container_layout m-auto mt-[50px]">
          <BreadCrumbs />
          <h1 className="font-[inter] font-bold text-[60px] text-white mt-[20px] relative z-10 " >About Us</h1>
        </div>

      </motion.div>

      <motion.div className="container_layout" 

      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      // style={{ marginBottom: "100vh", padding: "2rem", background: "#eee" }}
      >
        <div className="lg:py-[100px] py-[50px] flex  flex-col-reverse gap-10 lg:flex-row">
          <div className="lg:w-[60%] w-[100%] lg:pr-[100px] pr-[0px] ">
            <h3 className='font-inter font-[600] text-[35px]/[28px] mb-[50px]'>Our Journey</h3>
            <p className="font-[montserrat] font-[400] text-[18px] text-[#333]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta ipsam blanditiis, aut qui repudiandae eos mollitia esse numquam impedit sapiente consequatur suscipit amet officia omnis alias ipsa! Libero, odio!
              Voluptatibus dolorem voluptatem quaerat rem amet perferendis dignissimos reiciendis facilis deserunt eius nobis sint vitae dolore labore quae quidem sequi explicabo aut nam, in nemo repellat cupiditate optio! Recusandae, quam.
              Assumenda debitis necessitatibus dignissimos hic maxime, rem labore enim odit cupiditate vel nemo consectetur minima ut. Amet error iste commodi, quod debitis omnis nobis vel possimus quam qui accusantium. Distinctio.</p><br />
            <p className="font-[montserrat] font-[400] text-[18px] text-[#333]">Sint eius laborum, possimus asperiores quo expedita optio! Sequi corrupti, maxime eaque quis veniam dicta, nihil tempore ea aspernatur consequuntur iusto harum repellat expedita quod fuga, est delectus alias ipsum.
              Sint eius laborum, possimus asperiores quo expedita optio! Sequi corrupti, maxime eaque quis veniam dicta, nihil tempore ea aspernatur consequuntur iusto harum repellat expedita quod fuga, est delectus alias ipsum.</p>
          </div>
          <img className='lg:w-[40%] w-[100%] lg:h-[500px] h-auto float-right rounded-[10px]' src={paraImg} alt="" />
        </div>
      </motion.div>

      {/* counter */}
      <motion.div
      className="w-[100%] flex flex-row flex-wrap border-1 border-[#e5e7eb]"
      
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      // style={{ marginBottom: "100vh", padding: "2rem", background: "#eee" }}
      >
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"clients"} number={100} />
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"Industries Serve"} number={35} />
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"Countries Presence"} number={50} />
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"Years Of Experience"} number={16} />
      </motion.div>


      <motion.div 
      className="main-cont w-full"
      
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate if in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      // style={{ marginBottom: "100vh", padding: "2rem", background: "#eee" }}
      >
        <div className="inner">
          <div className="upperDiv lg:py-[150px] py-[75px] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center m-auto" style={{ backgroundImage: `url(${purpose})` }}>
            <h3 className='font-inter font-bold lg:text-[60px] md:text-[50px] text-[30px] text-[#fff]'>Our Purpose</h3>
            <p className='font-inter font-normal text-[18px] text-center text-[#fff]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="lowerDiv flex flex-row" >
            <div className="lowerFirstDiv bg-no-repeat bg-cover bg-center px-[20px]  w-[50%] flex flex-col justify-center items-center " style={{ backgroundImage: `url(${mission})` }}>
              <h3 className='font-inter font-bold lg:text-[60px] md:text-[50px] text-[30px] text-[#313D47]'> Our Mission</h3>
              <p className='font-inter font-medium text-[18px] text-center text-[#313D47]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="lowerSecondDiv flex flex-col justify-center items-center py-[50px] px-[20px] bg-[#313D47] w-[50%]">
              <h3 className='font-inter font-bold lg:text-[60px] md:text-[50px] text-[30px]  text-[#d9d9d9]'> Our Values</h3>
              <p className='font-inter font-medium text-[18px] text-center text-[#d9d9d9]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h4 className='font-inter font-bold text-[24px] text-[#78b5ad] mt-[50px]' >Agility</h4>
              <p className='font-inter font-medium text-[18px] text-[#d9d9d9]'>Lorem, ipsum dolor sit amet</p>
              <h4 className='font-inter font-bold text-[24px] text-[#78b5ad] mt-[50px]' >Collaborations</h4>
              <p className='font-inter font-medium text-[18px] text-[#d9d9d9]'>Lorem, ipsum dolor sit amet</p>
              <h4 className='font-inter font-bold text-[24px] text-[#78b5ad] mt-[50px]' >Excellence</h4>
              <p className='font-inter font-medium text-[18px] text-[#d9d9d9]'>Lorem, ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </motion.div>



    </div>

  )
}

export default About