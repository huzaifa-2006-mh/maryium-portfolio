import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, Terminal, FileSpreadsheet, Search } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <div className="section-header">
        <span className="section-tag">
          <GraduationCap size={16} /> Credentials & Academic Foundation
        </span>
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">
          Academic progression in Computer Science alongside industry-recognized professional certifications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {/* Education Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GraduationCap size={20} color="#06b6d4" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#f8fafc' }}>Academic Education</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {educationData.map((edu) => (
              <div key={edu.id} className="glass-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc' }}>{edu.degree}</h4>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: edu.status === 'In Process' ? '#38bdf8' : '#34d399',
                      background: edu.status === 'In Process' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                      padding: '3px 10px',
                      borderRadius: '12px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {edu.period}
                  </span>
                </div>

                <div style={{ fontSize: '0.95rem', color: '#06b6d4', fontWeight: '600', marginBottom: '4px' }}>
                  {edu.institution}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '12px' }}>{edu.location}</div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Award size={20} color="#8b5cf6" />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#f8fafc' }}>Verified Certifications</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {certificationsData.map((cert) => {
              const icons = {
                Terminal: <Terminal size={20} color="#10b981" />,
                FileSpreadsheet: <FileSpreadsheet size={20} color="#38bdf8" />,
                Search: <Search size={20} color="#a78bfa" />,
              };

              return (
                <div key={cert.id} className="glass-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {icons[cert.icon]}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc' }}>{cert.title}</h4>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: '600',
                            color: cert.period === 'In Progress' || cert.period === 'Currently Enrolled' ? '#f59e0b' : '#34d399',
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '2px 8px',
                            borderRadius: '8px',
                          }}
                        >
                          {cert.period}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.88rem', color: '#a78bfa', fontWeight: '500', marginBottom: '8px' }}>
                        {cert.issuer}
                      </div>

                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>{cert.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
