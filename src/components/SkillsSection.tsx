'use client';

import { useState } from 'react';

const skillCategories = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Sass/SCSS', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'PHP', level: 65 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 65 },
    { name: 'MySQL', level: 70 },
    { name: 'REST APIs', level: 85 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Figma', level: 75 },
    { name: 'Webpack', level: 70 },
    { name: 'Vite', level: 80 },
    { name: 'Docker', level: 60 },
    { name: 'Vercel', level: 85 },
  ],
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const renderSkills = (skills: { name: string; level: number }[]) => {
    return skills.map((skill, index) => (
      <div key={skill.name} className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {skill.name}
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${skill.level}%`,
              animationDelay: `${index * 100}ms`,
            }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-2 shadow-lg">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}{' '}
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSkills(
                skillCategories[activeCategory as keyof typeof skillCategories]
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Always Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Technology evolves rapidly, and I&apos;m committed to continuous
            learning. I regularly explore new frameworks, attend workshops, and
            contribute to open source projects to stay at the forefront of web
            development.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AI/ML',
              'Three.js',
              'GraphQL',
              'Rust',
              'Go',
              'AWS',
              'Kubernetes',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                Currently Learning: {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
