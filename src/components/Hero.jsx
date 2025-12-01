import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import profileImage from '../assets/profile-latest.png';

const Hero = () => {
    return (
        <section className="section hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div className="container grid-layout" style={{ alignItems: 'center', position: 'relative' }}>
                <div className="hero-content" style={{ gridColumn: 'span 7', zIndex: 2, paddingRight: '3rem' }}>
                    <p style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                        color: 'var(--secondary-text)',
                        fontWeight: 600
                    }}>
                        Pedro Ruiz &mdash; Chief Engineer
                    </p>
                    <h1 className="text-huge" style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Transformando<br />
                        <span style={{ color: '#888' }}>Problemas Complejos</span><br />
                        en Soluciones.
                    </h1>
                    <p className="text-large" style={{ marginBottom: '2.5rem', maxWidth: '85%', lineHeight: '1.4' }}>
                        Ingeniero Full Stack enfocado en el análisis profundo y la eficiencia.
                    </p>
                    <a href="#projects" className="btn-primary">
                        Ver Proyecto Destacado
                        <ArrowUpRight size={20} />
                    </a>
                </div>

                <div className="hero-image-container" style={{ gridColumn: 'span 5', position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <div className="hero-image-wrapper" style={{
                        position: 'relative',
                        width: '138%', // Increased by ~15% (120 * 1.15)
                        marginLeft: '-19%', // Centered (38% / 2)
                        marginBottom: '-4rem' // Pull image down slightly
                    }}>
                        <img
                            src={profileImage}
                            alt="Pedro Ruiz"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                // Enhanced filters for better integration:
                                // - grayscale(100%): Makes it black and white to match the dark/minimal theme
                                // - contrast(1.2): Increases pop
                                // - brightness(0.9): Slightly dims to not overpower text
                                filter: 'grayscale(100%) contrast(1.2) brightness(0.9) drop-shadow(0 0 50px rgba(255,255,255,0.05))',
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />
                        {/* Glow effect behind */}
                        <div style={{
                            position: 'absolute',
                            top: '20%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80%',
                            height: '80%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                            zIndex: -1,
                            pointerEvents: 'none'
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
