import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiCoffee } from 'react-icons/fi';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FiCode className="w-5 h-5" />, items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', icon: <FiServer className="w-5 h-5" />, items: ['Node.js', 'Python', 'REST APIs', 'MongoDB'] },
    { name: 'Tools', icon: <FiTool className="w-5 h-5" />, items: ['Git', 'Docker'] },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl  font-bold text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
          Selam, My Name is Mohammed Awel I'am Junior  developer with 2+ years of experience building digital solutions.
            Passionate about creating efficient, scalable applications with great user experiences.
            When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
          </p>
        </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-3">
                    {skill.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Personal Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What I Do</h3>
              <p className="text-gray-600 mb-4">
                I specialize in building Website and full-stack web applications with modern technologies.
                From concept to deployment, I ensure applications are performant, maintainable,
                and deliver real business value.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <FiCoffee className="w-6 h-6 text-indigo-600" />
                <span>1M+ lines of code written</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beyond Coding</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                 <span className="text-indigo-600">🏋️</span>
                  <span className="text-gray-600">Fitness</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-600">📖</span>
                  <span className="text-gray-600">Reciting Quaran</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-600">📚</span>
                  <span className="text-gray-600">Reading</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-indigo-600">🌍</span>
                  <span className="text-gray-600">Travel</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
