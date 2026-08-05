import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, BarChart2, Database, Table, Layers, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-tag">
          <FolderGit2 size={16} /> Portfolio Highlights
        </span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world data analytics dashboards, SQL Server query pipelines, and business intelligence reporting.
        </p>
      </div>

      {/* Projects Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {projectsData.map((project) => (
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
                  <Eye size={12} color="#06b6d4" /> Preview
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

            {/* Card Footer Button */}
            <div style={{ padding: '0 24px 24px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#38bdf8',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                }}
              >
                <span>View Full Case Study</span>
                <ArrowUpRight size={18} />
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
