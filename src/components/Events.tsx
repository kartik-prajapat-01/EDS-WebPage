

const events = [
  {
    title: "Hackwave Hackathon 2024",
    date: "March 15-16, 2024",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    description: "48-hour coding challenge to build innovative solutions"
  },
  {
    title: "Web3 Workshop Series",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    description: "Deep dive into blockchain development"
  },
  {
    title: "Tech Talk: AI & ML",
    date: "May 20, 2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    description: "Expert speakers discuss the future of AI"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Upcoming Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-2">
                  {event.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}