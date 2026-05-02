import { Link } from 'react-router-dom';
import { Clock, User as UserIcon, Star, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'motion/react';
import React from 'react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 font-sans"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {course.badge && (
            <span className="bg-green-500/90 backdrop-blur-md text-black text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest">
              {course.badge}
            </span>
          )}
          <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wider">
            {course.level}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center space-x-1">
          <Star size={12} className="text-yellow-400 fill-yellow-400 font-sans" />
          <span className="text-xs font-bold text-white">4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-2">
          <span>{course.category}</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>{course.duration}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
          {course.title}
        </h3>
        
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center border border-white/5">
            <UserIcon size={12} className="text-zinc-400" />
          </div>
          <span className="text-sm text-zinc-400 font-medium">{course.instructor}</span>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tighter">Starting at</span>
            <span className="text-2xl font-black text-white leading-none">${course.price}</span>
          </div>
          <Link
            to={`/checkout/${course.id}`}
            className="bg-zinc-800 hover:bg-green-500 group/btn h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ArrowRight size={20} className="text-white group-hover/btn:text-black transition-colors" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
