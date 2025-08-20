
import MainCanvas from '../../components/ThreeJsComp/Contact/MainCanvas'
// import ProductSlider from '../../components/ProductSlider/ProductSlider'
// import FeatProductSlider from '../../components/FeatProductSlider/FeatProductSlider'
// import InformationComp from '../../components/HomePage/InformationComp/InformationComp'

import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Spotlight = () => {
    const controls = useAnimation();
    const { scrollYProgress } = useScroll();
    const location = useLocation();

    const controls3D = useAnimation();

    // Entrance animation on route change or reload
    useEffect(() => {
        controls3D.set({ y: 50, opacity: 0 }); // reset before animating in
        const timer = setTimeout(() => {
            controls3D.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
            });
        }, 250);
        return () => clearTimeout(timer);
    }, [location.pathname, controls3D]);

    // Entrance animation on route change or reload
    useEffect(() => {
        controls.set({ y: -50, opacity: 0 }); // reset before animating in
        const timer = setTimeout(() => {
            controls.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
            });
        }, 250);
        return () => clearTimeout(timer);
    }, [location.pathname, controls]);

    // Scroll animation
    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            controls.start({
                y: latest * -8500, // moves text upward
                // y: latest * 8500, // moves text downward
                opacity: 1 - latest * 1.2, // fades out
                transition: { duration: 0.4 },
            });
        });
    }, [scrollYProgress, controls]);



    return (

        <div className=" w-full h-[650px] flex  "
            style={{ background: "linear-gradient(#f1f1f1 0%, rgb(187 187 187) 100%)" }} >
            <div className="left w-[100%] absolute flex justify-center items-center px-[50px] pt-[35px] z-[99] " >
                <motion.h2
                    className="text-center text-[130px]/[140px] font-[800] text-black uppercase "
                    animate={controls}
                >
                    Contact
                </motion.h2>
            </div>

            {/* <div className="right w-[100%]  " >
                    <MainCanvas />
                </div> */}
            <motion.div
                animate={controls3D}
                className="right w-[100%]  " >
                <MainCanvas />
            </motion.div>
        </div>

    )
}

export default Spotlight