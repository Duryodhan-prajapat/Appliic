import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Clock, Zap, Rocket, ShieldCheck, Heart, Globe, Code, TrendingUp, Linkedin, Twitter, Quote, Instagram } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ResponsiveImage from '../components/ResponsiveImage';

const StatCard = ({ label, value, icon: Icon }: { label: string, value: string, icon: any }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-slate-50 p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center"
  >
    <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-4">
      <Icon size={24} />
    </div>
    <span className="text-3xl font-black text-slate-900 mb-1">{value}</span>
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
  </motion.div>
);

const ProcessStep = ({ number, title, desc, icon: Icon }: { number: string, title: string, desc: string, icon: any }) => (
  <div className="relative p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
    <div className="absolute top-8 right-10 text-4xl font-black text-slate-200 group-hover:text-primary-100 transition-colors">
      {number}
    </div>
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-8">
                OUR MISSION
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Digital Progress</span>
              </h1>
              <p className="text-base md:text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Appliic Digital Solutions is a boutique technical agency dedicated to the craft of digital performance. We architect growth engines for ambitious global brands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="h-14 px-10 font-black">Join the Journey</Button>
                </Link>
                <StatCard label="Years Excellence" value="4+" icon={Clock} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <StatCard label="Brands Scaled" value="50+" icon={Users} />
              <div className="mt-8 md:mt-12">
                <StatCard label="Avg ROAS Lift" value="40%" icon={Zap} />
              </div>
              <StatCard label="Integrations" value="100+" icon={Globe} />
              <div className="mt-8 md:mt-12">
                <StatCard label="Tech Stack" value="15+" icon={ShieldCheck} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] md:rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
            {/* Visual Column */}
            <div className="lg:w-2/5 relative h-[450px] lg:h-auto overflow-hidden">
              <ResponsiveImage
                src="/images/founder/founder_2.png"
                mobileSrc="/images/founder/founder_2.png" // Taller crop for mobile
                alt="Duryodhan Prajapat - Founder"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-black text-white tracking-tight">Duryodhan Prajapat</h3>
                <p className="text-primary-400 font-bold uppercase tracking-[0.2em] text-[10px]">Founder & CEO</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-3/5 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
              <Quote className="absolute top-10 right-10 text-primary-600/20" size={120} />
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary-600/10 text-primary-400 font-black text-[10px] uppercase tracking-[0.2em] mb-8 border border-primary-600/20">
                  MEET THE FOUNDER
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-white mb-8 tracking-tight leading-tight">
                  "We didn't start Appliic to be the biggest agency, but to be the <span className="text-primary-400">most precise.</span>"
                </h2>
                <div className="space-y-6 text-slate-400 font-medium text-base md:text-lg leading-relaxed">
                  <p>
                    Appliic.DS was built on a simple belief: execution should never be disconnected from purpose. Every digital decision must support a clear business outcome.
                  </p>
                  <p>
                    I personally oversee our technical strategy to ensure that every pixel is purposeful and every line of code serves a measurable objective. We are here to bridge the gap between creative ambition and technical reality.
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/duryodhan-prajapat-1262971b0/" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all">
                      <Linkedin size={20} />
                    </a>
                    {/* <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all">
                      <Instagram size={20} />
                    </a> */}
                  </div>
                  <div className="h-px bg-slate-800 flex-grow hidden sm:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#0a0f1d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/10 text-primary-400 font-black text-[10px] uppercase tracking-[0.2em] mb-10 border border-primary-400/20">
              PHILOSOPHY
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight leading-tight">Built on the foundation of <span className="text-primary-400">Technical Rigor</span> and Creative Flair.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={20} />
                </div>
                <h4 className="text-xl font-bold">Uncompromising Quality</h4>
                <p className="text-slate-400 font-medium">We treat every line of code as a masterpiece. Our internal standards exceed industry norms to ensure future-proof builds.</p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <h4 className="text-xl font-bold">Client Obsession</h4>
                <p className="text-slate-400 font-medium">We operate as an extension of your team. Your goals are our metrics for success, and we scale only when you do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              OUR METHOD
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">The Appliic Lifecycle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ProcessStep
              number="01"
              title="Discovery"
              desc="Deep dive into your business metrics, audience personas, and technical requirements."
              icon={Target}
            />
            <ProcessStep
              number="02"
              title="Strategy"
              desc="Architecting the UX and technical stack to solve your unique conversion bottlenecks."
              icon={Zap}
            />
            <ProcessStep
              number="03"
              title="Execution"
              desc="Agile development with continuous integration and real-time client feedback loops."
              icon={Code}
            />
            <ProcessStep
              number="04"
              title="Scale"
              desc="Post-launch monitoring, CRO audits, and iterative improvements for maximum growth."
              icon={TrendingUp}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
                THE TEAM
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Meet the Minds Behind the <span className="text-primary-600">Magic</span></h2>
              <p className="text-slate-500 mt-6 font-medium text-base md:text-lg">A multidisciplinary team of engineers, designers, and strategists working in sync to deliver excellence.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { name: "Duryodhan Prajapat", role: "Founder & CEO", image: "/images/founder/Profile_Daksh.png", bio: " Seasoned website developer with 4 years of experience and has worked with 150+ businesses around the glboe successfully." },
              { name: "Surendra Prajapat", role: "Website and social media expert", image: "/images/founder/Profile_surendra.png", bio: "Website and social media expert building fast, responsive, SEO-friendly solutions for business digital growth." }
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-8 border-4 border-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">{member.role}</p>
                <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Version */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-50 rounded-[3rem] md:rounded-[3.5rem] p-12 md:p-24 text-slate-900 text-center relative overflow-hidden group border border-primary-100"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-10 tracking-tighter leading-tight relative z-10">Let's build your <br /> legacy together.</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/contact">
                <Button variant="dark" className="h-14 md:h-16 px-10 md:px-12 font-black text-lg rounded-2xl">Start a Project</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="h-14 md:h-16 px-10 md:px-12 font-black text-lg border-primary-600/30 text-primary-600 hover:bg-white/50 rounded-2xl">Browse Expertise</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;