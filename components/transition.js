import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    },
    in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5
    }
  }
  };

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="transition">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          animate="in"
          initial="out"
          exit="out"
          variants={variants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
