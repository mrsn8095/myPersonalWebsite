import codeecomImg from './assets/codeecom.png';
import ptpaImg from './assets/ptpa.png';
import llImg from './assets/ll.png';
import pkmImg from './assets/pkm.png';

export const personalInfo = {
  name: "Muhammed Roshan",
  title: "Freelance Web Designer & Developer",
  location: "Kerala, India",
  email: "mrsn.ofcl@gmail.com",
  phone: "+91 9778256046",
  github: "https://github.com/mrsn8095",
  linkedin: "https://www.linkedin.com/in/muhammed-roshan-musliyarakath-91040717b/",
  about: "I’m a passionate Web Designer & Developer and web enthusiast, continuously growing through self-taught and hands-on projects. With a focus on practical application, I specialize in building full-stack web solutions that combine creativity with functionality.",
  experience: [
    {
      role: "MERN Stack Developer Trainee",
      company: "Self-Learning / Freelance",
      period: "Aug 2025 – Present",
      details: [
        "Built responsive websites using HTML, CSS, and JavaScript.",
        "Developed multiple projects including website cloning, portfolios, and dynamic web apps.",
        "Currently building full-stack projects using MongoDB, Express.js, React.js, and Node.js."
      ]
    }
  ],
  skills: {
    languages: ["JavaScript", "HTML", "CSS"],
    frontend: ["React.js", "Bootstrap", "Framer Motion", "GSAP"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB"],
    tools: ["Git", "GitHub", "VS Code"]
  },
  projects: [
    {
      title: "CodeEcomm",
      description: "Codeecom is a digital solutions firm that I founded and built, focused on delivering high-performance web development, strategic SEO solutions, and modern creative design services for businesses and startups.",
      technologies: ["React.js", "MERN Stack", "Framer Motion", "SEO Optimization"],
      link: "https://codeecom.in/",
      image: codeecomImg
    },
    {
      title: "PTPA Community",
      description: "A community platform built for the expatriate community of Pandikkad town, featuring member directories and community updates. Supports multiple languages (English & മലയാളം).",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Multi-language"],
      link: "https://ptpa.codeecom.in/",
      image: ptpaImg
    },
    {
      title: "Lune Livings Preview",
      description: "Sample showcase work for interior designing company Lune Livings, featuring high-end visuals and smooth transitions.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      link: "https://preview.codeecom.in/",
      image: llImg
    },
    {
      title: "PKM Hospital",
      description: "A professional healthcare website designed with clean aesthetics and easy navigation for patients.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://mrsn8095.github.io/pkmhospital/",
      image: pkmImg
    }
  ],
  services: [
    {
      title: "Multi-lingual Development",
      description: "Breaking language barriers with websites that speak your audience's language, including English and മലയാളം."
    },
    {
      title: "Web Development",
      description: "From concept to deployment, I create powerful full-stack applications with the latest technologies."
    },
    {
      title: "UI/UX Design",
      description: "Design isn’t just about looks—it’s about experience. I craft clean, intuitive designs."
    }
  ]
};
