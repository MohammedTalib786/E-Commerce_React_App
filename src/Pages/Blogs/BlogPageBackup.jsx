// import MainCanvas from '../../components/ThreeJsComp/Blog/MainCanvas'
// import ProductSlider from '../../components/ProductSlider/ProductSlider'
// import FeatProductSlider from '../../components/FeatProductSlider/FeatProductSlider'
// import InformationComp from '../../components/HomePage/InformationComp/InformationComp'

// import { motion, useAnimation, useScroll } from "framer-motion";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const Blogs = () => {

//     const controls = useAnimation();
//     const { scrollYProgress } = useScroll();
//     const location = useLocation();

//     // Entrance animation on route change or reload
//     useEffect(() => {
//         controls.set({ y: -50, opacity: 0 }); // reset before animating in
//         const timer = setTimeout(() => {
//             controls.start({
//                 y: 0,
//                 opacity: 1,
//                 transition: { duration: 0.8, ease: "easeOut" },
//             });
//         }, 250);
//         return () => clearTimeout(timer);
//     }, [location.pathname, controls]);

//     // Scroll animation
//     useEffect(() => {
//         return scrollYProgress.on("change", (latest) => {
//             controls.start({
//                 y: latest * -8500, // moves text upward
//                 // y: latest * 8500, // moves text downward
//                 opacity: 1 - latest * 1.2, // fades out
//                 transition: { duration: 0.4 },
//             });
//         });
//     }, [scrollYProgress, controls]);


//     return (
//         <>
//             {/* >>>>>>>>>>>>>> Full Width Spotlight */}
//             {/* <div className=" w-full h-[550px] flex py-[20px]  " >
//                 <div className="left w-[100%] absolute flex justify-center items-center px-[50px] pt-[50px] z-[99] " >
//                     <h2 className='text-center text-[90px]/[100px] font-[800] text-black uppercase '  >Blogs</h2>
//                 </div>
//                 <div className="right w-[100%]  " >
//                     <MainCanvas />
//                 </div>
//             </div > */}


//             <div className=" w-full h-[600px] flex  " style={{background: "linear-gradient(#f1f1f1 0%, rgb(187 187 187) 100%)"}} >
//                 <div className="left w-[100%] absolute flex justify-center items-center px-[50px] pt-[25px] z-[99] " >
//                     {/* <h2 className='text-center text-[90px]/[100px] font-[800] text-black uppercase '  >Blogs</h2> */}
//                     {/* Animated Text */}
//                     <motion.h2
//                         // className="text-center text-[90px]/[100px] font-[800] text-black uppercase "
//                         className="text-center text-[130px]/[140px] font-[800] text-black uppercase "
//                         animate={controls}
//                     // style={{
//                     //     fontSize: "3rem",
//                     //     fontWeight: "bold",
//                     //     marginBottom: "30px",
//                     // }}
//                     >
//                         Blogs
//                     </motion.h2>
//                 </div>

//                 <div className="right w-[100%]  " >
//                     <MainCanvas />
//                 </div>
//             </div >

//             {/* >>>>>>>>>>>>>> In Cont */}
//             <div className="container_layout mx-auto flex justify-center items-center flex-col   "  >
//                 {/* >>>>>>>>>>>>>> Information Comp */}
//                 <InformationComp />

//                 {/* >>>>>>>>>>>>>> Featured Prod Slider */}
//                 <FeatProductSlider title="Featured Products" urlText="GO TO SHOP" urlVal="/products" />

//                 {/* >>>>>>>>>>>>>> Mobile Prod Slider */}
//                 <ProductSlider title="Mobile Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Covers and Cases" />

//                 {/* >>>>>>>>>>>>>> Watch Prod Slider */}
//                 <ProductSlider title="Watch Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Stand and Straps" />

//             </div>


//             {/* >>>>>>>>>>>>>> In Cont */}
//             <div className=" h-[200vh] container_layout mx-auto flex justify-center items-center flex-col  "  >

//             </div>


//         </>
//     )
// }

// export default Blogs
