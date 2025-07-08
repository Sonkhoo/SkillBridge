import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Award, 
  ChevronDown, 
  ChevronRight,
  Lock,
  FileText,
  Target,
  BarChart3,
  Download
} from 'lucide-react';

const Detail = ({ courseId, onBack }) => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
  
 
  const [activeTab, setActiveTab] = useState('courses');
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [expandedQuiz, setExpandedQuiz] = useState(null);

  // Mock course data - in real app, this would come from props or API
  const courseData = {
    id: courseId,
    title: 'Complete React Development Bootcamp',
    description: 'Master React from fundamentals to advanced concepts including hooks, context, and state management with real-world projects. This comprehensive course will take you from beginner to advanced React developer.',
    level: 'Intermediate',
    duration: '12 weeks',
    students: 15420,
    rating: 4.9,
    instructor: 'Sarah Johnson',
    price: '$199',
    enrolled: true,
    progress: 65,
    completedLessons: 13,
    totalLessons: 20,
    completedQuizzes: 3,
    totalQuizzes: 5,
    skills: ['React', 'JavaScript', 'Hooks', 'State Management', 'Component Design'],
    requirements: ['Basic JavaScript knowledge', 'HTML & CSS fundamentals', 'Code editor installed'],
    whatYouLearn: [
      'Build modern React applications from scratch',
      'Master React Hooks and functional components',
      'Implement state management with Context API',
      'Create responsive and interactive UIs',
      'Deploy React applications to production'
    ]
  };

  const lessons = [
    {
      id: '1',
      title: 'Introduction to React',
      duration: '15 min',
      type: 'video',
      completed: true,
      locked: false,
      description: "Learn the basics of React and why it's so popular"
    },
    {
      id: '2',
      title: 'Setting Up Your Development Environment',
      duration: '20 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Install and configure all necessary tools'
    },
    {
      id: '3',
      title: 'Your First React Component',
      duration: '25 min',
      type: 'exercise',
      completed: true,
      locked: false,
      description: 'Create your first functional component'
    },
    {
      id: '4',
      title: 'Understanding JSX',
      duration: '18 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Master JSX syntax and best practices'
    },
    {
      id: '5',
      title: 'Props and Component Communication',
      duration: '30 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Learn how components communicate with each other'
    },
    {
      id: '6',
      title: 'State Management with useState',
      duration: '35 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Manage component state effectively'
    },
    {
      id: '7',
      title: 'Event Handling in React',
      duration: '22 min',
      type: 'exercise',
      completed: true,
      locked: false,
      description: 'Handle user interactions and events'
    },
    {
      id: '8',
      title: 'Conditional Rendering',
      duration: '28 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Render components conditionally'
    },
    {
      id: '9',
      title: 'Lists and Keys',
      duration: '25 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Render dynamic lists efficiently'
    },
    {
      id: '10',
      title: 'Forms and Controlled Components',
      duration: '40 min',
      type: 'exercise',
      completed: true,
      locked: false,
      description: 'Build interactive forms with React'
    },
    {
      id: '11',
      title: 'useEffect Hook Deep Dive',
      duration: '45 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Master side effects and lifecycle methods'
    },
    {
      id: '12',
      title: 'Custom Hooks',
      duration: '35 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Create reusable custom hooks'
    },
    {
      id: '13',
      title: 'Context API for State Management',
      duration: '50 min',
      type: 'video',
      completed: true,
      locked: false,
      description: 'Manage global state with Context API'
    },
    {
      id: '14',
      title: 'React Router for Navigation',
      duration: '40 min',
      type: 'video',
      completed: false,
      locked: false,
      description: 'Implement client-side routing'
    },
    {
      id: '15',
      title: 'Performance Optimization',
      duration: '35 min',
      type: 'video',
      completed: false,
      locked: false,
      description: 'Optimize React app performance'
    },
    {
      id: '16',
      title: 'Testing React Components',
      duration: '45 min',
      type: 'exercise',
      completed: false,
      locked: false,
      description: 'Write tests for your components'
    },
    {
      id: '17',
      title: 'Building a Real-World Project',
      duration: '90 min',
      type: 'exercise',
      completed: false,
      locked: false,
      description: "Apply everything you've learned"
    },
    {
      id: '18',
      title: 'Deployment Strategies',
      duration: '30 min',
      type: 'video',
      completed: false,
      locked: false,
      description: 'Deploy your React app to production'
    },
    {
      id: '19',
      title: 'Advanced Patterns',
      duration: '40 min',
      type: 'video',
      completed: false,
      locked: true,
      description: 'Learn advanced React patterns'
    },
    {
      id: '20',
      title: 'Next Steps and Career Guidance',
      duration: '20 min',
      type: 'reading',
      completed: false,
      locked: true,
      description: 'Plan your React development career'
    }
  ];

  const quizzes = [
    {
      id: '1',
      title: 'React Fundamentals Quiz',
      questions: 10,
      duration: '15 min',
      score: 85,
      maxScore: 100,
      completed: true,
      locked: false,
      attempts: 1,
      maxAttempts: 3
    },
    {
      id: '2',
      title: 'Components and Props Assessment',
      questions: 12,
      duration: '20 min',
      score: 92,
      maxScore: 100,
      completed: true,
      locked: false,
      attempts: 1,
      maxAttempts: 3
    },
    {
      id: '3',
      title: 'State and Hooks Evaluation',
      questions: 15,
      duration: '25 min',
      score: 78,
      maxScore: 100,
      completed: true,
      locked: false,
      attempts: 2,
      maxAttempts: 3
    },
    {
      id: '4',
      title: 'Advanced React Concepts',
      questions: 18,
      duration: '30 min',
      completed: false,
      locked: false,
      attempts: 0,
      maxAttempts: 3,
      maxScore: 100
    },
    {
      id: '5',
      title: 'Final Project Assessment',
      questions: 20,
      duration: '45 min',
      completed: false,
      locked: true,
      attempts: 0,
      maxAttempts: 2,
      maxScore: 100
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'reading':
        return <FileText className="w-4 h-4" />;
      case 'exercise':
        return <Target className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video':
        return 'bg-blue-100 text-blue-800';
      case 'reading':
        return 'bg-green-100 text-green-800';
      case 'exercise':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return 'text-black';
    if (percentage >= 70) return 'text-black';
    return 'text-black';
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onNavigate={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8 bg-white">
        <button
          onClick={onBack}
          className="flex items-center text-black hover:text-black mb-6 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Courses
        </button>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                  {courseData.title}
                </h1>
                <p className="text-black text-lg mb-6">
                  {courseData.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6 text-black">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{courseData.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{courseData.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-black">{courseData.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {courseData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right text-black">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-6">
                  <div className="text-2xl font-bold mb-2">{courseData.progress}%</div>
                  <div className="mb-4">Course Progress</div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-4">
                    <div
                      className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${courseData.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm">
                    {courseData.completedLessons} of {courseData.totalLessons} lessons completed
                  </div>
                </div>

                {courseData.enrolled ? (
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Continue Learning
                  </button>
                ) : (
                  <button className="bg-yellow-400 text-yellow-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Enroll Now - {courseData.price}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-2">
          <div className="flex space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'lessons', label: 'Lessons', icon: Play },
              { id: 'quizzes', label: 'Quizzes', icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-black hover:text-black hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-black mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {courseData.whatYouLearn.map((item, index) => (
                    <li key={index} className="flex items-start text-black">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-black mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {courseData.requirements.map((req, index) => (
                    <li key={index} className="flex items-center text-black">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-black mb-4">Course Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{courseData.totalLessons}</div>
                    <div className="text-sm text-black">Total Lessons</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{courseData.totalQuizzes}</div>
                    <div className="text-sm text-black">Quizzes</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{courseData.duration}</div>
                    <div className="text-sm text-black">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{courseData.level}</div>
                    <div className="text-sm text-black">Level</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-black mb-4">Instructor</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {courseData.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{courseData.instructor}</div>
                    <div className="text-sm text-black">Senior React Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'lessons' && (
          <motion.div
            key="lessons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`bg-white rounded-xl shadow-md border border-gray-200 p-4 cursor-pointer ${
                  lesson.locked ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
                onClick={() => !lesson.locked && setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-full ${
                        lesson.completed ? 'bg-green-600 text-white' : 'bg-gray-300 text-black'
                      }`}
                    >
                      {lesson.completed ? <CheckCircle className="w-5 h-5" /> : getTypeIcon(lesson.type)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{lesson.title}</h4>
                      <div className="text-sm text-black">{lesson.duration} • {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}</div>
                    </div>
                  </div>
                  <div>
                    {lesson.locked ? (
                      <Lock className="w-5 h-5 text-black" />
                    ) : (
                      <ChevronDown
                        className={`w-5 h-5 text-black transform transition-transform duration-200 ${
                          expandedLesson === lesson.id ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedLesson === lesson.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-black"
                    >
                      <p>{lesson.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'quizzes' && (
          <motion.div
            key="quizzes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className={`bg-white rounded-xl shadow-md border border-gray-200 p-4 cursor-pointer ${
                  quiz.locked ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
                onClick={() => !quiz.locked && setExpandedQuiz(expandedQuiz === quiz.id ? null : quiz.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-black">{quiz.title}</h4>
                    <div className="flex items-center text-sm text-black space-x-4 mt-1">
                      <span>{quiz.questions} Questions</span>
                      <span>{quiz.duration}</span>
                    </div>
                  </div>
                  <div>
                    {quiz.completed ? (
                      <div className="flex items-center space-x-2 text-black font-semibold">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className={getScoreColor(quiz.score, quiz.maxScore)}>
                          {quiz.score} / {quiz.maxScore}
                        </span>
                      </div>
                    ) : quiz.locked ? (
                      <Lock className="w-5 h-5 text-black" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-black" />
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedQuiz === quiz.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 text-black"
                    >
                      <p>
                        {quiz.completed
                          ? `You scored ${quiz.score} out of ${quiz.maxScore} in this quiz.`
                          : 'This quiz is available to attempt.'}
                      </p>
                      {quiz.locked && <p className="mt-2 font-semibold text-black">This quiz is locked.</p>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </div>
  );
};

export default Detail;
