import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Building2, 
  Filter, 
  X, 
  Upload, 
  CheckCircle,
  Search,
  Calendar,
  DollarSign,
  Users
} from 'lucide-react';

const Jobboard = () => {
  const [jobs] = useState([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      postedDate: '2024-01-15',
      salary: '$120k - $160k',
      description: 'We are looking for a Senior Frontend Developer to join our dynamic team and help build cutting-edge web applications.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'Modern CSS frameworks'],
      benefits: ['Health insurance', 'Remote work options', '401k matching'],
      featured: true
    },
    {
      id: '2',
      title: 'UX/UI Designer',
      company: 'Design Studio Pro',
      location: 'New York, NY',
      type: 'Full-time',
      postedDate: '2024-01-12',
      salary: '$90k - $120k',
      description: 'Join our creative team to design intuitive and beautiful user experiences for web and mobile applications.',
      requirements: ['3+ years UX/UI experience', 'Figma expertise', 'User research skills'],
      benefits: ['Creative freedom', 'Professional development', 'Flexible hours']
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      company: 'CloudTech Inc',
      location: 'Remote',
      type: 'Remote',
      postedDate: '2024-01-10',
      salary: '$110k - $140k',
      description: 'Help us scale our infrastructure and improve deployment processes in a fully remote environment.',
      requirements: ['AWS/Azure experience', 'Docker & Kubernetes', 'CI/CD pipelines'],
      benefits: ['100% remote', 'Stock options', 'Learning budget']
    },
    {
      id: '4',
      title: 'Marketing Coordinator',
      company: 'Growth Marketing Co',
      location: 'Austin, TX',
      type: 'Part-time',
      postedDate: '2024-01-08',
      salary: '$25 - $35/hour',
      description: 'Support our marketing team with campaign management, content creation, and analytics reporting.',
      requirements: ['Marketing experience', 'Social media savvy', 'Analytics tools knowledge'],
      benefits: ['Flexible schedule', 'Growth opportunities', 'Team events']
    },
    {
      id: '5',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Seattle, WA',
      type: 'Full-time',
      postedDate: '2024-01-05',
      salary: '$100k - $130k',
      description: 'Build and maintain web applications from frontend to backend in a fast-paced startup environment.',
      requirements: ['React & Node.js', 'Database design', 'API development'],
      benefits: ['Equity package', 'Unlimited PTO', 'Modern tech stack']
    },
    {
      id: '6',
      title: 'Data Analyst',
      company: 'Analytics Pro',
      location: 'Chicago, IL',
      type: 'Contract',
      postedDate: '2024-01-03',
      salary: '$60 - $80/hour',
      description: 'Analyze complex datasets and provide actionable insights to drive business decisions.',
      requirements: ['SQL expertise', 'Python/R skills', 'Data visualization'],
      benefits: ['Contract flexibility', 'Interesting projects', 'Remote options']
    }
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: ''
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(job => job.type === typeFilter);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, locationFilter, typeFilter, jobs]);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Part-time':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Remote':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Contract':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setShowModal(false);
      setShowConfirmation(true);
      setApplicationData({
        name: '',
        email: '',
        resume: null,
        coverLetter: ''
      });
      setTimeout(() => setShowConfirmation(false), 4000);
    }, 1000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }));
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

  const featuredJob = filteredJobs.find(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <Briefcase className="w-12 h-12 text-blue-600 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find Your Dream Job
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Discover exciting opportunities from top companies and take the next step in your career journey.
        </p>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            
            <button
              onClick={() => {
                setSearchTerm('');
                setLocationFilter('');
                setTypeFilter('');
              }}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <p className="text-gray-600 text-lg">
          Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> job{filteredJobs.length !== 1 ? 's' : ''}
        </p>
      </motion.div>

      {/* Featured Job */}
      {featuredJob && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-sm font-semibold bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full">
                  FEATURED
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {featuredJob.title}
                  </h3>
                  <div className="flex items-center text-blue-100 mb-4">
                    <Building2 className="w-5 h-5 mr-2" />
                    <span className="text-lg">{featuredJob.company}</span>
                  </div>
                  
                  <p className="text-blue-100 mb-6">
                    {featuredJob.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-blue-100">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{featuredJob.location}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredJob.type}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>{featuredJob.salary}</span>
                    </div>
                    <div className="flex items-center text-blue-100">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(featuredJob.postedDate)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-end">
                  <button
                    onClick={() => handleApply(featuredJob)}
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg mb-4"
                  >
                    Apply Now
                  </button>
                  
                  <div className="text-center">
                    <p className="text-blue-100 text-sm">Posted {formatDate(featuredJob.postedDate)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Jobs Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-screen overflow-y-auto"
      >
        {regularJobs.map((job) => (
          <motion.div
            key={job.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(job.type)}`}>
                  {job.type}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {job.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(job.postedDate)}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Hiring</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Key Requirements:</p>
                <div className="flex flex-wrap gap-1">
                  {job.requirements.slice(0, 3).map((req, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => handleApply(job)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
        </motion.div>
      )}

      {/* Application Modal */}
      <AnimatePresence>
        {showModal && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
                  <p className="text-gray-600">{selectedJob.title} at {selectedJob.company}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.name}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume *
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors cursor-pointer bg-gray-50 hover:bg-blue-50"
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">
                        {applicationData.resume ? applicationData.resume.name : 'Click to upload your resume'}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Confirmation */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-600 text-white p-6 rounded-xl shadow-lg z-50 max-w-sm"
          >
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold">Application Submitted!</h4>
                <p className="text-sm text-green-100">We'll review your application and get back to you soon.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jobboard;
