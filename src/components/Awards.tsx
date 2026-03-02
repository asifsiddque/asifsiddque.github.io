import React from 'react';
import { data } from '../data';
import { Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Awards & Honors</h2>
          <p className="text-gray-500 mb-12">Recognitions and achievements</p>
          
          <div className="space-y-6">
            {data.awards.map((award, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{award.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{award.location}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
