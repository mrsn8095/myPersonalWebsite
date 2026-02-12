import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursor, {
                x: clientX,
                y: clientY,
                duration: 0.5,
                ease: 'power3.out',
            });
        };

        const onMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button')) {
                cursor.classList.add('hovered');
            } else {
                cursor.classList.remove('hovered');
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
