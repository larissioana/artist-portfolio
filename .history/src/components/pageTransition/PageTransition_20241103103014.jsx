import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const transition = {
        duration: 1,
        ease: "easeInOut"
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
                height: "100%",
                background: "#1e1d1d;"
            }}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition
