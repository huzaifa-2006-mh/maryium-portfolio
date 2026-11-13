import React, { useState } from 'react';
import {
  Cpu, Search, Sparkles, KeyRound, BarChart3, Terminal, Share2, Link,
  GitMerge, PenTool, FileText, Monitor, Code2, Globe, Layers, Zap,
  FileSpreadsheet, MessageSquare, Users, Ear, Lightbulb
} from 'lucide-react';
import { skillsData, skillsCategories } from '../data/portfolioData';

const iconMap = {
  KeyRound: KeyRound,
  Search: Search,
  BarChart3: BarChart3,
  Terminal: Terminal,
  Share2: Share2,
  Link: Link,
  GitMerge: GitMerge,
  Sparkles: Sparkles,
  PenTool: PenTool,
  FileText: FileText,
  Monitor: Monitor,
  Code2: Code2,
  Globe: Globe,
  Layers: Layers,
  Zap: Zap,
  FileSpreadsheet: FileSpreadsheet,
  MessageSquare: MessageSquare,
  Users: Users,
  Ear: Ear,
  Lightbulb: Lightbulb,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-tag">
          <Cpu size={16} /> Core Competencies
        </span>
        <h2 className="section-title">Technical & Soft Skills</h2>
        <p className="section-subtitle">
          Comprehensive capabilities across SEO audits, keyword research, content writing, SEO analytics tools, and client communication.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '40px',
        }}
      >
        {/* Category Pill Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skillsCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  border: isActive ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isActive ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))' : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#38bdf8' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 0 15px rgba(6, 182, 212, 0.2)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '220px' }}>
          <input
            type="text"
            placeholder="Search skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 36px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              fontSize: '0.85rem',
              outline: 'none',
            }}
          />
          <Search size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>
      </div>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredSkills.map((skill, idx) => {
          const IconComponent = iconMap[skill.icon] || Sparkles;
          return (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {skill.top && (
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    color: '#06b6d4',
                    background: 'rgba(6, 182, 212, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                  }}
                >
                  ★ Core Focus
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    flexShrink: 0,
                  }}
                >
                  <IconComponent size={20} color="#38bdf8" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#f8fafc' }}>{skill.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'capitalize' }}>
                    {skill.category === 'seo' ? 'SEO Strategy' : skill.category === 'content' ? 'Content & Web' : skill.category === 'tools' ? 'Industry Tool' : skill.category === 'tech' ? 'Technical' : 'Interpersonal'}
                  </span>
                </div>
              </div>

              {/* Skill Level Progress Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '6px' }}>
                  <span>Expertise Level</span>
                  <span style={{ color: '#38bdf8', fontWeight: '600' }}>{skill.level}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 100%)',
                      borderRadius: '3px',
                      transition: 'width 0.8s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
