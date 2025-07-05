import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Star, Clock, Users } from 'lucide-react';

const Suggestions = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete React Development Bootcamp',
      description: 'Master React from fundamentals to advanced concepts including hooks, context, and state management with real-world projects.',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 15420,
      rating: 4.9,
      featured: true
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      description: 'Learn the core concepts of JavaScript including ES6+ features, async programming, and modern development practices.',
      level: 'Beginner',
      duration: '8 weeks',
      students: 8750,
      rating: 4.8
    },
    {
      id: 3,
      title: 'Advanced TypeScript Patterns',
      description: 'Deep dive into advanced TypeScript patterns, generics, and enterprise-level type safety practices.',
      level: 'Advanced',
      duration: '6 weeks',
      students: 3200,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Node.js & Express Backend Development',
      description: 'Build robust backend applications with Node.js, Express, and learn about APIs, databases, and authentication.',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 6800,
      rating: 4.8
    },
    {
      id: 5,
      title: 'CSS Grid & Flexbox Mastery',
      description: 'Master modern CSS layout techniques with Grid and Flexbox to create responsive and beautiful designs.',
      level: 'Beginner',
      duration: '4 weeks',
      students: 12300,
      rating: 4.6
    },
    {
      id: 6,
      title: 'Full Stack Web Development',
      description: 'Complete full-stack development course covering frontend, backend, databases, and deployment strategies.',
      level: 'Advanced',
      duration: '16 weeks',
      students: 4500,
      rating: 4.9
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const featuredCourse = courses.find(course => course.featured);
  const regularCourses = courses.filter(course => !course.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Recommended for You
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Curated courses designed to accelerate your learning journey and help you achieve your goals
        </p>
      </motion.div>

      {/* Featured Course */}
      {featuredCourse && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-sm font-semibold bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full">
                  FEATURED
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredCourse.title}
                  </h3>
                  <p className="text-blue-100 text-lg mb-6">
                    {featuredCourse.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-blue-100">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredCourse.duration}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{featuredCourse.students?.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Star className="w-4 h-4 mr-2" />
                      <span>{featuredCourse.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium border mb-4 bg-white ${getLevelColor(featuredCourse.level)}`}>
                    {featuredCourse.level}
                  </span>

                  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Courses Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-screen overflow-y-auto"
      >
        {regularCourses.map((course) => (
          <motion.div
            key={course.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                {course.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{course.students?.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md">
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Suggestions;
