import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden"
      id="hero"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-800 via-primary-900 to-primary-900 opacity-50" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div variants={itemVariants}>
          <span className="inline-block text-accent-cyan text-sm md:text-base font-semibold mb-4 px-3 py-1 bg-accent-cyan/10 rounded-full">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
        >
          Frontend & UI{' '}
          <span className="bg-gradient-to-r from-accent-cyan via-accent-emerald to-accent-violet bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
     Frontend Developer with 4+ years of experience building and maintaining responsive web applications, enterprise CMS platforms, and websites. Skilled in React.js, Angular, JavaScript, TypeScript, HTML5, CSS3, REST APIs, and Git, with hands-on experience in responsive design, cross-browser compatibility, API integration, UI debugging, and performance optimization. Experienced in web and app UI design, website design, banners, promotional creatives, and digital assets, along with WordPress development and maintenance and responsive HTML email template development. Focused on creating clean, responsive, visually engaging, and user-friendly digital experiences for both business and client projects.

        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-accent-cyan text-primary-900 font-bold rounded-lg hover:bg-accent-emerald transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-accent-cyan text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <a
            href="https://github.com/harikishorereddy98"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary-800 hover:bg-accent-cyan/20 rounded-lg transition-all duration-300 transform hover:scale-110 text-accent-cyan"
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/hari-kishore-reddy-310475185/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary-800 hover:bg-accent-cyan/20 rounded-lg transition-all duration-300 transform hover:scale-110 text-accent-cyan"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a
            href="mailto:harikishore4512@gmail.com"
            className="p-3 bg-primary-800 hover:bg-accent-cyan/20 rounded-lg transition-all duration-300 transform hover:scale-110 text-accent-cyan"
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
