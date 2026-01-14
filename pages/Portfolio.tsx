import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { PROJECTS_DATA } from './Home';
import Breadcrumbs from '../components/Breadcrumbs';

// Expanded projects list for the full portfolio page
const ALL_PROJECTS = [
  ...PROJECTS_DATA,
  {
    slug: "nashira",
    title: "Nashira – Fashion Jewellery Store",
    category: "E-COMMERCE / SHOPIFY STORE",
    image: "/images/portfolio/nashira-main.png",
    desc: "A vibrant online fashion jewellery store built on Shopify, offering a curated collection of stylish everyday and statement accessories with a seamless shopping experience.",
  },
  {
    slug: "shopblaze",
    title: "Blaze – Trendy Accessories Store",
    category: "E-COMMERCE / SHOPIFY STORE",
    image: "/images/portfolio/shopblaze_main.png",
    desc: "Shop Blaze is an e-commerce brand offering personal care and wellness products focused on comfort, confidence, and everyday well-being. The brand emphasizes quality, clear product communication, and a seamless shopping experience for its customers.",
  },
  {
    slug: "loop",
    title: "Loop Earplugs – Sound Protection & Comfort",
    category: "E-COMMERCE / HEALTH & ACCESSORIES",
    image: "/images/portfolio/loop_main.png",
    desc: "A Shopify-powered online store offering premium noise-reducing earplugs designed for sleep, events, travel, and everyday comfort with multiple product variants and ergonomic fit.",
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="inline-block px-4 py-1.5 rounded-full bg-primary-100/10 text-primary-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary-400/20"
            >
              SELECTED WORKS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight"
            >
              Our <span className="text-primary-400">Masterpieces</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
              className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed"
            >
              We take pride in every pixel we push and every line of code we write. Here is a curated selection of our favorite digital products.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {ALL_PROJECTS.map((project, i) => (
              <Link to={`/case-study/${project.slug}`} key={project.slug} className="block group">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                  className="h-full bg-white rounded-[1rem] overflow-hidden border-4 border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-white p-4 rounded-full text-slate-900 shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        <Eye size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-10">
                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{project.title}</h3>
                    <p className="text-sm md:text-base text-slate-500 font-medium mb-8 leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 font-black text-slate-900 text-sm group-hover:text-primary-600 transition-colors">
                      View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Version */}
      <section className="py-24 bg-slate-50 overflow-hidden px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-[3.5rem] p-10 md:p-16 lg:p-20 text-slate-900 text-center flex flex-col items-center relative overflow-hidden group border border-primary-100 shadow-sm"
          >
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg className="w-full h-full" width="100%" height="100%">
                <defs>
                  <pattern id="cta-grid-portfolio-light" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-primary-200" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid-portfolio-light)" />
              </svg>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8 relative z-10"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-600 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                <Rocket size={36} className="text-white drop-shadow-md" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight relative z-10">
              Your project is next.
            </h2>
            
            <p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl font-medium leading-relaxed relative z-10">
              Let's create something that stands out and performs even better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center relative z-10">
              <Link to="/contact">
                <Button variant="dark" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 text-base md:text-lg font-black rounded-2xl shadow-lg">
                  Start My Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;