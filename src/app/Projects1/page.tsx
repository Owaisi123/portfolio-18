// pages/projects/index.tsx
import React from "react";
import TopHeader from '@/app/TopHeader/page'

const projects = [
  {
    id: 1,
    title: "To-Do List App",
    description:
      "A productivity app for managing tasks with React and Tailwind CSS.",
    image: "/images/task-app.png",
    link: "https://taskmanager.example.com",
  },
  {
    id: 2,
    title: "Calculator App",
    description:
      "A simple and responsive calculator built with React and styled with Tailwind CSS.",
    image: "/images/calculator.png",
    link: "https://calculator.example.com",
  },
  {
    id: 3,
    title: "Blog Website",
    description:
      "A sleek and responsive blog built with Next.js and Markdown for content management.",
    image: "/images/blog.png",
    link: "https://blog.example.com",
  },
];

const Projects = () => {
  return (
    
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Projects;
