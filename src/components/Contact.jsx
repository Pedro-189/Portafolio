import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct mailto link
        const subject = `Nuevo mensaje de ${formData.name} desde el Portafolio`;
        const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
        const mailtoLink = `mailto:pablus189189@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        // Optional: Clear form or show success message
        // setFormData({ name: '', email: '', message: '' });
        alert('Gracias por tu mensaje. Se abrirá tu cliente de correo para enviar el email.');
    };

    return (
        <section id="contact" className="section contact" style={{ backgroundColor: '#161616' }}>
            <div className="container">
                <div className="grid-layout">
                    <div className="contact-info-col" style={{ gridColumn: 'span 5' }}>
                        <h2 className="text-large" style={{ marginBottom: '2rem' }}>Contacto</h2>
                        <p style={{ color: 'var(--secondary-text)', marginBottom: '2rem' }}>
                            ¿Listo para iniciar un proyecto o discutir arquitectura de software?
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a href="https://github.com/Pedro-189" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                                <Github size={24} /> github.com/Pedro-189
                            </a>
                            <a href="https://www.linkedin.com/in/pedro-pablo-ruiz-ya%C3%B1ez-2a6a3427b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                                <Linkedin size={24} /> linkedin.com/in/pedro-pablo-ruiz
                            </a>
                            <a href="https://instagram.com/pedro.ruiz___" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                                <Instagram size={24} /> @pedro.ruiz___
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-col" style={{ gridColumn: 'span 7' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid #333',
                                        padding: '1rem 0',
                                        color: '#fff',
                                        outline: 'none',
                                        width: '100%'
                                    }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid #333',
                                        padding: '1rem 0',
                                        color: '#fff',
                                        outline: 'none',
                                        width: '100%'
                                    }}
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Mensaje"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid #333',
                                    padding: '1rem 0',
                                    color: '#fff',
                                    outline: 'none',
                                    resize: 'none',
                                    width: '100%'
                                }}
                            ></textarea>

                            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
                                Enviar Mensaje <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
