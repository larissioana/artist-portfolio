import { motion } from 'framer-motion';
import { clipPath } from 'framer-motion/client';

const PageTransition = ({ children }) => {
    const transition = {
        duration: 1,
        ease: [0.6, 0.001, -0.05, 0.95]
    };

    const clipPathVariants = {
        initial: {
            clipPath: "circle(0% at 50% 50%)"
        },
        animate: {
            clipPath: "circle(150% at 50% 50%)",
            transition
        },
        exit: "circle(0% at 50% 50%)",
        transition
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={clipPathVariants}
            style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                overflow: "hidden"
            }}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition
