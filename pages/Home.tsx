import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useAnimationFrame } from 'framer-motion';
import { 
  ArrowRight, Code, Smartphone, Zap, Globe, TrendingUp, 
  ChevronDown, ShoppingBag, Target, Star,
  ShieldCheck, Rocket, Palette, ExternalLink, Eye, Linkedin, Quote,
  BarChart3, Gauge, Award, ChevronLeft, Activity, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WhatsAppButton from '../components/WhatsAppButton';

const BrandMarquee = () => {
  const brands = ["Shopify", "Klaviyo", "Gorgias", "Recharge", "Yotpo", "Loop", "Attentive", "Skio"];
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // High-performance animation loop to track logo positions relative to viewport center
  useAnimationFrame(() => {
    if (!marqueeRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const logos = marqueeRef.current.querySelectorAll('.marquee-logo');
    
    // Threshold for "middle" detection. Adjust based on logo spacing.
    const activationThreshold = containerRect.width * 0.22;

    logos.forEach((logo) => {
      const rect = logo.getBoundingClientRect();
      const logoCenter = rect.left + rect.width / 2;
      const distanceFromCenter = Math.abs(logoCenter - centerX);

      if (distanceFromCenter < activationThreshold) {
        // Active state: Brand Blue color with slight scale up
        (logo as HTMLElement).style.color = '#475569'; // primary-500
        (logo as HTMLElement).style.opacity = '1';
        (logo as HTMLElement).style.transform = 'scale(1.05)';
      } else {
        // Idle state: Light grey
        (logo as HTMLElement).style.color = '#ffffff'; // text-slate-200
        (logo as HTMLElement).style.opacity = '0.6';
        (logo as HTMLElement).style.transform = 'scale(1)';
      }
    });
  });

  return (
    <div ref={containerRef} className="py-10 md:py-20 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-4">
          Partners & Tech
        </div>
      </div>
      
      <div className="flex relative w-full overflow-hidden">
        {/* Soft edge gradients for a premium feel */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          ref={marqueeRef}
          className="flex gap-16 md:gap-32 items-center whitespace-nowrap min-w-full py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...Array(2)].map((_, groupIndex) => (
             <React.Fragment key={groupIndex}>
                {brands.map((brand, i) => (
                    <span 
                      key={`${groupIndex}-${i}`} 
                      className="marquee-logo text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 cursor-default select-none hover:!text-primary-700 hover:!opacity-100 hover:scale-110"
                      style={{ color: '#e2e8f0', opacity: 0.6 }}
                    >
                      {brand}
                    </span>
                ))}
             </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const BlueprintSection = () => {
  const steps = [
    {
      number: "1",
      title: "Audit & Strategy",
      desc: "We audit your funnel, ads, and data to define a profit-first plan for rapid growth."
    },
    {
      number: "2",
      title: "Launch & Scale",
      desc: "Creative + media + CRO in sync. We launch, learn, and scale with velocity."
    },
    {
      number: "3",
      title: "Optimize & Expand",
      desc: "Iterate, automate, and expand channels to cement market leadership."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6"
          >
            OUR BLUEPRINT
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary-500 tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Your Blueprint to Category Leadership
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative pl-4">
            <div className="absolute left-[31px] top-4 bottom-4 w-px bg-slate-100 hidden md:block"></div>
            <div className="space-y-16">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start gap-8 relative z-10"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center font-black text-xl md:text-2xl shrink-0 shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative"
          >
            {/* iPhone Frame - Grey Titanium / Space Grey */}
            <div className="relative mx-auto w-[280px] md:w-[340px] h-[560px] md:h-[680px] bg-[#334155] rounded-[3.8rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-[#1e293b] overflow-visible group/phone">
              
              {/* iPhone Side Buttons - Metallic Grey */}
              <div className="absolute top-24 -left-[10px] w-[2.5px] h-10 bg-[#475569] rounded-l-md border-l border-white/10"></div>
              <div className="absolute top-40 -left-[10px] w-[2.5px] h-14 bg-[#475569] rounded-l-md border-l border-white/10"></div>
              <div className="absolute top-60 -left-[10px] w-[2.5px] h-14 bg-[#475569] rounded-l-md border-l border-white/10"></div>
              <div className="absolute top-44 -right-[10px] w-[2.5px] h-20 bg-[#475569] rounded-r-md border-r border-white/10"></div>

              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-full z-40 border border-slate-800 flex items-center justify-end px-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]"></div>
              </div>

              {/* Inner Content Container (Screen) - Clean White Dashboard */}
              <div className="relative w-full h-full bg-white rounded-[3.1rem] overflow-hidden flex flex-col border border-slate-200 shadow-inner">
                
                {/* Mock UI Header */}
                <div className="p-8 pb-4 flex justify-between items-center">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Store Analytics</span>
                      <span className="text-sm font-black text-slate-900 tracking-tight">Daily Performance</span>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <Activity size={14} className="text-primary-600" />
                   </div>
                </div>

                {/* Dashboard Content Area */}
                <div className="flex-grow px-8 pt-4 space-y-6">
                   {/* Main Analytics Figure / Chart */}
                   <div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-100">
                      <div className="flex justify-between items-center mb-6">
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                            <span className="text-[10px] font-black text-slate-500">Live Traffic</span>
                         </div>
                         <TrendingUp size={14} className="text-green-500" />
                      </div>
                      
                      {/* Visual SVG Chart */}
                      <div className="h-32 w-full flex items-end justify-between gap-1.5">
                         {[40, 65, 30, 85, 45, 95, 60, 75, 50, 90].map((h, i) => (
                            <motion.div 
                               key={i}
                               initial={{ height: 0 }}
                               whileInView={{ height: `${h}%` }}
                               transition={{ delay: 0.8 + (i * 0.05), duration: 1, ease: "easeOut" }}
                               className="w-full bg-primary-100 rounded-t-md relative group/bar"
                            >
                               <div className="absolute inset-0 bg-primary-600 rounded-t-md opacity-0 group-hover/bar:opacity-100 transition-opacity"></div>
                            </motion.div>
                         ))}
                      </div>
                   </div>

                   {/* Secondary Stats */}
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm">
                         <p className="text-[8px] font-black text-slate-400 uppercase mb-1">AOV</p>
                         <p className="text-base font-black text-slate-900">$142.50</p>
                      </div>
                      <div className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm">
                         <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Conv. Rate</p>
                         <p className="text-base font-black text-slate-900">4.12%</p>
                      </div>
                   </div>

                   {/* Activity List */}
                   <div className="space-y-4">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Recent Orders</p>
                      {[1,2,3].map(i => (
                         <div key={i} className="flex items-center justify-between py-1">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-primary-500">
                                  <ShoppingBag size={14} />
                               </div>
                               <div className="flex flex-col">
                                  <span className="text-[10px] font-black text-slate-900">Order #842{i}</span>
                                  <span className="text-[8px] font-bold text-slate-400">2 mins ago</span>
                               </div>
                            </div>
                            <span className="text-[10px] font-black text-slate-900">$210.00</span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Glassmorphism Floating Cards on top of white screen */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-48 left-[-30px] bg-white/70 backdrop-blur-xl p-5 rounded-[2rem] border border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-50 min-w-[130px]"
                >
                  <p className="text-[8px] font-black text-primary-600 uppercase tracking-widest mb-1">REVENUE</p>
                  <p className="text-lg font-black text-slate-900 tracking-tight">$84,102</p>
                  <div className="mt-2 flex items-center gap-1 text-[8px] font-bold text-green-500">
                    <TrendingUp size={10} /> +12%
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ 
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                  className="absolute bottom-40 right-[-30px] bg-slate-900/90 backdrop-blur-xl p-5 rounded-[2rem] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-50 min-w-[130px]"
                >
                  <p className="text-[8px] font-black text-primary-300 uppercase tracking-widest mb-1">SPEED SCORE</p>
                  <p className="text-lg font-black text-white tracking-tight">98/100</p>
                  <div className="mt-2 flex items-center gap-1 text-[8px] font-bold text-primary-400">
                    <Gauge size={10} /> Optimized
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative background glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-12">
          Recognized & Certified
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-5  transition-all duration-500">
          <div className="flex items-center gap-2">
            <img src="/images/logo/meta-1.png" alt="Meta" className="h-6 md:h-10" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/logo/shopify-2.png" alt="Shopify" className="h-10 md:h-14" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/logo/google-3.png" alt="Shopify" className="h-10 md:h-14" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/logo/wordpress-4.png" alt="Shopify" className="h-10 md:h-14" />
          </div>
          </div>
      </div>
    </section>
  );
};

export const PROJECTS_DATA = [
  {
    slug: "bava-studios",
    title: "Bava Studios",
    category: "Shopify / Premium Cookware",
    image: "/images/portfolio/bava_main.png",
    desc: "Bava Studios is a contemporary clothing brand offering modern, high-quality apparel designed for everyday comfort and style. The brand focuses on clean aesthetics, thoughtful design, and versatile pieces that appeal to fashion-conscious customers seeking effortless, wearable fashion.",
  },
  {
    slug: "caramelo",
    title: "Caramelo ",
    category: "Shopify Plus / UX Design",
    image: "/images/portfolio/caramelo_main.png",
    desc: "Caramelo is more than just a brand; it's a promise from two mothers to all parents that their children will have the very best, ensuring that as they grow, they'll have exactly what they need to thrive.",
  },
  {
    slug: "gadgets-expert",
    title: "Gadgets Expert",
    category: "D2C E-commerce / Shopify design & development",
    image: "/images/portfolio/Gadgets_expert_main.png",
    desc: "Founded in the United Arab Emirates, Gadgets Expert was born from a commitment to bring the latest in tech accessories to a community that appreciates quality and convenience.",
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              OUR PORTFOLIO
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Featured <span className="text-primary-500">Masterpieces</span></h2>
            <p className="text-slate-500 mt-4 font-medium">Explore how we combine technical precision with creative flair to build industry-leading digital products.</p>
          </div>
          <Link to="/portfolio" className="w-full md:w-auto">
            <Button variant="outline" className="h-12 border-slate-200 bg-primary-600 text-white hover:bg-primary-700 shadow-lg group w-full md:w-auto">
              View All Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <Link to={`/case-study/${project.slug}`} key={i} className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white p-4 rounded-full text-slate-900 shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Eye size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">{project.desc}</p>
                  <div className="inline-flex items-center gap-2 font-bold text-slate-900 text-sm group-hover:text-primary-500 transition-colors">
                    View Case Study <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const points = [
    {
      icon: Award,
      title: "Shopify Plus Partners",
      desc: "Certified expertise in scaling high-growth brands with the world's most powerful commerce engine."
    },
    {
      icon: Gauge,
      title: "Blazing Fast Performance",
      desc: "We guarantee 90+ Lighthouse scores and sub-second load times to minimize bounce rates and boost sales."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      desc: "Every design decision is backed by deep analytics and iterative testing to maximize your ROAS."
    },
    {
      icon: Globe,
      title: "Global Reach Ready",
      desc: "Localized payment, multi-currency support, and international logistics built into your brand's DNA."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6"
          >
            THE APPLIIC ADVANTAGE
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
            Why Choose <span className="text-primary-500">Appliic.DS</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-medium text-base md:text-lg">
            We bridge the gap between world-class design and engineering precision to deliver measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
              className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-500 mb-8 shadow-sm group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                <point.icon size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{point.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LinkedInReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const reviews = [
    {
      name: "Jyoti Agarwal",
      title: "Founder at caramelo",
      image: "/images/Reviews/caramelo_owner.png",
      text: "I worked with Duryodhan, on a recent project and had a really smooth experience. He was professional, responsive, and completely understood what was needed. The final output was clean, timely, and exactly on brief. I appreciated his attention to detail throughout. Highly recommend him if you’re looking for a reliable and easy-to-work-with developer.",
      date: "Jul 9, 2025"
    },
    {
      name: "Srishti Agarwal",
      title: "Creative Director, MadeOddly",
      image: "/images/Reviews/Srishti.png",
      text: "I recently collaborated with Duryodhan on a Shopify project, and it was a great experience. He’s sharp, responsive, and knows his way around the platform really well. What I appreciated most was how easy he was to work with. No fuss, just quietly got things done, even when the brief changed or timelines shifted. If you're looking for someone reliable and efficient for your Shopify needs, I’d recommend him.",
      date: "Jul 2, 2025"
    },
    {
      name: "Shahab Khan",
      title: "Amazon account specialist",
      image: "/images/Reviews/Shahab.png",
      text: "I had the pleasure of working with Duryodhan, a highly skilled Shopify developer, on a custom feature for our store—a PDF downloader integrated seamlessly into our Shopify theme. From the start, Duryodhan understood exactly what we needed, communicated clearly, and delivered a clean, efficient solution that worked perfectly across all devices. I highly recommend working with Duryodhan. We’ll definitely reach out again for future Shopify needs!",
      date: "Mar 30, 2025"
    },
    {
      name: "Syed Kamal Raza",
      title: "Digital Marketing Speacialist",
      image: "/images/Reviews/syed_kamal.png",
      text: "I wholeheartedly recommend Duryodhan for any e-commerce development needs. His energy and dedication were evident from the start. He not only built my Shopify store with 50 products in just one month, but he also exceeded my expectations with his speed, accuracy, and commitment to deadlines. Duryodhan is a highly talented and intelligent individual with a strong work ethic. I have complete trust in his abilities and highly recommend him to anyone looking for a reliable and skilled Shopify developer.",
      date: "Nov 22, 2024"
    },
    {
      name: "Abhishek Bhowmik",
      title: "Owner at BAC",
      image: "/images/Reviews/placeholder_user.png",
      text: "I am delighted to recommend Duryodhan for his outstanding work as a website developer. His expertise, professionalism, and problem-solving skills have been invaluable to my project. Duryodhan is not only highly skilled but also a great communicator—polite, patient, and quick to understand requirements. He efficiently resolved every challenge that arose, ensuring a smooth and successful development process. ",
      date: "June 18, 2025"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = reviews.length - itemsPerView;
  const safeActiveIndex = Math.min(activeIndex, maxIndex);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center mb-6">
             <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em]">
                CLIENT REVIEWS
             </div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Validated by <span className="text-primary-500">Industry Leaders</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">Authentic recommendations from our partners on LinkedIn.</p>
        </div>

        <div className="relative max-w-[1280px] mx-auto overflow-hidden px-4 md:px-0">
          <div className="relative overflow-visible">
            <motion.div 
              className="flex gap-4 md:gap-6 lg:gap-8"
              animate={{ x: `-${safeActiveIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
            >
              {reviews.map((review, i) => (
                <div 
                  key={i} 
                  style={{ width: `calc(${100 / itemsPerView}% - ${( (itemsPerView - 1) * (window.innerWidth >= 1024 ? 32 : 24) ) / itemsPerView}px)` }}
                  className="shrink-0"
                >
                  <div className="h-full min-h-[420px] p-8 md:p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary-500/20 transition-all duration-500 relative flex flex-col group">
                    <Quote className="absolute top-8 right-8 text-slate-200 group-hover:text-primary-500/10 transition-colors" size={48} />
                    
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xl font-black text-slate-900 leading-tight mb-0.5 truncate">{review.name}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">{review.title}</p>
                      </div>
                    </div>

                    <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed italic mb-10 flex-grow">
                      "{review.text}"
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-auto">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                      <div className="flex items-center gap-1.5 text-primary-500 font-black text-[10px] uppercase tracking-[0.15em] cursor-pointer hover:underline">
                        Verified <Linkedin size={12} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-10 mt-16">
            <div className="flex items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-slate-600 hover:text-primary-500 hover:border-primary-500/30 transition-all group"
              >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex gap-4">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 transition-all duration-500 rounded-full ${
                      i === safeActiveIndex ? 'w-12 bg-primary-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center text-slate-600 hover:text-primary-500 hover:border-primary-500/30 transition-all group"
              >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneFrame: React.FC<{ src: string; index: number }> = ({ src, index }) => (
  <div className="flex-shrink-0 w-[180px] md:w-[220px] h-[360px] md:h-[450px] bg-white rounded-[2rem] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden mx-3 md:mx-6 group">
     {/* Notch Area */}
     <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 md:w-20 h-1.5 md:h-2.5 bg-slate-100 rounded-full z-20"></div>
     <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden relative">
        <img src={src} alt={`Work ${index}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
     </div>
  </div>
);

const D2CScaleSection = () => (
  <section className="py-20 md:py-32 bg-primary-50/30 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center mb-16">
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
        MOBILE EXPERIENCE
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
        High-Conversion <span className="text-primary-500">Mobile Stores</span>
      </motion.h2>
      <p className="text-sm md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
        We specialize in Shopify experiences that feel like native apps, driving customer retention and industry-leading performance.
      </p>
    </div>
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        <motion.div className="flex" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 60 }}>
           {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex px-4">
                 {[
                   "/images/mobile_store/mobile-shot-1.png",
                   "/images/mobile_store/mobile-shot-2.png",
                   "/images/mobile_store/mobile-shot-3.png",
                   "/images/mobile_store/mobile-shot-4.png",
                   "/images/mobile_store/mobile-shot-5.png",
                   "/images/mobile_store/mobile-shot-6.png",
                   "/images/mobile_store/mobile-shot-7.png",
                   "/images/mobile_store/mobile-shot-8.png",
                   "/images/mobile_store/mobile-shot-9.png",
                   "/images/mobile_store/mobile-shot-10.png"
                 ].map((src, i) => (
                    <PhoneFrame key={i} index={i} src={src} />
                 ))}
              </div>
           ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const GlobalReachSection = () => (
  <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/10 text-primary-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 border border-primary-400/20">
            GLOBAL REACH
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">Scaling Without Borders</h2>
          <p className="text-sm md:text-lg text-slate-400 max-w-xl font-medium leading-relaxed mb-10">
            From localized payment gateways to global logistics integrations, we help brands penetrate new markets with technical confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: ShieldCheck, title: "Compliance", desc: "GDPR & ADA accessible builds." },
            { icon: Target, title: "Localization", desc: "Multi-currency & language setups." },
            { icon: Zap, title: "Speed", desc: "Global CDN optimization." },
            { icon: ShoppingBag, title: "Fulfillment", desc: "3PL & Warehouse integrations." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5, scale: 1.03 }}
              className="p-6 bg-slate-800/40 rounded-2xl border border-slate-800 transition-all"
            >
              <item.icon className="text-primary-400 mb-4" size={24} />
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const faqs = [
        { q: "Do you build custom Shopify themes?", a: "Yes, we specialize in high-performance custom Liquid 2.0 theme development from scratch, ensuring zero bloat and maximum speed." },
        { q: "Can you fix my Shopify store speed?", a: "Absolutely. We provide a full technical audit and optimization service that typically improves mobile PageSpeed scores by 40-70 points." },
        { q: "Do you handle Shopify Plus migrations?", a: "We are experts in large-scale data migrations from WooCommerce, Magento, or custom stacks into Shopify and Shopify Plus." },
        { q: "What is your pricing model?", a: "We work on both project-based fixed fees and monthly growth retainers for continuous CRO and maintenance." }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                   <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                      EXPERT INSIGHTS
                   </div>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                            <button onClick={() => setActiveIndex(activeIndex === idx ? null : idx)} className="w-full flex items-center justify-between p-6 md:p-7 text-left hover:bg-slate-50 transition-colors">
                                <span className="text-sm md:text-base font-bold text-slate-900 pr-3">{faq.q}</span>
                                <ChevronDown className={`text-primary-500 shrink-0 transition-transform ${activeIndex === idx ? 'rotate-180' : ''}`} size={18} />
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                        <div className="px-6 md:px-7 pb-6 md:pb-7 text-slate-500 leading-relaxed text-xs md:text-base font-medium border-t border-slate-50 pt-3">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-white pt-24 pb-12 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-5%] right-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-primary-50 rounded-full blur-[60px] md:blur-[100px]" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-50/50 rounded-full blur-[60px] md:blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-1.5 mb-6 px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-[9px] md:text-xs uppercase tracking-[0.15em] shadow-lg">
            <Star size={11} className="text-primary-400" fill="currentColor" /> Certified Shopify Experts
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.2] md:leading-[1.1]">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">Premium Digital</span> <br className="hidden md:block"/> Stores That Scales.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            A boutique Shopify & Design agency helping ambitious brands bridge the gap between aesthetics and performance.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto flex justify-center"><Button variant="primary" className="w-full sm:w-auto h-13 md:h-14 px-8 md:px-10 text-sm md:text-base font-bold">Start Your Project <ArrowRight size={18} /></Button></Link>
            <Link to="/services" className="w-full sm:w-auto flex justify-center"><Button variant="outline" className="w-full sm:w-auto h-13 md:h-14 px-8 md:px-10 text-sm md:text-base font-bold border-slate-200">Our Services</Button></Link>
          </motion.div>
        </div>
      </section>

      <CertificationsSection />
      
      <PortfolioSection />

      <BlueprintSection />
      
      <WhyChooseUsSection />

      <LinkedInReviewsSection />

      <BrandMarquee />

      <D2CScaleSection />

      {/* Quick Services Snippet */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              OUR EXPERTISE
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Digital Solutions <span className="text-primary-500">Designed to Win</span></h2>
            <p className="text-slate-500 mt-4 font-medium max-w-2xl mx-auto">We provide the technical foundation and creative vision required to scale in the modern economy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: ShoppingBag, title: "E-commerce", desc: "Bespoke Shopify development focused on conversion and speed." },
              { icon: Code, title: "Engineering", desc: "Custom React & Node.js solutions built for scalability." },
              { icon: Palette, title: "Branding", desc: "Identity design that commands attention and builds trust." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -12, scale: 1.03 }} 
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-10 md:p-14 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-10 shadow-sm">
                  <s.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight">{s.title}</h3>
                <p className="text-base text-slate-500 font-medium leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalReachSection />
      <FAQSection />

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
                  <pattern id="cta-grid-home-light" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-primary-200" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid-home-light)" />
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

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;