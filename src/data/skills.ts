import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'FaCode',
    skills: [
      { name: 'Python', icon: 'SiPython', level: 90 },
      { name: 'Java', icon: 'SiOpenjdk', level: 75 },
      { name: 'C', icon: 'SiC', level: 70 },
      { name: 'JavaScript', icon: 'SiJavascript', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'FaPaintBrush',
    skills: [
      { name: 'HTML', icon: 'SiHtml5', level: 90 },
      { name: 'CSS', icon: 'SiCss3', level: 85 },
      { name: 'React', icon: 'SiReact', level: 80 },
      { name: 'Angular', icon: 'SiAngular', level: 65 },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: 'FaServer',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', level: 75 },
      { name: 'Express.js', icon: 'SiExpress', level: 70 },
    ],
  },
  {
    category: 'Databases',
    icon: 'FaDatabase',
    skills: [
      { name: 'MySQL', icon: 'SiMysql', level: 75 },
      { name: 'MongoDB', icon: 'SiMongodb', level: 70 },
    ],
  },
  {
    category: 'AI & ML',
    icon: 'FaBrain',
    skills: [
      { name: 'Machine Learning', icon: 'SiScikitlearn', level: 85 },
      { name: 'Deep Learning', icon: 'SiTensorflow', level: 80 },
      { name: 'Computer Vision', icon: 'SiOpencv', level: 75 },
      { name: 'Bioinformatics', icon: 'SiMoleculer', level: 70 },
      { name: 'Generative AI', icon: 'SiOpenai', level: 75 },
    ],
  },
  {
    category: 'Tools',
    icon: 'FaTools',
    skills: [
      { name: 'Git', icon: 'SiGit', level: 85 },
      { name: 'GitHub', icon: 'SiGithub', level: 85 },
      { name: 'VS Code', icon: 'SiVisualstudiocode', level: 90 },
      { name: 'Google Colab', icon: 'SiGooglecolab', level: 85 },
      { name: 'Jupyter', icon: 'SiJupyter', level: 80 },
    ],
  },
];
