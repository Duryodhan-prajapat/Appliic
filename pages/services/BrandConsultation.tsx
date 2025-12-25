import React from 'react';
import { motion } from 'framer-motion';
import { Palette, CheckCircle, Target, Eye, PenTool, Sparkles } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const BrandConsultation: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-600/30">
              Strategic Identity
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Premium <br/> <span className="text-primary-400">Brand Consultation</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              We help brands find their voice, define their vision, and build a visual identity that commands attention in a crowded market.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Visual Identity for the Digital Age</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Your brand is more than a logo. It's an emotional connection. We dive deep into your brand DNA to create a strategic framework that drives growth and loyalty.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Visual Identity Design', desc: 'Logo, typography, and color palettes that stand the test of time.' },
                { title: 'Brand Positioning', desc: 'Define your unique value proposition and market standing.' },
                { title: 'Tone of Voice', desc: 'Craft a consistent verbal identity that resonates with your audience.' },
                { title: 'Brand Guidelines', desc: 'Comprehensive playbooks for consistent execution across all channels.' }
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
          <div className="order-1 lg:order-2">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <motion.div whileHover={{ y: -10 }} className="aspect-square md:aspect-auto md:h-64 lg:h-auto lg:aspect-square bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-end border border-slate-100 shadow-sm transition-all">
                   <Target className="text-primary-600 mb-4" size={32} />
                   <h5 className="font-black text-slate-900 text-xl tracking-tight">Strategic Focus</h5>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="aspect-square md:aspect-auto md:h-64 lg:h-auto lg:aspect-square bg-primary-600 rounded-[2rem] p-8 flex flex-col justify-end text-white shadow-xl shadow-primary-600/20 transition-all">
                   <PenTool className="text-primary-100 mb-4" size={32} />
                   <h5 className="font-black text-xl tracking-tight">Art Direction</h5>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="aspect-square md:aspect-auto md:h-64 lg:h-auto lg:aspect-square bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-end text-white transition-all">
                   <Eye className="text-primary-400 mb-4" size={32} />
                   <h5 className="font-black text-xl tracking-tight">Brand Audit</h5>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="aspect-square md:aspect-auto md:h-64 lg:h-auto lg:aspect-square bg-slate-50 rounded-[2rem] p-8 flex flex-col justify-end border border-slate-100 shadow-sm transition-all">
                   <Sparkles className="text-primary-600 mb-4" size={32} />
                   <h5 className="font-black text-slate-900 text-xl tracking-tight">Market Fit</h5>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Ready to elevate your brand identity?</h2>
          <p className="text-slate-500 text-base md:text-lg mb-12 font-medium">Let's create a brand that people remember.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <Button className="w-full sm:w-auto h-16 px-12 text-lg font-black">Get a Brand Audit</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandConsultation;