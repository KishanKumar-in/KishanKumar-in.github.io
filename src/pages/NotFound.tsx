import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';
import { ScrollReveal } from '@/components/ScrollReveal';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
      <Helmet>
        <title>404 - Not Found | Kishan Kumar</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      
      <div className="container">
        <ScrollReveal>
          <h1 className="hero-h1 text-gradient" style={{ marginBottom: 'var(--space-md)' }}>404</h1>
          <h2 className="section-h2" style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-md)' }}>Page Not Found</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button variant="primary" onClick={() => navigate('/')}>Return Home</Button>
        </ScrollReveal>
      </div>
    </div>
  );
};
