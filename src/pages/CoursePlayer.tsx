import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, CheckCircle, ChevronLeft, ChevronRight, Download, FileText, Lock, ListChecks, PlayCircle } from 'lucide-react';
import { FEATURED_COURSES } from '../constants';
import { User, Lesson } from '../types';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface CoursePlayerProps {
  user: User;
}

export default function CoursePlayer({ user }: CoursePlayerProps) {
  const { courseId } = useParams();
  const course = useMemo(() => 
    FEATURED_COURSES.find(c => c.id === courseId) || FEATURED_COURSES[0]
  , [courseId]);

  // Use the course's modules or some dummy ones if empty
  const modules = useMemo(() => {
    if (course.modules && course.modules.length > 0) return course.modules;
    // Fallback dummy modules
    return [
      {
        id: 'm1',
        title: 'Introduction & Concepts',
        lessons: [
          { id: 'l1', title: 'Course Overview', duration: '05:00', description: 'What we will cover.', videoUrl: '#' },
          { id: 'l2', title: 'Safety & Etiquette', duration: '08:00', description: 'Training with respect.', videoUrl: '#' }
        ]
      },
      {
         id: 'm2',
         title: 'The Core System',
         lessons: [
           { id: 'l3', title: 'Body Mechanics', duration: '15:00', description: 'Generating power.', videoUrl: '#' },
           { id: 'l4', title: 'The First Entry', duration: '12:00', description: 'Step by step.', videoUrl: '#' },
           { id: 'l5', title: 'Common Mistakes', duration: '10:00', description: 'What to avoid.', videoUrl: '#' }
         ]
      }
    ];
  }, [course]);

  const [currentLesson, setCurrentLesson] = useState<Lesson>(modules[0].lessons[0]);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(['l1']);

  const toggleComplete = (id: string) => {
    setCompletedLessonIds(prev => 
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-20">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-8 flex flex-col lg:grid lg:grid-cols-12 gap-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-zinc-500 text-sm">
            <Link to="/profile" className="hover:text-white flex items-center space-x-1">
              <ChevronLeft size={16} />
              <span>Back to My Courses</span>
            </Link>
            <span>/</span>
            <span className="text-white font-bold">{course.title}</span>
          </div>

          {/* Video Player Placeholder */}
          <div className="aspect-video bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 relative shadow-2xl group cursor-pointer group">
            <img src={course.image} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 group-hover:scale-110 transition-transform">
                    <Play className="text-black ml-1" fill="currentColor" size={32} />
                </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white font-bold text-lg">{currentLesson.title}</div>
                <div className="text-zinc-400 text-sm">{currentLesson.duration}</div>
            </div>
          </div>

          {/* Lesson Details */}
          <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] space-y-8">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl font-black text-white mb-2">{currentLesson.title}</h1>
                  <p className="text-zinc-500 leading-relaxed font-sans">{currentLesson.description}</p>
                </div>
                <div className="flex space-x-4 shrink-0">
                    <button 
                      onClick={() => toggleComplete(currentLesson.id)}
                      className={cn(
                        "h-14 px-8 rounded-2xl font-black text-sm transition-all flex items-center space-x-2",
                        completedLessonIds.includes(currentLesson.id) 
                          ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                          : "bg-green-600 text-black shadow-lg shadow-green-600/10 hover:bg-green-400"
                      )}
                    >
                        {completedLessonIds.includes(currentLesson.id) ? <CheckCircle size={18} /> : null}
                        <span>{completedLessonIds.includes(currentLesson.id) ? 'Completed' : 'Mark as Complete'}</span>
                    </button>
                    <button className="bg-zinc-800 text-white h-14 w-14 rounded-2xl flex items-center justify-center hover:bg-zinc-700 transition-all border border-white/5">
                        <ChevronRight size={20} />
                    </button>
                </div>
             </div>

             {/* Description & Resources */}
             <div className="pt-8 border-t border-white/5">
                <div className="flex items-center space-x-8 border-b border-white/5 mb-8">
                  <button className="pb-4 text-white font-bold border-b-2 border-green-500 tracking-tight">Technical Breakdown</button>
                  <button className="pb-4 text-zinc-500 font-bold hover:text-zinc-300 transition-colors tracking-tight">Resources</button>
                  <button className="pb-4 text-zinc-500 font-bold hover:text-zinc-300 transition-colors tracking-tight">Q&A</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sans">
                  <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest text-zinc-500">Instructor Notes</h4>
                    <ul className="space-y-4">
                      {['Focus on hip rotation for maximum leverage.', 'Keep the elbow tight to prevent a counter.', 'Maintain weight distribution on the chest.'].map((note, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-zinc-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest text-zinc-500">Related Files</h4>
                    <div className="space-y-3">
                       <button className="w-full flex items-center justify-between p-4 bg-zinc-800/40 rounded-xl border border-white/5 hover:border-zinc-500 transition-all">
                          <div className="flex items-center space-x-3">
                            <FileText size={18} className="text-zinc-500" />
                            <span className="text-sm font-medium text-white">Technique_Drills.pdf</span>
                          </div>
                          <Download size={16} className="text-zinc-500" />
                       </button>
                       <button className="w-full flex items-center justify-between p-4 bg-zinc-800/40 rounded-xl border border-white/5 hover:border-zinc-500 transition-all">
                          <div className="flex items-center space-x-3">
                            <PlayCircle size={18} className="text-zinc-500" />
                            <span className="text-sm font-medium text-white">Supplementary_Concept.mp4</span>
                          </div>
                          <Download size={16} className="text-zinc-500" />
                       </button>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 h-full">
           <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] flex flex-col h-full max-h-[85vh]">
              <div className="p-8 border-b border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">COURSE CONTENT</h3>
                <div className="flex items-center space-x-2">
                   <div className="h-1.5 flex-grow bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="bg-green-500 h-full" 
                        style={{ width: `${(completedLessonIds.length / modules.reduce((acc, m) => acc + m.lessons.length, 0)) * 100}%` }} 
                      />
                   </div>
                   <span className="text-[10px] font-black uppercase text-zinc-500">
                    {completedLessonIds.length} / {modules.reduce((acc, m) => acc + m.lessons.length, 0)} COMPLETED
                   </span>
                </div>
              </div>

              <div className="flex-grow overflow-y-auto custom-scrollbar p-4 space-y-4">
                 {modules.map(module => (
                   <div key={module.id} className="space-y-1">
                      <div className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                        {module.title}
                      </div>
                      <div className="space-y-1">
                         {module.lessons.map(lesson => {
                           const isActive = currentLesson.id === lesson.id;
                           const isCompleted = completedLessonIds.includes(lesson.id);
                           return (
                             <button
                                key={lesson.id}
                                onClick={() => setCurrentLesson(lesson)}
                                className={cn(
                                  "w-full flex items-center justify-between p-4 rounded-2xl transition-all group",
                                  isActive ? "bg-white text-black" : "text-zinc-400 hover:bg-white/5"
                                )}
                             >
                                <div className="flex items-center space-x-3 text-left">
                                   <div className={cn(
                                     "w-6 h-6 rounded-lg flex items-center justify-center border transition-colors",
                                     isActive ? "border-black/20" : "border-white/10 group-hover:border-white/30",
                                     isCompleted ? "bg-green-500 border-none" : ""
                                   )}>
                                      {isCompleted ? (
                                        <CheckCircle size={14} className={isActive ? "text-white" : "text-black"} />
                                      ) : (
                                        <Play size={10} className={isActive ? "text-black" : "text-zinc-600"} fill="currentColor" />
                                      )}
                                   </div>
                                   <div>
                                      <div className={cn("text-xs font-bold transition-colors", isActive ? "text-black" : "text-zinc-300")}>
                                        {lesson.title}
                                      </div>
                                      <div className={cn("text-[10px] font-medium transition-colors", isActive ? "text-black/60" : "text-zinc-500")}>
                                        {lesson.duration}
                                      </div>
                                   </div>
                                </div>
                                {isActive && <ChevronRight size={16} className="text-black" />}
                             </button>
                           );
                         })}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
