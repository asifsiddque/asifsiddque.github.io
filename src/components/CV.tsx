import React from 'react';
import { data } from '../data';
import { GraduationCap, Briefcase, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function CV() {
  return (
    <section id="cv" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Curriculum Vitae</h2>
              <p className="text-gray-500">Education and experience</p>
            </div>
            <a 
              href={data.profile.cvUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors shadow-sm self-start sm:self-auto"
            >
              <Download size={18} />
              Download CV (PDF)
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
                {data.cv.education.map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-gray-50"></div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-primary text-sm font-medium mb-1">{item.institution}</p>
                    <p className="text-gray-500 text-xs font-mono mb-2">{item.dates}</p>
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Briefcase className="text-primary" size={24} />
                Experience & Activities
              </h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
                {data.cv.experience.map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 ring-4 ring-gray-50"></div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-1">{item.organization}</p>
                    <p className="text-gray-500 text-xs font-mono mb-2">{item.dates}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
