import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ServerIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies",
      highlights: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with focus on user experience",
      highlights: ["Figma", "Prototyping", "Wireframing", "User Testing"]
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Mobile Optimization",
      description: "Developing mobile-first solutions with seamless cross-device compatibility",
      highlights: ["Responsive Design", "PWA", "Touch Optimization", "Performance"]
    },
    {
      icon: <ServerIcon className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust and scalable backend systems",
      highlights: ["Node.js", "Express", "REST APIs", "Database Design"]
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Enhancing speed and efficiency of web applications",
      highlights: ["Lighthouse", "Caching", "Code Splitting", "Bundle Optimization"]
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Providing expert advice on technology stack and architecture",
      highlights: ["System Design", "Code Reviews", "Best Practices", "Scalability"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="services" className="py-20 bg-gray-800 px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
            What I Offer
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive services to bring your digital ideas to life
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-gray-700 rounded-xl hover:shadow-xl transition-all group"
            >
              <div className="mb-6 text-purple-400">
                <div className="p-4 bg-purple-500/10 rounded-2xl w-fit">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
              {service.highlights.map((highlight, i) => (
                  <span 
                    key={i}
                    className="px-3 py-2 bg-gray-600/50 rounded-full text-sm text-gray-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;