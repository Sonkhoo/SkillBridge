import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Award, Zap, Globe, Menu, X, Facebook, Twitter, Linkedin,
  Mail, Phone, MapPin, Play, ArrowRight, Star, Shield, Target, Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const AnimatedSection = ({ children, className = "" }) => (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                {translations.en.selectLanguage} / {translations.hi.selectLanguage}
              </h2>
              <div className="space-y-4">
                <button
                  onClick={() => handleLanguageSelect('en')}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSelect('hi')}
                  className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-700 transition"
                >
                  हिंदी (Hindi)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedLanguage && (
        <motion.div
          className="w-full px-4 md:px-6 lg:px-8 py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          

<AnimatedSection className="mb-16">
  <header className="text-center mb-16 max-w-7xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
      {currentTranslation.heading}
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
      {currentTranslation.paragraph}
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link to="/login" className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
        <Zap className="w-5 h-5" />
        {currentTranslation.getStarted}
        <ArrowRight className="w-5 h-5" />
      </Link>
      <button className="bg-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
        <Play className="w-5 h-5" />
        {currentTranslation.learnMore}
      </button>
    </div>
  </header>
</AnimatedSection>


          {/* Welcome Section */}
          <AnimatedSection className="mb-16">
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-white/20 max-w-7xl mx-auto text-center">
              <p className="text-gray-700 text-xl leading-relaxed">
                {currentTranslation.welcomeMessage}
              </p>
            </section>
          </AnimatedSection>

          {/* Key Features Section */}
          <AnimatedSection className="mb-16">
            <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-white/20 max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                {currentTranslation.keyFeatures.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature Cards */}
                {[
                  { icon: BookOpen, data: currentTranslation.keyFeatures.personalized, color: "text-blue-600" },
                  { icon: Award, data: currentTranslation.keyFeatures.certified, color: "text-green-600" },
                  { icon: Target, data: currentTranslation.keyFeatures.jobReady, color: "text-purple-600" },
                  { icon: Users, data: currentTranslation.keyFeatures.support, color: "text-orange-600" },
                ].map(({ icon: Icon, data, color }, index) => (
                  <div key={index} className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border">
                    <div className="flex items-center mb-4">
                      <Icon className={`w-8 h-8 ${color} mr-3`} />
                      <h3 className="text-xl font-bold text-gray-800">{data.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{data.description}</p>
                  </div>
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
                    <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                    <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                    <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-xl font-bold mb-4">{currentTranslation.footer.quickLinks}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>{currentTranslation.footer.courses}</li>
                    <li>{currentTranslation.footer.careers}</li>
                    <li>{currentTranslation.footer.blog}</li>
                    <li>{currentTranslation.footer.support}</li>
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
                    <Facebook className="w-8 h-8 text-gray-300 hover:text-blue-400 cursor-pointer" />
                    <Twitter className="w-8 h-8 text-gray-300 hover:text-blue-400 cursor-pointer" />
                    <Linkedin className="w-8 h-8 text-gray-300 hover:text-blue-400 cursor-pointer" />
                  </div>
                </div>
              </div>
              <hr className="my-8 border-gray-700" />
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
                <p>{currentTranslation.footer.copyright}</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <span>{currentTranslation.footer.privacy}</span>
                  <span>{currentTranslation.footer.terms}</span>
                </div>
              </div>
            </footer>
          </AnimatedSection>
        </motion.div>
      )}
    </div>
  );
};

export default Landing;
