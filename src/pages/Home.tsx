import { motion } from 'motion/react';
import { Shield, Zap, Layout, Monitor, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { FEATURED_COURSES } from '../constants';

export default function Home() {
  const benefits = [
    {
      icon: <Zap className="text-green-500" size={32} />,
      title: "Low Cost",
      desc: "High-quality instructionals at a fraction of the cost of other platforms."
    },
    {
      icon: <Monitor className="text-blue-500" size={32} />,
      title: "Immediate Access",
      desc: "Buy and start learning instantly from any device, anywhere."
    },
    {
      icon: <Layout className="text-green-500" size={32} />,
      title: "Expertly Organized",
      desc: "Techniques categorized by level and concept for efficient learning."
    }
  ];

  const steps = [
    { number: "01", title: "Pick a Course", desc: "Browse our library of specialized instructionals." },
    { number: "02", title: "Secure Checkout", desc: "Pay once and own the content forever." },
    { number: "03", title: "Level Up", desc: "Access lessons from your profile and improve your game." }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-green-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-white/10 px-4 py-2 rounded-full mb-8">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Join 5,000+ Athletes Today</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                LEARN BJJ WITH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                  ACCESSIBLE
                </span> <br />
                INSTRUCTIONALS
              </h1>
              
              <p className="text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed">
                Practical Brazilian Jiu-Jitsu courses to improve your game without paying absurd prices. No subscriptions, just results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="bg-green-600 text-black h-16 flex items-center justify-center px-10 rounded-2xl font-black text-lg hover:bg-green-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-600/20"
                >
                  Explore Courses
                </Link>
                <button className="bg-transparent border border-white/20 text-white h-16 px-10 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center space-x-3">
                  <Play size={20} className="fill-white" />
                  <span>How it works</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599058917233-57c0b68486c7?auto=format&fit=crop&q=80&w=1200"
                  alt="BJJ Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-zinc-900 border border-white/10 p-6 rounded-3xl shadow-xl max-w-[240px] hidden md:block"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                    <Shield className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">$19.99</div>
                    <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Starting Price</div>
                  </div>
                </div>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                  The most affordable high-level techniques on the market.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/40 p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                FEATURED <span className="text-green-500">INSTRUCTIONALS</span>
              </h2>
              <p className="text-zinc-500 max-w-xl">
                Browse our hand-picked selection of top-performing courses from pro instructors.
              </p>
            </div>
            <Link to="/courses" className="flex items-center space-x-2 text-green-500 font-bold hover:text-green-400 transition-colors group">
              <span>View all courses</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">HOW IT WORKS</h2>
            <p className="text-zinc-500 text-lg">Three simple steps to start your technical revolution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5 hidden md:block" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-green-500 transition-colors">
                  <span className="text-xl font-black text-green-500">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-500 text-sm max-w-[240px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/40 border border-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             {/* Background blur */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />

             <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 relative z-10 font-sans">
              "The best $20 I've spent on my Jiu-Jitsu. <br /> Straight to the point techniques."
             </h2>
             
             <div className="flex flex-col items-center relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=100" 
                  className="w-16 h-16 rounded-full border-2 border-green-500 mb-4" 
                  alt="Customer"
                />
                <div className="text-white font-bold">John Wick</div>
                <div className="text-zinc-600 text-sm">Competitive Purple Belt</div>
             </div>

             <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center justify-center grayscale text-white text-xl font-black italic tracking-tighter">
                    ATHLETE_{i}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">
            READY TO <span className="text-green-500">WIN?</span>
          </h2>
          <Link
            to="/courses"
            className="inline-flex items-center space-x-4 bg-white text-black h-20 px-12 rounded-[2.5rem] font-black text-2xl hover:bg-green-500 hover:scale-105 transition-all"
          >
            <span>EXPLORE NOW</span>
            <ArrowRight size={32} />
          </Link>
        </div>
      </section>
    </div>
  );
}
