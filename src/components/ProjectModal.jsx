import React from 'react';
import { X, ExternalLink, Code2, Layers, CheckCircle, BarChart2, Terminal } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              {project.tools.map((t, idx) => (
                <span key={idx} className="badge-pill" style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#38bdf8' }}>
                  {t}
                </span>
              ))}
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Project Image Banner */}
        <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '220px', marginBottom: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.9) 100%)',
            }}
          />
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#06b6d4' }}>{m.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Full Description */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc', marginBottom: '8px' }}>Project Overview</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7 }}>{project.fullDescription}</p>
        </div>

        {/* Features Bullet List */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc', marginBottom: '12px' }}>Key Architecture & Features</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.features.map((f, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Code Snippet / DAX Query Section */}
        {project.codeSnippet && (
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#38bdf8', fontSize: '0.9rem', fontWeight: '600' }}>
              <Code2 size={16} /> Data Query & Logic Snippet
            </div>
            <pre
              style={{
                background: '#070a12',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '16px',
                fontSize: '0.85rem',
                color: '#a78bfa',
                fontFamily: 'var(--font-mono)',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
              }}
            >
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Modal Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
