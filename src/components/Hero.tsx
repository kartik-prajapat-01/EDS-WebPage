
import { Terminal, Users, Code } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            Welcome to <span className="text-indigo-600 dark:text-indigo-400">Echelon Dev Society</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A community of passionate developers building the future through code, collaboration, and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Terminal className="h-8 w-8" />,
                title: "Technical Workshops",
                description: "Learn from industry experts"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Networking",
                description: "Connect with fellow developers"
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Hackathons",
                description: "Build amazing projects"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}