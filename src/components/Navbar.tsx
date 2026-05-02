import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User } from '../types';
import { cn } from '../lib/utils';

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'My Projects', path: '/projects', hidden: !user }, // Example
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              BJJ <span className="text-green-500 font-black">COURSES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-green-500", isActive('/') ? "text-green-500" : "text-zinc-400")}>Home</Link>
            <Link to="/courses" className={cn("text-sm font-medium transition-colors hover:text-green-500", isActive('/courses') ? "text-green-500" : "text-zinc-400")}>Courses</Link>
            {user && (
              <Link to="/profile" className={cn("text-sm font-medium transition-colors hover:text-green-500", isActive('/profile') ? "text-green-500" : "text-zinc-400")}>My Courses</Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Link
                to="/profile"
                className="flex items-center space-x-3 bg-zinc-900/50 border border-white/10 rounded-full px-4 py-1.5 hover:bg-zinc-800 transition-all group"
              >
                <div className="text-right flex flex-col items-end">
                  <span className="text-xs font-semibold text-white">{user.name}</span>
                  <span className="text-[10px] text-zinc-500 leading-none">{user.level} Belt</span>
                </div>
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border-2 border-green-500 group-hover:border-blue-500 transition-colors" />
              </Link>
            ) : (
              <button className="bg-green-600 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-green-400 transition-all">
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0e0e0e] border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium border-b border-white/5"
              >
                Home
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium border-b border-white/5"
              >
                Courses
              </Link>
              {user && (
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-medium border-b border-white/5"
                >
                  My Courses
                </Link>
              )}
              {user && (
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-4 text-lg font-medium"
                >
                  <span>Profile</span>
                  <img src={user.avatar} alt="" className="w-10 h-10 rounded-full border-2 border-green-500" />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
