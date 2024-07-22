import React from "react";
import { motion } from "framer-motion";
// import { IoChevronForwardCircle } from "react-icons/io5";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
// import { IconContext } from "react-icons/lib";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const Header = () => (
  <motion.div initial="initial" animate="animate">
    <motion.div
      className="content_wrapper"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: easeing }}
    >
      <div className="left_content_wrapper">
        <motion.h2>
          <motion.span
            variants={firstName}
            initial="initial"
            animate="animate"
            className="first"
          >
            <motion.span variants={letter}></motion.span>
            <motion.span variants={letter}>Hi</motion.span>
            <motion.span variants={letter}>, </motion.span>
            <motion.span variants={letter} className="second"></motion.span>
            <motion.span variants={letter}>I'm</motion.span>
          </motion.span>

          <motion.span
            variants={lastName}
            initial="initial"
            animate="animate"
            className="last"
          >
            <motion.span variants={letter} className="second">
              Srinibash
            </motion.span>
          </motion.span>
          <motion.span
            variants={lastName}
            initial="initial"
            animate="animate"
            className="last"
          >
            <motion.span variants={letter} className="first">
              A
            </motion.span>
            <motion.span variants={letter} className="second"></motion.span>
            <motion.span variants={letter}>Software</motion.span>
            <motion.span variants={letter} className="second"></motion.span>
            <motion.span variants={letter}>Developer</motion.span>
          </motion.span>
        </motion.h2>

        <motion.p variants={fadeInUp}>
       I, A Passionate tech enthusiast diving into software development, determined to innovate and impact indelibly.
        </motion.p>

        <motion.div className="btn_group" variants={stagger}>
          <motion.div
            className="btn btn_primary"
            variants={btnGroup}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="mailto:asrinibashachary@gmail.com"><span>{"< "}Hire Me{" />"}</span>
            {/* <IconContext.Provider  value={{ color: "yellow", size: "25px"}}>
              <IoChevronForwardCircle />
            </IconContext.Provider> */}
            </a>
          </motion.div>

          <motion.div
            className="btn btn_secondary"
            variants={btnGroup}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://turquoise-katya-74.tiiny.site">{"< "}Resume/CV{" />"}</a>
          </motion.div> ``
        </motion.div>

        <motion.div className="review_container" variants={stagger}>
          <motion.p className="more_review" variants={star}>
            I have recently completed Master's in Computer Application,
            excelling in core Computer Science, along with expertise in
            Data structures and algorithms. As a Software Developer, my
            specialization includes Java full stack and MERN Stack technologies.<br/>
          </motion.p>
        </motion.div>
      </div>

      <motion.div className="right_content_wrapper">
        <motion.img
          src={images.me}
          alt="bg"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);
export default AppWrap(Header, "home", "app__whitebg");
