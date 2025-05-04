import { Project } from '../types';

export const projects: Project[] = [
  
    
{
  id: 4,
  title: 'Deepak Kumar Portfolio Website',
  description: 'A personal portfolio website to showcase projects, skills, and professional experiences.',
  image: './images/m12.png',
  technologies: ['React.js', 'Tailwind CSS', 'Vite'],
  features: [
    'Modern and responsive design with smooth animations',
    'Project showcase with detailed descriptions and live demos',
    'About Me section highlighting professional journey and skills',
    'Integrated contact form for direct communication',
    'Cross-device compatibility and fast loading performance'
  ],
  github: 'https://',
  demo: 'https:' // Update with your live demo link if available
}
,
{
  id: 1,
  title: 'Kanban Board App',
  description: 'A web application for managing tasks using the Kanban methodology.',
  image: './images/fff.png',
  technologies: ['html', 'css ', 'Javascript'],
  features: [
    'Create, update, and delete tasks in different stages of the Kanban process',
    'Drag-and-drop functionality for moving tasks between columns',
    'User authentication for personal task management',
    'Filter tasks by priority or due date',
    'Responsive design for mobile and desktop'
  ],
  github: 'https://github.com/yourusername/kanban-board',
  demo: 'https://kanban-board-demo.netlify.app/' // Update with your live demo link
}
];