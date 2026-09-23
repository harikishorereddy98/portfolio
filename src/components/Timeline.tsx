import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Senior UI/UX Developer',
    company: 'Kreatio Technologies',
    description: 'Leading frontend architecture and mentoring junior engineers',
    achievements: [
      'Architected scalable CMS platform managing 100+ global media publishers',
      'Implemented websites for Aspermont, Incisive,Ardent Alcobev and Hemming Group',
      'Optimized performance resulting in 40% faster page loads',
      'Led code reviews and technical mentoring for 3+ junior developers',
      'Built responsive HTML email templates for marketing campaigns.'
    ],
  },
  {
    year: '2021 - 2023',
    title: 'Frontend Developer',
    company: 'Kavki Technologies',
    description: 'Building responsive UIs and integrating complex API workflows',
    achievements: [
      'Developed e-commerce and corporate websites using configuration-driven and reusable UI components.',
      'Integrated RESTful APIs and GraphQL services across microservicesIntegrated REST APIs, payment gateway APIs, logistics APIs, and GraphQL services for frontend applications.',
      'Developed reusable UI components to improve consistency and reduce development effort across projects.',
      'Implemented accessibility best practices aligned with WCAG AA guidelines across web applications.',
     
    ],
  },
  {
    year: '2020 - 2021',
    title: 'Junior Frontend Developer',
    company: 'Ulagu Technologies (Whereitz)',
    description: 'Starting my journey in professional frontend development',
    achievements: [
      'Developed responsive, SEO-friendly websites with cross-browser compatibility and performance considerations',
      'Translated Figma designs into pixel-accurate, responsive web interfaces.',
      'Collaborated in an agile development environment with two-week sprint cycles',
      'Created digital banners, promotional creatives, and social media posts using Photoshop and Figma',
      'Tested and optimized web interfaces for cross-browser and multi-device compatibility.',

    ],
  },
];

export function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-8 bg-primary-800 bg-opacity-50"
      id="experience"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-emerald mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-cyan via-accent-emerald to-accent-violet opacity-30" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'} md:w-1/2 md:pr-12 md:pl-0 ${index % 2 === 1 ? 'md:pr-0 md:pl-12' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute right-0 top-2 transform translate-x-1/2 w-5 h-5 bg-accent-cyan rounded-full border-4 border-primary-900 shadow-lg" />

                <motion.div
                  whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                  className="bg-primary-900 border border-primary-700 hover:border-accent-cyan p-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-cyan/20"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent-cyan/10 rounded-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-cyan"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path></svg>
                    </div>
                    <div className="text-left">
                      <p className="text-accent-cyan text-sm font-semibold">
                        {item.year}
                      </p>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-accent-emerald font-semibold">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-left">
                    {item.description}
                  </p>

                  <ul className="space-y-2 text-left">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-gray-300">
                        <span className="text-accent-emerald font-bold">
                          ✓
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
