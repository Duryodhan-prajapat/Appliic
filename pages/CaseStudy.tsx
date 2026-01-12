import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ExternalLink, Globe, Layout, Smartphone, Tag, Zap } from 'lucide-react';
import Button from '../components/Button';
import { PROJECTS_DATA } from './Home';
import Breadcrumbs from '../components/Breadcrumbs';

// Extended data for specific pages
const CASE_STUDIES_DETAILS: Record<string, any> = {
  "bava-studios": {
    challenge: "Bava Studios, a legacy manufacturer of high-end kitchenware, needed to break into the D2C market. The primary challenge was communicating the 'Tri-ply' technical advantage—a complex manufacturing process—to everyday home cooks in a visually engaging and simple way while ensuring the storefront loaded instantly on mobile devices across India.",
    solution: "We engineered a performance-focused Shopify experience that prioritizes technical storytelling. This included custom 3D-inspired diagrams of their 3-layer technology, a streamlined product discovery path for their Frypans and Kadhais, and a seamless checkout experience with one-click WhatsApp support.",
    results: ["240% Lift in Monthly D2C Revenue", "Top 1% Shopify Site Speed globally", "Significant reduction in CPA via conversion-led design"],
    tech: ["Shopify Plus", "Tailwind CSS", "Technical 3D Illustration", "Advanced Analytics Integration"],
    websiteUrl: "https://bavastudios.in/",
    gallery: [
      "/images/portfolio/bava_1.png",
      "/images/portfolio/bava_2.png",
      "/images/portfolio/bava_3.png",
      "/images/portfolio/bava_4.png"
    ]
  },
  "caramelo": {
    challenge: "Caramelo needed a storefront that reflected their premium kids Footwear designed for the little champs with the love & care to feel them cozy & comfortable while maintaining a 1s load time across all devices.",
    solution: "We engineered a custom Shopify website build using liquid, javascript and tailwind, with a specialized Liquid backup theme for legacy support.",
    results: ["140% Increase in Mobile Conversion", "0.8s Average LCP", "22% Lift in AOV"],
    tech: ["Shopify", "Liquid", "Tailwind CSS", "Js"],
    websiteUrl: "https://www.caramelo.in/",
    gallery: [
      "/images/portfolio/caramelo_1.png",
      "/images/portfolio/caramelo_2.png",
      "/images/portfolio/caramelo_3.png",
      "/images/portfolio/caramelo_4.png",
    ]
  },
  "gadgets-expert": {
    challenge: "Gadgets Expert struggled with high cart abandonment on mobile devices due to a slow, non-responsive checkout experience.",
    solution: "We implemented a custom one-page checkout and optimized the entire site architecture for mobile-first interaction.",
    results: ["4.2% Conversion Rate", "15% Reduction in Bounce Rate", "85% Mobile Traffic Growth"],
    tech: ["Shopify Liquid", "Klaviyo", "Gorgias", "Recharge"],
    websiteUrl: "https://gadgetsexpert.com/",
    gallery: [
      "/images/portfolio/Gaming_1.png",
      "/images/portfolio/Gadgets_2.png",
      "/images/portfolio/Gadgets_3.png",
      "/images/portfolio/Gadgets_4.png"
    ]
  },
  "nashira": {
    challenge: "Nashira needed to launch a fashion jewellery brand online that felt stylish, trustworthy, and easy to shop from. The challenge was to present a wide product range in a visually appealing way while keeping navigation simple, performance fast, and the overall experience consistent across mobile and desktop devices.",
    solution: "DWe built a clean, conversion-focused Shopify store with clear product categorization, highlighted collections, and a mobile-first design. The store was optimized for smooth browsing, fast loading, and easy product discovery, helping customers explore, engage, and complete purchases effortlessly.",
    results: ["Clean, intuitive navigation across 200+ products", "Engaging product discovery with best sellers and curated collections", "Mobile-optimized store for on-the-go shoppers","Promotional UI for discounts and free shipping messaging"],
    tech: ["Shopify", "Liquid", "HTML", "AJAX", "Tailwind"],
    websiteUrl: "https://shopnashira.com",
    gallery: [
      "/images/portfolio/nashira-1.png",
      "/images/portfolio/nashira-2.png",
      "/images/portfolio/nashira-3.png",
      "/images/portfolio/nashira-4.png"
    ]
  },
  "shopblaze": {
    challenge: "Blaze needed a sleek, performance-driven Shopify store to showcase its range of trending accessories and gadgets while providing an intuitive, distraction-free shopping experience that loads fast on all devices and drives conversions.",
    solution: "We built a clean and responsive Shopify store with clear product organization, engaging visuals, and an optimized mobile experience to make browsing effortless and checkout seamless, helping Blaze deliver a premium online shopping journey that converts.",
    results: ["Improved product visibility and browsing flow", "Fast-loading, mobile-optimized shopping experience", "Clear navigation leading to smoother user journeys","Conversion-focused layout ready for ads and scaling"],
    tech: ["Liquid", "jQuery", "Bootstrap", "Swiper.js", "AOS"],
    websiteUrl: "https://shopblaze.net/",
    gallery: [
      "/images/portfolio/shopblaze-1.png",
      "/images/portfolio/shopblaze-2.png",
      "/images/portfolio/shopblaze-3.png",
      "/images/portfolio/shpblaze-4.png"
    ]
  },
  "loop": {
    challenge: "Loop India needed a standout e-commerce platform to showcase a diverse range of hearing protection products — from sleep-focused plugs to event and everyday noise reducers — while creating a clear browsing path that helps visitors find the right earplug solution for their lifestyle.",
    solution: "We built a visually appealing and user-friendly Shopify store that presents multiple product lines with clear descriptions, easy browsing by use-case (sleep, events, travel), and straightforward navigation. The design highlights product features like noise reduction levels, customizable fits, and premium materials, improving discoverability and guiding users toward confident purchase decisions.",
    results: ["6ultiple product categories clearly presented", "Optimized mobile and desktop experience", "4Improved product visibility and browsing clarity","Structured shopping journey tailored to needs"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    websiteUrl: "https://loopearplugs.in/",
    gallery: [
      "/images/portfolio/loop-1.png",
      "/images/portfolio/loop-4.png",
      "/images/portfolio/loop-3.png",
      "/images/portfolio/loop-2.png"
    ]
  }
};

const CaseStudy: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Combine all project summaries to ensure search finds all projects
  const ALL_SUMMARIES = [
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
      desc: "A modern Shopify e-commerce store built to sell trending accessories and gadgets with a clean interface, fast performance, and a smooth shopping experience.",
    },
    {
      slug: "loop",
      title: "Loop Earplugs – Sound Protection & Comfort",
      category: "E-COMMERCE / HEALTH & ACCESSORIES",
      image: "/images/portfolio/loop_main.png",
      desc: "A Shopify-powered online store offering premium noise-reducing earplugs designed for sleep, events, travel, and everyday comfort with multiple product variants and ergonomic fit.",
    }
  ];

  const projectSummary = ALL_SUMMARIES.find(p => p.slug === slug);
  const details = CASE_STUDIES_DETAILS[slug || ""];

  if (!projectSummary || !details) {
    return (
      <div className="pt-32 pb-20 text-center px-4 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black mb-8">Project Not Found</h1>
        <Link to="/portfolio">
          <Button variant="primary">View All Work</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-24 pb-16 md:pb-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs light />
          
          <div className="mt-8">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors font-bold uppercase text-[10px] tracking-widest"
            >
              <ArrowLeft size={14} /> Back to Projects
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary-400 font-black uppercase tracking-widest text-xs md:text-sm mb-4"
                >
                  {projectSummary.category}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-7xl font-black tracking-tighter leading-none"
                >
                  {projectSummary.title}
                </motion.h1>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="lg:text-right"
              >
                <div className="flex flex-wrap lg:justify-end gap-3 md:gap-4">
                  {details.tech.map((t: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-slate-800 rounded-full text-xs md:text-sm font-bold border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="relative -mt-10 md:-mt-16 z-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-slate-100"
          >
            <img src={projectSummary.image} alt={projectSummary.title} className="w-full h-auto aspect-[21/9] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Website Link Section */}
      {details.websiteUrl && (
        <section className="mt-8 md:mt-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <a
                href={details.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-xl border border-slate-100 hover:border-primary-600 hover:text-primary-600 text-slate-900 font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all group"
              >
                Explore Live Project <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Details Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12 md:space-y-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
                  <Zap className="text-primary-600" /> The Challenge
                </h2>
                <p className="text-base md:text-xl text-slate-600 leading-relaxed font-medium">
                  {details.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
                  <Layout className="text-primary-600" /> Our Solution
                </h2>
                <p className="text-base md:text-xl text-slate-600 leading-relaxed font-medium">
                  {details.solution}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {details.gallery.map((img: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg h-64 md:h-80"
                  >
                    <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm sticky top-32">
                <h3 className="text-2xl font-black mb-8 text-slate-900 tracking-tight">Project Results</h3>
                <div className="space-y-6">
                  {details.results.map((result: string, i: number) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-primary-600 rounded-full p-1 mt-1 shrink-0">
                        <CheckCircle size={18} className="text-white" />
                      </div>
                      <p className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>
                <hr className="my-10 border-slate-200" />
                <div className="space-y-4">
                  <Link to="/contact">
                    <Button variant="primary" className="w-full h-14 font-black">
                      Start Your Project
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" className="w-full h-14 border-slate-200 text-slate-600 font-black">
                      Back to Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Nav */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-10 tracking-tight">Explore More Work</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {ALL_SUMMARIES.filter(p => p.slug !== slug).slice(0, 2).map((p, i) => (
              <Link
                key={i}
                to={`/case-study/${p.slug}`}
                className="group relative w-full md:w-[400px] h-[250px] rounded-[2rem] overflow-hidden border border-slate-800"
              >
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <h4 className="text-2xl font-black mb-2">{p.title}</h4>
                  <p className="text-sm font-bold text-primary-400 uppercase tracking-widest">{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;