import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#0a0a0a',
            padding: '3rem 0',
            borderTop: '1px solid #333',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    textAlign: 'center'
                }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://github.com/Pedro-189" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'color 0.2s' }} aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/pedro-pablo-ruiz-ya%C3%B1ez-2a6a3427b/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'color 0.2s' }} aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://instagram.com/pedro.ruiz___" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'color 0.2s' }} aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="mailto:pablus189189@gmail.com" style={{ color: '#fff', transition: 'color 0.2s' }} aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>

                    <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Pedro Ruiz. Todos los derechos reservados.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.85rem' }}>
                        <a href="#about" style={{ color: 'var(--secondary-text)' }}>Sobre Mí</a>
                        <a href="#projects" style={{ color: 'var(--secondary-text)' }}>Proyectos</a>
                        <a href="#contact" style={{ color: 'var(--secondary-text)' }}>Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
