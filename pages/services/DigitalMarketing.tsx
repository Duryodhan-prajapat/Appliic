import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, CheckCircle, TrendingUp, Search, BarChart3, Mail } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const DigitalMarketing: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-600/30">
              Growth & Retention
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Data-Driven <br/> <span className="text-primary-400">Digital Marketing</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              We don't just drive traffic; we drive revenue. Our performance marketing strategies are built on data, testing, and continuous optimization.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Scale Your Reach with Scientific Precision</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              We specialize in full-funnel digital marketing for high-growth e-commerce and SaaS brands. From SEO to automated retention flows, we maximize your customer Lifetime Value (LTV).
            </p>
            <div className="space-y-6">
              {[
                { title: 'Search Engine Optimization (SEO)', desc: 'Dominate organic search results with technical and content SEO.' },
                { title: 'Retention Marketing (CRM)', desc: 'Klaviyo & Email automation that converts one-time buyers into fans.' },
                { title: 'Paid Media Management', desc: 'Meta, Google, and TikTok ads managed for maximum ROAS.' },
                { title: 'Conversion Rate Optimization', desc: 'Iterative A/B testing to squeeze every drop of value from your traffic.' }
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
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl">
             <div className="space-y-10">
                <div className="flex items-center gap-4 md:gap-6">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-md shrink-0">
                      <Search className="w-6 h-6 md:w-8 md:h-8" />
                   </div>
                   <div className="flex-grow">
                      <h4 className="font-black text-lg md:text-xl mb-1 tracking-tight">SEO Audit</h4>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ duration: 1 }} className="h-full bg-primary-600"></motion.div>
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-md shrink-0">
                      <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />
                   </div>
                   <div className="flex-grow">
                      <h4 className="font-black text-lg md:text-xl mb-1 tracking-tight">ROAS Growth</h4>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-primary-600"></motion.div>
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-md shrink-0">
                      <Mail className="w-6 h-6 md:w-8 md:h-8" />
                   </div>
                   <div className="flex-grow">
                      <h4 className="font-black text-lg md:text-xl mb-1 tracking-tight">Email Retention</h4>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: '95%' }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-primary-600"></motion.div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white text-center shadow-xl">
                <TrendingUp className="mx-auto mb-2 text-primary-400" />
                <p className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Average Revenue Lift: 40%+</p>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Ready to scale your digital presence?</h2>
          <p className="text-slate-500 text-base md:text-lg mb-12 font-medium">Get a custom growth strategy tailored to your industry.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
               <Button className="w-full sm:w-auto h-16 px-12 text-lg font-black">Request a Strategy Call</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;