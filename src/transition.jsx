import { motion } from "framer-motion";

const animations = {
  initial: { scaleY: 0 },
  animate: { scaleY: 0 },
  exit: { scaleY: 1 },
};
const animationsOut = {
  initial: { scaleY: 1 },
  animate: { scaleY: 0},
  exit: { scaleY: 0 },
};

const Transition = ({ children }) => {
  return (
    <>
      {children}
      {/* <motion.div
        className="slide-in"
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div> */}
      <motion.div
        className="slide-out"
        variants={animationsOut}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2, ease: [0.9, 0.64, 0.36, 1], delay: 1.5,}}
      ></motion.div>
    </>
  );
};
// const animations = {
//   initial: { opacity: 0, y: -100, },
//   animate: { opacity: 1, y: 0,  },
//   exit: { opacity: 0, y: 100, },
// };

// const Transition = ({ children }) => {
//   return (
//     <motion.div
//       variants={animations}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{ duration: 0.5, ease : [0.22, 1, 0.36, 1] }}
//     >
//       {children}
//     </motion.div>
//   );
// };

export default Transition;
