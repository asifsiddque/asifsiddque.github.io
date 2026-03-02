import React from 'react';
import { data } from '../data';
import { motion } from 'motion/react';

export default function Coursework() {
  return (
    <section id="coursework" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Coursework</h2>
          <p className="text-gray-500 mb-12">Courses taken at Islamic University, Kushtia</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.coursework.map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow bg-white flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md font-mono">
                    {course.code}
                  </span>
                  <span className="text-sm text-gray-400">{course.term}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{course.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
