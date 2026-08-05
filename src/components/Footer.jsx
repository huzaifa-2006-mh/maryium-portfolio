import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#04060c',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '50px 24px 30px 24px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          {/* Logo Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '1rem',
              }}
            >
              MW
            </div>
            <div>
              <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '1rem' }}>MARIUM WASEEM</div>
              <div style={{ color: '#64748b', fontSize: '0.78rem' }}>Data Analyst & SEO Content Strategist</div>
            </div>
          </div>

          {/* Quick Menu */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.85rem' }}>
            <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: '#94a3b8', textDecoration: 'none' }}>Skills</a>
            <a href="#experience" style={{ color: '#94a3b8', textDecoration: 'none' }}>Experience</a>
            <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Projects</a>
            <a href="#certifications" style={{ color: '#94a3b8', textDecoration: 'none' }}>Education</a>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#38bdf8',
              padding: '10px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Copyright divider */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.8rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} Marium Waseem. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Designed & Built with <Heart size={14} color="#ec4899" fill="#ec4899" /> in React JS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
