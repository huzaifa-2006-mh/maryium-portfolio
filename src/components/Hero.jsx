import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Mail, Database, BarChart2, Search, Code, CheckCircle, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    // Create printable CV window or format print alert
    window.print();
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Lights */}
      <div className="bg-glow-blob-1" />
      <div className="bg-glow-blob-2" />

      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left Column Text */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                }}
              />
              Available for Internships & Projects
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '800',
                lineHeight: 1.1,
                marginBottom: '16px',
                letterSpacing: '-1px',
              }}
            >
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Rotating Subtitle */}
            <div
              style={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#38bdf8',
              }}
            >
              <Sparkles size={20} color="#06b6d4" />
              <span
                key={subtitleIndex}
                style={{
                  animation: 'fadeInUp 0.4s ease-out forwards',
                }}
              >
                {personalInfo.subtitles[subtitleIndex]}
              </span>
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '30px',
                maxWidth: '560px',
              }}
            >
              Computer Science student at <strong style={{ color: '#f8fafc' }}>Sir Syed University</strong> specializing in turning raw datasets into actionable insights with <strong style={{ color: '#38bdf8' }}>Power BI & SQL</strong>, complemented by hands-on <strong style={{ color: '#a78bfa' }}>SEO content strategy</strong>.
            </p>

            {/* Quick Contact Specs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '32px',
                fontSize: '0.875rem',
                color: '#94a3b8',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} color="#06b6d4" /> {personalInfo.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={16} color="#8b5cf6" /> {personalInfo.email}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} /> Contact Me
              </a>
              <button onClick={handleDownloadCV} className="btn-secondary" title="Print/Save Resume">
                <Download size={18} /> Resume
              </button>
            </div>
          </div>

          {/* Right Column Visual Showcase */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Ambient Backing Circle */}
            <div
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(139, 92, 246, 0.15) 70%, transparent 100%)',
                position: 'absolute',
                filter: 'blur(30px)',
                zIndex: 0,
              }}
            />

            {/* Hero Main Graphic Card */}
            <div
              className="glass-card-static"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '28px',
                position: 'relative',
                zIndex: 1,
                border: '1px solid rgba(6, 182, 212, 0.25)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: '#ffffff',
                    boxShadow: '0 10px 20px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  MW
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc' }}>Marium Waseem</h3>
                  <p style={{ fontSize: '0.85rem', color: '#38bdf8' }}>Data & SEO Professional</p>
                </div>
              </div>

              {/* Core Skill Pills Container */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <BarChart2 size={20} color="#06b6d4" />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#f8fafc' }}>Power BI</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Dashboards</div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Database size={20} color="#8b5cf6" />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#f8fafc' }}>SQL Server</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>T-SQL & Joins</div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Code size={20} color="#10b981" />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#f8fafc' }}>Python</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Pandas & NumPy</div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Search size={20} color="#f59e0b" />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#f8fafc' }}>SEO Strategy</div>
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Console Audit</div>
                  </div>
                </div>
              </div>

              {/* Status Verification Badge */}
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px dashed rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                }}
              >
                <CheckCircle size={16} color="#06b6d4" />
                <span>Enrolled in <strong>DigiSkills SEO</strong> & CS @ SSUET</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Stats Counter Bar */}
        <div
          className="glass-card-static"
          style={{
            marginTop: '60px',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            borderColor: 'rgba(255, 255, 255, 0.08)',
          }}
        >
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: '800',
                  color: idx % 2 === 0 ? '#38bdf8' : '#a78bfa',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
