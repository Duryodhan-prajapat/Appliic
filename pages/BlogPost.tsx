import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, ChevronRight, Bookmark } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { BLOG_POSTS } from './Blog';
import Button from '../components/Button';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center px-4 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black mb-8">Article Not Found</h1>
        <Link to="/blog">
          <Button variant="primary">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 z-[1001] origin-left"
        style={{ scaleX }}
      />

      <section className="pt-32 pb-16 md:pb-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <div className="flex items-center gap-4 mb-8">
               <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-lg text-[10px] font-black uppercase tracking-widest">
                 {post.category}
               </span>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                 <Clock size={12} /> {post.readTime}
               </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-slate-200 py-8">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">{post.author}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <button className="p-3 bg-white rounded-xl border border-slate-200 text-slate-500 hover:text-primary-600 transition-colors shadow-sm">
                    <Twitter size={18} />
                  </button>
                  <button className="p-3 bg-white rounded-xl border border-slate-200 text-slate-500 hover:text-primary-600 transition-colors shadow-sm">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-3 bg-white rounded-xl border border-slate-200 text-slate-500 hover:text-primary-600 transition-colors shadow-sm">
                    <Share2 size={18} />
                  </button>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar - Sticky */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-12">
               <div>
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Table of Contents</h4>
                 <ul className="space-y-4">
                    {["The Landscape", "Technical Architecture", "Business Impact", "The Conclusion"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary-600 cursor-pointer transition-colors group">
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </li>
                    ))}
                 </ul>
               </div>
               <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                 <h4 className="text-xl font-black mb-4 tracking-tight leading-tight">Need expert help?</h4>
                 <p className="text-slate-400 text-sm mb-8 leading-relaxed">Book a strategy call to scale your brand with Appliic.DS.</p>
                 <Link to="/contact">
                   <Button variant="primary" className="w-full text-xs">Start Project</Button>
                 </Link>
               </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7">
            <article className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:text-slate-600 prose-p:leading-loose">
               <img src={post.image} alt="Featured" className="w-full h-auto rounded-[3rem] shadow-2xl mb-16" />
               
               <p className="text-xl font-medium text-slate-800 leading-relaxed mb-10">
                 The digital landscape is shifting under our feet. What was once the cutting edge of e-commerce architecture is now becoming the standard requirement for any brand serious about category leadership.
               </p>

               <h2 className="text-3xl font-black mt-16 mb-8 tracking-tight">The Evolving Landscape</h2>
               <p>
                 In the modern era of performance marketing, every millisecond matters. We've seen brands lose up to 15% of their conversion potential due to a mere 200ms delay in the mobile checkout path. This is why the conversation around architecture is no longer just for engineers—it's for CEOs.
               </p>
               
               <div className="bg-primary-50 p-10 rounded-[2.5rem] border-l-8 border-primary-600 my-16">
                  <p className="text-xl font-black text-slate-900 italic mb-0 leading-relaxed">
                    "Speed is no longer a luxury. It is a fundamental user expectation that determines your market capitalization in the digital economy."
                  </p>
               </div>

               <h2 className="text-3xl font-black mt-16 mb-8 tracking-tight">Business Impact and Scaling</h2>
               <p>
                 When we look at the data across our portfolio of 50+ elite brands, the pattern is clear. Brands that prioritize technical rigor in their storefront builds experience higher retention rates and significantly lower customer acquisition costs.
               </p>
               
               <ul className="space-y-4 my-10">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary-600 shrink-0"></div>
                    <span className="font-bold text-slate-700">Better PageSpeed scores lead to improved organic rankings.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary-600 shrink-0"></div>
                    <span className="font-bold text-slate-700">Faster checkout flows reduce abandoned cart metrics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-primary-600 shrink-0"></div>
                    <span className="font-bold text-slate-700">Flexible APIs allow for deeper omnichannel integration.</span>
                  </li>
               </ul>

               <p>
                 The conclusion is simple: adapt or get left behind. We invite you to explore our services to see how we can bring this level of technical precision to your business.
               </p>

               <div className="mt-24 pt-12 border-t border-slate-200 flex flex-wrap items-center gap-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Tagged:</span>
                  <div className="flex gap-2">
                    {["Ecommerce", "Architecture", "Engineering", "UX"].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
               </div>
            </article>

            {/* Author Section */}
            <div className="mt-24 p-10 md:p-12 bg-slate-50 rounded-[3rem] flex flex-col md:flex-row items-center md:items-start gap-8">
               <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} className="w-full h-full object-cover" />
               </div>
               <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">Written by {post.author}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">
                    Alex is the Lead Technical Strategist at Appliic.DS. With over 10 years in the industry, he specializes in architecting high-performance commerce systems.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Twitter size={18}/></a>
                    <a href="#" className="text-slate-400 hover:text-primary-600 transition-colors"><Linkedin size={18}/></a>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Spacer or Ads? */}
          <div className="lg:col-span-2 hidden lg:block"></div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-black text-slate-900 tracking-tight">Recommended for you</h2>
             <Link to="/blog" className="text-primary-600 font-bold text-sm hover:underline">View All Articles</Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3).map((p, i) => (
                <Link key={i} to={`/blog/${p.slug}`} className="group">
                  <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6 shadow-sm">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 leading-tight group-hover:text-primary-600 transition-colors mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{p.category} • {p.readTime}</p>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;