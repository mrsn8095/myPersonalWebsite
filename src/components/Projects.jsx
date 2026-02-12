import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data';
import Magnetic from './Magnetic';

const Projects = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    const { projects } = personalInfo;
    const projectList = projects.slice(0, 4);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="work" className="container section-padding" style={{ position: 'relative' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: '4rem',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>02 / Recent Work</h2>
                <p style={{
                    maxWidth: '400px',
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                    color: 'var(--text-muted)'
                }}>
                    Helping brands and communities stand out in the digital age.
                </p>
            </div>

            <div style={{ borderTop: '1px solid #333' }}>
                {projectList.map((project, i) => (
                    <Link
                        to="/work"
                        key={i}
                        onMouseEnter={() => setModal({ active: true, index: i })}
                        onMouseLeave={() => setModal({ active: false, index: i })}
                    >
                        <motion.div
                            style={{
                                padding: window.innerWidth < 768 ? '2.5rem 0' : '4rem 0',
                                borderBottom: '1px solid #333',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                transition: 'opacity 0.3s'
                            }}
                            whileHover={{ x: window.innerWidth < 768 ? 0 : 20, opacity: 0.5 }}
                        >
                            <h3 style={{ fontSize: 'clamp(1.5rem, 6vw, 6rem)' }}>{project.title}</h3>
                            <span style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                display: window.innerWidth < 480 ? 'none' : 'block'
                            }}>{project.technologies[0]}</span>
                        </motion.div>
                    </Link>
                ))}
            </div>

            {/* Mouse Following Project Preview - Hidden on Mobile */}
            {window.innerWidth > 1024 && (
                <motion.div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '350px',
                        height: '250px',
                        marginLeft: '-175px',
                        marginTop: '-125px',
                        pointerEvents: 'none',
                        zIndex: 200,
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        x,
                        y,
                    }}
                    id="project-modal"
                    initial={{ scale: 0 }}
                    animate={{ scale: modal.active ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div style={{
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                        transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
                        top: `${modal.index * -100}%`
                    }}>
                        {projectList.map((project, index) => (
                            <div key={index} style={{ height: '100%', width: '100%', padding: '20px' }}>
                                <div style={{
                                    height: '100%',
                                    width: '100%',
                                    overflow: 'hidden',
                                    borderRadius: '15px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    backgroundColor: '#1C1D20'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-color)',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            zIndex: 2
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: modal.active ? 1 : 0 }}
                    >
                        View
                    </motion.div>
                </motion.div>
            )}

            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                <Magnetic>
                    <Link to="/work" className="magnetic-content" style={{
                        padding: window.innerWidth < 768 ? '1.2rem 2.5rem' : '1.5rem 3.0rem',
                        border: '1px solid #333',
                        borderRadius: '100px',
                        textTransform: 'uppercase',
                        fontSize: '0.8rem',
                        transition: 'background-color 0.3s, border-color 0.3s',
                        width: window.innerWidth < 480 ? '100%' : 'auto'
                    }}>
                        More Work
                    </Link>
                </Magnetic>
            </div>
        </section>
    );
};

export default Projects;
