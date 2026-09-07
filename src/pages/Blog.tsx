import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Card } from '../components/Card';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Building a Local YouTube Shorts Generator',
      date: 'Sep 12, 2026',
      excerpt: 'How I built an open-source tool to automatically generate vertical shorts from YouTube videos using yt-dlp, OpenAI Whisper, and ffmpeg entirely locally.',
      tags: ['Open Source', 'Python', 'AI'],
    }
  ];

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <Helmet>
        <title>Blog | Kishan Kumar</title>
        <meta name="description" content="Thoughts, tutorials, and insights on web development and software engineering." />
      </Helmet>
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <h1 className="hero-h1" style={{ marginBottom: '8px' }}>Thoughts.</h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-2xl)' }}>Writing about design, engineering, and the spaces in between.</p>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
            {articles.map((article) => (
              <ScrollReveal key={article.id}>
                <Card style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-dark)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                      <span className="caption" style={{ color: 'var(--text-secondary)' }}>{article.date}</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {article.tags.map(tag => (
                          <span key={tag} className="caption" style={{ backgroundColor: 'rgba(0,0,0,0.05)', padding: '4px 8px', borderRadius: '4px' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="card-h3" style={{ marginBottom: 'var(--space-sm)' }}>{article.title}</h3>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                      {article.excerpt}
                    </p>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
