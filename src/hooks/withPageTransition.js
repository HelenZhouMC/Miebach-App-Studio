import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const withPageTransition = (Component) => {
  return (props) => {
    const location = useLocation();
    const animationType = location.state?.animation || "none";

    const variants = {
      slideLeft: {
        initial: { opacity: 0, x: "100vw" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "-100vw" },
      },
      slideRight: {
        initial: { opacity: 0, x: "-100vw" },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100vw" },
      },
      none: {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
    };

    const transition = { duration: 0.5 };

    return (
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants[animationType]}
          transition={transition}
        >
          <Component {...props} />
        </motion.div>
      </AnimatePresence>
    );
  };
};

export default withPageTransition;
