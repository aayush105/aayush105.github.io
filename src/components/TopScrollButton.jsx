import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-12 h-12 right-5 bottom-10 z-10 cursor-pointer text-white transform transition-transform duration-300 ease-in-out ${
        visible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp size={36} className=" hover:text-custom-primary" />
    </div>
  );
};

export default ScrollButton;
