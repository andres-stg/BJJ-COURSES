import { useState, useMemo, FormEvent } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, CheckCircle, ArrowLeft, Info } from 'lucide-react';
import { FEATURED_COURSES } from '../constants';
import { User } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CheckoutProps {
  user: User;
}

export default function Checkout({ user }: CheckoutProps) {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const course = useMemo(() => 
    FEATURED_COURSES.find(c => c.id === courseId) || FEATURED_COURSES[0]
  , [courseId]);

  const handlePayment = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-zinc-900 border border-white/5 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500" />
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-500" size={48} />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">PURCHASE SUCCESSFUL</h2>
          <p className="text-zinc-500 mb-10 leading-relaxed">
            Your course <span className="text-white font-bold">"{course.title}"</span> is now available in your dashboard. Start training immediately.
          </p>
          <div className="flex flex-col gap-4">
            <Link 
              to={`/my-courses/${course.id}`}
              className="bg-green-600 text-black h-16 rounded-2xl flex items-center justify-center font-black text-lg hover:bg-green-400 transition-all"
            >
              Start Learning Now
            </Link>
            <Link 
              to="/courses"
              className="text-zinc-500 font-bold hover:text-white transition-colors"
            >
              Continue Browsing
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/courses" className="inline-flex items-center space-x-2 text-zinc-500 hover:text-white font-bold mb-12 transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Catalog</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-black text-white mb-8 border-b border-white/5 pb-4">PAYMENT DETAILS</h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">First Name</label>
                        <input required type="text" defaultValue={user.name.split(' ')[0]} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Last Name</label>
                        <input required type="text" defaultValue={user.name.split(' ')[1]} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
                    </div>
                </div>
                <div>
                    <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Email Address</label>
                    <input required type="email" defaultValue={user.email} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
                </div>
              </div>

              <div className="pt-6">
                <label className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4">Card Information</label>
                <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/5 relative">
                        <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700" size={24} />
                        <input required type="text" placeholder="Card number" className="w-full bg-transparent border-none text-white focus:ring-0 placeholder:text-zinc-700" />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="p-4 border-r border-white/5">
                            <input required type="text" placeholder="MM / YY" className="w-full bg-transparent border-none text-white focus:ring-0 placeholder:text-zinc-700" />
                        </div>
                        <div className="p-4">
                            <input required type="text" placeholder="CVV" className="w-full bg-transparent border-none text-white focus:ring-0 placeholder:text-zinc-700" />
                        </div>
                    </div>
                </div>
              </div>

              <div className="bg-blue-600/5 border border-blue-500/20 p-4 rounded-xl flex items-start space-x-3">
                <ShieldCheck className="text-blue-500 shrink-0" size={20} />
                <p className="text-xs text-blue-400 leading-relaxed">
                   Your payment is processed through a secure 256-bit encrypted gateway. Your credit card data is never stored on our servers.
                </p>
              </div>

              <button 
                disabled={isProcessing}
                type="submit" 
                className="w-full bg-green-600 text-black h-16 rounded-2xl font-black text-lg hover:bg-green-400 disabled:bg-zinc-800 disabled:text-zinc-500 transition-all flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>PAY ${course.price} AND GET ACCESS</span>
                )}
              </button>
            </form>
          </div>

          {/* Product Info */}
          <div className="order-1 lg:order-2 space-y-8 lg:sticky lg:top-32">
             <div className="bg-zinc-900/40 border border-white/10 rounded-[2rem] p-8">
                <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-tighter mb-6">Course Summary</h3>
                <div className="flex gap-4 mb-8">
                    <img src={course.image} className="w-24 h-24 rounded-2xl object-cover shrink-0" alt="" />
                    <div>
                        <h4 className="text-xl font-bold text-white mb-1">{course.title}</h4>
                        <div className="text-zinc-500 text-sm mb-2">{course.instructor}</div>
                        <span className="bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase px-2 py-0.5 rounded">{course.level}</span>
                    </div>
                </div>

                <div className="space-y-4 border-t border-white/5 pt-8 mb-8">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Course Price</span>
                        <span className="text-white font-bold">${course.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Service Fee</span>
                        <span className="text-green-500 font-bold">$0.00</span>
                    </div>
                     <div className="flex justify-between items-center text-xl pt-4 border-t border-white/5">
                        <span className="text-white font-black">Total to pay</span>
                        <span className="text-green-500 font-black">${course.price}</span>
                    </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-zinc-400 text-xs">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>Lifetime access to all {course.modules.length || 8} modules</span>
                  </div>
                  <div className="flex items-center space-x-3 text-zinc-400 text-xs">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>Downloadable resources and notes</span>
                  </div>
                  <div className="flex items-center space-x-3 text-zinc-400 text-xs">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>Direct contact with the instructor</span>
                  </div>
                </div>
             </div>

             <div className="flex items-center justify-center space-x-8 opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="PayPal" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
