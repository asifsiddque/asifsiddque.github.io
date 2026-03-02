import React, { useState } from 'react';
import { data } from '../data';
import { Star, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Publications() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Journal', 'Conference', 'Workshop', 'Preprint', 'Other'];

  const filteredPublications = activeTab === 'All' 
    ? data.publications 
    : data.publications.filter(pub => pub.type.toLowerCase() === activeTab.toLowerCase());

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'published': return 'bg-green-100 text-green-700 border-green-200';
      case 'preprint': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'under review': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'in preparation': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Publications</h2>
          <p className="text-gray-500 mb-8">Peer-reviewed papers and preprints</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredPublications.map((pub, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex justify-between items-start"
              >
                <div className="flex-1 pr-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md uppercase tracking-wider">
                      {pub.type}
                    </span>
                    {pub.status && (
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-md border ${getStatusColor(pub.status)}`}>
                        {pub.status}
                      </span>
                    )}
                    {pub.starred && <Star size={14} className="text-yellow-400 fill-yellow-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{pub.title}</h3>
                  <p className="text-gray-600 text-sm mb-1">{pub.authors}</p>
                  <p className="text-primary text-sm font-medium mb-3">{pub.venue}</p>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{pub.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center min-w-[80px] text-center border-l border-gray-100 pl-6">
                  <span className="text-2xl font-bold text-gray-900">{pub.citations}</span>
                  <span className="text-xs text-gray-500">citations</span>
                </div>
              </motion.div>
            ))}
            {filteredPublications.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-gray-300"
              >
                <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No publications yet</h3>
                <p className="text-gray-500">
                  Currently working on research in this area. Check back later for updates!
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
