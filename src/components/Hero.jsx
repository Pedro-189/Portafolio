import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import profileImage from '../assets/profile-new.png';

const Hero = () => {
    return (
        <section className="section hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div className="container grid-layout" style={{ alignItems: 'center', position: 'relative' }}>
                <div style={{ gridColumn: 'span 7', zIndex: 2 }}>
                    <p style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                        color: 'var(--secondary-text)',
                        fontWeight: 600
                    }}>
                        Pedro Ruiz &mdash; Chief Engineer
                    </p>
                    <h1 className="text-huge" style={{ marginBottom: '2rem' }}>
                        Transformando<br />
                        <span style={{ color: '#888' }}>Problemas Complejos</span><br />
                        en Soluciones.
                    </h1>
                    <p className="text-large" style={{ marginBottom: '3rem', maxWidth: '90%' }}>
                        Ingeniero Full Stack enfocado en el análisis profundo y la eficiencia.
                    </p>
                    <a href="#projects" className="btn-primary">
                        Ver Proyecto Destacado
                        <ArrowUpRight size={20} />
                    </a>
                </div>

                <div style={{ gridColumn: 'span 5', position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <div style={{
                        position: 'relative',
                        width: '120%',
                        marginLeft: '-10%',
                        marginBottom: '-4rem' // Pull image down slightly
                    }}>
                        <img
                            src={profileImage}
                            alt="Pedro Ruiz"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                filter: 'grayscale(20%) contrast(1.1) drop-shadow(0 0 50px rgba(255,255,255,0.05))',
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
