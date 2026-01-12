import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              
              <span className="text-xl font-bold tracking-tight text-white">
                Appliic<span className="text-primary-400">.DS</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming ideas into digital reality. We build brands, websites, and apps that drive growth and engagement.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/appliic_digital" className="text-slate-400 hover:text-primary-400 transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/110840016/admin/inbox/" className="text-slate-400 hover:text-primary-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Insights (Blog)</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/web-development" className="text-slate-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/app-development" className="text-slate-400 hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/services/brand-consultation" className="text-slate-400 hover:text-white transition-colors">Brand Consultation</Link></li>
              <li><Link to="/services/digital-marketing" className="text-slate-400 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/speed-optimization" className="text-slate-400 hover:text-white transition-colors">Speed Optimization</Link></li>
              <li><Link to="/services/cro" className="text-slate-400 hover:text-white transition-colors">CRO & UX Strategy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={20} className="text-primary-400 shrink-0 mt-1" />
                <span>Jodhpur Rajasthan, 342008</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={20} className="text-primary-400 shrink-0" />
                <span>appliic.digital@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={20} className="text-primary-400 shrink-0" />
                <span>+91 8824196076</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Appliic Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
