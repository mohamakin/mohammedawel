import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Nodejs,
  Git,
  Figma,
  Python,
  TailwindCss
} from '@styled-icons/boxicons-logos';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const skills = [
    { icon: <Html5 className="w-12 h-12" />, name: 'HTML5' },
    { icon: <TailwindCss className="w-12 h-12" />, name: 'TailwindCss' },
    { icon: <Javascript className="w-12 h-12" />, name: 'JavaScript' },
    { icon: <ReactLogo className="w-12 h-12" />, name: 'React' },
    { icon: <Nodejs className="w-12 h-12" />, name: 'Node.js' },
    { icon: <Git className="w-12 h-12" />, name: 'Git' },
    { icon: <Figma className="w-12 h-12" />, name: 'Figma' },
    { icon: <Python className="w-12 h-12" />, name: 'Python' },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Technical Skills
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center"
            >
              <div className="text-purple-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-300 mb-8">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'Redux', 'MongoDB', 'Express', 'Firebase', 'Jest'].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-700 rounded-full text-gray-200 text-sm hover:bg-gray-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;