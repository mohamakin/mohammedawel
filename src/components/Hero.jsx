import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <p className="text-purple-400 mb-4 text-xl">Hi, I'm Mohammed 👋</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Junior Software Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
              Crafting beautiful and responsive web experiences with modern technologies. 
              Passionate about turning ideas into interactive reality.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-4 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors flex items-center justify-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/mohamakin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FiGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-awel-91457018a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FiLinkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:makinhakim529@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FiMail className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('assets/img/profile2.png')] bg-cover bg-center rounded-full border-8 border-gray-800 transform hover:scale-105 transition-transform">
                {/* Add your profile image in the public folder */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;