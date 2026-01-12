import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, TrendingUp, MousePointerClick, Users, PieChart } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const CRO: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-600/30">
              Profitability Strategy
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              CRO & <br/> <span className="text-primary-400">Growth Optimization</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Stop guessing, start growing. We turn your existing traffic into loyal customers through scientific A/B testing and behavioral psychology.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl">
                   <Users className="text-primary-600 mb-4" size={32} />
                   <h4 className="font-black text-xl mb-2 tracking-tight">User Behavior</h4>
                   <p className="text-sm text-slate-500 font-medium leading-relaxed">Session recordings and heatmaps reveal exactly where users get stuck.</p>
                </div>
                <div className="bg-primary-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary-600/20 transition-all hover:shadow-primary-600/40">
                   <TrendingUp className="text-primary-200 mb-4" size={32} />
                   <h4 className="font-black text-xl mb-2 tracking-tight">A/B Testing</h4>
                   <p className="text-sm text-primary-100 font-medium leading-relaxed">Statistically significant experiments that drive measurable AOV lift.</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white transition-all hover:shadow-2xl">
                   <MousePointerClick className="text-primary-400 mb-4" size={32} />
                   <h4 className="font-black text-xl mb-2 tracking-tight">Frictionless UX</h4>
                   <p className="text-sm text-slate-400 font-medium leading-relaxed">Streamlining the path to purchase to maximize checkout completion.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl">
                   <PieChart className="text-primary-600 mb-4" size={32} />
                   <h4 className="font-black text-xl mb-2 tracking-tight">Funnel Analysis</h4>
                   <p className="text-sm text-slate-500 font-medium leading-relaxed">Identifying and patching leaks in your customer acquisition funnel.</p>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Maximize the Value of Every Single Visitor</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Increasing traffic is expensive. Increasing conversion is an investment in your bottom line. We use a proprietary "Discovery-Experimentation-Action" loop to scale brands sustainably.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Qualitative Research', desc: 'Understanding the "Why" behind user actions through surveys and user testing.' },
                { title: 'Quantitative Audits', desc: 'Deep dive into Google Analytics 4 and Shopify data to find drop-off points.' },
                { title: 'Persuasion Engineering', desc: 'Applying scarcity, social proof, and urgency in a premium, non-spammy way.' },
                { title: 'Personalization Strategies', desc: 'Segment-based experiences that show the right content to the right user.' }
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

      <section className="bg-primary-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-8 shadow-sm">
             <Target size={32} />
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Ready to multiply your ROI?</h2>
          <p className="text-slate-600 text-base md:text-lg mb-12 font-medium">Let's audit your funnel and find your hidden growth opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <Button className="w-full sm:w-auto h-16 px-12 text-lg font-black shadow-primary-500/20">Book a CRO Strategy Session</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRO;