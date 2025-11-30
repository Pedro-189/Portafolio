import React, { useState } from 'react';
import logo from '../assets/logo-final.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            background: 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ height: '50px', zIndex: 1002 }}>
                    <img src={logo} alt="R-Control Logo" style={{ height: '100%', width: 'auto' }} />
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                        <li><a href="#about" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>SOBRE MÍ</a></li>
                        <li><a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>PROYECTOS</a></li>
                        <li><a href="#contact" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>CONTACTO</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        zIndex: 1002,
                        display: 'none' // Hidden by default, shown via CSS
                    }}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#121212',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1001,
                    transition: 'transform 0.3s ease-in-out',
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', listStyle: 'none', textAlign: 'center' }}>
                        <li><a href="#about" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>SOBRE MÍ</a></li>
                        <li><a href="#projects" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>PROYECTOS</a></li>
                        <li><a href="#contact" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>CONTACTO</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
