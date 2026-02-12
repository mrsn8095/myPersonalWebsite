import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Note: You need to replace these with your actual EmailJS IDs
        // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setStatus('success');
                setFormData({ user_name: '', user_email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section className="container section-padding" id="contact">
            <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1fr 1fr',
                gap: window.innerWidth < 768 ? '3rem' : '4rem'
            }}>
                <div>
                    <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2rem' }}>03 / Contact</h2>
                    <h3 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', textTransform: 'uppercase', marginBottom: '2rem' }}>Ready to start <br /> a project?</h3>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                        I'm always open to new opportunities and collaborations. Feel free to reach out via the form or my social handles.
                    </p>
                </div>

                <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Your Name</label>
                        <input
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '1.2rem', width: '100%' }}
                        />
                    </div>
                    <div style={{ borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Your Email</label>
                        <input
                            type="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '1.2rem', width: '100%' }}
                        />
                    </div>
                    <div style={{ borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hello Roshan..."
                            required
                            style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: '1.2rem', width: '100%', minHeight: '100px', resize: 'none' }}
                        />
                    </div>

                    <button
                        disabled={status === 'sending'}
                        style={{
                            alignSelf: 'flex-start',
                            background: status === 'success' ? '#4CAF50' : 'var(--accent-color)',
                            color: 'white',
                            padding: '1.2rem 2.5rem',
                            borderRadius: '50px',
                            border: 'none',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                            marginTop: '1rem',
                            transition: 'all 0.3s ease',
                            width: window.innerWidth < 480 ? '100%' : 'auto'
                        }}
                    >
                        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                    </button>

                    {status === 'error' && (
                        <p style={{ color: '#ff4b2b', fontSize: '0.9rem' }}>Something went wrong. Please try again or email directly.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
