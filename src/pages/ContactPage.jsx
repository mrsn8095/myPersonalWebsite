import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                paddingTop: window.innerWidth < 768 ? '12rem' : '10rem',
                minHeight: '80vh'
            }}
        >
            <div className="container">
                <motion.h1
                    className="big-text"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Contact
                </motion.h1>
            </div>
            <Contact />
        </motion.div>
    );
};

export default ContactPage;
