import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Card } from '../components/Card';
import { Terminal, Database, Smartphone, Wrench, Code2, Rocket, BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const About: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Helmet>
        <title>About Me | Kishan Kumar</title>
        <meta name="description" content="Learn more about Kishan Kumar, a full-stack developer and student at Chandigarh University." />
      </Helmet>
      {/* Hero Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', alignItems: 'center' }}>
          <ScrollReveal>
            <div style={{ aspectRatio: '1/1', backgroundColor: 'var(--bg-card)', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
              {/* Placeholder for headshot */}
              <div style={{ width: '100%', height: '100%', filter: 'grayscale(100%)', transition: 'filter 0.5s ease', backgroundColor: 'var(--divider)' }} 
                onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="section-h2" style={{ marginBottom: 'var(--space-md)' }}>Hey, I'm Kishan Kumar.</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
              I'm a 1st year Computer Science student at Chandigarh University passionate about building scalable web and mobile applications. I bridge the gap between elegant design and robust engineering.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {[
                { icon: <Code2 size={20} />, text: 'Frontend & Backend Developer' },
                { icon: <Smartphone size={20} />, text: 'Mobile App Creator' },
                { icon: <Terminal size={20} />, text: 'Open Source Contributor' }
              ].map((trait, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-primary)' }}>
                  <div style={{ color: 'var(--accent)' }}>{trait.icon}</div>
                  <span className="body-regular">{trait.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-h2" style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-xl)', textAlign: 'center' }}>Technical Arsenal</h2>
          </ScrollReveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
            {[
              { cat: 'Frontend', icon: <Terminal />, tech: 'React, Next.js', prof: 'Proficient' },
              { cat: 'Backend', icon: <Database />, tech: 'Node.js, PostgreSQL', prof: 'Proficient' },
              { cat: 'Mobile', icon: <Smartphone />, tech: 'Swift, React Native', prof: 'Familiar' },
              { cat: 'Tools', icon: <Wrench />, tech: 'Git, Docker, Figma', prof: 'Proficient' }
            ].map((skill, i) => (
              <ScrollReveal key={i}>
                <Card hoverable={false} style={{ backgroundColor: 'var(--white)' }}>
                  <div style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-sm)' }}>{skill.icon}</div>
                  <h3 className="body-large" style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '4px' }}>{skill.cat}</h3>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>{skill.tech}</p>
                  <span className="caption" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-dark)', padding: '4px 12px', borderRadius: '980px' }}>
                    {skill.prof}
                  </span>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Card */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal>
            <Card style={{ padding: 'var(--space-xl)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-md)' }}>
                <div>
                  <h3 className="card-h3" style={{ marginBottom: '8px' }}>Chandigarh University</h3>
                  <p className="body-large" style={{ color: 'var(--text-secondary)' }}>BE CSE (Full Stack Development with IBM)</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p className="body-large" style={{ fontWeight: 600 }}>2026 – 2030 (1st Year)</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Data Structures', 'Algorithms', 'Web Systems', 'Operating Systems', 'Machine Learning'].map(course => (
                  <span key={course} className="caption" style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 16px', borderRadius: '980px', color: 'var(--text-secondary)' }}>
                    {course}
                  </span>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-h2" style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-xl)', textAlign: 'center' }}>My Philosophy</h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)', textAlign: 'center' }}>
            {[
              { title: 'Clean Code', icon: <Code2 size={32} />, desc: 'Writing maintainable, readable, and scalable code is my top priority.' },
              { title: 'Ship Fast', icon: <Rocket size={32} />, desc: 'I believe in rapid iteration and delivering value to users quickly.' },
              { title: 'Learn Always', icon: <BookOpen size={32} />, desc: 'Technology evolves rapidly; I embrace continuous learning.' }
            ].map((val, i) => (
              <ScrollReveal key={i}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-dark)' }}>
                  <div style={{ color: 'var(--accent)', marginBottom: 'var(--space-sm)' }}>{val.icon}</div>
                  <h3 className="card-h3" style={{ marginBottom: 'var(--space-sm)' }}>{val.title}</h3>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
