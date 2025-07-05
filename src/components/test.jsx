import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw, BookOpen, Computer, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 'computer_operation',
    question: 'Do you know how to operate a computer (turn on/off, use mouse/keyboard)?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  {
    id: 'ms_word',
    question: 'Are you comfortable using MS Word to create and edit documents?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  {
    id: 'powerpoint',
    question: 'Can you create and edit PowerPoint presentations?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  {
    id: 'excel_skills',
    question: 'How would you rate your Excel skills?',
    type: 'dropdown',
    options: ['None', 'Beginner', 'Intermediate', 'Advanced']
  },
  {
    id: 'email',
    question: 'Do you know how to send and receive emails?',
    type: 'radio',
    options: ['Yes', 'No']
  },
  {
    id: 'social_media',
    question: 'Are you familiar with social media platforms like Facebook, Instagram, or WhatsApp?',
    type: 'radio',
    options: ['Yes', 'No']
  }
];

const courseRecommendations = {
  computer_operation: 'Basic Computer Operation',
  ms_word: 'MS Word Basics',
  powerpoint: 'PowerPoint Basics',
  excel_beginner: 'Excel for Beginners',
  excel_intermediate: 'Excel Intermediate',
  email: 'Digital Communication Basics',
  social_media: 'Social Media Fundamentals'
};

function Test() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const totalSteps = Math.ceil(questions.length / 2);
  const currentQuestions = questions.slice(currentStep * 2, (currentStep + 1) * 2);
  const isLastStep = currentStep === totalSteps - 1;

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const generateRecommendations = () => {
    const recs = [];
    if (answers.computer_operation === 'No') recs.push(courseRecommendations.computer_operation);
    if (answers.ms_word === 'No') recs.push(courseRecommendations.ms_word);
    if (answers.powerpoint === 'No') recs.push(courseRecommendations.powerpoint);
    if (answers.excel_skills === 'None' || answers.excel_skills === 'Beginner') recs.push(courseRecommendations.excel_beginner);
    if (answers.excel_skills === 'Intermediate') recs.push(courseRecommendations.excel_intermediate);
    if (answers.email === 'No') recs.push(courseRecommendations.email);
    if (answers.social_media === 'No') recs.push(courseRecommendations.social_media);

    if (recs.length === 0) {
      recs.push('Congratulations! You have strong digital skills. Consider advanced courses in your areas of interest.');
    }

    return recs;
  };

  const handleSubmit = () => {
    const recs = generateRecommendations();
    setRecommendations(recs);
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsSubmitted(false);
    setRecommendations([]);
  };

  const canProceed = () => currentQuestions.every(q => answers[q.id]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      <div className="bg-white rounded-2xl shadow-xl w-full p-10 flex flex-col justify-between">
        {isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Assessment Complete!</h2>
              <p className="text-gray-600">Here are your personalized course recommendations:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{rec}</h3>
                    <p className="text-sm text-gray-600">Recommended based on your assessment</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleRetake}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retake Assessment
              </button>

              <button
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Go to Dashboard
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Computer className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Digital Skills Assessment</h1>
              <p className="text-gray-600">Discover your skill level and get personalized course recommendations</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Step {currentStep + 1} of {totalSteps}</span>
                <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentQuestions.map((question) => (
                <div key={question.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h3>
                  {question.type === 'radio' ? (
                    <div className="space-y-3">
                      {question.options.map((option) => (
                        <label key={option} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="ml-3 text-gray-700 group-hover:text-blue-600 transition-colors">{option}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <select
                      value={answers[question.id] || ''}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
                    >
                      <option value="">Select your skill level</option>
                      {question.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </button>

              {isLastStep ? (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    canProceed() ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Submit Assessment
                  <CheckCircle className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    canProceed() ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Test;
