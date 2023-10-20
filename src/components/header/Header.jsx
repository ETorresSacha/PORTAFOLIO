import React from "react";
import { fadeIn } from "../../utils/motionTrnsitions";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { redSocial } from "./DataHeader";
import { FaFileDownload } from "react-icons/fa";

const Header = () => {
  return (
    <div className="absolute z-20 inline-block w-full top-1 md:top-2">
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className="container justify-between mx-auto md:flex">
          <Link to="/">
            <h1
              style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
              className="my-2 text-4xl text-center text-white md:text-lef"
            >
              Torre
              <span className="text-orange-600">Dev</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center mx-2 gap-7 text-white">
            <Link
              to="/pdf"
              target="_blank"
              className="transition-all duration-300 hover:text-orange-500"
            >
              <FaFileDownload size="35" />
            </Link>
            {redSocial.map(({ logo, src }) => (
              <Link
                key={src}
                to={src}
                target="_blank"
                className="transition-all duration-300 hover:text-orange-500"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
