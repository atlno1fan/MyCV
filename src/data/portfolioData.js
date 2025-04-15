import { Github, Linkedin, Mail, Terminal, Code, Database, Cloud } from 'lucide-react';
import ProfileImageSrc from '../assets/Images/profile.jpg'
import { ProfileImage } from '../App';

export const skillIcons = {
  Languages: Terminal,
  Frameworks: Code,
  Cloud: Cloud,
  Tools: Database
};

export const intro = {
  title: "Yomna Salem",
  subtitle:"Software Engineer & Data Scientist",
  description: "Specialized in AI, Data Science, and Full Stack Development",
  profileImage: ProfileImageSrc,
  shortIntro: "A brief introduction...",
  detailedIntro: [
    "First detailed paragraph...",
    "Second detailed paragraph...",
    "Third detailed paragraph..."
  ],
  aboutTitle: "About Me"
}

export const skills = [
  { name: 'Python', category: 'Languages' },
  { name: 'C#', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'Prolog', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'HTML5', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },
  { name: 'MySQL', category: 'Languages' },
  { name: 'NoSQL', category: 'Languages' },
  { name: 'ReactJS', category: 'Frameworks' },
  { name: 'NextJS', category: 'Frameworks' },
  { name: 'PyTorch', category: 'Frameworks' },
  { name: 'TensorFlow', category: 'Frameworks' },
  { name: 'Keras', category: 'Frameworks' },
  { name: 'OpenCV', category: 'Frameworks' },
  { name: 'Hadoop', category: 'Tools' },
  { name: 'Spark', category: 'Tools' },
  { name: 'Hive', category: 'Tools' },
  { name: 'Pig', category: 'Tools' },
  { name: 'Microsoft SQL Server 2016', category: 'Tools' },
  { name: 'AWS Cloud Practitioner', category: 'Cloud' },
  { name: 'Microsoft Azure', category: 'Cloud' },
  { name: 'Tableau', category: 'Tools' },
  { name: 'Rapid Miner', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'Unity3D', category: 'Tools' },
  { name: 'Matlab', category: 'Tools' },
  { name: 'Android Studio', category: 'Tools' },
  { name: 'Adobe Photoshop', category: 'Tools' },
  { name: 'Adobe XD', category: 'Tools' }
];

export const experiences = [
  {
    title: 'Software Engineer',
    company: 'Outlier',
    periods: ['Aug 2024 - Present'],
    responsibilities: [
      'Offered detailed human feedback to train advanced generative AI models.',
      'Assessed and revised AI-generated code across Python, JavaScript, and TypeScript.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Institute of Tourism Research and Innovation, UNIMAS',
    periods: ['Aug 2021 - Jun 2022 (Contract Remote)', 'Aug 2020 - Aug 2021 (Part-time On-site)', 'Jan 2020 - Aug 2020 (Internship On-site)'],
    responsibilities: [
      'Created web and mobile applications using various technologies including React.js, Java, C#, .NET, and Unity.',
      'Designed application interfaces using Adobe XD and Photoshop.',
      'Tested applications and websites.'
    ],
    projects: [
      'AR and VR web and mobile applications using Unity.',
      'E-commerce websites (myEmporia) using ReactJS and .NET.',
      'Stock management systems using ReactJS and .NET.',
      'Tourism mobile application (Sarawak Travel) for the Sarawak Board of Tourism.',
      'Virtual Campus Touring Map mobile application using Java and Google Maps API.'
    ]
  }
];

export const education = [
  {
    institution: "Queen's University",
    degree: 'MSc in Data Science and Artificial Intelligence',
    periods: ['Jan 2023 - Mar 2024'],
    gpa: '4.02/4.5',
    thesis: "Words-Digest: A Long Text Summarizer for ChatGPT's Prompts"
  },
  {
    institution: 'University Malaysia Sarawak',
    degree: "Bachelor's Degree in Computer Science with Honours (Software Engineering)",
    periods: ['2017 - 2021'],
    gpa: '3.45/4.0',
    thesis: 'Improving the Accuracy of 2D Facial Detection and Recognition of Masked Faces'
  }
];

export const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/atlno1fan',
    icon: Github
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yomna-salem-8a0305141',
    icon: Linkedin
  },
  {
    platform: 'Email',
    url: 'mailto:yomnasalem01@gmail.com',
    icon: Mail
  }
];


