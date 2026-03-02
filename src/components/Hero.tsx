import React from 'react';
import { data } from '../data';
import { Mail, MapPin, BookOpen, Github, Linkedin, Twitter, User, Network, Link as LinkIcon, FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  User,
  Network
};

export default function Hero() {
  const { profile } = data;

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Profile Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-56 h-64 rounded-[2rem] object-cover object-top mb-6 shadow-sm border-[6px] border-[#dbeafe]"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
            <p className="text-primary font-medium mb-1">{profile.title}</p>
            <p className="text-gray-600 text-sm mb-1">{profile.institution}</p>
            <p className="text-gray-500 text-sm mb-6">{profile.department}</p>

            <div className="space-y-2 mb-6 text-sm text-gray-600 w-full">
              {profile.emails.map((email, idx) => (
                <div key={idx} className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={16} />
                  <a href={`mailto:${email}`} className="hover:text-primary transition-colors">{email}</a>
                </div>
              ))}
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={16} />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.icon] || LinkIcon;
                return (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon size={14} />
                    {social.name}
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <a 
                href={profile.cvUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors shadow-sm"
              >
                <Download size={18} />
                Download CV (PDF)
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio & News */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <p className="text-gray-700 leading-relaxed mb-8">
              {profile.bio}
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText size={16} />
                Recent News
              </h3>
              <ul className="space-y-3">
                {profile.news.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-sm">
                    <span className="text-gray-400 font-mono whitespace-nowrap">{item.date}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
