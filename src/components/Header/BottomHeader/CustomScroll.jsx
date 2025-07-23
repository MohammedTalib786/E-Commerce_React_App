import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CustomScroll = () => {
  const { scrollY } = useScroll();
  const prevScroll = useRef(0); // keep track of previous scrollY
  const [scrollDirection, setScrollDirection] = useState('up'); // or 'down'

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > prevScroll.current) {
      setScrollDirection("down");
    } else if (latest < prevScroll.current) {
      setScrollDirection("up");
    }
    prevScroll.current = latest;
  });

  useEffect(() => {
    console.log("Scroll Direction:", scrollDirection);
  }, [scrollDirection]);

  return (
    <div className="fixed top-[400px] z-[99999] bg-white " >
      <h2>Scroll Direction: {scrollDirection}</h2>
    </div>
  );
};

export default CustomScroll;
