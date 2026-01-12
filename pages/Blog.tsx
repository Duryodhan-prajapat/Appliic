import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';

export const BLOG_POSTS = [
  {
    slug: "future-of-headless-shopify",
    title: "The Future of Headless Shopify: Why Hydrogen is a Game Changer",
    category: "Shopify",
    date: "May 15, 2024",
    readTime: "8 min read",
    author: "Alex Rivers",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    excerpt: "Headless commerce is no longer just for enterprise giants. Discover how Shopify Hydrogen is making blazing-fast stores accessible to everyone."
  },
  {
    slug: "seo-strategy-for-d2c",
    title: "Mastering SEO for D2C Brands in 2024",
    category: "Growth",
    date: "May 10, 2024",
    readTime: "12 min read",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    excerpt: "Organic traffic is the highest-margin channel. Learn the exact technical SEO framework we use to scale brands from zero to 100k+ monthly sessions."
  },
  {
    slug: "atomic-design-principles",
    title: "Applying Atomic Design to Modern React Applications",
    category: "Tech",
    date: "April 28, 2024",
    readTime: "10 min read",
    author: "Elena Kova",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    excerpt: "Scale your UI without the chaos. A deep dive into structuring React components for maximum reusability and performance."
  },
  {
    slug: "conversion-led-design",
    title: "Conversion-Led Design: Aesthetics vs. Profitability",
    category: "Design",
    date: "April 20, 2024",
    readTime: "6 min read",
    author: "Elena Kova",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    excerpt: "Beautiful design is useless if it doesn't convert. We explore the bridge between high-end aesthetics and user psychological triggers."
  }
];

const categories = ["All", "Shopify", "Growth", "Tech", "Design"];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs light />
          <div className="mt-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 rounded-full bg-primary-100/10 text-primary-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 border border-primary-400/20">
              INSIGHTS & INTEL
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
              Engineering <span className="text-primary-400">Knowledge.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
              In-depth articles on e-commerce, software engineering, and the future of digital experience.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative group hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search articles..."
              className="pl-12 pr-6 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-primary-500 outline-none w-64 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 items-center"
              >
                <Link to={`/blog/${post.slug}`} className="w-full md:w-1/2 shrink-0 aspect-[16/11] overflow-hidden rounded-[2.5rem] relative">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                     <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                       {post.category}
                     </span>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                       <Clock size={12} /> {post.readTime}
                     </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-500 font-medium line-clamp-2 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                         <User size={14} />
                       </div>
                       <span className="text-xs font-bold text-slate-900">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-primary-600 font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all">
                      Read Full Story <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="bg-white p-12 md:p-16 rounded-[3.5rem] border border-slate-100 shadow-xl"
          >
             <h2 className="text-3xl font-black text-slate-900 mb-4">Get the Intel.</h2>
             <p className="text-slate-500 font-medium mb-10 max-w-md mx-auto">Weekly briefings on digital scaling, CRO, and technology trends delivered to your inbox.</p>
             <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your work email"
                  className="flex-grow px-8 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-primary-500 outline-none transition-all font-bold text-slate-900"
                />
                <Button className="h-14 px-10">Subscribe</Button>
             </form>
             <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">No spam. Only high-signal intelligence.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;