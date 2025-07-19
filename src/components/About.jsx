const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              About GameForge
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional Gaming Setup Builder
            </p>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">🤖</span>
                </div>
                How It Works
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                GameForge uses carefully curated data and advanced algorithms to suggest the best gaming PC components 
                based on your budget. We analyze price-to-performance ratios, compatibility, and current market 
                trends to provide you with optimal gaming setups that deliver maximum value.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">⚙️</span>
                </div>
                Recommendation Logic
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">Budget Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We match your budget to the closest predefined setup, ensuring maximum value for your investment.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-2xl border border-green-200/50 dark:border-green-700/50">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">Component Balance</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Each setup is balanced to avoid bottlenecks and ensure optimal gaming performance.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-700/50">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">Future-Proofing</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Components are selected with upgrade paths in mind for long-term value.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-2xl border border-orange-200/50 dark:border-orange-700/50">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-lg">Market Research</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Prices and components are based on current Indian market availability and pricing.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">💰</span>
                </div>
                Budget Ranges & Categories
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-purple-600">
                      <th className="px-4 py-4 text-left text-white font-bold">Budget</th>
                      <th className="px-4 py-4 text-left text-white font-bold">Category</th>
                      <th className="px-4 py-4 text-left text-white font-bold">Performance</th>
                      <th className="px-4 py-4 text-left text-white font-bold">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹45,000</td>
                      <td className="px-4 py-3 text-blue-600 dark:text-blue-400 font-medium">Budget Entry</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">1080p Medium-High</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Basic PC + APU Graphics</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹60,000</td>
                      <td className="px-4 py-3 text-green-600 dark:text-green-400 font-medium">Budget Gaming</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">1080p High</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">PC + Dedicated GPU</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹75,000</td>
                      <td className="px-4 py-3 text-purple-600 dark:text-purple-400 font-medium">Mid-Range</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">1080p Ultra / 1440p High</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">PC + Peripherals</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹90,000</td>
                      <td className="px-4 py-3 text-orange-600 dark:text-orange-400 font-medium">Performance</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">1080p Ultra / 1440p High</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">PC + Monitor + Peripherals</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹1,10,000</td>
                      <td className="px-4 py-3 text-red-600 dark:text-red-400 font-medium">High Performance</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">1440p Ultra / 4K High</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Complete Gaming Setup</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹1,30,000</td>
                      <td className="px-4 py-3 text-indigo-600 dark:text-indigo-400 font-medium">Enthusiast</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">1440p Ultra / 4K High</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Premium Gaming + AIO Cooling</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹1,50,000</td>
                      <td className="px-4 py-3 text-pink-600 dark:text-pink-400 font-medium">Premium</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">1440p Ultra / 4K Ultra</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">High-End Gaming + Chair</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹1,80,000</td>
                      <td className="px-4 py-3 text-cyan-600 dark:text-cyan-400 font-medium">Flagship</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">4K Ultra / 1440p 165+ FPS</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">4K Gaming + Premium Setup</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹2,20,000</td>
                      <td className="px-4 py-3 text-yellow-600 dark:text-yellow-400 font-medium">Ultimate</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">4K Ultra / 8K High</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Gaming + Content Creation</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-4 py-3 font-semibold text-gray-800 dark:text-white">₹2,80,000</td>
                      <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-medium">Professional</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">8K Ultra / Professional</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-300">Streaming Studio + Custom Loop</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">🛠️</span>
                </div>
                Built With
              </h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  React.js
                </span>
                <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  Tailwind CSS
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  React Router
                </span>
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  Responsive Design
                </span>
              </div>
            </section>

            <section className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-2xl p-6">
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  <strong className="text-yellow-600 dark:text-yellow-400">Disclaimer:</strong> Prices are approximate and may vary based on market conditions. 
                  Always verify current prices before making purchases.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;