import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SkillBridge
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a>
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Features</a>
            <a href="#programs" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Programs</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Contact</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-gray-200 bg-white/90 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-2 py-1">Home</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-2 py-1">About</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-2 py-1">Features</a>
              <a href="#programs" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-2 py-1">Programs</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors px-2 py-1">Contact</a>
              <button className="mx-2 mt-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full text-left">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
