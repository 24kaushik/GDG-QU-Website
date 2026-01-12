import React, { useState, useEffect } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaGlobe,
  FaCrown,
  FaUserTie,
  FaUserGraduate,
  FaUsers,
  FaStar,
  FaRocket,
  FaHeart,
  FaShareAlt
} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { teamData } from '../data/teamMember.js';


const TeamMembersSection = () => {
  const [activeMember, setActiveMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const colors = {
    blue: '#4285f4',
    green: '#34a853',
    yellow: '#f9ab00',
    red: '#ea4335'
  };

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const TeamMemberCard = ({ member, category, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getCategoryColor = () => {
      switch (category) {
        case 'mentors': return colors.yellow;
        case 'GDGLead': return colors.red;
        case 'teamHeads': return colors.blue;
        case 'coreTeam': return colors.green;
        default: return colors.blue;
      }
    };

    const getCategoryIcon = () => {
      switch (category) {
        case 'mentors': return <FaCrown />;
        case 'GDGLead': return <FaUserTie />;
        case 'teamHeads': return <FaUserGraduate />;
        case 'coreTeam': return <FaUsers />;
        default: return <FaUsers />;
      }
    };

    return (
      <div
        className={`relative group transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        style={{ animationDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Card */}
        <div className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden transition-all duration-500 ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
          }`} style={{
            background: isHovered ? `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%), linear-gradient(135deg, ${getCategoryColor()}22 0%, transparent 60%)` : 'linear-gradient(135deg, rgba(255,255,255,1), rgba(250,250,250,1))',
            boxShadow: isHovered ? `0 20px 50px rgba(0,0,0,0.15), inset 0 0 20px ${getCategoryColor()}11` : '0 10px 30px rgba(0,0,0,0.08)',
            border: `2px solid ${getCategoryColor()}${isHovered ? '44' : '22'}`
          }}>

          {/* Category Ribbon */}
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold z-10 flex items-center space-x-1"
            style={{ backgroundColor: getCategoryColor() }}
          >
            {getCategoryIcon()}
            <span>{category === 'GDGLead' ? 'Lead' : category === 'teamHeads' ? 'Head' : category === 'mentors' ? 'Mentor' : 'Core'}</span>
          </div>

          {/* Member Image */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Social Links - Appear on Hover */}
            <div className="absolute bottom-4 left-4 flex space-x-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
              {Object.entries(member.social).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  {platform === 'linkedin' && <FaLinkedin />}
                  {platform === 'github' && <FaGithub />}
                  {platform === 'twitter' && <FaTwitter />}
                  {platform === 'instagram' && <FaInstagram />}
                  {platform === 'email' && <FaEnvelope />}
                </a>
              ))}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Name and Position */}
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 flex items-center space-x-1">
                <span style={{ color: getCategoryColor() }}>●</span>
                <span>{member.position}</span>
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {member.bio}
            </p>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-xs font-medium text-gray-700">{member.badge}</span>
            </div>

            {/* Interactive Button */}
            <button
              className="w-full mt-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn"
              onClick={() => navigate(`/member_profile/${member.id}`)}
            >
              <span>View Profile</span>
              <FaShareAlt className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Hover Effect Border */}
          <div
            className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ borderColor: getCategoryColor() }}
          ></div>
        </div>

        {/* Floating Elements */}
        {isHovered && (
          <>
            <div
              className="absolute -top-2 -left-2 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: getCategoryColor(), animation: 'float 3s ease-in-out infinite' }}
            ></div>
            <div
              className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: getCategoryColor(), animation: 'float 3s ease-in-out infinite 1.5s' }}
            ></div>
          </>
        )}
      </div>
    );
  };

  const renderTeamSection = (category, title, icon, description) => (
    <div className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-12 relative">
        <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full border-2 shadow-lg mb-4 backdrop-blur-sm ${
          category === 'mentors' ? 'bg-yellow-50 border-yellow-300 text-yellow-700' :
          category === 'teamLead' ? 'bg-red-50 border-red-300 text-red-700' :
          category === 'teamHeads' ? 'bg-blue-50 border-blue-300 text-blue-700' :
          'bg-green-50 border-green-300 text-green-700'
        }`}>
          <span style={{ fontSize: '1.4rem' }}>{icon}</span>
          <span className="text-lg font-bold">{title}</span>
        </div>
        <p className="text-gray-700 max-w-2xl mx-auto font-medium">{description}</p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {teamData[category].map((member, index) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );

  const ContributorCard = ({ name, role, description, icon: Icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${isHovered ? 'scale-105 shadow-2xl -translate-y-2' : 'scale-100'}`}
          style={{
            boxShadow: isHovered ? '0 25px 60px rgba(66,133,244,0.2), inset 0 0 25px rgba(66,133,244,0.05)' : '0 12px 35px rgba(0,0,0,0.08)',
            border: '1px solid rgba(66,133,244,0.1)'
          }}>
          {/* Top Accent Line */}
          <div className="h-1" style={{ background: 'linear-gradient(90deg, #4285f4 0%, #ea4335 33%, #f9ab00 66%, #34a853 100%)' }}></div>

          {/* Card Content */}
          <div className="p-8">
            {/* Icon Section */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
              style={{
                background: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)',
              }}>
              <Icon className="text-2xl text-white" />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1f2937' }}>{name}</h3>

            {/* Role */}
            <p className="text-base font-semibold mb-4 flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${isHovered ? 'w-3' : 'w-2.5'}`}
                style={{
                  background: 'linear-gradient(90deg, #4285f4, #34a853)'
                }}></span>
              <span style={{ background: 'linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #f9ab00 50%, #34a853 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{role}</span>
            </p>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {description}
            </p>

            {/* Bottom Accent */}
            <div className={`flex items-center space-x-2 transition-all duration-500 transform ${isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-60'}`}>
              <span style={{ color: '#4285f4' }} className="text-xs font-medium">Learn More</span>
              <span style={{ color: '#4285f4' }} className="text-xs">→</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#d3d3d3' }}>
      {/* Animated Background Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden>
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border-2 border-transparent mb-6 backdrop-blur-sm" style={{
            background: 'linear-gradient(135deg, rgba(66,133,244,0.08) 0%, rgba(234,67,53,0.08) 25%, rgba(249,171,0,0.08) 50%, rgba(52,168,83,0.08) 100%)',
            borderImage: 'linear-gradient(135deg, #4285f4, #ea4335, #f9ab00, #34a853) 1'
          }}>
            <FaUsers className="text-blue-500" />
            <span className="text-lg font-semibold text-blue-600">Meet the Team</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Amazing <span style={{
              background: 'linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #f9ab00 50%, #34a853 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the passionate individuals who make our GDG community thrive.
            From mentors to core members, each bringing unique skills and energy.
          </p>
        </div>

        {/* Team Hierarchy */}
        {renderTeamSection(
          'mentors',
          'Mentors',
          <FaCrown className="text-yellow-500" />,
          'Experienced guides who provide direction and mentorship to our community'
        )}

        {renderTeamSection(
          'teamLead',
          'Team Lead',
          <FaUserTie className="text-red-500" />,
          'The visionary leader guiding our community towards excellence and innovation'
        )}

        {renderTeamSection(
          'teamHeads',
          'Team Heads',
          <FaUserGraduate className="text-blue-500" />,
          'Department heads managing various aspects of our community and events'
        )}

        {renderTeamSection(
          'coreTeam',
          'Core Team',
          <FaUsers className="text-green-500" />,
          'The backbone of our community, working tirelessly to make everything happen'
        )}

        {/* Contributors Section */}
        <div className="mt-24 relative">
          {/* Decorative Bubbles for Contributors Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0" aria-hidden>
            <div className="absolute w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(66,133,244,0.08) 0%, transparent 70%)', left: '-100px', top: '-50px', animation: 'bubbleFloat 20s ease-in-out infinite' }}></div>
            <div className="absolute w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(52,168,83,0.08) 0%, transparent 70%)', right: '-120px', bottom: '50px', animation: 'bubbleFloat2 22s ease-in-out infinite' }}></div>
            <div className="absolute w-56 h-56 rounded-full" style={{ background: 'radial-gradient(circle, rgba(249,171,0,0.08) 0%, transparent 70%)', left: '50%', top: '50%', animation: 'bubbleFloat 18s ease-in-out infinite' }}></div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border-2 border-transparent mb-6 backdrop-blur-sm" style={{
              background: 'linear-gradient(135deg, rgba(66,133,244,0.12) 0%, rgba(234,67,53,0.12) 25%, rgba(249,171,0,0.12) 50%, rgba(52,168,83,0.12) 100%)',
              borderImage: 'linear-gradient(135deg, #4285f4, #ea4335, #f9ab00, #34a853) 1'
            }}>
              <FaHeart className="text-red-600" />
              <span className="text-lg font-semibold text-gray-800">Contributors & Builders</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span style={{
                background: 'linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #f9ab00 50%, #34a853 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Contributors</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Special thanks to the talented individuals who contributed to building and designing our website.
            </p>
          </div>

          {/* Contributors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            <ContributorCard
              name="Debjit Das"
              role="Mentor & Advisor"
              description="Providing strategic guidance and mentorship. Ensuring excellence and guiding the community towards innovation and growth."
              icon={FaCrown}
            />
            <ContributorCard
              name="Kaushik Sarkar"
              role="Backend Technologies"
              description="Building robust backend systems using Node.js and TypeScript. Crafting scalable infrastructure for seamless performance."
              icon={FaRocket}
            />
            <ContributorCard
              name="Piyush Singh"
              role="Wall of Frames & Projects"
              description="Creating engaging visual experiences through wall of frames. Designing and orchestrating project sections and event pages with precision."
              icon={FaStar}
            />
            <ContributorCard
              name="Kanisha Kumari"
              role="Frontend Developer"
              description="Crafting beautiful user interfaces for team member and login pages. Building intuitive experiences with precision and attention to detail."
              icon={FaUserGraduate}
            />
          </div>

          {/* Thank You Message */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl p-10 text-white max-w-2xl backdrop-blur-sm border border-gray-500"
              style={{
                boxShadow: '0 15px 40px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.05)'
              }}>
              <FaHeart className="text-4xl mb-4 mx-auto text-red-400" />
              <h3 className="text-3xl font-bold mb-3">Thank You!</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Special thanks to these talented individuals who built this amazing website. Your dedication makes our GDG community shine.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(-60px) translateX(-15px); }
        }

        @keyframes bubbleFloat2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-40px) translateX(-25px); }
          66% { transform: translateY(-50px) translateX(15px); }
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          opacity: 0.06;
          filter: blur(2px);
          mix-blend-mode: multiply;
        }

        .bubble-1 { width: 300px; height: 300px; background: linear-gradient(135deg, #4285f4, #2b7be3); left: 5%; top: 10%; animation: bubbleFloat 15s ease-in-out infinite; }
        .bubble-2 { width: 250px; height: 250px; background: linear-gradient(135deg, #ea4335, #d32f2f); right: 8%; top: 20%; animation: bubbleFloat2 18s ease-in-out infinite; }
        .bubble-3 { width: 280px; height: 280px; background: linear-gradient(135deg, #f9ab00, #ffa000); left: 20%; bottom: 10%; animation: bubbleFloat 20s ease-in-out infinite; }
        .bubble-4 { width: 320px; height: 320px; background: linear-gradient(135deg, #34a853, #2e8b57); right: 15%; bottom: 15%; animation: bubbleFloat2 22s ease-in-out infinite; }
        .bubble-5 { width: 200px; height: 200px; background: linear-gradient(135deg, #4285f4, #ea4335); left: 50%; top: -5%; animation: bubbleFloat 25s ease-in-out infinite; }
        .bubble-6 { width: 220px; height: 220px; background: linear-gradient(135deg, #f9ab00, #34a853); right: 40%; bottom: -3%; animation: bubbleFloat2 28s ease-in-out infinite; }
        .bubble-7 { width: 190px; height: 190px; background: linear-gradient(135deg, #ea4335, #f9ab00); left: 60%; bottom: 5%; animation: bubbleFloat 24s ease-in-out infinite; }
        .bubble-8 { width: 270px; height: 270px; background: linear-gradient(135deg, #34a853, #4285f4); right: 5%; top: 50%; animation: bubbleFloat2 26s ease-in-out infinite; }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TeamMembersSection;