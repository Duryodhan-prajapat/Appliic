import React from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, Zap, Globe, Shield } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const WebDevelopment: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-[#0a0f1d] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-600/30">
              Precision Engineering
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              High-Performance <br/> <span className="text-primary-400">Web Development</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              We build lightning-fast, secure, and scalable websites tailored to your business goals. From Shopify Plus to Headless React architectures.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Enterprise-Grade Solutions for Forward-Thinking Brands</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              In a digital-first world, your website is your most powerful asset. Our engineering team combines technical rigor with aesthetic excellence to deliver experiences that convert.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Shopify Expert Development', desc: 'Custom Liquid themes and Shopify Plus migrations built for speed.' },
                { title: 'Headless Architectures', desc: 'Blazing fast React & Next.js builds for ultimate flexibility.' },
                { title: 'API Integrations', desc: 'Seamlessly connect your ERP, CRM, and marketing tools.' },
                { title: 'Performance Optimization', desc: 'Core Web Vitals focused development for SEO dominance.' }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6 sm:mt-12">
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl">
                  <Zap className="text-primary-600 mb-4" size={32} />
                  <h4 className="font-black text-xl mb-2 tracking-tight">Ultra Fast</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Sub-second load times for maximum conversion.</p>
               </div>
               <div className="bg-slate-900 p-8 rounded-[2rem] text-white transition-all hover:shadow-2xl">
                  <Globe className="text-primary-400 mb-4" size={32} />
                  <h4 className="font-black text-xl mb-2 tracking-tight">Global Scale</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">Edge delivery architectures for a worldwide audience.</p>
               </div>
            </div>
            <div className="space-y-6">
               <div className="bg-primary-600 p-8 rounded-[2rem] text-white shadow-xl shadow-primary-600/20 transition-all hover:shadow-primary-600/40">
                  <Code className="text-primary-200 mb-4" size={32} />
                  <h4 className="font-black text-xl mb-2 tracking-tight">Clean Code</h4>
                  <p className="text-sm text-primary-100 font-medium leading-relaxed">Maintainable, atomic codebases that grow with you.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl">
                  <Shield className="text-primary-600 mb-4" size={32} />
                  <h4 className="font-black text-xl mb-2 tracking-tight">Ironclad</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Security-first development approach for peace of mind.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Ready to build your next-gen web experience?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <Button className="w-full sm:w-auto h-16 px-12 text-lg font-black">Get Started</Button>
             </Link>
             <Link to="/contact">
               <Button variant="outline" className="w-full sm:w-auto h-16 px-12 text-lg font-black border-slate-200">View Our Tech Stack</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;