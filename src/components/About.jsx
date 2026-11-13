import React from 'react';
import { Search, PenTool, Users, GraduationCap, Check, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const getHighlightIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Search size={22} color="#06b6d4" />;
      case 1:
        return <PenTool size={22} color="#8b5cf6" />;
      case 2:
        return <Users size={22} color="#10b981" />;
      case 3:
      default:
        return <Code2 size={22} color="#f59e0b" />;
    }
  };

  const highlightBgs = [
    'rgba(6, 182, 212, 0.1)',
    'rgba(139, 92, 246, 0.1)',
    'rgba(16, 185, 129, 0.1)',
    'rgba(245, 158, 11, 0.1)'
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-tag">
          <GraduationCap size={16} /> Professional Profile
        </span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Combining organic search strategy, technical SEO audits, and engaging content creation to grow website visibility.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
        {/* Main Bio Card */}
        <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#f8fafc', marginBottom: '16px' }}>
              Computer Science Student & SEO Specialist
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '20px' }}>
              {personalInfo.summary}
            </p>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Currently pursuing a <strong style={{ color: '#06b6d4' }}>Bachelor's in Computer Science at Sir Syed University</strong>, I integrate technical problem-solving with digital marketing expertise, backed by hands-on experience at <strong style={{ color: '#38bdf8' }}>Novaseeks</strong> (3 months) and <strong style={{ color: '#a78bfa' }}>TeamX Pakistan</strong>.
            </p>
          </div>

          <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span className="badge-pill" style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#38bdf8', borderColor: 'rgba(6, 182, 212, 0.2)' }}>
                <Check size={14} /> Organic SEO & GSC
              </span>
              <span className="badge-pill" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#a78bfa', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
                <Check size={14} /> Semrush & Ahrefs Audits
              </span>
              <span className="badge-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                <Check size={14} /> SEO Content Writing
              </span>
              <span className="badge-pill" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', borderColor: 'rgba(245, 158, 11, 0.2)' }}>
                <Check size={14} /> Client Communication
              </span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {personalInfo.bioHighlights.map((item, idx) => {
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '22px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: highlightBgs[idx % highlightBgs.length],
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    flexShrink: 0,
                  }}
                >
                  {getHighlightIcon(idx)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc', marginBottom: '6px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55 }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
