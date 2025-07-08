import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, BookOpen, Award, GraduationCap, Briefcase } from 'lucide-react';

const Sidebar = ({ activeTab, onNavigate, sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, description: 'Overview & Analytics', path: '/dashboard' },
    { id: 'courses', label: 'Courses', icon: BookOpen, description: 'Browse & Learn', path: '/detail' },
    { id: 'certificates', label: 'Certificates', icon: Award, description: 'Blockchain Verified', path: '/blockchain' },
    { id: 'suggestions', label: 'Recommendations', icon: GraduationCap, description: 'Personalized Learning', path: '/suggestions' },
    { id: 'jobboard', label: 'Job Board', icon: Briefcase, description: 'Career Opportunities', path: '/jobboard' }
  ];

  const handleNavigation = (item) => {
    navigate(item.path);
    if (onNavigate) onNavigate(item.id);
    setSidebarOpen(false);
  };

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-6 border-b border-gray-200 bg-white">
          {/* Logo/title */}
          {/* <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LearnHub
          </h1> */}
        </div>

        <nav className="mt-6 px-6 space-y-2 bg-white">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300'
                    : 'bg-white border-gray-200 hover:bg-gray-100'
                }`}
                style={{ backgroundColor: 'white' }} // FORCE background white
              >
                <Icon className={`h-5 w-5 mr-3 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-800'}`} />
                <div className="text-left flex-1">
                  <p className={`font-medium text-sm ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>{item.label}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
