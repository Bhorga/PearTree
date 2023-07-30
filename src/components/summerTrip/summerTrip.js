import React, { useState, useEffect } from "react";
import summer from "../animations/summer.json";
import Lottie from "lottie-react";

const SummerTrip = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDirection = currentScrollPos > lastScrollPos ? 'left' : 'right';
      const scrollSpeed = 1; 
      const newScrollAmount = scrollDirection === 'left' ? scrollAmount - scrollSpeed : scrollAmount + scrollSpeed;
      console.log("positions",newScrollAmount,currentScrollPos)
      setScrollAmount(newScrollAmount);
      setLastScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollAmount, lastScrollPos]);

  return (
    <>
      <div className="d-flex justify-content-end   image-container" style={{ height: "28vw", transform: `translateX(${scrollAmount}px)` }}>
        <Lottie animationData={summer}></Lottie>
      </div>
    </>
  )
};

export default SummerTrip;
