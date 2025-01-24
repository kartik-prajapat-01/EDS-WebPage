
import {  Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img src="./assets/apple-touch-icon.png" alt="/logo" className="h-[50px] w-[50px]" />

              <div>
              <div className="text-xl font-bold text-white">Echelon Dev Society </div>
              <div className="text-s  text-gray-400">Hackathon Club of CDGI</div>
            </div>
              
            </div>
            
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#events" className="hover:text-indigo-400">Events</a></li>
              <li><a href="#team" className="hover:text-indigo-400">Team</a></li>
              <li><a href="#" className="hover:text-indigo-400">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>contact@echelondev.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>+91 999XX XXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span>CDGI, Indore</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest events and news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-r hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Echelon Dev Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;