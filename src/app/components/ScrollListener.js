'use client'

import { useEffect } from 'react';


const ScrollListener = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const elements = document.querySelectorAll(".whitebar");
      const sidenavText = document.querySelectorAll(".change-colorjs");
      

      if (scroll > 1800) {
        // this for Bar color change
        elements.forEach((element) => {
          element.style.backgroundColor = "black";
        });

        // this for text color change
        sidenavText.forEach((textElement) => {
          textElement.style.color = "black";
        });
      } else {
        elements.forEach((element) => {
          element.style.backgroundColor = "#ffff";
        });

        sidenavText.forEach((textElement) => {
          textElement.style.color = "#ffff";
        });
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount in class components

  return (
 <>
 
 
 </>
  );
};

export default ScrollListener;
