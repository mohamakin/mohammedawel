
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/mohamakin',
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohammed-awel-91457018a',
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      name: 'Email',
      url: 'mailto:makinhakim529@gmail.com',
    },
  ];

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's make it happen!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="space-y-6"
          >
            <motion.div variants={formVariants}>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Mohammed Awel"
                required
              />
            </motion.div>

            <motion.div variants={formVariants}>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="makinhakim529@gmail.com"
                required
              />
            </motion.div>

            <motion.div variants={formVariants}>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Let's build something amazing!"
                required
              ></textarea>
            </motion.div>

            <motion.div variants={formVariants}>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </motion.div>
          </motion.form>

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FiMapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-gray-400">Addis Ababa, Ethiopia</span>
                  </div>
                <div className="flex items-center space-x-4">
                  <FiMail className="w-6 h-6 text-purple-400" />
                  <a href="mailto:makinhakim529@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                    makinhakim529@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FiPhone className="w-6 h-6 text-purple-400" />
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                    +251915365618
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 rounded-lg hover:bg-white transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;