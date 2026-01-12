import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, CheckCircle, Zap, FastForward, Search, BarChart } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const SpeedOptimization: React.FC = () => {
    return (
        <div className="pt-20 bg-white min-h-screen">
            <section className="bg-[#0a0f1d] text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Breadcrumbs light />
                    <div className="text-center mt-12">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-primary-600/30">
                            Performance Engineering
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                            Lightning Fast <br /> <span className="text-primary-400">Store Performance</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                            Every millisecond costs you revenue. We optimize your storefront to achieve 90+ Lighthouse scores and sub-second load times globally.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Eliminate Bounce Rates with Technical Precision</h2>
                        <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                            Google's Core Web Vitals are now a critical ranking factor. Our optimization service isn't just about "cleaning code"—it's about re-engineering your digital footprint for peak efficiency.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: 'Core Web Vitals Mastery', desc: 'Focus on LCP, FID, and CLS to ensure the best possible user experience and SEO ranking.' },
                                { title: 'Shopify App Bloat Removal', desc: 'Identify and remove scripts that slow down your checkout and product pages.' },
                                { title: 'Image & Media Optimization', desc: 'Next-gen formats, lazy loading, and intelligent compression without quality loss.' },
                                { title: 'Global CDN Strategy', desc: 'Ensuring your assets are delivered from the server closest to your customer.' }
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

                    <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <Gauge size={120} className="text-primary-400 group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        <h3 className="text-2xl font-black mb-10 tracking-tight">Real-World Impacts</h3>
                        <div className="space-y-12">
                            {[
                                { label: 'Avg. Revenue Increase', value: '7.4%', desc: 'For every 100ms improvement in speed.' },
                                { label: 'Mobile Conversion Lift', value: '15-20%', desc: 'When moving from 4s to 2s load time.' },
                                { label: 'Search Visibility', value: '+40%', desc: 'After passing all Core Web Vital thresholds.' }
                            ].map((stat, i) => (
                                <div key={i} className="relative">
                                    <p className="text-primary-400 font-black text-3xl md:text-4xl mb-1">{stat.value}</p>
                                    <p className="font-bold text-lg text-white mb-1">{stat.label}</p>
                                    <p className="text-sm text-slate-400 font-medium">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Technical Audit</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100">
                            <Search className="text-primary-600 mb-6" size={32} />
                            <h4 className="text-xl font-black mb-4">Deep Discovery</h4>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">Full waterfall analysis of every server request, script execution, and third-party dependency.</p>
                        </div>
                        <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100">
                            <Zap className="text-primary-600 mb-6" size={32} />
                            <h4 className="text-xl font-black mb-4">Code Refactoring</h4>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">Rewriting inefficient Liquid loops, minifying JS bundles, and implementing critical CSS pathing.</p>
                        </div>
                        <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100">
                            <BarChart className="text-primary-600 mb-6" size={32} />
                            <h4 className="text-xl font-black mb-4">Ongoing Monitoring</h4>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">Implementing real-user monitoring (RUM) to ensure speed doesn't degrade as you grow.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-10">
                        <FastForward size={40} />
                    </div>
                    <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Ready to leave the competition in the dust?</h2>
                    <div className="flex justify-center">
                        <Link to="/contact">
                            <Button className="h-16 px-12 text-lg font-black">Get Your Free Speed Audit</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpeedOptimization;