import { User, Course } from '../types';
import { FEATURED_COURSES } from '../constants';
import { motion } from 'motion/react';
import { Calendar, Award, Play, Settings, ChevronRight, BarChart3, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ProfileProps {
  user: User;
}

export default function Profile({ user }: ProfileProps) {
  const stats = [
    { label: 'Purchased', value: user.purchasedCourseIds.length, icon: <BookOpen className="text-blue-500" /> },
    { label: 'Completed', value: 0, icon: <Award className="text-green-500" /> },
    { label: 'Practice Hours', value: '12.5', icon: <Clock className="text-purple-500" /> },
  ];

  const purchasedCourses = FEATURED_COURSES.filter(c => user.purchasedCourseIds.includes(c.id));

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 text-center sticky top-32">
              <div className="relative inline-block mb-6">
                <img src={user.avatar} className="w-24 h-24 rounded-full border-4 border-zinc-800" alt={user.name} />
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-full border-4 border-zinc-900">
                  {user.level}
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-zinc-500 text-sm mb-8">{user.email}</p>
              
              <div className="space-y-4">
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2">
                  <Settings size={16} />
                  <span>Edit Profile</span>
                </button>
                <button className="w-full text-zinc-500 hover:text-red-500 py-2 text-sm font-bold transition-all underline underline-offset-4">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-zinc-900/40 border border-white/5 p-6 rounded-3xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5">
                      {stat.icon}
                    </div>
                    <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* My Courses */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-white">MY COURSES</h3>
                <Link to="/courses" className="text-sm font-bold text-blue-500 hover:text-blue-400 flex items-center space-x-1 group">
                   <span>Browse more</span>
                   <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {purchasedCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {purchasedCourses.map(course => {
                    const progress = user.progress[course.id] || 0;
                    return (
                      <div key={course.id} className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 hover:border-green-500/50 transition-all group">
                         <div className="flex gap-4 mb-6">
                            <img src={course.image} className="w-20 h-20 rounded-2xl object-cover" alt="" />
                            <div className="flex-grow min-w-0">
                               <h4 className="text-lg font-bold text-white mb-1 truncate">{course.title}</h4>
                               <div className="text-zinc-500 text-xs mb-3">{course.instructor}</div>
                               <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest mb-1.5">
                                 <span className="text-green-500">{progress}% Complete</span>
                                 <span className="text-zinc-600">8 Lessons left</span>
                               </div>
                               {/* Progress Bar */}
                               <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    className="h-full bg-green-500" 
                                  />
                               </div>
                            </div>
                         </div>
                         <Link 
                            to={`/my-courses/${course.id}`}
                            className="w-full bg-zinc-900 border border-white/10 text-white h-12 flex items-center justify-center space-x-2 rounded-xl font-bold hover:bg-green-500 hover:text-black transition-all"
                         >
                            <Play size={16} />
                            <span>Continue Course</span>
                         </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-zinc-900/20 border border-dashed border-white/10 rounded-3xl p-12 text-center">
                   <p className="text-zinc-600 mb-6">You haven't purchased any courses yet.</p>
                   <Link to="/courses" className="bg-green-600 text-black px-8 py-3 rounded-xl font-bold hover:bg-green-400 transition-colors">
                     Explore Library
                   </Link>
                </div>
              )}
            </div>

            {/* Quick Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/5">
                <button className="flex items-center justify-between p-6 bg-zinc-900/20 rounded-3xl border border-white/5 hover:border-white/20 transition-all">
                  <div className="text-left">
                    <div className="text-white font-bold mb-1">Billing & Methods</div>
                    <div className="text-zinc-600 text-xs">Manage your cards and subscriptions</div>
                  </div>
                  <ChevronRight size={20} className="text-zinc-700" />
                </button>
                <button className="flex items-center justify-between p-6 bg-zinc-900/20 rounded-3xl border border-white/5 hover:border-white/20 transition-all">
                  <div className="text-left">
                    <div className="text-white font-bold mb-1">Purchase History</div>
                    <div className="text-zinc-600 text-xs">View all your previous transactions</div>
                  </div>
                  <ChevronRight size={20} className="text-zinc-700" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
