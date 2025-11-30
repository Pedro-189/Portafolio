import React from 'react';
import { Terminal, Cpu, Globe, Zap } from 'lucide-react';

const About = () => {
    return (
        <section className="section about" style={{ backgroundColor: '#161616' }}>
            <div className="container">
                <div className="grid-layout">
                    <div style={{ gridColumn: 'span 4' }}>
                        <h2 className="text-large" style={{ marginBottom: '2rem' }}>Sobre Mí</h2>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem' }}>
                            El Arquitecto
                        </p>
                    </div>

                    <div style={{ gridColumn: 'span 8' }}>
                        <p className="text-large" style={{ marginBottom: '3rem', fontWeight: 400 }}>
                            Soy <span style={{ color: '#fff', fontWeight: 700 }}>Pedro Ruiz</span>, un Ingeniero con enfoque en la lógica y la arquitectura de sistemas robustos.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <div style={{ marginBottom: '1rem', color: '#fff' }}><Terminal size={24} /></div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Filosofía</h3>
                                <p style={{ color: 'var(--secondary-text)' }}>
                                    Mi fortaleza es el análisis completo y profundo. Busco entender el <strong>porqué</strong> detrás de las herramientas antes que el cómo.
                                </p>
                            </div>

                            <div>
                                <div style={{ marginBottom: '1rem', color: '#fff' }}><Zap size={24} /></div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>Disciplina</h3>
                                <p style={{ color: 'var(--secondary-text)' }}>
                                    La consistencia y la gestión de la energía son pilares de mi trabajo.
                                </p>
                            </div>

                            <div style={{ gridColumn: 'span 2', marginTop: '1rem', borderTop: '1px solid #333', paddingTop: '2rem' }}>
                                <div style={{ marginBottom: '1rem', color: '#fff' }}><Globe size={24} /></div>
                                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>El Futuro</h3>
                                <p style={{ color: 'var(--secondary-text)' }}>
                                    Ingeniería a Escala. Foco actual: Domótica y automatización. Desarrollando soluciones para el mercados, consolidando la experiencia para el próximo desafío internacional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
