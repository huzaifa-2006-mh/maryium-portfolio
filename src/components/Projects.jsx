import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, ExternalLink, Eye, Globe } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('all');

  const filteredProjects = projectsData.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.category === projectFilter;
  });

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-tag">
          <FolderGit2 size={16} /> Portfolio Case Studies
        </span>
        <h2 className="section-title">Client Projects & Work</h2>
        <p className="section-subtitle">
          Real-world client websites optimized for organic traffic, keyword rankings, on-page architecture, and technical health during experience at Novaseeks.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
        <button
          onClick={() => setProjectFilter('all')}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '0.88rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: projectFilter === 'all' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
            background: projectFilter === 'all' ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))' : 'rgba(255, 255, 255, 0.03)',
            color: projectFilter === 'all' ? '#38bdf8' : '#94a3b8',
          }}
        >
          All Projects ({projectsData.length})
        </button>
        <button
          onClick={() => setProjectFilter('client')}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '0.88rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: projectFilter === 'client' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
            background: projectFilter === 'client' ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))' : 'rgba(255, 255, 255, 0.03)',
            color: projectFilter === 'client' ? '#38bdf8' : '#94a3b8',
          }}
        >
          Live Client Websites (7)
        </button>
        <button
          onClick={() => setProjectFilter('content')}
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '0.88rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: projectFilter === 'content' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
            background: projectFilter === 'content' ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))' : 'rgba(255, 255, 255, 0.03)',
            color: projectFilter === 'content' ? '#38bdf8' : '#94a3b8',
          }}
        >
          Content & Blog (1)
        </button>
      </div>

      {/* Projects Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Card Top Image Header */}
            <div>
              <div
                style={{
                  height: '190px',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.95) 100%)',
                  }}
                />

                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(7, 10, 18, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    color: '#38bdf8',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: '700',
                  }}
                >
                  {project.categoryLabel}
                </span>

                <button
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(7, 10, 18, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#f8fafc',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Eye size={12} color="#06b6d4" /> Case Study
                </button>
              </div>

              {/* Card Content Body */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="badge-pill">
                      {tool}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginBottom: '10px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Card Footer Buttons */}
            <div style={{ padding: '0 24px 24px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.88rem',
                }}
              >
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#10b981',
                      textDecoration: 'none',
                      fontWeight: '600',
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    <Globe size={14} /> Visit Website <ExternalLink size={12} />
                  </a>
                ) : (
                  <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Self-Initiated Blog</span>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: '#38bdf8',
                    fontWeight: '600',
                  }}
                >
                  <span>Details</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
