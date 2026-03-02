import React from 'react';
import { data } from '../data';
import { motion } from 'motion/react';
import { Github, FileText, ExternalLink } from 'lucide-react';

export default function ResearchProjects() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Research & Projects</h2>
          <p className="text-gray-500 mb-8">All academic and research projects</p>
          
          <div className="space-y-6">
            {data.research.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-5 p-5 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow bg-white"
              >
                {project.image && (
                  <div className="w-full md:w-48 h-32 flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      project.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-400 font-mono">{project.dates}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 whitespace-pre-line leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.funding && (
                    <p className="text-xs text-gray-500 mb-4">
                      <span className="font-semibold">Funding:</span> {project.funding}
                    </p>
                  )}
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-2">
                    {project.links?.github ? (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-md text-xs font-medium hover:bg-gray-800 transition-colors">
                        <Github size={14} /> GitHub
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-400 rounded-md text-xs font-medium cursor-not-allowed">
                        <Github size={14} /> GitHub (Coming soon)
                      </span>
                    )}
                    
                    {project.links?.pdf ? (
                      <a href={project.links.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 rounded-md text-xs font-medium hover:bg-red-100 transition-colors">
                        <FileText size={14} /> PDF / Report
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-400 border border-gray-100 rounded-md text-xs font-medium cursor-not-allowed">
                        <FileText size={14} /> PDF (Coming soon)
                      </span>
                    )}

                    {project.links?.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-md text-xs font-medium hover:bg-blue-100 transition-colors">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
