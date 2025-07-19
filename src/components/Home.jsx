import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (budget && budget >= 45000 && budget <= 280000) {
      navigate(`/setup/${budget}`);
    } else {
      alert("Please enter a budget between ₹45,000 and ₹2,80,000");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-8">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.97 16.06c.8 0 1.54-.37 2.03-.99l2.03-2.58c.49-.62 1.23-.99 2.03-.99s1.54.37 2.03.99l2.03 2.58c.49.62 1.23.99 2.03.99 1.66 0 3-1.34 3-3V9c0-4.42-3.58-8-8-8H9c-4.42 0-8 3.58-8 8v4.06c0 1.66 1.34 3 3 3z"/>
              <circle cx="9" cy="9" r="1"/>
              <circle cx="15" cy="9" r="1"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-4">
            GameForge
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
            Professional Gaming Setup Builder
          </p> */}
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Build Your Dream Gaming Setup
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            Enter your budget and get AI-powered gaming PC recommendations 
            tailored to deliver maximum performance for your investment
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label
                htmlFor="budget"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                Your Budget (INR)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 font-medium">
                  ₹
                </span>
                <input
                  type="number"
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="45000 to 280000"
                  min="45000"
                  max="280000"
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium transition-all duration-200"
                  required
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Budget range: ₹45,000 - ₹2,80,000
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Build My Gaming Setup
              </span>
            </button>
          </form>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Budget Optimized</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Maximum value for your investment</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Performance Tuned</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Balanced components for optimal gaming</p>
            </div>
            
            <div className="flex flex-col items-center p-4 bg-green-50 dark:bg-green-900/30 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Expert Curated</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Professional recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
