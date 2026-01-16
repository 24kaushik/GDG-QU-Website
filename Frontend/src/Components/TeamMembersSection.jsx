import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaCrown,
  FaUserTie,
  FaUserGraduate,
  FaUsers,
  FaShareAlt,
  FaTimes,
  FaCalendarAlt,
  FaStar,
  FaCode,
  FaExternalLinkAlt
} from "react-icons/fa";

const colors = {
  blue: "#4285f4",
  green: "#34a853",
  yellow: "#f9ab00",
  red: "#ea4335",
};

const categoryStyles = {
  mentors: { color: colors.yellow, icon: <FaCrown />, label: "Mentor" },
  teamLead: { color: colors.red, icon: <FaUserTie />, label: "Lead" },
  teamHeads: { color: colors.blue, icon: <FaUserGraduate />, label: "Head" },
  coreTeam: { color: colors.green, icon: <FaUsers />, label: "Core" },
  default: { color: colors.blue, icon: <FaUsers />, label: "Core" },
};

const socialIcons = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  email: <FaEnvelope />,
};

// --- Extended Team Data ---
const teamData = {
  mentors: [
    {
      id: 1,
      name: "Ashu Ayush",
      position: "Mentor",
      bio: "Experienced tech mentor with 5+ years in software development and team leadership.",
      fullBio: "Ashu is a seasoned software architect who has spent over half a decade building scalable cloud solutions. He is dedicated to fostering the next generation of developers through hands-on workshops and strategic career guidance. He believes in the power of 'community-led growth' and open-source contributions.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
      social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
      badge: "👑 Senior Mentor",
      skills: ["Architecture", "Node.js", "Mentorship", "Public Speaking"],
      joinedDate: "January 2021"
    },
    {
      id: 2,
      name: "Himanshu Halder",
      position: "Mentor",
      bio: "AI/ML expert passionate about mentoring students in cutting-edge technologies.",
      fullBio: "Himanshu bridges the gap between theoretical AI research and practical implementation. With a background in Data Science, he helps students navigate the complex world of neural networks and machine learning pipelines, ensuring they are industry-ready.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
      social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
      badge: "🚀 Tech Evangelist",
      skills: ["TensorFlow", "Python", "Computer Vision", "Deep Learning"],
      joinedDate: "August 2022"
    },
  ],
  teamLead: [
    {
      id: 3,
      name: "Rahul Kumar",
      position: "Team Lead",
      bio: "Leading the GDG community with vision and passion for technology innovation.",
      fullBio: "As the Team Lead, Rahul orchestrates the synergy between various departments. He is a full-stack developer by trade but a community builder by heart. Under his leadership, the GDG has seen record-breaking participation in annual hackathons and tech summits.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
      social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
      badge: "🎯 Visionary Leader",
      skills: ["Strategy", "React.js", "Product Management", "Go"],
      joinedDate: "June 2022"
    },
  ],
  teamHeads: [
    {
      id: 4,
      name: "Abhiranjan Tiwari",
      position: "Management Head",
      bio: "Expert in project management and community organization with excellent leadership skills.",
      fullBio: "Abhiranjan is the backbone of our operations. He specializes in logistics, budget management, and volunteer coordination. His ability to streamline complex event workflows ensures that every GDG meetup runs flawlessly.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
      social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
      badge: "📊 Management Pro",
      skills: ["Operations", "Budgeting", "Scrum", "Crisis Management"],
      joinedDate: "January 2023"
    },
    {
        id: 5,
        name: "Ansh Batla",
        position: "Media Head",
        bio: "Creative media strategist with expertise in digital marketing and brand building.",
        fullBio: "Ansh leads the creative visual identity of our GDG. From stunning graphics to viral social media campaigns, he ensures our message reaches every tech enthusiast in the region through modern digital storytelling.",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
        social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
        badge: "🎥 Media Maestro",
        skills: ["After Effects", "Branding", "Photography", "Marketing"],
        joinedDate: "September 2023"
      },
      {
        id: 6,
        name: "Debjit Das",
        position: "Technical Head",
        bio: "Full-stack developer with deep expertise in modern web technologies and system architecture.",
        fullBio: "Debjit oversees the technical integrity of all GDG projects. He is a code-perfectionist who advocates for clean architecture and robust CI/CD pipelines. He leads the technical workshops and reviews the core team's dev projects.",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
        social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
        badge: "💻 Tech Wizard",
        skills: ["Kubernetes", "Next.js", "AWS", "TypeScript"],
        joinedDate: "February 2023"
      },
  ],
  coreTeam: [
    {
      id: 7,
      name: "Astha Singh",
      position: "Core Team Member",
      bio: "Passionate about UI/UX design and creating beautiful user experiences.",
      fullBio: "Astha focuses on the human-centered side of technology. She believes that software should not only be functional but delightful. She leads the design sprints and maintains the GDG's design system.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
      social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
      badge: "🎨 Design Expert",
      skills: ["Figma", "User Research", "Prototyping", "Tailwind"],
      joinedDate: "May 2024"
    },
    {
        id: 8,
        name: "Mehek Saxena",
        position: "Core Team Member",
        bio: "Backend developer specializing in cloud technologies and scalable systems.",
        fullBio: "Mehek is a cloud native enthusiast who loves working on the server-side. She ensures our community applications are fast, secure, and always online using modern microservices architectures.",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop",
        social: { linkedin: "#", github: "#", twitter: "#", email: "#" },
        badge: "☁️ Cloud Specialist",
        skills: ["Docker", "Express", "PostgreSQL", "Redis"],
        joinedDate: "July 2024"
    }
    // ... Additional members would follow same structure
  ],
};

const ProfileModal = ({ member, category, onClose }) => {
  if (!member) return null;
  const { color, icon } = categoryStyles[category] || categoryStyles.default;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Glass Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white/95 backdrop-blur-2xl w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-modalIn flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Colorful Gradient Border (Top) */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-blue-500"></div>
          <div className="flex-1 bg-red-500"></div>
          <div className="flex-1 bg-yellow-500"></div>
          <div className="flex-1 bg-green-500"></div>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-all z-20 hover:rotate-90"
        >
          <FaTimes size={20} />
        </button>

        {/* Left Side: Identity Card */}
        <div className="md:w-[40%] bg-gray-50/50 p-10 flex flex-col items-center justify-center text-center border-r border-gray-100">
            <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-full blur-lg opacity-30 animate-pulse" style={{ backgroundColor: color }}></div>
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative w-44 h-44 object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
            </div>
            
            <h2 className="text-3xl font-black text-gray-900 leading-tight">{member.name}</h2>
            <div className="mt-3 flex items-center justify-center space-x-2">
                <span className="text-lg" style={{ color }}>{icon}</span>
                <p className="font-bold text-sm tracking-widest uppercase opacity-70" style={{ color }}>
                    {member.position}
                </p>
            </div>

            <div className="flex space-x-4 mt-8">
                {Object.entries(member.social).map(([platform, link]) => (
                    <a 
                        key={platform} 
                        href={link} 
                        className="p-3 bg-white rounded-2xl shadow-sm text-gray-400 hover:text-gray-900 hover:shadow-md transition-all transform hover:-translate-y-1"
                        title={platform}
                    >
                        {socialIcons[platform]}
                    </a>
                ))}
            </div>
        </div>

        {/* Right Side: Information Content */}
        <div className="md:w-[60%] p-10 overflow-y-auto custom-scrollbar">
            <div className="space-y-8">
                {/* About Section */}
                <section>
                    <div className="flex items-center space-x-2 mb-4">
                        <FaStar style={{ color }} />
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">About Me</h4>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                        {member.fullBio || member.bio}
                    </p>
                </section>

                {/* Skills/Expertise */}
                <section>
                    <div className="flex items-center space-x-2 mb-4">
                        <FaCode style={{ color }} />
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Technical Expertise</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {(member.skills || ["Innovation", "Collaboration", "Tech"]).map((skill, i) => (
                            <span 
                                key={i} 
                                className="px-4 py-2 bg-gray-100 rounded-xl text-sm font-bold text-gray-700 border border-gray-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Footer Metadata */}
                <div className="pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center text-gray-400 font-semibold text-sm bg-gray-50 px-4 py-2 rounded-full">
                        <FaCalendarAlt className="mr-2" />
                        <span>Joined {member.joinedDate || "2024"}</span>
                    </div>
                    <div className="px-5 py-2 rounded-full text-white text-xs font-black uppercase tracking-wider shadow-lg" style={{ backgroundColor: color }}>
                        {member.badge}
                    </div>
                </div>
                
                <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-colors flex items-center justify-center space-x-2 group">
                    <span>Collaborate on Projects</span>
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({
  member,
  category,
  index,
  isVisible,
  activeMember,
  setActiveMember,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { color, icon, label } =
    categoryStyles[category] || categoryStyles.default;

  return (
    <div
      className={`relative group transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        willChange: "transform, opacity",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-500 ${
          isHovered
            ? "scale-105 shadow-2xl border-opacity-100"
            : "scale-100 border-opacity-0"
        }`}
        style={{ borderColor: color }}
      >
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold z-10 flex items-center space-x-1"
          style={{ backgroundColor: color }}
        >
          {icon}
          <span>{label}</span>
        </div>

        <div className="relative h-48 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-4 left-4 flex space-x-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
            {Object.entries(member.social).map(([platform, link]) => (
              <a
                key={platform}
                href={link}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                aria-label={platform}
              >
                {socialIcons[platform]}
              </a>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 flex items-center space-x-1">
              <span style={{ color }}>●</span>
              <span>{member.position}</span>
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {member.bio}
          </p>

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
            <span className="text-xs font-medium text-gray-700">
              {member.badge}
            </span>
          </div>

          <button
            className="w-full mt-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn"
            onClick={() => setActiveMember(member)}
          >
            <span>View Profile</span>
            <FaShareAlt className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div
          className="absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ borderColor: color }}
        ></div>
      </div>

      {isHovered && (
        <>
          <div
            className="absolute -top-2 -left-2 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundColor: color,
              animation: "float 3s ease-in-out infinite",
            }}
          ></div>
          <div
            className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundColor: color,
              animation: "float 3s ease-in-out infinite 1.5s",
            }}
          ></div>
        </>
      )}
    </div>
  );
};

const TeamMembersSection = () => {
  const [activeMember, setActiveMember] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOpenModal = (member, category) => {
    setActiveMember(member);
    setActiveCategory(category);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveMember(null);
    setActiveCategory(null);
    document.body.style.overflow = 'unset';
  };

  const renderTeamSection = (category, title, icon, description) => (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-lg mb-4">
          {icon}
          <span className="text-lg font-semibold text-gray-700">{title}</span>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {teamData[category].map((member, index) => (
          <div
            key={member.id}
            className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[480px]"
          >
            <TeamMemberCard
              member={member}
              category={category}
              index={index}
              isVisible={isVisible}
              activeMember={activeMember?.id}
              setActiveMember={(m) => handleOpenModal(m, category)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative min-h-screen">
      
      {/* Profile Modal */}
      {activeMember && (
        <ProfileModal 
            member={activeMember} 
            category={activeCategory} 
            onClose={handleCloseModal} 
        />
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-200 mb-6">
            <FaUsers className="text-blue-500" />
            <span className="text-lg font-semibold text-blue-600">
              Meet the Team
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Amazing{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the passionate individuals who make our GDG community
            thrive. From mentors to core members, each bringing unique skills
            and energy.
          </p>
        </div>

        {renderTeamSection(
          "mentors",
          "Mentors",
          <FaCrown className="text-yellow-500" />,
          "Experienced guides who provide direction and mentorship to our community"
        )}

        {renderTeamSection(
          "teamLead",
          "Team Lead",
          <FaUserTie className="text-red-500" />,
          "The visionary leader guiding our community towards excellence and innovation"
        )}

        {renderTeamSection(
          "teamHeads",
          "Team Heads",
          <FaUserGraduate className="text-blue-500" />,
          "Department heads managing various aspects of our community and events"
        )}

        {renderTeamSection(
          "coreTeam",
          "Core Team",
          <FaUsers className="text-green-500" />,
          "The backbone of our community, working tirelessly to make everything happen"
        )}
      </div>

      <style jsx>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.9) translateY(40px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-modalIn {
          animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

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