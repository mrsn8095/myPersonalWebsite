import { personalInfo } from '../data';
import Magnetic from './Magnetic';

const Footer = () => {
    return (
        <footer className="container section-padding" style={{ borderTop: '1px solid #333', marginTop: '5rem' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1.5fr 1fr',
                gap: '4rem'
            }}>
                <div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '3rem' }}>
                        Let's work <br /> together
                    </h2>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        <Magnetic>
                            <a href={`mailto:${personalInfo.email}`} style={{
                                padding: window.innerWidth < 768 ? '1rem 2rem' : '2rem 4rem',
                                borderRadius: '100px',
                                border: '1px solid #333',
                                display: 'inline-block',
                                fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'
                            }}>
                                {personalInfo.email}
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href={`tel:${personalInfo.phone}`} style={{
                                padding: window.innerWidth < 768 ? '1rem 2rem' : '2rem 4rem',
                                borderRadius: '100px',
                                border: '1px solid #333',
                                display: 'inline-block',
                                fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'
                            }}>
                                {personalInfo.phone}
                            </a>
                        </Magnetic>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: window.innerWidth < 1024 ? 'flex-start' : 'flex-end'
                }}>
                    <div style={{ textAlign: window.innerWidth < 1024 ? 'left' : 'right' }}>
                        <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>Socials</h3>
                        <ul style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <li><Magnetic><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a></Magnetic></li>
                            <li><Magnetic><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></Magnetic></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: window.innerWidth < 768 ? '5rem' : '10rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                flexDirection: window.innerWidth < 480 ? 'column' : 'row',
                gap: '1rem'
            }}>
                <p>© {new Date().getFullYear()} Muhammed Roshan</p>
                <p>Designed & Developed with ❤️ & few cups of tea☕'s</p>
            </div>
        </footer>
    );
};

export default Footer;
