import React from "react";
import { Bio } from "../../data/constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="w-full py-8 flex justify-center relative z-10">
      <div className="w-full max-w-[1200px] flex flex-col gap-4 items-center p-4 text-white">
        <div className="font-semibold text-lg text-custom-primary">
          Aayush Shrestha
        </div>
        <div className="flex mt-4">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4 text-3xl text-white transition-colors duration-200 ease-in-out hover:text-custom-primary"
          >
            <GithubIcon />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4 text-3xl text-white transition-colors duration-200 ease-in-out hover:text-custom-primary"
          >
            <LinkedInIcon />
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-4 text-3xl text-white transition-colors duration-200 ease-in-out hover:text-custom-primary"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
