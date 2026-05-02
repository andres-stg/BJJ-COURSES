import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { FEATURED_COURSES, CATEGORIES } from '../constants';
import { CourseLevel, Category } from '../types';
import CourseCard from '../components/CourseCard';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Catalog() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredCourses = useMemo(() => {
    return FEATURED_COURSES.filter(course => {
      const matchSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(search.toLowerCase());
      const matchLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchSearch && matchLevel && matchCategory;
    });
  }, [search, selectedLevel, selectedCategory]);

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">ALL COURSES</h1>
          <p className="text-zinc-500">Master the details that make the difference. Filter and find your next path.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
            <input 
              type="text" 
              placeholder="Search by technique or instructor..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Level Filter */}
            <div className="relative group">
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value as any)}
                className="appearance-none bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-6 pr-12 text-sm font-bold text-white focus:outline-none focus:border-green-500 cursor-pointer transition-colors min-w-[160px]"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={16} />
            </div>

            {/* Category Filter */}
            <div className="relative group">
              <select 
                 value={selectedCategory}
                 onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="appearance-none bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-6 pr-12 text-sm font-bold text-white focus:outline-none focus:border-green-500 cursor-pointer transition-colors min-w-[200px]"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredCourses.map(course => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-zinc-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
            <p className="text-zinc-600">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {setSearch(''); setSelectedLevel('All'); setSelectedCategory('All');}}
              className="mt-8 text-green-500 font-bold hover:text-green-400 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
