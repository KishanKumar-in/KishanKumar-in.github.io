import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Home | Kishan Kumar</title>
        <meta name="description" content="1st year CSE student at Chandigarh University. Full-stack developer specializing in building scalable web applications with IBM." />
      </Helmet>
      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          opacity: 0.1,
          animation: 'pulse 8s infinite alternate',
          zIndex: 0
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <span className="caption" style={{ color: 'var(--accent)', display: 'block', marginBottom: 'var(--space-md)' }}>AVAILABLE FOR INTERNSHIPS & FREELANCE</span>
            <h1 className="hero-h1 text-gradient" style={{ marginBottom: 'var(--space-md)', whiteSpace: 'pre-line' }}>
              Hi, I'm Kishan Kumar.
            </h1>
            <h2 className="section-h2" style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)', fontSize: '32px' }}>
              I build things for the web & mobile.
            </h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-lg)' }}>
              1st year CSE student at Chandigarh University. Full-stack developer specializing in building scalable web applications with IBM.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginBottom: 'var(--space-xl)' }}>
              <Button variant="primary" onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}>View My Work</Button>
              <Button variant="ghost" onClick={() => window.open('/resume.pdf', '_blank')}>Download CV</Button>
            </div>
            
            <div 
              style={{ cursor: 'pointer', display: 'inline-block', animation: 'bounce 2s infinite' }}
              onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown size={32} color="var(--accent)" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Strip */}
      <section id="featured-projects" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <span className="caption" style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: 'var(--space-xs)' }}>SELECTED WORK</span>
            <h2 className="section-h2" style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-xl)' }}>Projects that ship.</h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
              <ScrollReveal>
                <Card>
                  <div style={{ height: '200px', borderRadius: '12px', marginBottom: 'var(--space-md)', overflow: 'hidden' }}>
                    <img src="/yt-shorts-mockup.jpg" alt="YouTube Shorts Generator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 className="card-h3" style={{ marginBottom: 'var(--space-xs)' }}>YouTube Shorts Generator</h3>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: 'var(--space-sm)' }}>
                    <span className="caption" style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '980px', color: 'var(--text-secondary)' }}>Python</span>
                    <span className="caption" style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '980px', color: 'var(--text-secondary)' }}>Streamlit</span>
                    <span className="caption" style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '980px', color: 'var(--text-secondary)' }}>Whisper</span>
                  </div>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                    Turn any YouTube video into multiple vertical &lt;60-second shorts automatically. Runs entirely locally using yt-dlp and OpenAI Whisper.
                  </p>
                  <a href="https://github.com/KishanKumar-in/yt-shorts-generator" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
                    View Project <ArrowRight size={16} />
                  </a>
                </Card>
              </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: 'var(--space-lg) 0', overflow: 'hidden', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 20s linear infinite', color: 'var(--white)', fontSize: '24px', fontWeight: 600, gap: 'var(--space-xl)' }}>
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Swift', 'Figma', 'Git', 'Docker', 'React', 'Next.js', 'TypeScript'].map((tech, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)' }}>
              <span>{tech}</span>
              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-secondary)', borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-h2" style={{ marginBottom: 'var(--space-lg)' }}>Let's build something great.</h2>
            <Button variant="primary" style={{ padding: '16px 32px', fontSize: '18px' }} onClick={() => navigate('/contact')}>Get in Touch</Button>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.1; }
          100% { transform: scale(1.2); opacity: 0.2; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};
