import React from 'react';
import { Github, ExternalLink, Layers, Database, Cpu, Smartphone, Cloud, Server } from 'lucide-react';
import rControlScreenshot from '../assets/r-control-screenshot.jpg';

const Projects = () => {
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
                            border: '1px solid #333'
                        }}>
                            <img src={rControlScreenshot} alt="R-Control Dashboard" style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }} />
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
