// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
// import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
// import mongodbLogo from './assets/tech_logo/mongodb.png';
import pycharmLogo from "./assets/tech_logo/pycharm.png";
import pythonLogo from "./assets/tech_logo/python.png";
import redisLogo from "./assets/tech_logo/redis.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import celeryLogo from "./assets/tech_logo/celery.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import fastapiLogo from "./assets/tech_logo/fastapi.png";
import djangoLogo from "./assets/tech_logo/django.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import flaskLogo from "./assets/tech_logo/flask.png";

// Experience Section Logo's
import MinebeaLogo from "./assets/company_logo/Minebea.png";

// Education Section Logo's
import srmLogo from "./assets/education_logo/SRMASC-Logo.jpg";
import ajLogo from "./assets/education_logo/anjac-logo.png";

// Project Section Logo's
import fastapisLogo from "./assets/work_logo/fast_api.png";
import oldportLogo from "./assets/work_logo/old_port.png";
import vlLogo from "./assets/work_logo/virtual_learning.png";
import carbonLogo from "./assets/work_logo/carbon_emission.png";
import dsaLogo from "./assets/work_logo/python_dsa.png";
import littlelemonLogo from "./assets/work_logo/little_lemon.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      // { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", logo: djangoLogo },
      { name: "Flask", logo: flaskLogo },
      { name: "FastAPI", logo: fastapiLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript (Basics)", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
  {
    title: "Asynchronous Tasks",
    skills: [
      { name: "Celery", logo: celeryLogo },
      { name: "Redis", logo: redisLogo }, // also fits here, used as a broker
    ],
  },
  {
    title: "IDEs & Editors",
    skills: [
      { name: "VS Code", logo: vscodeLogo },
      { name: "PyCharm", logo: pycharmLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: MinebeaLogo,
    role: "I Software Design Junior Engineer",
    company: "Minebea Intec India Pvt Ltd",
    date: "January 2024 - June 2025",
    desc: "Developed and maintained scalable backend services using Python and Django. Gained hands-on experience with REST API integration, implemented microservices architecture using Celery for asynchronous tasks, optimized SQL queries, and integrated RBAC for secure user access control in a product-based agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "AJAX",
      "Python",
      "Django",
      "Celery",
      "Redis",
      "Django ORM",
      "Django Rest Framework",
      "React JS",
      "Tailwind CSS",
      "SQLite",
      "MSSQL",
    ],
  },
  
];

export const education = [
  {
    id: 0,
    img: srmLogo,
    school: "SRM Arts and Science College, Kattankulathur",
    date: "Aug 2021 - Apr 2023",
    grade: "8.4%",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from SRM Arts and Science College, Kattankulathur. During my time at SRM, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at SRM Arts and Science College has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: ajLogo,
    school: "Ayya Nadar Janaki Ammal College, Sivakasi",
    date: "Jun 2018 - Apr 2021",
    grade: "7.2%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Ayya Nadar Janaki Ammal College, Sivakasi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Ayya Nadar Janaki Ammal College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  }
];

export const projects = [
  {
    id: 0,
    title: "Fast API Tutorials",
    description:
      "Learning FastAPI – A personal repository where I’m currently learning and experimenting with FastAPI. This space will gradually include hands-on examples, practice code, and notes as I build up my understanding of creating high-performance APIs using Python and FastAPI. Still in early progress",
    image: fastapisLogo,
    tags: ["Fast API", "Python", "Web API", "Learning", "Backend Development"],
    github:
      "https://github.com/PTHARRISH/Fastapi",
    webapp: "",
  },
  {
    id: 1,
    title: "Little Lemon API",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: littlelemonLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/PTHARRISH/Coursera",
    webapp: "",
  },
  {
    id: 2,
    title: "Python DSA Notes",
    description:
      "Python DSA & Notes – A personal repository where I’m practicing Data Structures and Algorithms using Python. This space includes my solutions to LeetCode problems, Python programming exercises, and tasks focused on interview prep. I’m also jotting down quick notes and exploring some advanced Python concepts along the way. Still a work in progress.",
    image: dsaLogo,
    tags: ["Python", "Notes", "DSA", "Tasks", "Exercise"],
    github: "https://github.com/PTHARRISH/Python-Notes",
    webapp: "",
  },

  {
    id: 3,
    title: "Old Portfolio",
    description:
      "Old Portfolio – A simple personal portfolio website I created using HTML, CSS, and JavaScript. It features a responsive layout using media queries and includes a basic dark mode toggle for better user experience. This was one of my early projects while learning front-end development.",
    image: oldportLogo,
    tags: ["HTML", "CSS", "Media Query", "JavaScript"],
    github: "https://github.com/PTHARRISH/portfolio",
    webapp: "https://ptharrish.github.io/portfolio/",
  },

  {
    id: 4,
    title: "Linear Approximation Computational Complexity With Multivariant Correlation",
    description:
      "Linear Approximation Computational Complexity With Multivariant Correlation – A personal project focused on estimating carbon emissions for homes and industries using simplified linear models and multivariable correlation techniques. This tool is being built to analyze inputs like energy consumption, fuel sources, and usage patterns to predict emissions efficiently. Currently evolving as I explore ways to balance accuracy with computational efficiency for real-world sustainability applications",
    image: carbonLogo,
    tags: ["Python", "Django", "MySQL", "HTML", "CSS", "Javascript", "ML", "Decision Tree"],
    github: "https://github.com/PTHARRISH/Carbon-emission",
    webapp: "",
  },
  {
    id: 5,
    title: "Virtual Learning Platform for Visually Impaired Student",
    description:
      "Virtual Learning Platform for Visually Impaired Student – A personal initiative aimed at building an accessible virtual learning environment tailored for visually impaired students. This platform focuses on integrating audio-based navigation, screen reader support, and inclusive content delivery to enhance independent learning. Still in progress as I experiment with tools and technologies to improve usability and accessibility in digital education",
    image: vlLogo,
    tags: ["Python", "Flask","MySQL", "HTML", "CSS", "Javscript", "JQuery"],
    github: "https://github.com/PTHARRISH/Virtual-Learning-Platform",
    webapp: "",
  },
];
