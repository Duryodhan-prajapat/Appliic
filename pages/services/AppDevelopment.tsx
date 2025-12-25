import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, Zap, Layers, Sparkles } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const AppDevelopment: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-600/30">
              Mobile-First Innovation
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Native-Grade <br/> <span className="text-primary-400">App Development</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Crafting premium mobile experiences for iOS and Android. We build high-utility apps that users love and businesses scale with.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-3 md:p-6 shadow-2xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="App interface" className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-10 right-4 sm:right-[-20px] bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 max-w-[180px] md:max-w-[200px] hidden sm:block">
                   <Zap className="text-primary-600 mb-2" />
                   <h5 className="font-black text-slate-900 leading-tight">Lightning Performance</h5>
                   <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">60FPS Animations</p>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Your Brand, in Every Pocket.</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              We don't just build apps; we create digital ecosystems. Our mobile team specializes in React Native and Flutter to deliver near-native performance with maximum cost-efficiency.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Cross-Platform Excellence', desc: 'Reach iOS and Android users with a single, high-performance codebase.' },
                { title: 'UX Focused UI Design', desc: 'Interfaces that feel natural, intuitive, and visually stunning.' },
                { title: 'Real-time Capabilities', desc: 'Push notifications, live chats, and instant data synchronization.' },
                { title: 'Robust Backend Systems', desc: 'Secure APIs and database architectures to support millions of users.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-primary-50 p-2 rounded-lg text-primary-600 shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg mb-1 leading-tight">{item.title}</h3>
                    <p className="text-sm md:text-base text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="text-center">
              <Layers className="mx-auto text-primary-400 mb-6 w-10 h-10 md:w-12 md:h-12" />
              <h4 className="text-xl md:text-2xl font-black mb-4 tracking-tight">Scalable Infra</h4>
              <p className="text-slate-400 text-sm md:text-base font-medium">Built on AWS & Google Cloud for infinite scalability.</p>
           </div>
           <div className="text-center">
              <Sparkles className="mx-auto text-primary-400 mb-6 w-10 h-10 md:w-12 md:h-12" />
              <h4 className="text-xl md:text-2xl font-black mb-4 tracking-tight">Modern UX</h4>
              <p className="text-slate-400 text-sm md:text-base font-medium">Following Apple & Google's latest design guidelines.</p>
           </div>
           <div className="text-center">
              <Smartphone className="mx-auto text-primary-400 mb-6 w-10 h-10 md:w-12 md:h-12" />
              <h4 className="text-xl md:text-2xl font-black mb-4 tracking-tight">Native Feel</h4>
              <p className="text-slate-400 text-sm md:text-base font-medium">Fluid gestures and haptic feedback integrated.</p>
           </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Got an app idea?</h2>
          <p className="text-slate-500 text-base md:text-lg mb-12 font-medium">Let's prototype your vision and bring it to market.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <Button className="w-full sm:w-auto h-16 px-12 text-lg font-black">Book a Discovery Call</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;