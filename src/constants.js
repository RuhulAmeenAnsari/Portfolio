// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';



// Education Section Logo's


// Project Section Logo's

import cloudgaming from './assets/work_logo/cloudgaming.png'
import githubviewer from './assets/work_logo/githubprofile.png'
import imagefinder from './assets/work_logo/imagefinder.png'
import textUtils from './assets/work_logo/textUtils.png'
import landing from './assets/work_logo/landing.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

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

      { name: 'Java', logo: javaLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    school: "Maharishi University Of Information Technology Lucknoew",
    date: "june 2021 - june 2025",
    grade: "7.81 CGPA",
    desc: "I have completed my Bachelor's degree (B.tech) in Computer Science and Engineering from Maharishi University Of Information Technology Lucknoew. During my time at MUIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.  My experience at Maharishi University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's of Technology - (B.tech)",
  },
  {
    id: 1,
    school: "N.S. Institute",
    date: "Sept 2020 - Aug 2021",
    grade: "70%",
    desc: "I completed my Diploma in Computer Application (DCA) from N.S. Institute, Lucknow. The Diploma in Computer Application (DCA) from NS Institute, Lucknow provided a strong foundational understanding of essential computer skills and software tools used in both professional and academic environments. The course focused on practical applications and hands-on training to enhance computer literacy and digital proficiency.",
    degree: "Diploma in Computer Application - (DCA)",
  },
  {
    id: 2,
    school: "Bright Career school",
    date: "Apr 2019 - March 2020",
    grade: "60%",
    desc: "I completed my class 12 education from Bright Career School, New Haiderganj Lucknow, under the Up board.",
    degree: "UP Board(Class XII)  ",
  },
  {
    id: 3,
    school: "Bright Career school",
    date: "Apr 2017 - March 2018",
    grade: "75%",
    desc: "I completed my class 10 education from Bright Career School, New Haiderganj Lucknow, under the Up board.",
    degree: "UP Board(Class X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile viewer",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RuhulAmeenAnsari/Git-Hub-Profile-Viewer",
    img:githubviewer
  },
  {
    id: 1,
    title: "Image Finder",
    description:
      "The Image Finder App is a simple and elegant web application built using HTML, CSS, and JavaScript that allows users to search and view high-quality images from the internet. It utilizes a public API (like Unsplash or Pexels) to fetch and display images based on user queries. The app demonstrates the use of real-time API interaction, dynamic DOM manipulation, and responsive design principles.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RuhulAmeenAnsari/image-Finder",
    img:imagefinder
  },
  {
    id: 2,
    title: "Text Utils",
    description:
      "The TextUtil App is a lightweight and efficient text manipulation tool built using React.js. It offers a variety of basic text operations to help users format and analyze text with ease. This single-page application demonstrates the power of React state management, component-based architecture, and real-time UI updates.",
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/RuhulAmeenAnsari/TextUtils",
    img:textUtils
  },
  {
    id: 3,
    title: "Landing pages",
    description:
      "The Landing Page project is a responsive, visually appealing single-page website built using HTML, CSS, and JavaScript. It is designed to serve as the first impression for a product, service, personal portfolio, or business. The page emphasizes clean UI/UX design, intuitive navigation, and engaging call-to-action elements to convert visitors into users or customers. ",
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/RuhulAmeenAnsari/Landing-Pages",
    img:landing
  },
  {
    id: 4,
    title: "Cloud Gaming Website",
    description:
      "The Cloud Gaming Website is a cutting-edge platform developed using the MERN stack, designed to allow users to play high-performance games directly through their web browser without needing powerful local hardware. By streaming games from powerful cloud-based virtual machines, this application brings seamless, low-latency gaming experiences to users on any device.",
    tags: ["React js", "TailwindCSS", "JavaScript", "Node JS", "Express JS", "MongoDB"],
    github: "https://github.com/RuhulAmeenAnsari/Nexus-cloud",
    img:cloudgaming
  },
];  