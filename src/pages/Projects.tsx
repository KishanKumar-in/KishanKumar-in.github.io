import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Code, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const projectsData = [
  { 
    id: 1, 
    title: 'YouTube Shorts Generator', 
    category: 'Open Source', 
    tags: ['Python', 'Streamlit', 'ffmpeg', 'Whisper'], 
    desc: 'Turn any YouTube video into multiple vertical <60-second shorts automatically. Runs entirely locally using yt-dlp and OpenAI Whisper.',
    githubLink: 'https://github.com/KishanKumar-in/yt-shorts-generator' 
  }
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web' | 'App' | 'Open Source'>('All');

  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Helmet>
        <title>Projects | Kishan Kumar</title>
        <meta name="description" content="Explore my latest projects and web applications." />
      </Helmet>
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <h1 className="hero-h1" style={{ marginBottom: 'var(--space-lg)' }}>My Work.</h1>
            
            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-2xl)', flexWrap: 'wrap' }}>
              {(['All', 'Web', 'App', 'Open Source'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '980px',
                    fontSize: '17px',
                    backgroundColor: filter === tab ? 'var(--white)' : 'rgba(255,255,255,0.08)',
                    color: filter === tab ? 'var(--bg-primary)' : 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry-style Grid (Simulated with CSS Grid for simplicity, though real masonry needs JS or specific CSS) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: 'var(--space-lg)' }}>
            {filteredProjects.map((project) => (
              <ScrollReveal key={project.id}>
                <div 
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    borderRadius: '20px', 
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: '4/3'
                  }}
                  className="project-card"
                >
                  {/* Image */}
                  <img src="/yt-shorts-mockup.jpg" alt="Project Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="project-image" />
                  
                  {/* Overlay */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, left: 0, right: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                    padding: 'var(--space-xl) var(--space-md) var(--space-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}>
                    <h3 className="card-h3" style={{ marginBottom: '8px' }}>{project.title}</h3>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                      {project.tags.map(tag => (
                        <span key={tag} className="caption" style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '4px 12px', borderRadius: '980px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                      {project.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                      <a href={(project as any).githubLink || "#"} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--white)', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                        <Code size={18} /> Code
                      </a>
                      <a href="#" style={{ color: 'var(--white)', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
      
      <style>{`
        .project-card:hover .project-image {
          transform: scale(1.03);
        }
        @media (max-width: 768px) {
          .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
