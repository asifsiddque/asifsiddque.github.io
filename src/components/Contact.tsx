import React from 'react';
import { data } from '../data';
import { Mail, MapPin, BookOpen, Github, Linkedin, Twitter, User, Network, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  User,
  Network
};

export default function Contact() {
  const { profile } = data;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-500 mb-8">
            Feel free to reach out for research collaborations, academic discussions, or any inquiries.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href={`mailto:${profile.emails[0]}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-hover transition-colors"
            >
              <Mail size={18} />
              {profile.emails[0]}
            </a>
            <a 
              href={`mailto:${profile.emails[1]}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Mail size={18} />
              {profile.emails[1]}
            </a>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Connect Online</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon] || LinkIcon;
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon size={16} />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 border border-gray-100 rounded-md text-gray-600 text-sm">
            <MapPin size={16} />
            {profile.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
