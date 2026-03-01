'use client';

import SkillBar from '@/components/SkillBar';
import TechIcon from '@/components/TechIcon';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Shadcn UI', level: 85 },
        { name: 'DaisyUI', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 90 },
        { name: 'JWT Authentication', level: 88 },
        { name: 'Firebase', level: 87 },
        { name: 'REST APIs', level: 93 },
      ],
    },
    {
      title: 'Tools & Technologies',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Stripe API', level: 90 },
        { name: 'Tanstack Query', level: 88 },
        { name: 'Axios', level: 92 },
        { name: 'Git & GitHub', level: 93 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 95 },
      ],
    },
    {
      title: 'Specializations',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Full Stack Development', level: 92 },
        { name: 'Payment Integration', level: 90 },
        { name: 'State Management', level: 88 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Clean Code', level: 90 },
        { name: 'Problem Solving', level: 93 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text-animated">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scaleIn delay-${(categoryIndex + 1) * 100}`}
            >
              <div className="mb-6">
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h2>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={(categoryIndex * 300) + (skillIndex * 100)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16 animate-fadeInUp delay-500">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Tailwind CSS',
              'Shadcn UI',
              'DaisyUI',
              'Firebase',
              'Stripe',
              'JWT',
              'Tanstack Query',
              'Axios',
              'Git',
              'Figma',
              'VS Code',
              'REST APIs',
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                  <TechIcon name={tech} className="w-8 h-8" />
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-semibold text-center text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors z-10 relative">
                  {tech}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg text-white animate-fadeInUp delay-600">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover-lift">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
              <p className="text-white/80 text-sm">
                End-to-end application development with MERN stack
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover-lift">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl font-bold mb-2">Payment Integration</h3>
              <p className="text-white/80 text-sm">
                Secure Stripe API integration for transactions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover-lift">
              <div className="text-4xl mb-3">🔐</div>
              <h3 className="text-xl font-bold mb-2">Authentication</h3>
              <p className="text-white/80 text-sm">
                JWT & Firebase authentication systems
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover-lift">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-white/80 text-sm">
                100% mobile-compatible applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
