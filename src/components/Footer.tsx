import React from 'react';
import { data } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} {data.profile.name}. All rights reserved.</p>
          <p>{data.profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
