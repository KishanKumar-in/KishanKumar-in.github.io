import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Button } from '../components/Button';
import { Code, User, MessageCircle, PenTool, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Helmet>
        <title>Contact | Kishan Kumar</title>
        <meta name="description" content="Get in touch for freelance opportunities, open source collaboration, or just to say hi." />
      </Helmet>
      <ToastContainer theme="dark" position="bottom-right" />
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)' }}>
            
            {/* Left side */}
            <ScrollReveal>
              <h2 className="section-h2" style={{ marginBottom: 'var(--space-md)' }}>Say Hello.</h2>
              <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                <a href="mailto:kishan.kumar.in@outlook.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '18px' }}>
                  <Mail size={24} color="var(--accent)" />
                  kishan.kumar.in@outlook.com
                </a>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                {[
                  { icon: <Code size={24} />, link: 'https://github.com/KishanKumar-in', name: 'GitHub' },
                  { icon: <User size={24} />, link: 'https://linkedin.com/in/kishankumar', name: 'LinkedIn' },
                  { icon: <MessageCircle size={24} />, link: 'https://instagram.com/socialpostman', name: 'Instagram' },
                  { icon: <PenTool size={24} />, link: 'https://socialpostman.com', name: 'socialpostman' },
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} 
                     onMouseOver={(e) => e.currentTarget.style.color = 'var(--white)'}
                     onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                     title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Right side - Form */}
            <ScrollReveal>
              <form 
                style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                  
                  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                  window.location.href = `mailto:kishan.kumar.in@outlook.com?subject=${subject}&body=${body}`;
                  toast.success("Draft created! It should open in your email client.");
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" className="caption" style={{ color: 'var(--text-secondary)' }}>Name</label>
                  <input 
                    name="name"
                    type="text" 
                    id="name" 
                    required
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--divider)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      padding: '12px 16px',
                      fontSize: '17px',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--divider)'}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" className="caption" style={{ color: 'var(--text-secondary)' }}>Email</label>
                  <input 
                    name="email"
                    type="email"
                    id="email" 
                    required
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--divider)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      padding: '12px 16px',
                      fontSize: '17px',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--divider)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" className="caption" style={{ color: 'var(--text-secondary)' }}>Message</label>
                  <textarea 
                    name="message"
                    id="message"
                    rows={5}
                    required
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--divider)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      padding: '12px 16px',
                      fontSize: '17px',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--divider)'}
                  />
                </div>

                <Button type="submit" variant="primary" style={{ marginTop: '8px' }}>Send Message</Button>
              </form>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
};
