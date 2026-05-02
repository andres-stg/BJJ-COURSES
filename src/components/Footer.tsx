import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                BJJ <span className="text-green-500">COURSES</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The ultimate platform for affordable, high-quality Brazilian Jiu-Jitsu instructionals. Improve your game without breaking the bank.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="text-zinc-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-zinc-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Youtube size={20} className="text-zinc-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-zinc-500 hover:text-white transition-colors text-sm">All Courses</Link></li>
              <li><Link to="/profile" className="text-zinc-500 hover:text-white transition-colors text-sm">My Learning</Link></li>
              <li><Link to="/" className="text-zinc-500 hover:text-white transition-colors text-sm">Instructors</Link></li>
              <li><Link to="/" className="text-zinc-500 hover:text-white transition-colors text-sm">Communities</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-zinc-500 hover:text-white transition-colors text-sm">Help Center</Link></li>
              <li><Link to="/" className="text-zinc-500 hover:text-white transition-colors text-sm">Affiliates</Link></li>
              <li><Link to="/" className="text-zinc-500 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Weekly Technique</h4>
            <p className="text-zinc-500 text-sm mb-4">Get a free technique in your inbox every Monday.</p>
            <div className="flex bg-zinc-900 rounded-lg p-1">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none focus:ring-0 text-sm px-3 flex-grow text-white placeholder:text-zinc-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-500 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-transparent">
          <p className="text-zinc-600 text-xs mb-4 md:mb-0">
            © 2024 BJJ COURSES Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/" className="text-zinc-600 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-zinc-600 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
