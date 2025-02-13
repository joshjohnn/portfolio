import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  xficient,
  gmu,
  Leidos,
  website,
  threejs,
  DoorList,
  jobit,
  blockify, 
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "AWS Cloud Practitioner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AWS AI Practitioner",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer Intern",
    companyName: "Leidos",
    icon: Leidos,
    iconBg: "#383E56",
    date: "May 2025 - August 2025",
    points: [
      "Designed and deployed a custom application using  GitLab, implementing scalable database architectures, automating CI/CD pipelines, and ensuring robust, secure software solutions through testing, debugging, and adherence to best practices.",
      "Optimized software performance by implementing RESTful APIs, designing efficient database queries, and integrating third-party tools for advanced data analytics, while leveraging Agile methodologies to deliver solutions with a focus on scalability and maintainability.",
    ],
  },
  {
    title: "Business Strategy Intern",
    companyName: "DoorList",
    icon: DoorList,
    iconBg: "#E6DEDD",
    date: "July 2024 - December 2024",
    points: [
      "Identified and engaged with student organizations, influencers, and key stakeholders to expand DoorList’s reach.",
      "Developed and executed targeted marketing campaigns, increasing app downloads and user interaction.",
      "Assisted in launching new app features and conducted user data analysis, driving growth and enhancing the user experience in a dynamic startup environment.",
    ],
  },
  {
    title: "Software Engineering Intern",
    companyName: "Xficient",
    icon: xficient,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborated with clients to implement Generative AI solutions, optimizing administrative systems for Third-Party Administrators (TPAs) and other healthcare organizations.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bioinformatics Research and Big Data Intern",
    companyName: "George Mason University",
    icon: gmu,
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Analyzed Liver and Kidney Transplant Data using Python to classify and group data to generate policy recommendations.",
      "Created Models and Graphs of Liver and Kidney Data using R.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  /*{
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
]; 

const projects: TProject[] = [
  {
    name: "This Website",
    description:
      "My personal portfolio!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
    ],
    image: website,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Django Financial Backend on AWS ECS",
    description:
      "Django-based backend to fetch, store, and backtest financial data from a public API, connecting to a PostgreSQL database to enhance data reliability by 15% and generate performance reports for informed decision-making.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/joshjohnn/django-financial-backend",
  },
  {
    name: "Blockify",
    description:
  "A simple, functional cryptocurrency trading dashboard/educational platform. Includes a web-scraping sentiment analyzer as well as real-time charts and data.",

    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: blockify,
    sourceCodeLink: "https://github.com/",
  }
  
];
export { services, technologies, experiences, testimonials, projects };

