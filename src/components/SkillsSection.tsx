'use client';

const HardSkill = [
  'Microsoft Office (Word, Excel, PowerPoint)',
  'MySQL',
  'Power BI',
  'Python (Intermediate)',
  'Data Analysis',
  'Data Visualization',
  'Database Management',
  'Product Management'
];

const SoftSkill = [
  'Problem Solving',
  'Critical Thinking',
  'Public Speaking',
  'Team Work',
  'Individual',
  'Leadership',
  'Empati & Kepedulian',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hard Skill */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Hard Skill
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HardSkill.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Soft Skill
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SoftSkill.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
