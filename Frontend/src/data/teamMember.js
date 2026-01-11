// import img1 from "../Assets/Ashu Ayush.jpg";
import img2 from "../Assets/Himanshu.jpg";
import img3 from "../Assets/Rahul Kumar.jpg";
import img4 from "../Assets/Abhiranjan.jpg";
import img5 from "../Assets/Debjit Das.jpg";
import img6 from "../Assets/Astha Singh.jpg";
import img7 from "../Assets/Mehak Saxena.jpg"
import img8 from "../Assets/Kanisha kumari.jpg";
import img9 from "../Assets/Kaushik Sarkar.jpg"
import img10 from "../Assets/Pravash.jpg";
import img11 from "../Assets/Rituraj.jpg";
import img12 from "../Assets/Ashish Jha.jpg";
import img13 from "../Assets/Debarghya Das.jpg";
import img14 from "../Assets/Harshit Pundir.jpg";
import img15 from "../Assets/Piyush.jpg";
import img16 from "../Assets/Priyanshu.jpg";

export const teamData = {
  mentors: [
    {
      id: 1,
      name: "Ashu Ayush",
      position: "Mentor",
      bio: "A dedicated GDG mentor known for exceptional management skills and strong expertise in cloud technologies.",
      longDescription: "Ashu Ayush is a core mentor in the GDG team, recognized for his leadership, organizational excellence, and ability to guide large technical teams with clarity and vision. With deep expertise in cloud computing, he helps students and developers build scalable, production-ready solutions. His mentorship approach focuses on strategic planning, structured learning, and fostering a collaborative environment where community members can grow technically and professionally.",
      image: " ",
      social: {
        linkedin: "https://www.linkedin.com/in/ashu-chauhan-114186286",
        github: "https://github.com/Ashuchauhan2748",
        twitter: "#",
        email: "ashuayush979@gmail.com"
      },
      badge: "☁️ Cloud & Management Mentor"
      ,
      projects: [
        {
          name: "Scalable Event Platform",
          description: "Designed a cloud-native event management platform for GDG meetups with auto-scaling and monitoring.",
          tech: ["AWS", "Docker", "Node.js"],
          link: "#"
        },
        {
          name: "Infrastructure-as-Code Templates",
          description: "Reusable IaC modules for workshop environments and student labs.",
          tech: ["Terraform", "AWS"],
          link: "#"
        }
      ],
      achievements: [
        "Led migration of community infrastructure to cloud",
        "Delivered 10+ hands-on workshops with 500+ attendees"
      ],
      skills: ["Cloud Architecture", "DevOps", "System Design"]
    },
    {
      id: 2,
      name: "Himanshu Haldar",
      position: "GDG Lead",
      bio: "GDG Lead with strong expertise in mobile development, Kotlin, and full-stack engineering, known for excellent communication and effective mentoring.",
      longDescription: "Himanshu Haldar serves as a GDG Lead, bringing a versatile skill set across mobile app development, Kotlin, and full-stack technologies. Recognized as a fast learner and effective communicator, he excels at breaking down complex technical concepts and guiding students through hands-on learning. Himanshu’s leadership style focuses on collaboration, practical problem-solving, and empowering aspiring developers to explore modern tech stacks with confidence. His ability to teach, adapt quickly, and deliver high-quality solutions makes him a cornerstone of the GDG community.",
      image: img2,
      social: {
        linkedin: "https://www.linkedin.com/in/himanshu-haldar-5b3830250/",
        github: "https://github.com/Himansh-u2000/",
        twitter: "https://x.com/HimanshuHaldar3",
        email: "himansh.0197@gmail.com"
      },
      badge: "📱 Mobile & Full-Stack Lead"
      ,
      projects: [
        {
          name: "GDG Events App",
          description: "Built a cross-platform mobile app for event schedules, registration and notifications.",
          tech: ["Kotlin", "React Native", "Firebase"],
          link: "#"
        }
      ],
      achievements: [
        "Organized campus hackathons",
        "Mentored 30+ students in mobile app development"
      ],
      skills: ["Kotlin", "Mobile Architecture", "Full-Stack Development"]
    }
  ],
  teamLead: [
    {
      id: 3,
      name: "Rahul Kumar",
      position: "Team Lead",
      bio: "Team Lead and CSE (Data Science) student with strong communication skills and expertise in data analytics, data science, and AI.",
      longDescription: "Rahul Kumar, a third-year B.Tech CSE (Data Science) student, leads the GDG team with clarity, confidence, and a strong technical foundation. His expertise spans data analytics, machine learning, and artificial intelligence, enabling him to guide the community with data-driven insights. Rahul is known for his excellent communication skills, strategic thinking, and ability to bring members together toward shared goals. His leadership focuses on fostering collaboration, organizing impactful events, and helping students explore real-world applications of AI and data science.",
      image: img3,
      social: {
        linkedin: "https://www.linkedin.com/in/rahul-kumar-53543a300/",
        github: "https://github.com/rahul17-cloud",
        twitter: "#",
        email: "rahuldeproquantum@gmail.com"
      },
      badge: "🎯 Data Science Leader"
      ,
      projects: [
        {
          name: "Student Placement Predictor",
          description: "A machine learning model to predict student placement likelihood using academic and project features.",
          tech: ["Python", "scikit-learn", "Pandas"],
          link: "#"
        },
        {
          name: "GDG Analytics Dashboard",
          description: "Interactive analytics dashboard for tracking event metrics and member engagement.",
          tech: ["React", "D3.js", "Node.js"],
          link: "#"
        }
      ],
      achievements: [
        "Published data-driven reports for community growth",
        "Led AI study group with practical case studies"
      ],
      skills: ["Data Science", "Machine Learning", "Data Visualization"]
    }
  ],
  teamHeads: [
    {
      id: 4,
      name: "Abhiranjan Tiwari",
      position: "Management Head",
      bio: "Management Head with exceptional organizational skills and the ability to coordinate requirements efficiently.",
      longDescription: "Abhiranjan Tiwari, a third-year B.Tech CSE student, serves as the Management Head of GDG. He is highly dependable and excels at coordinating resources, managing logistics, and ensuring that every event runs smoothly. Known for his strong focus on planning and execution, Abhiranjan consistently delivers results under pressure and handles community needs with precision. His proactive approach and reliability make him a key pillar in the team’s operational success.",
      image: img4,
      social: {
        linkedin: "https://www.linkedin.com/in/abhiranjan-tiwary",
        github: "https://github.com/Abhiranjan-Tiwary",
        twitter: "https://x.com/abhiranjan65291?t=WdgJJKJ8bEd4nc8e25YTyg&s=09",
        email: "abhiranjantiwary.cse@gmail.com"
      },
      badge: "📊 Operations & Management Lead"
      ,
      projects: [
        {
          name: "Event Operations Toolkit",
          description: "Standardized playbooks and tools for event planning and volunteer coordination.",
          tech: ["Google Sheets", "Zapier"],
          link: "#"
        }
      ],
      achievements: [
        "Coordinated 20+ successful events",
        "Introduced volunteer onboarding program"
      ],
      skills: ["Event Management", "Coordination", "Logistics"]
    },
    {
      id: 5,
      name: "Debjit Das",
      position: "Technical Head",
      bio: "Technical Head specializing in full-stack development, backend engineering, and high-quality coding practices.",
      longDescription: "Debjit Das, a third-year B.Tech CSE (AI/ML) student, leads the technical division of GDG with expertise across full-stack technologies. His strongest proficiency lies in backend systems, architecture design, and writing clean, efficient code. Debjit's passion for problem-solving and his ability to guide others through complex technical workflows make him an exceptional mentor. He plays a key role in shaping the technical direction of the community, supporting projects, workshops, and student engagement.",
      image: img5,
      social: {
        linkedin: "https://www.linkedin.com/in/debjit-das-b01ba52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/DebjitDebjit2004",
        twitter: "#",
        email: "cloud.deb.das2004@gmail.com"
      },
      badge: "💻 Tech & Backend Specialist"
      ,
      projects: [
        {
          name: "GDG API Suite",
          description: "Designed and implemented RESTful APIs powering community projects and internal tools.",
          tech: ["Node.js", "Express", "MongoDB"],
          link: "#"
        },
        {
          name: "Workshop Backend Templates",
          description: "Starter backend templates for students learning web development and APIs.",
          tech: ["Express", "JWT", "PostgreSQL"],
          link: "#"
        }
      ],
      achievements: [
        "Mentored junior developers in backend best practices",
        "Built scalable API services for club projects"
      ],
      skills: ["Backend Development", "APIs", "Databases"]
    }
  ],
  coreTeam: [
    {
      id: 6,
      name: "Astha Singh",
      position: "Core Team Member",
      bio: "AI/ML-focused student with strong communication skills and deep interest in artificial intelligence.",
      longDescription: "Astha Singh, a second-year B.Tech CSE (AI/ML) student, is known for her professional communication skills and growing expertise in artificial intelligence. She brings clarity and confidence to discussions, making complex AI concepts easier for peers to understand. Astha actively contributes to community learning initiatives and maintains a strong commitment to excellence in her field. Her presence adds both technical value and professionalism to the GDG team.",
      image: img6,
      social: {
        linkedin: "https://www.linkedin.com/in/astha-singh-908b49329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "#",
        twitter: "#",
        email: "asthasingh1192@gmail.com"
      },
      badge: "🤖 AI Enthusiast"
      ,
      projects: [
        {
          name: "Image Classifier Demo",
          description: "Built a small image classification pipeline and demo app for workshops.",
          tech: ["TensorFlow", "Python"],
          link: "#"
        }
      ],
      achievements: [
        "Presented AI basics at 3 meetups",
        "Helped lead ML study sessions"
      ],
      skills: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      id: 7,
      name: "Mehek Saxena",
      position: "Core Team Member",
      bio: "Data Science student with strong anchoring skills and expertise in data analytics and content management.",
      longDescription: "Mehek Saxena, a second-year B.Tech CSE (Data Science) student, brings a dynamic blend of technical knowledge and stage presence to the GDG team. She is skilled in data science and analytics, while also excelling in anchoring and event hosting. Mehek contributes significantly to GDG’s media and creative vertical, managing Instagram posts, reels, and event highlights with precision and creativity. Her ability to balance technical and media responsibilities makes her a valuable asset.",
      image: img7,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "#"
      },
      badge: "🎤 Data & Media Coordinator"
      ,
      projects: [
        {
          name: "Event Media Kit",
          description: "Created templates and assets for event promotions, social posts and reels.",
          tech: ["Canva", "Premiere Pro"],
          link: "#"
        }
      ],
      achievements: [
        "Managed social growth and engagement",
        "Produced highlight videos for events"
      ],
      skills: ["Content Creation", "Data Storytelling", "Social Media Management"]
    },
    {
      id: 8,
      name: "Kanisha Kumari",
      position: "Core Team Member",
      bio: "Frontend developer with expertise in HTML, CSS, JavaScript, and React, along with foundational backend knowledge.",
      longDescription: "Kanisha Kumari, a second-year B.Tech CSE student, is a dedicated frontend developer skilled in crafting responsive interfaces using modern web technologies. She also has foundational experience with backend tools such as Node.js and Express.js. Beyond development, Kanisha is highly organized and excels in report writing and documentation—key strengths that support GDG’s operations and project structures.",
      image: img8,
      social: {
        linkedin: "https://www.linkedin.com/in/kanisha-kumari-924618328/",
        github: "https://github.com/Kanisha-258",
        twitter: "https://x.com/Kanisha_70",
        email: "kumarikanisha96@gmail.com"
      },
      badge: "🌐 Frontend Developer"
      ,
      projects: [
        {
          name: "GDG Website Frontend",
          description: "Built and maintained the frontend for the GDG website using React and Tailwind.",
          tech: ["React", "Tailwind", "Vite"],
          link: "#"
        },
        {
          name: "UI Component Library",
          description: "Reusable components and design patterns for club web projects.",
          tech: ["React", "Storybook"],
          link: "#"
        }
      ],
      achievements: [
        "Developed website and member profile flows",
        "Implemented responsive design patterns"
      ],
      skills: ["HTML", "CSS", "React", "Tailwind"]
    },
    {
      id: 9,
      name: "Kaushik Sarkar",
      position: "Core Team Member",
      bio: "Full-stack developer with strong foundations in frontend and backend technologies, known for winning multiple internal hackathons.",
      longDescription: "Kaushik Sarkar, a second-year B.Tech CSE student, is an accomplished full-stack developer with expertise across various technologies. His consistent performance in internal hackathons showcases his creativity, problem-solving ability, and technical depth. Kaushik is also an excellent mentor, often guiding juniors through coding challenges and helping them strengthen their fundamentals. His balanced skill set and teaching ability make him a standout member of the GDG community.",
      image: img9,
      social: {
        linkedin: "https://www.linkedin.com/in/24kaushik/",
        github: "https://github.com/24kaushik",
        twitter: "https://x.com/DAZZLE_69_",
        email: "kaushik.s.contact@gmail.com"
      },
      badge: "🏆 Full-Stack Innovator"
      ,
      projects: [
        {
          name: "Hackathon Winning Project",
          description: "Led a team to build a product that won an internal hackathon.",
          tech: ["React", "Node.js", "MongoDB"],
          link: "#"
        }
      ],
      achievements: [
        "Winner — Internal Hackathon",
        "Mentored peers in full-stack topics"
      ],
      skills: ["Full-Stack Development", "Problem Solving", "Mentoring"]
    },
    {
      id: 10,
      name: "Pravash Kumar Shaw",
      position: "Core Team Member",
      bio: "AI/ML enthusiast specializing in machine learning concepts and practical model building.",
      longDescription: "Pravash Kumar Sah, a second-year B.Tech CSE (AI/ML) student, focuses on developing strong expertise in artificial intelligence and machine learning. He is deeply passionate about exploring algorithms, model training, and real-world applications of AI. Pravash plays an active role in GDG’s technical initiatives and contributes to AI-related workshops and student learning pathways.",
      image: img10,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
        email: "#"
      },
      badge: "🧠 ML Specialist"
      ,
      projects: [
        {
          name: "Model Training Pipeline",
          description: "Set up end-to-end model training and evaluation pipelines for experiments.",
          tech: ["Python", "PyTorch", "MLflow"],
          link: "#"
        }
      ],
      achievements: [
        "Presented ML demos at campus events",
        "Built reproducible training scripts"
      ],
      skills: ["Machine Learning", "Model Evaluation", "Python"]
    },
    {
      id: 11,
      name: "Rituraj Pratap Singh",
      position: "Core Team Member",
      bio: "Cybersecurity-focused CSE student with strong foundational knowledge and effective teaching skills.",
      longDescription: "Rituraj is a second-year B.Tech CSE (CSCQ) student specializing in cybersecurity. With a solid understanding of security concepts and system protection techniques, he actively contributes to awareness and learning initiatives within the community. Rituraj has a natural ability to teach, simplifying technical concepts for students and helping them develop a strong foundation in cybersecurity practices.",
      image: img11,
      social: {
        linkedin: "https://www.linkedin.com/in/rituraj-singh0001",
        github: "https://github.com/riturajsingh0001",
        twitter: "#",
        email: "singhrituraj9777@gmail.com"
      },
      badge: "🛡️ Cybersecurity Mentor"
      ,
      projects: [
        {
          name: "CTF Workshop Series",
          description: "Organized capture-the-flag style workshops to teach hands-on security techniques.",
          tech: ["Linux", "Networking", "Binary Exploitation"],
          link: "#"
        }
      ],
      achievements: [
        "Hosted multiple cybersecurity workshops",
        "Created beginner-friendly security challenges"
      ],
      skills: ["Cybersecurity", "CTF", "Systems Security"]
    },
    {
      id: 12,
      name: "Ashish Kumar Jha",
      position: "Core Team Member",
      bio: "AI/ML student skilled in management tasks, data science, and data analytics.",
      longDescription: "Aashish, a second-year B.Tech CSE (AI/ML) student, combines technical expertise with strong organizational abilities. He contributes to management workflows within GDG while also working across data science and analytics. His balanced skill set enables him to support both operational and technical aspects of the team, making him a dependable member in event planning, data projects, and collaborative tasks.",
      image: img12,
      social: {
        linkedin: "https://www.linkedin.com/in/aashish-kumar-jha-138342323/",
        github: "#",
        twitter: "#",
        email: "jhaaashishkumar645@gmail.com"
      },
      badge: "📈 Data & Management Coordinator"
      ,
      projects: [
        {
          name: "Community Data Reports",
          description: "Compiled analytics reports to measure event impact and outreach.",
          tech: ["Excel", "Google Data Studio"],
          link: "#"
        }
      ],
      achievements: [
        "Improved event attendance through data-driven outreach",
        "Introduced KPI tracking for community initiatives"
      ],
      skills: ["Data Analysis", "Management", "Reporting"]
    },
    {
      id: 13,
      name: "Debarghya Das",
      position: "Core Team Member",
      bio: "CSE student with strong expertise in cloud technologies and modern infrastructure concepts.",
      longDescription: "Debarghya, a second-year B.Tech CSE student, specializes in cloud technologies and plays an active role in guiding peers on cloud architecture and deployment fundamentals. His interest in scalable systems and modern cloud tools contributes significantly to GDG’s technical initiatives. He is committed to helping students understand cloud workflows and fostering cloud adoption through hands-on learning.",
      image: img13,
      social: {
        linkedin: "http://www.linkedin.com/in/debarghya-das-choudhury-32b4a1271",
        github: "https://github.com/Debarghya30016",
        twitter: "#",
        email: "debarghya05cs@gmail.com"
      },
      badge: "☁️ Cloud Tech Specialist"
      ,
      projects: [
        {
          name: "Cloud Cost Optimizer",
          description: "Implemented cost-saving patterns and CI/CD automation for student projects.",
          tech: ["AWS", "CI/CD"],
          link: "#"
        }
      ],
      achievements: [
        "Helped teams migrate projects to cloud environments",
        "Ran hands-on cloud labs"
      ],
      skills: ["Cloud", "Containers", "CI/CD"]
    },
    {
      id: 14,
      name: "Harshit Pundir",
      position: "Core Team Member",
      bio: "CSE student with strong expertise in Data Structures & Algorithms and deep proficiency in Python.",
      longDescription: "Harshit Pundir is a second-year B.Tech CSE student recognized for his solid command over DSA and advanced understanding of Python. His analytical mindset and problem-solving skills allow him to tackle complex challenges efficiently. Harshit frequently supports peers in strengthening their coding abilities, making him an invaluable contributor to GDG’s learning-driven culture.",
      image: img14,
      social: {
        linkedin: "https://www.linkedin.com/in/harshit-pundir-a5b112332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Harshit-pundir",
        twitter: "https://x.com/thakurharshitt0?t=n2FAxlAjrEy3xCqCxcPKPA&s=09",
        email: "harshitpundir36@gmail.com"
      },
      badge: "🐍 DSA & Python Expert"
      ,
      projects: [
        {
          name: "DSA Practice Portal",
          description: "Built a small portal for shared DSA practice problems and leaderboards.",
          tech: ["Python", "Flask"],
          link: "#"
        }
      ],
      achievements: [
        "Organized algorithm study sessions",
        "Achieved top ranks in coding contests"
      ],
      skills: ["Algorithms", "Python", "Problem Solving"]
    },
    {
      id: 15,
      name: "Piyush Singh",
      position: "Core Team Member",
      bio: "Full-stack developer with strong skills in UI/UX design and user-centered product development.",
      longDescription: "Piyush, a second-year B.Tech CSE student, is a versatile full-stack developer with a strong eye for design and user experience. His ability to balance functionality with aesthetics allows him to create clean, intuitive, and impactful digital interfaces. Piyush contributes actively to both development and design tasks, enhancing the overall quality of GDG’s projects and creative output.",
      image: img15,
      social: {
        linkedin: "https://www.linkedin.com/in/mayeonng?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/mayo-byte07",
        twitter: "#",
        email: "piyushsinghdhanwal@gmail.com"
      },
      badge: "✨ Full-Stack & UI/UX Developer"
      ,
      projects: [
        {
          name: "Design System",
          description: "Developed a lightweight design system for rapid prototyping and consistent UI.",
          tech: ["Figma", "React"],
          link: "#"
        }
      ],
      achievements: [
        "Led UI/UX workshops",
        "Improved product usability across projects"
      ],
      skills: ["UI/UX", "React", "Figma"]
    },
    {
      id: 16,
      name: "Priyanshu Srivastava",
      position: "Core Team Member",
      bio: "Full-stack developer with strong problem-solving skills and experience building scalable applications.",
      longDescription: "Priyanshu, a third-year B.Tech CSE student, brings solid expertise in full-stack development and plays an important role in GDG’s technical initiatives. He has experience building robust applications, understanding system architecture, and guiding peers through practical coding workflows. His ability to handle both frontend and backend components makes him a reliable contributor to diverse project environments.",
      image: img16,
      social: {
        linkedin: "https://www.linkedin.com/in/priyanshu-srivastava-292312ps",
        github: "https://github.com/Priyanshu-TechDeveloper",
        twitter: "#",
        email: "priyanshu.work0708@gmail.com"
      },
      badge: "🧩 Full-Stack Developer"
      ,
      projects: [
        {
          name: "Scalable Web App",
          description: "Built and deployed a scalable web application used by student groups.",
          tech: ["React", "Node.js", "Docker"],
          link: "#"
        }
      ],
      achievements: [
        "Maintained several production projects",
        "Mentored teams on scalable architecture"
      ],
      skills: ["Full-Stack", "Architecture", "DevOps"]
    }
  ]
};
