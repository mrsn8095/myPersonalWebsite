import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { personalInfo } from '../data';
import heroImg from '../assets/bla1.png';

const Hero = () => {
    const container = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    useEffect(() => {
        gsap.set(secondText.current, { left: firstText.current.getBoundingClientRect().width })
        let animationFrameId;

        const animateLoop = () => {
            if (xPercent <= -100) {
                xPercent = 0;
            }
            if (xPercent > 0) {
                xPercent = -100;
            }
            gsap.set(firstText.current, { xPercent: xPercent })
            gsap.set(secondText.current, { xPercent: xPercent })
            xPercent += 0.1 * direction;
            animationFrameId = requestAnimationFrame(animateLoop);
        }

        animateLoop();

        return () => cancelAnimationFrame(animationFrameId);
    }, [])

    return (
        <section ref={container} style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-color)',
            padding: 0
        }}>

            {/* Metadata Container */}
            <div style={{
                position: 'absolute',
                top: '15%',
                left: '0',
                width: '100%',
                padding: '0 4vw',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                zIndex: 10,
                // Stack on mobile
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                        maxWidth: '250px'
                    }}
                >
                    <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--text-color)', flexShrink: 0 }}></div>
                    <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {personalInfo.title}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ textAlign: 'right', color: 'var(--text-muted)' }}
                >
                    <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', lineHeight: 1.5 }}>
                        Located in <br />
                        <span style={{ color: 'var(--text-color)' }}>{personalInfo.location}</span>
                    </p>
                </motion.div>
            </div>

            {/* Centered Image */}
            <motion.div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    zIndex: 5,
                    y: y,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <img
                    src={heroImg}
                    alt={personalInfo.name}
                    style={{
                        width: 'auto',
                        height: '90%',
                        maxWidth: '100vw',
                        objectFit: 'contain',
                        objectPosition: 'bottom'
                    }}
                />
            </motion.div>

            {/* Marquee Name */}
            <div className="marquee-container" style={{ zIndex: 20 }}>
                <div ref={slider} style={{ position: 'relative', display: 'flex' }}>
                    <p ref={firstText} className="marquee-text">{personalInfo.name}&nbsp;&nbsp;—&nbsp;</p>
                    <p ref={secondText} className="marquee-text" style={{ position: 'absolute' }}>{personalInfo.name}&nbsp;&nbsp;—&nbsp;</p>
                </div>
            </div>

            {/* Scroll Indicator - Hide on mobile if space is tight */}
            <div style={{
                position: 'absolute',
                bottom: '5vh',
                left: '4vw',
                zIndex: 30,
                display: window.innerWidth < 768 ? 'none' : 'block'
            }}>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Scroll Down</span>
                    <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--text-muted)' }}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
