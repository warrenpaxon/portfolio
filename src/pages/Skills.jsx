import React from 'react';

const categorizedSkills = [
  {
    title: 'Languages',
    icon: 'devicon-python-plain',
    skills: [
      { iconClass: 'devicon-javascript-plain colored', label: 'JavaScript' },
      { iconClass: 'devicon-typescript-plain colored', label: 'TypeScript' },
      { iconClass: 'devicon-python-plain colored', label: 'Python' },
      { iconClass: 'devicon-java-plain colored', label: 'Java' },
      { iconClass: 'devicon-csharp-plain', label: 'C#' },
      { iconClass: 'devicon-cplusplus-plain colored', label: 'C++' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'devicon-react-original',
    skills: [
      { iconClass: 'devicon-react-original colored', label: 'React' },
      { iconClass: 'devicon-angularjs-plain', label: 'Angular' },
      { iconClass: 'devicon-html5-plain', label: 'HTML' },
      { iconClass: 'devicon-css3-plain', label: 'CSS' },
      { iconClass: 'devicon-tailwindcss-plain colored', label: 'Tailwind CSS' },
      { iconClass: 'devicon-bootstrap-plain colored', label: 'Bootstrap' },
      { iconClass: 'devicon-threejs-original colored', label: 'Three.js' },
    ],
  },
  {
    title: 'Backend & Server-Side',
    icon: 'devicon-nodejs-plain',
    skills: [
      { iconClass: 'devicon-nodejs-plain colored', label: 'Node.js' },
      { iconClass: 'devicon-django-plain colored', label: 'Django' },
      { iconClass: 'devicon-flask-original colored', label: 'Flask' },
      { iconClass: 'devicon-spring-plain colored', label: 'Spring Boot' },
    ],
  },
  {
    title: 'Databases',
    icon: 'devicon-azuresqldatabase-plain',
    skills: [
      { iconClass: 'devicon-mysql-plain colored', label: 'MySQL' },
      { iconClass: 'devicon-postgresql-plain colored', label: 'PostgreSQL' },
      { iconClass: 'devicon-mongodb-plain colored', label: 'MongoDB' },
    ],
  },
  {
    title: 'Testing & QA',
    icon: 'devicon-postman-plain',
    skills: [
      { iconClass: 'devicon-jest-plain', label: 'Jest' },
      { iconClass: 'devicon-mocha-plain', label: 'Mocha' },
      { iconClass: 'devicon-cypressio-plain', label: 'Cypress' },
      { iconClass: 'devicon-selenium-original', label: 'Selenium' },
      { iconClass: 'devicon-postman-plain colored', label: 'Postman' },
    ],
  },
  {
    title: 'CI/CD & DevOps',
    icon: 'devicon-docker-plain',
    skills: [
      { iconClass: 'devicon-jenkins-line colored', label: 'Jenkins' },
      { iconClass: 'devicon-git-plain colored', label: 'Git' },
      { iconClass: 'devicon-github-original colored', label: 'GitHub' },
      { iconClass: 'devicon-docker-plain colored', label: 'Docker' },
    ],
  }
];

const Skills = () => {
  return (
    <section className="min-h-screen pt-24 pb-24 px-24 py-10 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-extrabold text-center mb-12">Skills</h1>
      <div className="space-y-8">
        {categorizedSkills.map((category, idx) => (
          <div
            key={idx}
            className="bg-white/10 dark:bg-gray-800/20 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4 px-20">
              <i className={`${category.icon} text-2xl text-blue-500`}></i>
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-10 pt-10 pb-10">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-1 text-center text-sm"
                >
                  {skill.iconClass ? (
                    <i className={`${skill.iconClass} text-2xl`}></i>
                  ) : (
                    <div className="w-6 h-6" /> // blank space for alignment
                  )}
                  <span className="text-xs sm:text-sm">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;