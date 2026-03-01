import TechIcon from '@/components/TechIcon';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text-animated">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn more about my journey, experience, and what drives me
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center items-center animate-slideInLeft">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 shadow-2xl flex items-center justify-center animate-float hover-lift group cursor-pointer animate-gradient">
              <div className="text-white text-6xl font-bold group-hover:scale-110 transition-transform duration-300">SS</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover-lift animate-slideInRight">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm Shafiqul Islam Sakib, a dedicated MERN Stack Developer from Dhaka, Bangladesh. 
                My journey in tech is driven by a passion for building scalable web applications that 
                solve real-world problems. Currently pursuing my B.Sc. in Electrical and Electronics 
                Engineering at Faridpur Engineering College.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in the MERN stack and have hands-on experience building full-stack applications 
                like MernEats, Bistro Boss, and LearnGo. I'm focused on writing clean, efficient code and 
                committed to continuous learning and growth in the ever-evolving tech landscape.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover-lift animate-slideInRight delay-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What I Do
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Build full-stack MERN applications with scalable architecture
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Integrate secure payment systems using Stripe API
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Implement JWT & Firebase authentication for secure apps
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Design responsive UIs with Tailwind CSS and modern frameworks
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16 animate-fadeInUp delay-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {/* MernEats */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg hover-lift group cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  MernEats
                </h3>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full animate-pulse">Live</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                Food Ordering & Delivery Platform
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-blue-600">✓</span>
                  Architected a full-stack delivery app with Stripe API for secure payments and custom admin dashboard
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-blue-600">✓</span>
                  Implemented Real-time Order Status Tracking and advanced search/filter logic for 100+ items
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-blue-600">✓</span>
                  Optimized data fetching and state management using Tanstack Query
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="React" className="w-4 h-4" />
                  React
                </span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="Node.js" className="w-4 h-4" />
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="MongoDB" className="w-4 h-4" />
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="Stripe" className="w-4 h-4" />
                  Stripe
                </span>
                <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="Tanstack Query" className="w-4 h-4" />
                  Tanstack Query
                </span>
              </div>
            </div>

            {/* Bistro Boss */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg hover-lift group cursor-pointer border-2 border-transparent hover:border-purple-500 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Bistro Boss
                </h3>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full animate-pulse">Live</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                Restaurant Management System
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-purple-600">✓</span>
                  Developed a scalable SPA with Role-Based Access Control (RBAC) featuring dedicated dashboards
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-purple-600">✓</span>
                  Integrated Firebase & JWT for secure authentication and Stripe for online transactions
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-purple-600">✓</span>
                  Designed responsive, modern UI with Tailwind CSS and DaisyUI, achieving 100% mobile compatibility
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="React" className="w-4 h-4" />
                  React
                </span>
                <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="Firebase" className="w-4 h-4" />
                  Firebase
                </span>
                <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="JWT" className="w-4 h-4" />
                  JWT
                </span>
                <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="Tailwind CSS" className="w-4 h-4" />
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="DaisyUI" className="w-4 h-4" />
                  DaisyUI
                </span>
              </div>
            </div>

            {/* LearnGo */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg hover-lift group cursor-pointer border-2 border-transparent hover:border-green-500 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  LearnGo
                </h3>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full animate-pulse">Live</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                E-Learning Platform
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-green-600">✓</span>
                  Built a responsive educational portal with Role-Based Dashboards and secure authentication
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-green-600">✓</span>
                  Implemented real-time course progress tracking for enhanced learning experience
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span className="mr-2 text-green-600">✓</span>
                  Optimized state management using React Hook Form and React Router for high performance
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="React" className="w-4 h-4" />
                  React
                </span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="Node.js" className="w-4 h-4" />
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <TechIcon name="MongoDB" className="w-4 h-4" />
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-yellow-600 text-white rounded-full text-sm hover:scale-110 transition-transform cursor-pointer flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  React Router
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16 animate-fadeInUp delay-400">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-900/20 dark:to-purple-800/20 rounded-lg hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    B.Sc. in Electrical and Electronics Engineering
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">Faridpur Engineering College</p>
                  <p className="text-gray-600 dark:text-gray-400">2025 - 2029 (Expected)</p>
                </div>
                <div className="text-4xl">🎓</div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Pursuing engineering degree while actively developing full-stack web applications 
                and expanding my technical expertise in modern web technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg animate-fadeInUp delay-500">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg text-center hover-lift">
              <div className="text-4xl mb-3">🇧🇩</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Bangla
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Native</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg text-center hover-lift">
              <div className="text-4xl mb-3">🇬🇧</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                English
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Comfortable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
