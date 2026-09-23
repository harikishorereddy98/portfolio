import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Enterprise Multi-Site CMS',
    description: 'Configuration-driven platform for managing multiple publisher sites',
    longDescription:
      'Built a scalable multi-site CMS with role-based access control supporting 100+ global media publishers. Features include dynamic UI component generation, advanced caching strategies, and GraphQL API integration.',
    category: 'CMS',
    tags: ['Angular', 'TypeScript', 'reusable UI components', 'multi-site CMS'
      
    ],
  
  },
  {
    id: '2',
    title: 'Mailfixx Email Campaign Platform',
    description: 'Reusable template builder for cross-client email campaigns',
    longDescription:
      'Developed a drag-and-drop email template builder with reusable component system. Supports multi-client layouts with sophisticated state management and real-time preview capabilities.',
    category: 'Platform',
    tags: ['Angular', 'TypeScript', 'HTML Email Templates', 'Responsive Design', 'Cross-Browser Compatibility'],
   
  },
  {
    id: '3',
    title: 'Samhitha\'s Ladies Apparel',
    description: 'Custom e-commerce platform with modular architecture',
    longDescription:
      'Built a fully responsive e-commerce application featuring product filtering, cart management, and seamless checkout flow. Implemented advanced image optimization and lazy loading.',
    category: 'E-commerce',
    tags: ['React', 'payment gateway APIs', 'REST APIs', 'logistics APIs', 'responsive design'],
   
  },
  {
    id: '4',
    title: 'Whereitz Local Search Engine',
    description: 'Advanced semantic HTML and local business listings platform',
    longDescription:
      'Developed a local search engine with advanced SEO optimization, structured data implementation, and geo-location features. Focuses on accessibility and semantic HTML best practices.',
    category: 'Search',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API', 'SEO'],
   
  },
];

const categories = ['All', 'CMS', 'Platform', 'E-commerce', 'Search'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

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
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-emerald mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          role="tablist"
          aria-label="Project categories"
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              id={`project-tab-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              role="tab"
              type="button"
              aria-selected={activeCategory === category}
              aria-controls="project-results"
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent-cyan text-primary-900'
                  : 'bg-primary-800 text-gray-300 hover:border-accent-cyan border border-primary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div
          id="project-results"
          role="tabpanel"
          aria-live="polite"
          aria-label={`${activeCategory} projects`}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group relative bg-primary-800 rounded-xl overflow-hidden border border-primary-700 hover:border-accent-cyan transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-cyan/20"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent-cyan/10 rounded-lg group-hover:bg-accent-cyan/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-cyan"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  </div>
                  <span className="text-xs font-semibold text-accent-emerald bg-accent-emerald/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">{project.longDescription}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-primary-900 border border-primary-700 text-accent-cyan rounded-full hover:border-accent-cyan transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-accent-cyan text-primary-900 font-semibold rounded-lg hover:bg-accent-emerald transition-all duration-300 ml-auto"
                    >
                      View
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
