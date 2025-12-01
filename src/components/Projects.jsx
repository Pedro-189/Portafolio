import React, { useState } from 'react';
import { Github, ExternalLink, Layers, Database, Cpu, Smartphone, Cloud, Server, ChevronLeft, ChevronRight } from 'lucide-react';
import rControlScreenshot from '../assets/r-control-screenshot.jpg';
import rControl2 from '../assets/r-control-2.png';
import rControl3 from '../assets/r-control-3.png';

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const projectImages = [rControlScreenshot, rControl2, rControl3];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
    };
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="text-large" style={{ marginBottom: '3rem' }}>Proyectos / La Evidencia</h2>

                {/* Main Project */}
                <div style={{
                    border: '1px solid #333',
                    padding: '2rem',
                    borderRadius: '4px',
                    backgroundColor: '#1a1a1a',
                    marginBottom: '3rem'
                }}>
                    <div className="grid-layout" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div style={{ gridColumn: 'span 6' }}>
                            <span style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                padding: '0.25rem 0.5rem',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                                display: 'inline-block',
                                letterSpacing: '0.05em'
                            }}>
                                Proyecto Principal
                            </span>
                            <h3 className="text-large" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>R-Control</h3>
                            <p style={{ color: 'var(--secondary-text)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                                Sistema de Gestión Integral para Talleres Automotrices
                            </p>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <h4 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>El Problema</h4>
                                <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    Los talleres mecánicos tradicionales sufren de una gestión operativa caótica y manual. El uso de papel, la falta de control de inventario y la desconexión con el cliente generan pérdidas financieras e ineficiencia.
                                </p>

                                <h4 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>La Solución</h4>
                                <p style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                    Plataforma SaaS multi-tenant en la nube que digitaliza y centraliza el 100% de la operación, transformando un negocio tradicional en una empresa moderna basada en datos.
                                </p>

                                <h4 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Características Clave</h4>
                                <ul style={{ color: 'var(--secondary-text)', marginBottom: '1.5rem', listStyle: 'none', paddingLeft: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><span style={{ color: '#fff' }}>•</span> Gestión Kanban</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><span style={{ color: '#fff' }}>•</span> WhatsApp API</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><span style={{ color: '#fff' }}>•</span> Control 360°</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}><span style={{ color: '#fff' }}>•</span> Multi-tenant</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Stack Tecnológico</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #333', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', color: '#ccc', background: 'rgba(255,255,255,0.05)' }}>
                                        <Layers size={14} /> React 19 / Vite
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #333', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', color: '#ccc', background: 'rgba(255,255,255,0.05)' }}>
                                        <Server size={14} /> Node.js / Express
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #333', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', color: '#ccc', background: 'rgba(255,255,255,0.05)' }}>
                                        <Database size={14} /> PostgreSQL
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #333', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', color: '#ccc', background: 'rgba(255,255,255,0.05)' }}>
                                        <Cloud size={14} /> GCP / Docker
                                    </span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>

                                <a href="https://github.com/Pedro-189/R-Control-DEMO.git" target="_blank" rel="noopener noreferrer" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 2rem',
                                    border: '1px solid #fff',
                                    color: '#fff',
                                    fontWeight: 700,
                                    transition: 'all 0.2s ease'
                                }}>
                                    Código <Github size={18} />
                                </a>
                            </div>
                        </div>

                        <div style={{
                            gridColumn: 'span 6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1a1a1a',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            border: '1px solid #333',
                            position: 'relative',
                            aspectRatio: '16/9' // Enforce consistent aspect ratio
                        }}>
                            {/* Carousel Image */}
                            <img
                                src={projectImages[currentImageIndex]}
                                alt={`R-Control Screenshot ${currentImageIndex + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover', // Cover the area
                                    objectPosition: 'top', // Crop from bottom if needed (show top)
                                    display: 'block',
                                    transition: 'opacity 0.3s ease'
                                }}
                            />

                            {/* Carousel Controls */}
                            <button
                                onClick={prevImage}
                                style={{
                                    position: 'absolute',
                                    left: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0,0,0,0.7)',
                                    color: '#fff',
                                    border: '1px solid #555',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <button
                                onClick={nextImage}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0,0,0,0.7)',
                                    color: '#fff',
                                    border: '1px solid #555',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Indicators */}
                            <div style={{
                                position: 'absolute',
                                bottom: '1rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '0.5rem',
                                zIndex: 10
                            }}>
                                {projectImages.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: index === currentImageIndex ? '#fff' : 'rgba(255,255,255,0.3)',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Projects */}
                <div className="grid-layout">
                    <div style={{ gridColumn: 'span 4', border: '1px solid #333', padding: '1.5rem' }}>
                        <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Impresora 3D Custom</h4>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Firmware modificado y diseño de piezas para alta precisión.
                        </p>

                    </div>
                    <div style={{ gridColumn: 'span 4', border: '1px solid #333', padding: '1.5rem' }}>
                        <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Script de Automatización</h4>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Python script para optimizar flujos de trabajo diarios.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
