// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import datacentreLogo from './assets/work_logo/datacentreLogo.png';
import moniLogo from './assets/work_logo/moni.png';
import { LiaLinkedin } from 'react-icons/lia';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Artificial Intelligence Engineer",
      company: "NIAMT,Ranchi",
      date: "1 June 2025 - 15 July 2025",
      desc: "Built a movie recommendation system using Python, Pandas, and Scikit-learn, implementing collaborative and content-based filtering techniques. The project focused on analyzing user preferences to generate personalized suggestions. Deployed the model using Streamlit with an intuitive interface.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Pycharm",
        "Jupyter Notebook",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Sarala Birla University, Ranchi",
      date: "Sept 2024 - Present",
      grade: "9.24 CGPA(now)",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Sarala Birla University, Ranchi. As a student, I am building a strong foundation in programming, web development, and computer science fundamentals. My coursework includes subjects like Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering. I actively participate in technical workshops and hands-on projects, which help me enhance my practical skills. My ongoing journey at Sarala Birla University is helping me grow both technically and professionally.",
      degree: "Bachelor of Technology - B.Tech (CSE)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Government Polytechnic College, Latehar",
      date: "Nov 2021 - May 2024",
      grade: "85.94%",
      desc: "I have completed my Diploma in Computer Science and Engineering from Government Polytechnic College, Latehar. Throughout my diploma journey, I consistently excelled in academics — being the branch topper in every semester, achieving the title of college topper four times, and securing the top position in the JUT (Jharkhand University of Technology) state-level examination once. My time at the polytechnic laid a strong foundation in computer science and technical problem-solving, shaping my dedication and passion for the field.",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Sarawati Vidya Mandir, Latehar",
      date: "Apr 2017 - March 2021",
      grade: "85.6%",
      desc: "I completed my 10th standard from Saraswati Vidya Mandir, Latehar. My schooling provided me with a solid academic foundation and instilled strong discipline, values, and curiosity that continue to guide my educational and personal growth.",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Virtual Police Station",
      description:
        "We developed a secure and user-friendly web platform that enables users to file FIRs online using Aadhaar-based OTP verification. The system allows anonymous case reporting with the option for identity verification later. Users can upload digital evidence securely, preview FIRs before submission, track case updates in real-time through a personalized dashboard, and book appointments for in-person police verification. Our aim is to make the FIR process more transparent, accessible, and secure by leveraging modern technology.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/rajkumar7654/BitHoliocs-Team",
      webapp: "@",
    },
    {
      id: 1,
      title: "Movie Recommendation System",
      description:
        "A smart movie suggestion platform built using HTML, CSS, JavaScript, and Python. The project uses similarity algorithms to recommend movies based on user preferences. Python logic was developed in Jupyter and integrated using PyCharm, offering an interactive and efficient user experience.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript", "Python", "Pycharm", "Jupyter", "Streamlit"],
      LiaLinkedin: "https://www.linkedin.com/posts/rajkumar7654_python-tmdb-recommendationsystem-ugcPost-7359536785439240192-K82T/",
      webapp: "@",
    },
    {
      id: 2,
      title: "Application Monitoring System",
      description:
        "Developed an interactive memory-based game using only HTML, CSS, and JavaScript. The game challenges users to repeat color sequences that grow progressively harder, enhancing logic and pattern recognition skills. Focused on clean UI, responsive design, and smooth user interactions.",
      image: moniLogo,
      tags: ["Java", "Spring Boot AI", "Grafana", "Prometheus", "Docker"],
      github: "https://github.com/rajkumar7654/Application_Monitoring_System/tree/main",
      webapp: "@",
    },
    {
      id: 3,
      title: "Data Centre by Cisco Packet Tracer",
      description:
      "Designed and configured a secure 3-tier Data Centre network using Cisco Packet Tracer with Core, Distribution, and Access layers. Implemented VLANs for Admin, HR, IT, Sales, and Servers with 802.1Q trunking and SVI-based inter-VLAN routing. Configured DNS, HTTP, and FTP servers along with RSTP, Extended ACLs, and Sticky MAC Port Security to enhance network security, reliability, and performance. Validated the network through 20+ test cases for secure and reliable communication across departments.",
      image: datacentreLogo,
      tags: ["Cisco Packet Tracer", "VLAN", "802.1Q", "Inter-VLAN Routing", "RSTP", "ACL", "Port Security", "DNS", "HTTP", "FTP"],
      github: "https://github.com/rajkumar7654/Data-Center-Network-Design-Using-Cisco-Packet-Tracer",
      webapp: "@",
    },
    {
      id: 4,
      title: "Simon Says Game",
      description:
        "Developed an interactive memory-based game using only HTML, CSS, and JavaScript. The game challenges users to repeat color sequences that grow progressively harder, enhancing logic and pattern recognition skills. Focused on clean UI, responsive design, and smooth user interactions.",
      image: simonLogo,
      tags: ["HTML", "CSS","JavaScript"],
      github: "https://github.com/rajkumar7654/Simon-says-game",
      webapp: "@",
    },
    {
      id: 5,
      title: "Spotify Clone",
      description:
        "Created a static clone of the Spotify web interface using HTML and CSS. Focused on replicating layout, design aesthetics, and responsive elements to provide a visually accurate user experience.",
      image: npmLogo,
      tags: ["HTMl", "CSS"],
      github: "https://github.com/rajkumar7654/SpotifyClone",
      webapp: "@",
    },
    
    
  ];  