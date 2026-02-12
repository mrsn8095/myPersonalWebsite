import { motion } from 'framer-motion';
import gptIcon from '../assets/gpt.png';
import cssIcon from '../assets/css.png';
import psIcon from '../assets/ps.png';
import vsIcon from '../assets/vs.png';
import agIcon from '../assets/ag.png';

const technologies = [
    { name: 'React', slug: 'react' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'Express', slug: 'express' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', src: cssIcon },
    { name: 'Tailwind', slug: 'tailwindcss' },
    { name: 'Framer', slug: 'framer' },
    { name: 'GSAP', slug: 'greensock' },
    { name: 'Vite', slug: 'vite' },
    { name: 'VS Code', src: vsIcon },
    { name: 'npm', slug: 'npm' },
    { name: 'Photoshop', src: psIcon },
    { name: 'ChatGPT', src: gptIcon },
    { name: 'Gemini', slug: 'googlegemini' },
    { name: 'Antigravity', src: agIcon },
    { name: 'GitHub', slug: 'github' },
    { name: 'Git', slug: 'git' },
    { name: 'Bootstrap', slug: 'bootstrap' },
    { name: 'Postman', slug: 'postman' },
];

const TechStack = () => {
    const row1 = technologies.slice(0, 10);
    const row2 = technologies.slice(10, 20);

    const MarqueeRow = ({ items, direction = 1, speed = 30 }) => (
        <div style={{ display: 'flex', width: 'fit-content', userSelect: 'none' }}>
            <motion.div
                style={{
                    display: 'flex',
                    gap: 'clamp(3rem, 10vw, 8rem)',
                    paddingRight: 'clamp(3rem, 10vw, 8rem)'
                }}
                animate={{ x: direction > 0 ? ['-50%', '0%'] : ['0%', '-50%'] }}
                transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
            >
                {[...items, ...items].map((tech, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'clamp(1rem, 2vw, 1.5rem)',
                        whiteSpace: 'nowrap',
                        padding: 'clamp(1.5rem, 4vw, 3rem) 0'
                    }}>
                        <img
                            src={tech.src || `https://cdn.simpleicons.org/${tech.slug}`}
                            alt={tech.name}
                            style={{
                                width: 'clamp(40px, 8vw, 60px)',
                                height: 'clamp(40px, 8vw, 60px)',
                                objectFit: 'contain'
                            }}
                        />

                        <span style={{
                            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            opacity: 0.6,
                            letterSpacing: '0.1em'
                        }}>{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section id="stack" className="section-padding" style={{ overflow: 'hidden', position: 'relative', borderTop: '1px solid #222' }}>
            <div className="container" style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>03 / Technologies</h2>
                <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginTop: '2rem' }}>Tools & <br /> Technologies.</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <MarqueeRow items={row1} direction={-1} speed={35} />
                <MarqueeRow items={row2} direction={1} speed={40} />
            </div>
        </section>
    );
};

export default TechStack;
