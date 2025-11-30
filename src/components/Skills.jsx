import React from 'react';

const Skills = () => {
    const hardSkills = [
        "Python", "JavaScript (ES6+)", "React", "Node.js",
        "SQL / NoSQL", "AWS", "Git", "Docker"
    ];

    const softSkills = [
        { title: "Comunicación", desc: "De ideas complejas a términos simples." },
        { title: "Planificación", desc: "Gestión de proyectos y recursos." },
        { title: "Lógica", desc: "Generación de algoritmos efectivos." }
    ];

    return (
        <section className="section skills" style={{ backgroundColor: '#121212' }}>
            <div className="container">
                <div className="grid-layout">
                    <div style={{ gridColumn: 'span 4' }}>
                        <h2 className="text-large" style={{ marginBottom: '2rem' }}>Habilidades / La Competencia</h2>
                    </div>

                    <div style={{ gridColumn: 'span 8' }}>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Hard Skills</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {hardSkills.map((skill, index) => (
                                    <span key={index} style={{
                                        border: '1px solid #333',
                                        padding: '0.5rem 1.5rem',
                                        color: 'var(--secondary-text)',
                                        fontSize: '0.9rem'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Soft Skills</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                                {softSkills.map((skill, index) => (
                                    <div key={index} style={{ borderTop: '1px solid #333', paddingTop: '1rem' }}>
                                        <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>{skill.title}</h4>
                                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>{skill.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
