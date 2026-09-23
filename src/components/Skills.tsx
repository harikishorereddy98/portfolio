import { motion } from 'framer-motion';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-cyan">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    title: 'Core Frontend withFrameworks & Libraries',
    description: 'Modern UI development and Web fundamentals and semantic HTML',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Angular', 'Bootstrap', 'Responsive Design', 'Cross-Browser Compatibility'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-emerald">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
      </svg>
    ),
    title: 'UI, Web & Email Design',
    description: 'Modern UI development tools',
    skills: ['Photoshop', 'Figma', 'HTML Email Templates', 'Promotional Creatives', 'Web & App UI Design'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-violet">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
    ),
    title: 'Architecture & Systems',
    description: 'Scalable backend integration',
    skills: [
      'Content Management Systems',
      'RESTful APIs',
      'GraphQL',
      'Payment Gateway APIs',
      'Logistics APIs',
      'WordPress',
      'Microservices',
      'Git & CI/CD',
    ],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-8 bg-primary-800 bg-opacity-50"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-emerald mx-auto mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-primary-900 border border-primary-700 hover:border-accent-cyan p-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="mb-4 p-4 bg-primary-800 group-hover:bg-primary-700 rounded-lg w-fit transition-colors">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                {category.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">{category.description}</p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={skillVariants}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-accent-cyan/10 to-accent-emerald/10 border border-accent-cyan/30 text-accent-cyan text-sm font-semibold rounded-full hover:border-accent-cyan/100 hover:bg-accent-cyan/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 border border-primary-700 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Key Expertise Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Frontend Development',
                description: 'Scalable solutions and modular systems design with React.js, Angular, and other modern frontend frameworks',
              },
              {
                title: 'API & Service Integration',
                description: 'Complex frontend-backend synchronization and REST API integration, payment and logistics APIs, WordPress, enterprise CMS platforms, and dynamic content management.',
              },
              {
                title: 'Performance Optimization',
                description: 'Caching strategies and asset compression for faster load times and improved user experience',
              },
              {
                title: 'Digital & Email Design',
                description: 'HTML email templates, marketing newsletters, banners, promotional creatives, and digital assets using Figma and Photoshop.',
              },
            ].map((expertise, i) => (
              <motion.div
                key={i}
                variants={skillVariants}
                whileHover={{ x: 5 }}
                className="border-l-4 border-accent-cyan pl-4 hover:border-accent-emerald transition-colors"
              >
                <h4 className="text-accent-cyan font-bold mb-2">
                  {expertise.title}
                </h4>
                <p className="text-gray-400 text-sm">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
