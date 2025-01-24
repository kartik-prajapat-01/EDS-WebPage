
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "Aniruddh Dubge",
    role: "President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    github: "#",
    linkedin: "#",
    email: "#"
  },
  {
    name: "Jigyarth Sharma",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    github: "#",
    linkedin: "#",
    email: "#"
  },
  {
    name: "Atharva Raj Thakur",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    github: "#",
    linkedin: "#",
    email: "#"
  },
  {
    name: "Atharva Raj Thakur",
    role: "Development Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    github: "#",
    linkedin: "#",
    email: "#"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                {member.role}
              </p>
              <div className="flex justify-center space-x-4">
                <a href={member.github} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Github size={20} />
                </a>
                <a href={member.linkedin} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Linkedin size={20} />
                </a>
                <a href={member.email} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}