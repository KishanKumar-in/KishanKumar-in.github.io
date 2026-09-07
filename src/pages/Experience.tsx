import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Card } from '../components/Card';
import { Star, GitFork } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      role: 'Self-Taught Developer',
      company: 'Apna College',
      date: '2026 - Present',
      points: [
        'Learned HTML and CSS fundamentals from Apna College.',
        'Building foundational skills in web development.',
        'Passionate about creating modern user interfaces.'
      ],
      tags: ['HTML', 'CSS']
    }
  ];

  const repos = [
    { name: 'yt-shorts-generator', stars: 120, forks: 15, desc: 'Turn any YouTube video into multiple vertical <60-second shorts automatically.', lang: 'Python' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <Helmet>
        <title>Experience | Kishan Kumar</title>
        <meta name="description" content="My experience, timeline, and open-source contributions." />
      </Helmet>
      {/* Experience Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal>
            <h1 className="hero-h1" style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>Experience.</h1>
          </ScrollReveal>
          
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: '24px', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--divider)' }} className="timeline-line" />
            
            {experiences.map((exp, idx) => (
              <ScrollReveal key={exp.id}>
                <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: idx === experiences.length - 1 ? 0 : 'var(--space-xl)', position: 'relative' }}>
                  {/* Circle indicator */}
                  <div style={{ 
                    width: '48px', height: '48px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--divider)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, zIndex: 1
                  }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
                  </div>
                  
                  {/* Content */}
                  <div style={{ paddingTop: '8px' }}>
                    <h3 className="card-h3" style={{ marginBottom: '4px' }}>{exp.role}</h3>
                    <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                      {exp.company} <span style={{ margin: '0 8px' }}>•</span> {exp.date}
                    </p>
                    <ul style={{ color: 'var(--text-primary)', paddingLeft: '20px', marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>
                      {exp.points.map((pt, i) => <li key={i} style={{ marginBottom: '8px' }}>{pt}</li>)}
                    </ul>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {exp.tags.map(tag => (
                        <span key={tag} className="caption" style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '980px', color: 'var(--text-secondary)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-h2" style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-xl)' }}>Open Source.</h2>
          </ScrollReveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
            {repos.map((repo, i) => (
              <ScrollReveal key={i}>
                <Card style={{ backgroundColor: 'var(--white)' }}>
                  <h3 className="body-large" style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '8px' }}>{repo.name}</h3>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>{repo.desc}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={16} /> {repo.stars}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <GitFork size={16} /> {repo.forks}
                      </div>
                    </div>
                    <span className="caption" style={{ color: 'var(--text-dark)' }}>{repo.lang}</span>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
