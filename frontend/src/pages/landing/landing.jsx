

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Award, Zap, Globe, Menu, X, Facebook, Twitter, Linkedin,
  Mail, Phone, MapPin, Play, ArrowRight, Star, Shield, Target, Smartphone,
  TrendingUp, CheckCircle, Clock, MessageCircle, BarChart3, Briefcase,
  GraduationCap, Heart, Camera, Code, Palette, Calculator, Lightbulb
} from 'lucide-react';

const Landing = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const translations = {
    en: {
      selectLanguage: "Select Language",
      hindi: "हिंदी",
      english: "English",
      heading: "SkillBridge: Empowering Rural Youth and Women",
      paragraph: "Adaptive AI-driven learning, blockchain certificates, and job placement for digital empowerment.",
      welcomeMessage: "Welcome to SkillBridge - Your gateway to digital empowerment and skill development.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      keyFeatures: {
        title: "Key Features",
        personalized: {
          title: "Personalized Learning",
          description: "AI adapts to your learning style and pace for maximum effectiveness"
        },
        certified: {
          title: "Certified Courses",
          description: "Blockchain-verified certificates recognized by leading employers"
        },
        jobReady: {
          title: "Job-Ready Skills",
          description: "Industry-relevant curriculum designed with employer partnerships"
        },
        support: {
          title: "24/7 Support",
          description: "Multilingual support team available round the clock"
        }
      },
      stats: {
        title: "Our Impact",
        learners: "50K+ Active Learners",
        courses: "200+ Courses",
        placement: "85% Job Placement Rate",
        rating: "4.9/5 Average Rating"
      },
      courseCategories: {
        title: "Popular Course Categories",
        digital: "Digital Marketing",
        programming: "Programming & Web Development",
        design: "Graphic Design & UI/UX",
        business: "Business & Entrepreneurship",
        photography: "Photography & Video Editing",
        finance: "Financial Literacy"
      },

      whyChooseUs: {
        title: "Why Choose SkillBridge?",
        flexible: {
          title: "Flexible Learning",
          description: "Learn at your own pace with offline capability"
        },
        mentorship: {
          title: "Expert Mentorship",
          description: "Get guidance from industry professionals"
        },
        community: {
          title: "Strong Community",
          description: "Connect with fellow learners and alumni"
        },
        placement: {
          title: "Job Placement Support",
          description: "Dedicated placement assistance and career guidance"
        }
      },
      footer: {
        about: "About SkillBridge",
        aboutDesc: "Empowering rural communities through technology-driven education and skill development.",
        quickLinks: "Quick Links",
        courses: "Courses",
        careers: "Careers",
        blog: "Blog",
        support: "Support",
        contact: "Contact Us",
        email: "info@skillbridge.com",
        phone: "+91 12345 67890",
        address: "123 Digital Street, Tech City, India",
        followUs: "Follow Us",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2024 SkillBridge. All rights reserved."
      },
      changeLanguage: "Change Language"
    },
    hi: {
      selectLanguage: "भाषा चुनें",
      hindi: "हिंदी",
      english: "English",
      heading: "स्किलब्रिज: ग्रामीण युवाओं और महिलाओं को सशक्त बनाना",
      paragraph: "डिजिटल सशक्तिकरण के लिए अनुकूली AI-संचालित शिक्षा, ब्लॉकचेन प्रमाणपत्र और नौकरी की नियुक्ति।",
      welcomeMessage: "स्किलब्रिज में आपका स्वागत है - डिजिटल सशक्तिकरण और कौशल विकास का आपका प्रवेश द्वार।",
      getStarted: "शुरू करें",
      learnMore: "और जानें",
      keyFeatures: {
        title: "मुख्य विशेषताएं",
        personalized: {
          title: "व्यक्तिगत शिक्षा",
          description: "AI आपकी शिक्षा शैली और गति के अनुकूल होता है"
        },
        certified: {
          title: "प्रमाणित पाठ्यक्रम",
          description: "अग्रणी नियोक्ताओं द्वारा मान्यता प्राप्त ब्लॉकचेन-सत्यापित प्रमाणपत्र"
        },
        jobReady: {
          title: "नौकरी-तैयार कौशल",
          description: "नियोक्ता साझेदारी के साथ डिज़ाइन किया गया उद्योग-प्रासंगिक पाठ्यक्रम"
        },
        support: {
          title: "24/7 सहायता",
          description: "बहुभाषी सहायता टीम 24 घंटे उपलब्ध"
        }
      },
      stats: {
        title: "हमारा प्रभाव",
        learners: "50K+ सक्रिय शिक्षार्थी",
        courses: "200+ पाठ्यक्रम",
        placement: "85% जॉब प्लेसमेंट दर",
        rating: "4.9/5 औसत रेटिंग"
      },
      courseCategories: {
        title: "लोकप्रिय कोर्स श्रेणियां",
        digital: "डिजिटल मार्केटिंग",
        programming: "प्रोग्रामिंग और वेब डेवलपमेंट",
        design: "ग्राफिक डिज़ाइन और UI/UX",
        business: "व्यवसाय और उद्यमिता",
        photography: "फोटोग्राफी और वीडियो एडिटिंग",
        finance: "वित्तीय साक्षरता"
      },

      whyChooseUs: {
        title: "स्किलब्रिज क्यों चुनें?",
        flexible: {
          title: "लचीली शिक्षा",
          description: "ऑफलाइन क्षमता के साथ अपनी गति से सीखें"
        },
        mentorship: {
          title: "विशेषज्ञ मार्गदर्शन",
          description: "उद्योग के पेशेवरों से मार्गदर्शन प्राप्त करें"
        },
        community: {
          title: "मजबूत समुदाय",
          description: "साथी शिक्षार्थियों और पूर्व छात्रों से जुड़ें"
        },
        placement: {
          title: "जॉब प्लेसमेंट सहायता",
          description: "समर्पित प्लेसमेंट सहायता और करियर मार्गदर्शन"
        }
      },
      footer: {
        about: "स्किलब्रिज के बारे में",
        aboutDesc: "प्रौद्योगिकी-संचालित शिक्षा और कौशल विकास के माध्यम से ग्रामीण समुदायों को सशक्त बनाना।",
        quickLinks: "त्वरित लिंक",
        courses: "पाठ्यक्रम",
        careers: "करियर",
        blog: "ब्लॉग",
        support: "सहायता",
        contact: "संपर्क करें",
        email: "info@skillbridge.com",
        phone: "+91 12345 67890",
        address: "123 डिजिटल स्ट्रीट, टेक सिटी, भारत",
        followUs: "हमें फॉलो करें",
        privacy: "गोपनीयता नीति",
        terms: "सेवा की शर्तें",
        copyright: "© 2024 स्किलब्रिज। सभी अधिकार सुरक्षित।"
      },
      changeLanguage: "भाषा बदलें"
    }
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowModal(false);
  };

  const openLanguageModal = () => {
    setShowModal(true);
  };

  const currentTranslation = selectedLanguage ? translations[selectedLanguage] : translations.en;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const AnimatedSection = ({ children, className = "" }) => (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Language Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-auto">
            <div className="text-center">
              <Globe className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                {translations.en.selectLanguage} / {translations.hi.selectLanguage}
              </h2>
              <div className="space-y-4">
                <button
                  onClick={() => handleLanguageSelect('en')}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSelect('hi')}
                  className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-700 transition transform hover:scale-105"
                >
                  हिंदी (Hindi)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content with Opacity Effect */}
      <div className={`transition-opacity duration-500 ${showModal ? 'opacity-30' : 'opacity-100'}`}>
        {selectedLanguage && (
          <motion.div
            className="w-full px-4 md:px-6 lg:px-8 py-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Language Toggle Button */}
            <div className="fixed top-4 right-4 z-40">
              <button
                onClick={openLanguageModal}
                className="bg-white/90 backdrop-blur-sm text-gray-700 font-medium py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {currentTranslation.changeLanguage}
              </button>
            </div>

            {/* Hero Section */}
            
<AnimatedSection className="mb-16">
  <header className="text-center mb-16 max-w-7xl mx-auto">
    <motion.h1 
      className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {currentTranslation.heading}
    </motion.h1>
    <motion.p 
      className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      {currentTranslation.paragraph}
    </motion.p>
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
    >
      <Link 
        to="/login"
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 flex items-center gap-2 shadow-lg"
      >
        <Zap className="w-5 h-5" />
        {currentTranslation.getStarted}
        <ArrowRight className="w-5 h-5" />
      </Link>
      <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-purple-800 transition transform hover:scale-105 flex items-center gap-2 shadow-lg">
        <Play className="w-5 h-5" />
        {currentTranslation.learnMore}
      </button>
    </motion.div>
  </header>
</AnimatedSection>
            {/* Stats Section */}
            <AnimatedSection className="mb-16">
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-white/20 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {currentTranslation.stats.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{currentTranslation.stats.learners}</div>
                    <Users className="w-8 h-8 mx-auto text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{currentTranslation.stats.courses}</div>
                    <BookOpen className="w-8 h-8 mx-auto text-green-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{currentTranslation.stats.placement}</div>
                    <TrendingUp className="w-8 h-8 mx-auto text-purple-600" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{currentTranslation.stats.rating}</div>
                    <Star className="w-8 h-8 mx-auto text-orange-600" />
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Welcome Section */}
            <AnimatedSection className="mb-16">
              <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-10 max-w-7xl mx-auto text-center text-white">
                <motion.p 
                  className="text-xl md:text-2xl leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentTranslation.welcomeMessage}
                </motion.p>
              </section>
            </AnimatedSection>

            {/* Course Categories */}
            <AnimatedSection className="mb-16">
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-white/20 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                  {currentTranslation.courseCategories.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: MessageCircle, title: currentTranslation.courseCategories.digital, color: "from-pink-500 to-rose-500" },
                    { icon: Code, title: currentTranslation.courseCategories.programming, color: "from-blue-500 to-cyan-500" },
                    { icon: Palette, title: currentTranslation.courseCategories.design, color: "from-purple-500 to-indigo-500" },
                    { icon: Briefcase, title: currentTranslation.courseCategories.business, color: "from-green-500 to-emerald-500" },
                    { icon: Camera, title: currentTranslation.courseCategories.photography, color: "from-orange-500 to-amber-500" },
                    { icon: Calculator, title: currentTranslation.courseCategories.finance, color: "from-teal-500 to-cyan-500" },
                  ].map(({ icon: Icon, title, color }, index) => (
                    <motion.div 
                      key={index} 
                      className={`p-6 bg-gradient-to-br ${color} rounded-xl text-white cursor-pointer transform transition hover:scale-105 shadow-lg`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-8 h-8 mb-4" />
                      <h3 className="text-lg font-semibold">{title}</h3>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Key Features Section */}
            <AnimatedSection className="mb-16">
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-white/20 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                  {currentTranslation.keyFeatures.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: BookOpen, data: currentTranslation.keyFeatures.personalized, color: "text-blue-600", bg: "from-blue-50 to-indigo-50" },
                    { icon: Award, data: currentTranslation.keyFeatures.certified, color: "text-green-600", bg: "from-green-50 to-emerald-50" },
                    { icon: Target, data: currentTranslation.keyFeatures.jobReady, color: "text-purple-600", bg: "from-purple-50 to-indigo-50" },
                    { icon: Users, data: currentTranslation.keyFeatures.support, color: "text-orange-600", bg: "from-orange-50 to-amber-50" },
                  ].map(({ icon: Icon, data, color, bg }, index) => (
                    <motion.div 
                      key={index} 
                      className={`p-8 bg-gradient-to-br ${bg} rounded-xl border hover:shadow-lg transition cursor-pointer`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-4">
                        <Icon className={`w-8 h-8 ${color} mr-3`} />
                        <h3 className="text-xl font-bold text-gray-800">{data.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{data.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Why Choose Us Section */}
            <AnimatedSection className="mb-16">
              <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-10 max-w-7xl mx-auto text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  {currentTranslation.whyChooseUs.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: Clock, data: currentTranslation.whyChooseUs.flexible },
                    { icon: Lightbulb, data: currentTranslation.whyChooseUs.mentorship },
                    { icon: Heart, data: currentTranslation.whyChooseUs.community },
                    { icon: GraduationCap, data: currentTranslation.whyChooseUs.placement },
                  ].map(({ icon: Icon, data }, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                      <p className="text-gray-200">{data.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Footer */}
            <AnimatedSection>
              <footer className="bg-gray-800 text-white rounded-2xl shadow-xl p-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* About */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.about}</h3>
                    <p className="text-gray-300 mb-4">{currentTranslation.footer.aboutDesc}</p>
                    <div className="flex space-x-4">
                      {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.quickLinks}</h3>
                    <ul className="space-y-2 text-gray-300">
                      {[
                        currentTranslation.footer.courses,
                        currentTranslation.footer.careers,
                        currentTranslation.footer.blog,
                        currentTranslation.footer.support,
                      ].map((link, index) => (
                        <motion.li 
                          key={index}
                          className="hover:text-white cursor-pointer transition"
                          whileHover={{ x: 5 }}
                        >
                          {link}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.contact}</h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center"><Mail className="w-5 h-5 mr-2" />{currentTranslation.footer.email}</div>
                      <div className="flex items-center"><Phone className="w-5 h-5 mr-2" />{currentTranslation.footer.phone}</div>
                      <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" />{currentTranslation.footer.address}</div>
                    </div>
                  </div>

                  {/* Follow Us */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.followUs}</h3>
                    <p className="text-gray-300 mb-4">Stay updated with our latest courses and opportunities.</p>
                    <div className="flex space-x-4">
                      {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="w-8 h-8 text-gray-300 hover:text-blue-400 cursor-pointer transition" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
                  <p>{currentTranslation.footer.copyright}</p>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <motion.span 
                      className="hover:text-white cursor-pointer transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      {currentTranslation.footer.privacy}
                    </motion.span>
                    <motion.span 
                      className="hover:text-white cursor-pointer transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      {currentTranslation.footer.terms}
                    </motion.span>
                  </div>
                </div>
              </footer>
            </AnimatedSection>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Landing;