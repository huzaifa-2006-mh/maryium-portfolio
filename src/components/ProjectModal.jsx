import React from 'react';
import { X, ExternalLink, CheckCircle, Globe, Sparkles } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              <span className="badge-pill" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#38bdf8', fontWeight: '700' }}>
                {project.categoryLabel || 'SEO Project'}
              </span>
              {project.tools.map((t, idx) => (
                <span key={idx} className="badge-pill" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1' }}>
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
              flexShrink: 0,
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
              <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#06b6d4' }}>{m.value}</div>
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
          <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc', marginBottom: '12px' }}>Key Architecture & Execution</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {project.features.map((f, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy / Keyword / Snippet Section */}
        {project.strategySnippet && (
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#38bdf8', fontSize: '0.9rem', fontWeight: '600' }}>
              <Sparkles size={16} /> SEO Strategy & Target Query Blueprint
            </div>
            <pre
              style={{
                background: '#070a12',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                borderRadius: '10px',
                padding: '16px',
                fontSize: '0.85rem',
                color: '#34d399',
                fontFamily: 'var(--font-mono)',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                lineHeight: 1.6,
              }}
            >
              <code>{project.strategySnippet}</code>
            </pre>
          </div>
        )}

        {/* Modal Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Globe size={16} /> Visit Live Website <ExternalLink size={14} />
            </a>
          ) : (
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Self-Initiated Publication</span>
          )}

          <button onClick={onClose} className="btn-secondary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
