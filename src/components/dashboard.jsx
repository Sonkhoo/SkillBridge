import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, ExternalLink, Play, Clock, Users, TrendingUp, Target, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const Dashboard = () => {
    const navigate = useNavigate();
  // Sample data for demonstration
  const user = {
    name: "Rita"
  };

  const currentCourses = [
    {
      id: 1,
      name: "React.js Fundamentals",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18
    },
    {
      id: 2,
      name: "JavaScript Advanced Concepts",
      progress: 45,
      totalLessons: 32,
      completedLessons: 14
    },
    {
      id: 3,
      name: "Node.js Backend Development",
      progress: 20,
      totalLessons: 28,
      completedLessons: 6
    },
    {
      id: 4,
      name: "Database Design & SQL",
      progress: 90,
      totalLessons: 20,
      completedLessons: 18
    }
  ];

  const recommendedCourses = [
    {
      id: 1,
      title: "TypeScript for Beginners",
      description: "Learn TypeScript from scratch and enhance your JavaScript skills with static typing.",
      duration: "8 hours",
      students: 12500,
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "MongoDB & Mongoose",
      description: "Master NoSQL database concepts with MongoDB and learn to use Mongoose ODM.",
      duration: "6 hours",
      students: 8900,
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "React Native Mobile Development",
      description: "Build cross-platform mobile apps using React Native and modern development practices.",
      duration: "12 hours",
      students: 15200,
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Docker & Container Orchestration",
      description: "Learn containerization with Docker and orchestration with Kubernetes fundamentals.",
      duration: "10 hours",
      students: 9800,
      difficulty: "Intermediate"
    }
  ];

  const certificates = [
    {
      id: 1,
      courseTitle: "HTML & CSS Mastery",
      completionDate: "2024-03-15",
      blockchainHash: "0x1a2b3c4d5e6f789012345678901234567890abcd",
      verificationUrl: "https://blockchain-explorer.example.com/certificate/0x1a2b3c4d5e6f789012345678901234567890abcd"
    },
    {
      id: 2,
      courseTitle: "Python Programming Bootcamp",
      completionDate: "2024-01-22",
      blockchainHash: "0x9876543210fedcba0987654321098765432109876",
      verificationUrl: "https://blockchain-explorer.example.com/certificate/0x9876543210fedcba0987654321098765432109876"
    },
    {
      id: 3,
      courseTitle: "Web Security Fundamentals",
      completionDate: "2023-11-08",
      blockchainHash: "0xabcdef1234567890abcdef1234567890abcdef12",
      verificationUrl: "https://blockchain-explorer.example.com/certificate/0xabcdef1234567890abcdef1234567890abcdef12"
    }
  ];

  // Chart data
  const learningProgressData = [
    { month: 'Jan', hours: 12 },
    { month: 'Feb', hours: 19 },
    { month: 'Mar', hours: 15 },
    { month: 'Apr', hours: 22 },
    { month: 'May', hours: 28 },
    { month: 'Jun', hours: 35 },
    { month: 'Jul', hours: 42 }
  ];

  const skillDistributionData = [
    { name: 'Frontend', value: 40, color: '#8B5CF6' },
    { name: 'Backend', value: 30, color: '#A78BFA' },
    { name: 'Database', value: 20, color: '#C4B5FD' },
    { name: 'DevOps', value: 10, color: '#DDD6FE' }
  ];

  const weeklyActivityData = [
    { day: 'Mon', hours: 3 },
    { day: 'Tue', hours: 2 },
    { day: 'Wed', hours: 4 },
    { day: 'Thu', hours: 6 },
    { day: 'Fri', hours: 5 },
    { day: 'Sat', hours: 1 },
    { day: 'Sun', hours: 2 }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'from-purple-500 to-pink-500';
    if (progress >= 60) return 'from-purple-600 to-purple-400';
    if (progress >= 40) return 'from-indigo-500 to-purple-500';
    return 'from-violet-500 to-purple-500';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-gradient-to-r from-green-100 to-green-200 text-green-800';
      case 'Intermediate': return 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800';
      case 'Advanced': return 'bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800';
      default: return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleStartCourse = (courseId) => {
    alert(`Starting course with ID: ${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <header className="mb-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              Welcome back, {user.name}! 👋
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continue your learning journey and explore new opportunities with our comprehensive dashboard.
          </p>
        </header>
        {/* Top Buttons Section */}
<div className="flex justify-center gap-6 mt-6">
        <button
          onClick={() => navigate('/blockchain')}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 font-semibold"
        >
          See Certificates
        </button>
        <button
          onClick={() => navigate('/suggestions')}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 font-semibold"
        >
          See Courses
        </button>
        <button
          onClick={() => navigate('/jobboard')}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-md hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 font-semibold"
        >
          Search for Jobs
        </button>
      </div>



        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Learning Hours</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  173
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Courses Completed</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  12
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Streak</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  28 days
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Learning Progress Chart */}
          <div className="lg:col-span-2 bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
              Learning Progress (Monthly Hours)
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={learningProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="url(#colorGradient)" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Distribution Chart */}
          <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 text-purple-600 mr-2" />
              Skill Distribution
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={skillDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {skillDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {skillDistributionData.map((skill, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                  <span className="font-medium text-gray-900">{skill.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 border border-purple-100 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-5 w-5 text-purple-600 mr-2" />
            Weekly Activity
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="hours" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Learning Progress Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Learning Progress
            </h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {currentCourses.map((course) => (
              <div key={course.id} className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">{course.name}</h3>
                  <span className="text-sm font-medium text-gray-500 ml-2">
                    {course.completedLessons}/{course.totalLessons} lessons
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-300 bg-gradient-to-r ${getProgressColor(course.progress)}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-lg">
                  Continue Learning
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Courses Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Play className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recommended Courses
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {recommendedCourses.map((course) => (
              <div key={course.id} className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleStartCourse(course.id)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-lg"
                >
                  Start Course
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-8">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Certificates
            </h2>
          </div>
          
          {certificates.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-gradient-to-b from-purple-500 to-pink-500 border border-purple-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{certificate.courseTitle}</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Completed on {formatDate(certificate.completionDate)}
                      </p>
                      <p className="text-xs text-gray-500 font-mono break-all">
                        Hash: {certificate.blockchainHash}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded-full ml-4 flex-shrink-0">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  
                  <a 
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-pink-600 text-sm font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Verify on Blockchain
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white backdrop-blur-sm bg-opacity-80 rounded-2xl shadow-lg p-8 text-center border border-purple-100">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-gray-500 text-lg">You have not earned any certificates yet.</p>
              <p className="text-gray-400 text-sm mt-2">Complete courses to start earning certificates!</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;