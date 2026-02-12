import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import Magnetic from '../components/Magnetic';
import { ArrowUpRight } from 'lucide-react';
import cssIcon from '../assets/css.png';

const Work = () => {
    return (
        <section className="container section-padding" style={{
            minHeight: '100vh',
            paddingTop: window.innerWidth < 768 ? '12rem' : '10rem'
        }}>
            <div style={{ marginBottom: window.innerWidth < 768 ? '5rem' : '10rem' }}>
                <motion.h1
                    className="big-text"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: '2rem' }}
                >
                    Work
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}
                >
                    A selection of projects where I've helped brands and communities define their digital presence.
                </motion.p>
            </div>

            <div style={{ display: 'grid', gap: '8rem' }}>
                {personalInfo.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1.2fr 1fr',
                            gap: window.innerWidth < 768 ? '2rem' : '4rem',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            overflow: 'hidden',
                            aspectRatio: '16/10',
                            backgroundColor: '#1C1D20',
                            borderRadius: '20px'
                        }}>
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />
                        </div>

                        <div>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>{project.title}</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem' }}>
                                {project.technologies.map((tech, i) => {
                                    const iconMap = {
                                        'React.js': 'react',
                                        'MERN Stack': 'mongodb',
                                        'Framer Motion': 'framer',
                                        'Node.js': 'nodedotjs',
                                        'Express.js': 'express',
                                        'MongoDB': 'mongodb',
                                        'Tailwind CSS': 'tailwindcss',
                                        'HTML': 'html5',
                                        'CSS': 'css3',
                                        'JavaScript': 'javascript',
                                        'Multi-language': 'googletranslate',
                                        'SEO Optimization': 'googlesearchconsole'
                                    };

                                    const slug = iconMap[tech];
                                    const isCSS = tech === 'CSS';

                                    return (
                                        <span key={i} style={{
                                            padding: '0.5rem 1.2rem',
                                            border: '1px solid #333',
                                            borderRadius: '100px',
                                            fontSize: '0.8rem',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.6rem',
                                            backgroundColor: 'rgba(255,255,255,0.03)'
                                        }}>
                                            {isCSS ? (
                                                <img src={cssIcon} alt={tech} style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                                            ) : slug ? (
                                                <img
                                                    src={`https://cdn.simpleicons.org/${slug}`}
                                                    alt={tech}
                                                    style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                                                />
                                            ) : null}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>

                            <Magnetic>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="magnetic-content"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '1rem 2rem',
                                        backgroundColor: 'var(--text-color)',
                                        color: 'var(--bg-color)',
                                        borderRadius: '100px',
                                        fontWeight: 500
                                    }}
                                >
                                    Live Preview <ArrowUpRight size={20} />
                                </a>
                            </Magnetic>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Work;
