import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || 'harikishore4512@gmail.com';
  const formEndpoint =
    import.meta.env.VITE_CONTACT_FORM_ENDPOINT ||
    `https://formsubmit.co/ajax/${recipientEmail}`;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formEndpoint) {
      setSubmitState('error');
      return;
    }

    setSubmitState('sending');
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-8"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-emerald mx-auto mb-4" />
          <p className="text-gray-300 text-lg">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-cyan">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              ),
              title: 'Email',
              value: recipientEmail,
              link: `mailto:${recipientEmail}`,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-emerald">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              ),
              title: 'Phone',
              value: '+91 9849866018',
              link: 'tel:9849866018',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-violet">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              ),
              title: 'Location',
              value: 'Banglore, India',
              
            },
          ].map((contact, i) => (
            <motion.a
              key={i}
              href={contact.link}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-primary-800 border border-primary-700 hover:border-accent-cyan p-8 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="flex justify-center mb-4 p-4 bg-primary-900 rounded-lg w-fit mx-auto">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-300 hover:text-accent-cyan transition-colors">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="bg-primary-800 border border-primary-700 p-8 md:p-12 rounded-xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-white rounded-lg focus:border-accent-cyan focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-white rounded-lg focus:border-accent-cyan focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-white rounded-lg focus:border-accent-cyan focus:outline-none transition-colors"
              placeholder="Project inquiry"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-primary-900 border border-primary-700 text-white rounded-lg focus:border-accent-cyan focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={submitState === 'sending'}
            aria-disabled={submitState === 'sending'}
            className="w-full px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-emerald text-primary-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {submitState === 'sending' ? 'Sending...' : 'Send Message'}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </motion.button>
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-center ${submitState === 'error' ? 'text-red-300' : 'text-accent-emerald'}`}
          >
            {submitState === 'success' && 'Thank you. Your message has been sent.'}
            {submitState === 'error' && 'Your message could not be sent. Please try again or email me directly.'}
          </p>
        </motion.form>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-6"
        >
          {[
            {
              name: 'GitHub',
              url: 'https://github.com/harikishorereddy98',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              ),
            },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/hari-kishore-reddy-310475185/',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              ),
            },
            {
              name: 'Email',
              url: `mailto:${recipientEmail}`,
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-primary-800 border border-primary-700 text-accent-cyan rounded-lg hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300 transform hover:scale-110"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
