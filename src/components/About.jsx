import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" ref={containerRef} className="container section-padding" style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1fr 1.5fr',
            gap: window.innerWidth < 1024 ? '2rem' : '4rem'
        }}>
            <div>
                <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2rem' }}>01 / About</h2>
            </div>
            <div>
                <motion.p
                    style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', lineHeight: 1.4, marginBottom: '3rem' }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {personalInfo.about}
                </motion.p>

                <div style={{
                    display: 'flex',
                    gap: window.innerWidth < 480 ? '2rem' : '4rem',
                    flexWrap: 'wrap'
                }}>
                    <div>
                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>Expertise</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem' }}>
                            {personalInfo.services.map((service, i) => (
                                <li key={i}>{service.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>Location</h3>
                        <p style={{ fontSize: '1rem' }}>{personalInfo.location}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
