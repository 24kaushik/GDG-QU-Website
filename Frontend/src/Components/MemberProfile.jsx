import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { teamData } from '../data/teamMember';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaArrowLeft,
  FaShareAlt,
  FaDownload,
  FaGraduationCap,
  FaCode,
  FaTrophy,
  FaStar,
  FaExternalLinkAlt
} from 'react-icons/fa';

const colors = {
  blue: '#4285f4',
  green: '#34a853',
  yellow: '#f9ab00',
  red: '#ea4335'
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'mentors': return colors.yellow;
    case 'GDGLead': return colors.red;
    case 'teamHeads': return colors.blue;
    case 'coreTeam': return colors.green;
    default: return colors.blue;
  }
};

const MemberProfile = () => {
  const { id: routeId } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  const allMembers = [
    ...(teamData.mentors || []),
    ...(teamData.teamLead || []),
    ...(teamData.teamHeads || []),
    ...(teamData.coreTeam || [])
  ];

  const findMemberById = (id) => allMembers.find((m) => m.id === id) || null;

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const qid = search.get('id');
    const idToUse = qid || routeId;
    if (!idToUse) return;
    const found = findMemberById(parseInt(idToUse, 10));
    setMember(found);
  }, [routeId]);

  useEffect(() => { window.scrollTo(0, 0); }, [member]);

  if (!member) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4">
        <button onClick={() => navigate(-1)} className="inline-flex items-center space-x-2 mb-6 text-sm text-gray-700">
          <FaArrowLeft />
          <span>Back</span>
        </button>
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Member not found</h2>
          <p className="text-gray-600">We couldn't find the member you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="relative text-white overflow-hidden" style={{ backgroundImage: 'linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #f9ab00 50%, #34a853 75%, #4285f4 100%)' }}>
        {/* Decorative GDG accents (floating, subtle) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <span className="gdg-accent a-1" />
          <span className="gdg-accent a-2" />
          <span className="gdg-accent a-3" />
          <span className="gdg-accent a-4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button onClick={() => navigate(-1)} className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors group mb-8">
            <FaArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Team</span>
          </button>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pb-8">
              <div className="relative flex-shrink-0">
              <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform-gpu transition-transform hover:scale-105" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))' }}>
                {member.image && member.image !== ' ' ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-green-400 text-white text-4xl font-bold">{(member.name || '').split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                )}
              </div>
              <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full text-sm font-semibold shadow-lg" style={{ backgroundColor: getCategoryColor(member?.category) }}>{member?.badge}</div>
            </div>

              <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 animate-fadeInUp">{member?.name}</h1>
              <p className="text-xl text-white/90 mb-4 animate-fadeInUp" style={{ animationDelay: '0.08s' }}>{member?.position}</p>
              <p className="text-lg text-white/80 max-w-2xl mb-6 animate-fadeInUp" style={{ animationDelay: '0.14s' }}>{member?.bio}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {member?.social?.linkedin && <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"><FaLinkedin /></a>}
                {member?.social?.github && <a href={member.social.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"><FaGithub /></a>}
                {member?.social?.twitter && member.social.twitter !== '#' && <a href={member.social.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"><FaTwitter /></a>}
                {member?.social?.email && <a href={`mailto:${member.social.email}`} className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"><FaEnvelope /></a>}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-fadeInUp" style={{ animationDelay: '0.18s' }}><FaShareAlt className="w-4 h-4" /><span>Share Profile</span></button>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center space-x-2 animate-fadeInUp" style={{ animationDelay: '0.22s' }}><FaDownload className="w-4 h-4" /><span>Download CV</span></button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['about', 'projects', 'skills', 'achievements'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'about' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fadeInUp">
              <div className="flex items-center space-x-3 mb-6">
                <FaGraduationCap className="text-white w-8 h-8 bg-blue-600 p-1 rounded" />
                <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{member?.longDescription || member?.bio}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="stat-card rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #4285f4 0%, #2b7be3 100%)' }}>
                <FaCode className="w-10 h-10 mb-3" />
                <div className="stat-number text-3xl font-bold mb-1">{member?.projects?.length || 0}</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="stat-card rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #f9ab00 0%, #ffcf4a 100%)' }}>
                <FaTrophy className="w-10 h-10 mb-3 text-white/90" />
                <div className="stat-number text-3xl font-bold mb-1">{member?.achievements?.length || 0}</div>
                <div className="text-yellow-900">Achievements</div>
              </div>
              <div className="stat-card rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #34a853 0%, #2c9b49 100%)' }}>
                <FaStar className="w-10 h-10 mb-3" />
                <div className="stat-number text-3xl font-bold mb-1">{member?.skills?.length || 0}</div>
                <div className="text-green-100">Core Skills</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fadeIn">
            {member?.projects && member.projects.length > 0 ? (
              member.projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    {project.image && (
                      <div className="md:w-2/5">
                        <img src={project.image} alt={project.name} className="w-full h-64 md:h-full object-cover" />
                      </div>
                    )}
                    <div className="p-8 md:w-3/5">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name || project.title}</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">{(project.tech || []).map((tech) => (<span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{tech}</span>))}</div>
                      {project.link && (<a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"><span>View Project</span><FaExternalLinkAlt/></a>)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-2xl shadow p-8 text-center">No projects listed for this member.</div>
            )}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">{(member?.skills || []).map((s, i) => <span key={i} className="px-3 py-1 bg-gray-100 rounded-full">{s}</span>)}</div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">{(member?.achievements || []).map((a, i) => <li key={i}>{a}</li>)}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberProfile;

// Inject component-specific styles and animations (only once)
if (typeof document !== 'undefined' && !document.getElementById('member-profile-styles')) {
  const css = `
    /* simple fade/entrance animations */
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fadeInUp { animation: fadeInUp 520ms ease forwards; }

    @keyframes floatSlow { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } }
    .gdg-accent { position: absolute; border-radius: 999px; opacity: 0.12; filter: blur(12px); mix-blend-mode: screen; animation: floatSlow 6s ease-in-out infinite; }
    .gdg-accent.a-1 { width: 240px; height: 240px; left: -8%; top: 6%; background: radial-gradient(circle at 30% 30%, rgba(66,133,244,0.9), transparent 45%); }
    .gdg-accent.a-2 { width: 200px; height: 200px; right: -6%; top: 2%; background: radial-gradient(circle at 30% 30%, rgba(234,67,53,0.9), transparent 45%); animation-duration: 7.2s; }
    .gdg-accent.a-3 { width: 180px; height: 180px; left: 22%; bottom: -8%; background: radial-gradient(circle at 30% 30%, rgba(249,171,0,0.95), transparent 45%); animation-duration: 5.8s; }
    .gdg-accent.a-4 { width: 220px; height: 220px; right: 18%; bottom: 4%; background: radial-gradient(circle at 30% 30%, rgba(52,168,83,0.95), transparent 45%); animation-duration: 8.2s; }

    .stat-card { transition: transform .36s ease, box-shadow .36s ease; will-change: transform; }
    .stat-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 18px 40px rgba(0,0,0,0.18); }
    .stat-number { animation: fadeInUp 700ms ease both; }

    .project-card { transition: transform .28s ease, box-shadow .28s ease; }
    .project-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }

    /* small responsive tweak: reduce accent intensity on small screens */
    @media (max-width: 768px) {
      .gdg-accent { opacity: 0.08; filter: blur(8px); }
      .stat-card { transform: none !important; }
    }
  `;
  const el = document.createElement('style');
  el.id = 'member-profile-styles';
  el.textContent = css;
  document.head.appendChild(el);
}
