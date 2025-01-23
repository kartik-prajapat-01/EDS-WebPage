
import { Code2, Users, Globe, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Technical Excellence",
      description: "We foster a culture of continuous learning and technical mastery across various programming languages and technologies."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community First",
      description: "Our vibrant community of developers, designers, and tech enthusiasts collaborate to solve real-world problems."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Impact",
      description: "Through our projects and initiatives, we aim to make a lasting impact on the global tech ecosystem."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Hub",
      description: "We provide a platform for members to experiment with cutting-edge technologies and innovative solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Echelon Dev Society
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Echelon Dev Society has grown into a thriving community of tech enthusiasts, 
            developers, and innovators. We believe in the power of collaboration and knowledge sharing 
            to drive technological advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4 mx-auto">
                <div className="text-indigo-600 dark:text-indigo-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}