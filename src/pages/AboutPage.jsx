import { motion } from 'framer-motion';
import About from '../components/About';

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: window.innerWidth < 768 ? '12rem' : '10rem' }}
        >
            <div className="container">
                <motion.h1
                    className="big-text"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h1>
            </div>
            <About />
        </motion.div>
    );
};

export default AboutPage;
