import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Megaphone, ArrowRight, Gauge, Target, Rocket } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    path: '/services/web-development',
    description: 'High-performance Liquid themes, headless builds, and Shopify Plus migrations. We are specialized in creating bespoke e-commerce experiences.',
    icon: Code,
  },
  {
    id: 'app-development',
    title: 'App Development',
    path: '/services/app-development',
    description: 'Custom React web apps and cross-platform mobile applications (iOS/Android) built with scalability and security as priorities.',
    icon: Smartphone,
  },
  {
    id: 'brand-consultation',
    title: 'Brand Consultation',
    path: '/services/brand-consultation',
    description: 'Strategic branding, high-end UI/UX, and creative graphic design that communicates your brand values and drives conversion.',
    icon: Palette,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    path: '/services/digital-marketing',
    description: 'Klaviyo automation, SEO, and paid media management designed to increase customer LTV and brand awareness.',
    icon: Megaphone,
  },
  {
    id: 'performance',
    title: 'Speed Optimization',
    path: '/services/speed-optimization',
    description: 'Eliminate bounce rates. We optimize your store for 90+ Core Web Vitals scores, ensuring lightning-fast load times globally.',
    icon: Gauge,
  },
  {
    id: 'cro',
    title: 'CRO & UX Strategy',
    path: '/services/cro',
    description: 'Data-driven analysis and iterative testing to maximize your Conversion Rate and Average Order Value (AOV).',
    icon: Target,
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0f1d] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern-services" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-services)" />
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary-600/10 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/10 text-primary-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary-400/20">
              OUR SOLUTIONS
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight"
            >
              Our <span className="text-primary-400">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              We provide full-funnel technical and creative solutions for modern digital businesses.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
              className="p-10 md:p-12 rounded-[3rem] bg-slate-50 hover:bg-white border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{service.title}</h3>
              <p className="text-sm md:text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              <Link to={service.path} className="inline-flex items-center gap-3 text-primary-600 font-bold text-base md:text-lg hover:gap-5 transition-all">
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA - Light Version */}
      <section className="py-24 bg-white overflow-hidden px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-[3.5rem] p-10 md:p-16 lg:p-20 text-slate-900 text-center flex flex-col items-center relative overflow-hidden group border border-primary-100 shadow-sm"
          >
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg className="w-full h-full" width="100%" height="100%">
                <defs>
                  <pattern id="cta-grid-services-light" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-primary-200" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid-services-light)" />
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
              Ready to grow?
            </h2>
            
            <p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl font-medium leading-relaxed relative z-10">
              Join 50+ elite brands scaling with Appliic Digital Solutions. <br className="hidden md:block"/> Let's build your success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center relative z-10">
              <Link to="/contact">
                <Button variant="dark" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 text-base md:text-lg font-black rounded-2xl shadow-lg">
                  Get a Free Audit
                </Button>
              </Link>
              <a 
                href="https://calendly.com/duryodhan_prajapat/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 text-base md:text-lg font-black rounded-2xl border-primary-600/30 text-primary-500 hover:bg-white/50">
                  Book a Call
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;