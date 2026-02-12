import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data';
import Magnetic from './Magnetic';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: window.innerWidth < 768 ? '1.5rem 6vw' : '2rem 4vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            mixBlendMode: 'difference',
            // Add subtle background for mobile reading if needed
            background: window.innerWidth < 768 ? 'rgba(28, 29, 32, 0.01)' : 'transparent',
            backdropFilter: window.innerWidth < 768 ? 'blur(0px)' : 'none'
        }}>
            <Magnetic>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{
                        fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem',
                        fontWeight: 600,
                        letterSpacing: '-0.02em'
                    }}>
                        Muhammed Roshan
                    </span>
                </Link>
            </Magnetic>

            <div style={{
                display: 'flex',
                gap: window.innerWidth < 768 ? '1.5rem' : '3rem',
                alignItems: 'center'
            }}>
                <Magnetic>
                    <Link to="/about" style={{ fontSize: window.innerWidth < 768 ? '0.75rem' : '0.9rem', textTransform: 'uppercase' }}>About</Link>
                </Magnetic>
                <Magnetic>
                    <Link to="/work" style={{ fontSize: window.innerWidth < 768 ? '0.75rem' : '0.9rem', textTransform: 'uppercase' }}>Work</Link>
                </Magnetic>
                <Magnetic>
                    <Link to="/contact" style={{ fontSize: window.innerWidth < 768 ? '0.75rem' : '0.9rem', textTransform: 'uppercase' }}>Connect</Link>
                </Magnetic>
            </div>
        </nav>
    );
};

export default Navbar;
