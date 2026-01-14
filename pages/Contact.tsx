import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Zap, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'shopify-dev',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_ENDPOINT = "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    console.log("Form Submission Data:", formState);

    try {
      if (API_ENDPOINT) {
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        });

        if (!response.ok) throw new Error("Failed to send message");

        setSubmitted(true);
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitted(true);
      }

      setFormState({ name: '', email: '', service: 'shopify-dev', message: '' });
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly at hello@appliicds.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Breadcrumbs light />
          <div className="text-center mt-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/10 text-primary-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-primary-400/20">
              GET IN TOUCH
            </div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
            >
              Let's build something <span className="text-primary-400">extraordinary</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium"
            >
              Ready to scale your brand? Our experts are here to help you bridge the gap between vision and reality.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-12 md:-mt-16 mb-24 relative z-20">
        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

          {/* Contact Info Side */}
          <div className="bg-white p-10 md:p-16 lg:w-[42%] border-b lg:border-b-0 lg:border-r border-slate-100">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 tracking-tight">Contact Information</h3>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 shadow-sm border border-primary-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Our Office</h4>
                  <p className="text-slate-500 text-sm md:text-base mt-1 font-medium leading-relaxed">
                    Jodhpur, Rajasthan 342008
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 shadow-sm border border-primary-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                  <p className="text-slate-500 text-sm md:text-base mt-1 font-medium">appliic.digital@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <Clock size={16} /> Average Response: 2 Hours
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <ShieldCheck size={16} /> Secure Data Handling
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-16 lg:w-[58%] bg-slate-50/30">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8">
                  Thank you for reaching out. A strategy consultant will review your request and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary-600 font-black text-lg hover:underline underline-offset-8 decoration-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-3 text-sm font-bold"
                  >
                    <AlertCircle size={18} /> {error}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-black text-slate-700 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary-500 focus:ring-0 outline-none transition-all font-medium text-slate-900 bg-white placeholder:text-slate-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-black text-slate-700 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary-500 focus:ring-0 outline-none transition-all font-medium text-slate-900 bg-white placeholder:text-slate-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-black text-slate-700 uppercase tracking-widest ml-1">Interested Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary-500 focus:ring-0 outline-none transition-all font-bold text-slate-900 bg-white cursor-pointer"
                  >
                    <option value="shopify-dev">Shopify Development</option>
                    <option value="web-dev">Custom Web App</option>
                    <option value="app-dev">Mobile App Development</option>
                    <option value="branding">Brand Identity & Design</option>
                    <option value="cro">CRO & Speed Optimization</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-black text-slate-700 uppercase tracking-widest ml-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary-500 focus:ring-0 outline-none transition-all font-medium text-slate-900 bg-white placeholder:text-slate-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className={`w-full h-16 text-lg font-black rounded-2xl shadow-xl shadow-primary-500/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100/80 text-primary-700 font-black text-[10px] uppercase tracking-[0.2em] mb-12">
          TRUSTED BY GLOBAL BRANDS
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {["Shopify Plus", "Klaviyo", "Gorgias", "Recharge", "Yotpo"].map((p, i) => (
            <span key={i} className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;