import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Add navigation hook

const Login = () => {
  const navigate = useNavigate();  // Initialize navigate

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const t = {
    skillBridge: 'SkillBridge',
    welcome: 'Welcome to SkillBridge',
    loginTitle: 'Login to your account',
    signupTitle: 'Create new account',
    fullName: 'Full Name',
    email: 'Email / Mobile Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    login: 'Login',
    signup: 'Sign Up',
    switchToSignup: 'New user? Create account',
    switchToLogin: 'Already have an account? Login',
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    alert(`${isLogin ? t.login : t.signup} successful!`);
    if (isLogin) {
      navigate('/test');  // Navigate to Test component on login
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white px-130">
      <div className="w-full max-w-4xl bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-xl shadow-xl p-8 mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-3 shadow-lg">
            <span className="text-xl font-bold text-white">SB</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.skillBridge}
          </h1>
          <p className="text-gray-600 mt-1 text-sm">{t.welcome}</p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {isLogin ? t.loginTitle : t.signupTitle}
        </h2>

        <div className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fullName}</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder={t.fullName}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
            <input
              type="text"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-500"
              placeholder={t.email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.password}</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-500"
                placeholder={t.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.confirmPassword}</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-blue-500"
                  placeholder={t.confirmPassword}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-md transition-all duration-300"
          >
            {isLogin ? t.login : t.signup}
          </button>

          <button
            type="button"
            onClick={switchMode}
            className="w-full text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
          >
            {isLogin ? t.switchToSignup : t.switchToLogin}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
