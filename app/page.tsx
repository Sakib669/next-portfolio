'use client';

import Link from 'next/link';
import TypingAnimation from '@/components/TypingAnimation';
import ParticlesBackground from '@/components/ParticlesBackground';
import CounterAnimation from '@/components/CounterAnimation';
import TechIcon from '@/components/TechIcon';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Particles Background */}
        <ParticlesBackground />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="animate-fadeInDown">
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">
                  👋 Welcome to my portfolio
                </p>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white animate-fadeInUp">
                Hi, I'm{' '}
                <span className="gradient-text-animated">
                  Shafiqul Islam Sakib
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium animate-fadeInUp delay-200 min-h-[3rem] flex items-center justify-center">
                <TypingAnimation 
                  texts={[
                    'Full Stack Developer (MERN)',
                    'React & Next.js Expert',
                    'Node.js Developer',
                    'UI/UX Enthusiast'
                  ]}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fadeIn delay-300">
              Dedicated MERN Stack Developer with hands-on experience in building scalable web applications.
              Proficient in React, Node.js, and integrating secure payment systems. Focused on writing clean,
              efficient code and committed to continuous learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-400">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:scale-105 hover:-translate-y-1"
              >
                View My Work
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">GitHub Profile</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8 animate-fadeIn delay-500">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:shafiqul.dev@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                aria-label="Email"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fadeInUp">
            Achievements & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover-lift animate-scaleIn delay-100 group cursor-pointer">
              <CounterAnimation 
                end={3} 
                suffix="+" 
                className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform"
              />
              <div className="text-gray-700 dark:text-gray-300 font-medium">Major Projects</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Full-stack MERN applications</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover-lift animate-scaleIn delay-200 group cursor-pointer">
              <CounterAnimation 
                end={100} 
                suffix="%" 
                className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform"
              />
              <div className="text-gray-700 dark:text-gray-300 font-medium">Mobile Responsive</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">All projects optimized</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover-lift animate-scaleIn delay-300 group cursor-pointer">
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform">
                <CounterAnimation 
                  end={100} 
                  suffix="+" 
                  className="inline-block"
                />
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Items Managed</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Advanced search & filtering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 animate-fadeInUp">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 animate-fadeIn delay-100">
            Check out some of my recent work
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover-lift animate-slideInLeft delay-200 group cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-4xl font-bold z-10">ME</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">MernEats</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Food ordering & delivery platform with Stripe integration and real-time tracking
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="React" className="w-4 h-4" />
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="Node.js" className="w-4 h-4" />
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="MongoDB" className="w-4 h-4" />
                  MongoDB
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover-lift animate-scaleIn delay-300 group cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-4xl font-bold z-10">BB</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Bistro Boss</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Restaurant management system with RBAC, Firebase auth, and Stripe payments
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="React" className="w-4 h-4" />
                  React
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="Firebase" className="w-4 h-4" />
                  Firebase
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="JWT" className="w-4 h-4" />
                  JWT
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover-lift animate-slideInRight delay-400 group cursor-pointer border-2 border-transparent hover:border-green-500 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-4xl font-bold z-10">LG</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">LearnGo</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                E-learning platform with role-based dashboards and course progress tracking
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="React" className="w-4 h-4" />
                  React
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="Node.js" className="w-4 h-4" />
                  Node.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm hover:scale-110 transition-transform flex items-center gap-1">
                  <TechIcon name="MongoDB" className="w-4 h-4" />
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fadeInUp delay-500">
            <Link
              href="/about"
              className="inline-block px-8 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
