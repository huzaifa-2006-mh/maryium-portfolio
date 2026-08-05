import React from 'react';
import { Briefcase, Calendar, Award, CheckCircle2, FileText, HeartHandshake, Share2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-tag">
          <Briefcase size={16} /> Professional Journey
        </span>
        <h2 className="section-title">Work & Volunteer Experience</h2>
        <p className="section-subtitle">
          Practical engagement across SEO content creation, educational volunteering, and community social media management.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        {/* Timeline Line */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '30px',
            bottom: '30px',
            width: '2px',
            background: 'linear-gradient(180deg, #06b6d4 0%, #8b5cf6 50%, rgba(255, 255, 255, 0.1) 100%)',
          }}
          className="timeline-line"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experienceData.map((item) => {
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  marginLeft: '50px',
                  padding: '28px',
                  position: 'relative',
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-40px',
                    top: '28px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#070a12',
                    border: '3px solid #06b6d4',
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.6)',
                  }}
                />

                {/* Header info */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#06b6d4',
                        letterSpacing: '0.5px',
                        background: 'rgba(6, 182, 212, 0.1)',
                        padding: '2px 10px',
                        borderRadius: '10px',
                      }}
                    >
                      {item.type}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginTop: '6px' }}>
                      {item.role}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: '#38bdf8', fontWeight: '500' }}>{item.company}</p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.85rem',
                      color: '#94a3b8',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Calendar size={14} color="#8b5cf6" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Special Award Badge if exists */}
                {item.badge && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 14px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(234, 179, 8, 0.1))',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      color: '#fbbf24',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      marginBottom: '16px',
                    }}
                  >
                    <Award size={18} color="#f59e0b" />
                    <span>{item.badge}</span>
                  </div>
                )}

                {/* Highlights Bullet List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {item.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                      <CheckCircle2 size={16} color="#06b6d4" style={{ flexShrink: 0, marginTop: '4px' }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
