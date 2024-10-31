import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import logo from "../images/aayush7.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <div
      className="h-[80px] flex items-center justify-center top-0 z-10 sticky"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="w-full max-w-[1200px] px-6 flex items-center justify-between">
        <LinkR
          to="/"
          className="flex items-center w-4/5 px-1 text-lg font-semibold text-white"
        >
          <a href="/" className="flex items-center">
            <img src={logo} alt="Aayush Shrestha" width="150" height="40" />
          </a>
        </LinkR>

        <div
          className="h-full flex items-center md:hidden"
          style={{ color: theme.text_primary }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <MenuRounded />
        </div>

        <ul className="hidden md:flex w-full items-center justify-center gap-8 px-1 list-none">
          {["About", "Skills", "Experience", "Projects", "Education"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-custom-primary font-medium ease-in-out transition duration-200"
              >
                {item}
              </a>
            )
          )}
        </ul>

        <div className="hidden md:flex w-4/5 h-full justify-end items-center px-1">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-custom-primary text-custom-primary hover:bg-custom-primary hover:text-white flex items-center justify-center rounded-full cursor-pointer px-5 py-2 font-medium text-base transition duration-500 ease-in-out"
          >
            Github Profile
          </a>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <ul
            id="mobile-menu"
            className="md:hidden flex flex-col items-start gap-4 px-10 py-6 w-full bg-dark-card_light absolute top-20 right-0 rounded-b-lg shadow-lg transition duration-500 z-10"
          >
            {["About", "Skills", "Experience", "Projects", "Education"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white hover:text-custom-primary cursor-pointer font-medium ease-in-out transition duration-200"
                >
                  {item}
                </a>
              )
            )}
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-custom-primary text-white border border-custom-primary hover:bg-custom-primary hover:text-white flex items-center justify-center rounded-full cursor-pointer px-5 py-2 font-medium text-base transition duration-500 ease-in-out"
            >
              Github Profile
            </a>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
