import React, { useState } from 'react';
import { Menu, ArrowRight, User, Image as ImageIcon, Video, MessageSquare, Mail, MoreHorizontal, CheckCircle2, Search, Bell, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Chris',
    role: 'CEO and Founder of various businesses such as digital marketing, construction company and podcast.',
    image: '/chris.jpg',
    video: 'https://www.instagram.com/p/C9AAE-JNdzq/',
    stars: 5
  },
  {
    name: 'Vanessa',
    role: 'Expert content marketing and project manager based in Singapore.',
    image: '/vanessa.jpg',
    video: 'https://drive.google.com/file/d/11FULghy3HYftLWibbjzo6bn2SGTEAIfP/view?usp=sharing',
    stars: 5
  },
  {
    name: 'Michael',
    role: 'Business Owner, Insurance wizard and Co-founder of a chat automation company.',
    image: '/michael.jpg',
    video: 'https://www.instagram.com/p/C97MxwJSq9t/',
    stars: 5
  }
];

const quotes = [
  { text: "What a design wizard!", color: "bg-[#d946ef]" },
  { text: "Such Quality Service!", color: "bg-[#c084fc]" },
  { text: "One of the best graphics people I know.", color: "bg-[#a855f7]" },
  { text: "That exceeded my expectation!", color: "bg-[#c084fc]" },
  { text: "Damn, man. That was fast.", color: "bg-[#d946ef]" },
  { text: "Will definitely call you again for another project.", color: "bg-[#d946ef]" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('About');

  const scrollToDashboard = () => {
    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  const sidebarItems = [
    { name: 'About', icon: User },
    { name: 'Graphic Design Works', icon: ImageIcon },
    { name: 'Video Editing Works', icon: Video },
    { name: 'Testimonies', icon: MessageSquare },
    { name: 'Contact', icon: Mail },
  ];

  return (
    <div className="relative w-full bg-[#0a0a0a] text-white font-sans flex flex-col">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]">
          {/* 
            To use your exact uploaded video:
            1. Create a 'public' folder in the file explorer (if it doesn't exist)
            2. Upload your webm file there and name it 'background.webm'
            3. Change the src below to '/background.webm'
          */}
          <video
            src="/background.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-teal-900/30 z-0 mix-blend-overlay"></div>
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)] z-0"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col h-full min-h-screen p-6 md:p-10 lg:p-12">
          
          {/* Top Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end w-full"
          >
            <button className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full hover:bg-white/20 transition-colors">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-800 to-red-600 shadow-inner"></div>
              <span className="text-lg font-light tracking-wide">Harvey</span>
              <Menu className="w-6 h-6 ml-2 opacity-80" strokeWidth={1.5} />
            </button>
          </motion.div>

          {/* Middle Section */}
          <div className="flex-1 flex flex-col justify-center py-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
              
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-6 max-w-xl"
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full w-fit">
                  <div className="w-10 h-5 bg-white rounded-full p-0.5 flex items-center justify-end shadow-inner">
                    <div className="w-4 h-4 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
                  </div>
                  <span className="text-sm font-medium text-white/90">Available for Work</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
                  Social Media<br />
                  Graphic Designer<br />
                  Video Editor
                </h1>
              </motion.div>

              {/* Right Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col items-start lg:items-end gap-8 mt-16 lg:mt-0"
              >
                <div className="flex gap-8 md:gap-12">
                  <div className="flex flex-col items-start">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight">500+</span>
                    <span className="text-sm md:text-base text-white/80 text-left leading-tight mt-1">Leads<br/>Generated</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight">100k+</span>
                    <span className="text-sm md:text-base text-white/80 text-left leading-tight mt-1">Views<br/>Gained</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight">10+</span>
                    <span className="text-sm md:text-base text-white/80 text-left leading-tight mt-1">Global<br/>Brands</span>
                  </div>
                </div>

                <button 
                  onClick={scrollToDashboard}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 p-1.5 pr-6 rounded-full hover:bg-white/20 transition-colors group cursor-pointer"
                >
                  <div className="bg-white text-black p-2 rounded-full group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="font-medium text-base">Go to Dashboard</span>
                </button>
              </motion.div>

            </div>
          </div>

          {/* Bottom Massive Text */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full flex justify-center pb-4 mix-blend-difference"
          >
            <h2 className="text-[22vw] leading-none font-semibold tracking-tighter text-white select-none">
              Harvey
            </h2>
          </motion.div>

        </div>
      </section>

      {/* --- DASHBOARD SECTION --- */}
      <section id="dashboard" className="min-h-screen bg-[#050505] flex flex-col md:flex-row relative z-20 border-t border-white/10">
        
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-white/[0.02] backdrop-blur-2xl border-r border-white/10 flex flex-col">
          {/* Logo Area */}
          <div className="p-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <span className="font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-xl tracking-widest uppercase">Harvey</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 flex flex-col gap-2">
            <div className="text-xs font-semibold text-white/40 tracking-wider uppercase mb-4 px-4">Menu</div>
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-500/20 to-transparent text-white border-l-2 border-purple-400' 
                      : 'text-white/60 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="font-medium text-sm text-left">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Promo Card */}
          <div className="p-6 m-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/20 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="font-bold text-sm mb-2 text-white/90 uppercase tracking-wider">Available Now</h3>
            <p className="text-xs text-white/60 mb-4 leading-relaxed">Let's collaborate on your next big project.</p>
            <button className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg text-xs font-bold shadow-lg hover:shadow-purple-500/25 transition-all">
              HIRE ME
            </button>
          </div>
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#0a0a0a]/50">
          
          {/* Top Navigation Bar */}
          <header className="flex items-center justify-end px-8 py-6 border-b border-white/5 bg-white/[0.01] backdrop-blur-sm sticky top-0 z-30">
            <div className="flex items-center gap-6">
              <button className="text-white/60 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white/60 hover:text-white transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full"></span>
              </button>
              <div className="w-px h-6 bg-white/10 mx-2"></div>
              <button className="flex items-center gap-3 hover:bg-white/5 p-1.5 pr-4 rounded-full transition-colors border border-transparent hover:border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 p-[1px]">
                  <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                    <User className="w-4 h-4 text-white/80" />
                  </div>
                </div>
                <span className="text-sm font-medium text-white/90">Harvey</span>
              </button>
            </div>
          </header>

          {/* Dashboard Content */}
          {activeTab === 'About' && (
            <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Experience Column */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full">
                  <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '2px' }}>EXPERIENCE</h3>
                  
                  <div className="flex flex-col gap-8 relative">
                    {/* Timeline line */}
                    <div className="absolute left-[4.5rem] top-2 bottom-2 w-px bg-white/10"></div>
                    
                    {/* Item 1 */}
                    <div className="flex gap-6 relative z-10">
                      <div className="w-16 flex-shrink-0 text-right">
                        <span className="text-sm font-bold text-white/80">2017-<br/>2023</span>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">Licensed Professional Teacher</h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                          Successfully instructed over 1,080 students, achieving a 99% passing rate. Additionally, managed the school's social media for 2 years, enhancing online engagement and communication for almost 45%.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-6 relative z-10">
                      <div className="w-16 flex-shrink-0 text-right">
                        <span className="text-sm font-bold text-white/80">2023-<br/>Present</span>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-teal-400 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-teal-300 mb-2">Social Media Graphic Designer</h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                          Crafted engaging visual assets tailored for the gaming industry and various niches, including social media content, promotional materials, short-form videos, reels, and digital ads. Collaborated closely with marketing teams and developers to translate complex concepts into clear, eye-catching designs. Ensured timely delivery of high-quality work through efficient project management and seamless client communication.
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex gap-6 relative z-10">
                      <div className="w-16 flex-shrink-0 text-right">
                        <span className="text-sm font-bold text-white/80">2023-<br/>Present</span>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-blue-400 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Video Editor & Graphic Support</h4>
                        <p className="text-sm text-white/60 leading-relaxed">
                          Produced short and long-form videos and supported graphic design for a Singapore-based company's digital campaigns. Created engaging visuals that helped generate hundreds of leads through high-performing creative ads. Ensured brand consistency and timely delivery by collaborating closely with the marketing team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                {/* Softwares Used */}
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '2px' }}>SOFTWARES USED</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Main Tools */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4 bg-purple-500/20 inline-block px-3 py-1 rounded-md">Main Tools</h4>
                      <div className="flex flex-col gap-4">
                        {[
                          { name: 'Adobe Photoshop', icon: 'Ps', color: 'bg-blue-600', val: 90 },
                          { name: 'Figma', icon: 'Fg', color: 'bg-pink-500', val: 85 },
                          { name: 'Canva Pro', icon: 'C', color: 'bg-cyan-500', val: 95 },
                          { name: 'Adobe Premiere Pro', icon: 'Pr', color: 'bg-purple-600', val: 88 },
                          { name: 'Adobe After Effects', icon: 'Ae', color: 'bg-indigo-600', val: 75 },
                          { name: 'Capcut Pro', icon: 'Cp', color: 'bg-white text-black', val: 92 },
                        ].map((tool, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs ${tool.color} ${tool.name === 'Capcut Pro' ? '' : 'text-white'}`}>
                              {tool.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <span className="text-xs font-medium text-white/80">{tool.name}</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full" style={{ width: `${tool.val}%` }}></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Other Tools & Description */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4 bg-teal-500/20 inline-block px-3 py-1 rounded-md">Other Tools</h4>
                        <div className="flex gap-3 flex-wrap">
                          <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center border border-white/20 text-xl">🤖</div>
                          <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center border border-white/20 text-xl">⛵</div>
                          <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center border border-white/20 text-xl font-bold text-orange-500">O</div>
                          <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center border border-white/20 text-xl font-bold text-orange-400">Ai</div>
                        </div>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">
                        I use a mix of design, video editing, and content management tools to create impactful visuals and streamline content across digital platforms. From crafting brand visuals to editing engaging videos, I rely on the right tools to bring ideas to life efficiently and professionally.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Soft Skills */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-sm flex flex-col">
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-widest text-white/90" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '2px' }}>SOFT SKILLS</h3>
                    <p className="text-xs text-white/60 mb-6 leading-relaxed">
                      Creative, adaptable, and detail-oriented with strong communication, discipline, and problem-solving skills.
                    </p>
                    {/* Radar Chart Approximation */}
                    <div className="relative w-full aspect-square max-w-[180px] mx-auto mt-auto">
                      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        {/* Hexagon grid */}
                        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        <polygon points="50,35 63,42.5 63,57.5 50,65 37,57.5 37,42.5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                        {/* Axes */}
                        <line x1="50" y1="50" x2="50" y2="5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="50" y1="50" x2="90" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="50" y1="50" x2="90" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="50" y1="50" x2="50" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="50" y1="50" x2="10" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="50" y1="50" x2="10" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        {/* Data Polygon */}
                        <polygon points="50,15 85,30 80,70 50,85 20,70 15,30" fill="rgba(168,85,247,0.4)" stroke="#a855f7" strokeWidth="2" />
                        {/* Data Points */}
                        <circle cx="50" cy="15" r="3" fill="#a855f7" />
                        <circle cx="85" cy="30" r="3" fill="#a855f7" />
                        <circle cx="80" cy="70" r="3" fill="#a855f7" />
                        <circle cx="50" cy="85" r="3" fill="#a855f7" />
                        <circle cx="20" cy="70" r="3" fill="#a855f7" />
                        <circle cx="15" cy="30" r="3" fill="#a855f7" />
                      </svg>
                      {/* Labels */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-white/70 whitespace-nowrap text-center">Creative<br/>Problem-solving</div>
                      <div className="absolute top-1/4 -right-8 text-[8px] text-white/70">Storytelling</div>
                      <div className="absolute bottom-1/4 -right-8 text-[8px] text-white/70">Adaptability</div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-white/70">Discipline</div>
                      <div className="absolute bottom-1/4 -left-8 text-[8px] text-white/70 text-right">Attention to<br/>detail</div>
                      <div className="absolute top-1/4 -left-8 text-[8px] text-white/70">Communication</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Testimonies' && (
            <div className="p-8 lg:p-12 max-w-7xl mx-auto w-full">
              {/* Header */}
              <div className="mb-16">
                <h2 className="text-5xl md:text-7xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] mb-4" style={{ WebkitTextStroke: '1px #a855f7', fontFamily: 'Impact, sans-serif' }}>
                  TESTIMONIALS
                </h2>
                <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                  Don't just take my word for it.<br />
                  Hit play and hear what my clients have to say.
                </p>
              </div>

              {/* Reviewers */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 mb-20">
                {testimonials.map((t, i) => (
                  <div key={i} className="flex flex-col items-start max-w-[300px]">
                    {/* Image Container */}
                    <div className="relative mb-6 self-center md:self-start">
                      <div className="w-56 h-56 rounded-full p-1.5 bg-gradient-to-br from-teal-400 via-purple-500 to-purple-800">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full border-4 border-[#0a0a0a]" />
                      </div>
                      {/* Play Button - Now Opens Link */}
                      <a 
                        href={t.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:scale-105 transition-transform border-4 border-[#0a0a0a] cursor-pointer"
                      >
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </a>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1.5 mb-4 text-purple-500">
                      {[...Array(t.stars)].map((_, j) => (
                        <svg key={j} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Name & Role */}
                    <h3 className="text-3xl font-bold text-white mb-3">{t.name}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{t.role}</p>
                  </div>
                ))}
              </div>

              {/* Quotes */}
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {quotes.map((quote, i) => (
                  <div key={i} className={`px-6 py-3 rounded-full text-base font-medium shadow-lg ${quote.color} text-white`}>
                    {quote.text}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== 'About' && activeTab !== 'Testimonies' && (
            <div className="p-8 flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="text-2xl text-white/40">🚧</span>
                </div>
                <h2 className="text-2xl font-bold text-white/80">{activeTab}</h2>
                <p className="text-white/50 max-w-md">This section is currently under construction. Please check back later or view the About section.</p>
              </div>
            </div>
          )}
          {/* Footer */}
          <footer className="mt-auto border-t border-white/10 bg-[#0a0a0a] pt-16 pb-8 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                {/* Left side */}
                <div>
                  <div className="inline-block bg-[#a855f7] text-white px-4 py-1 text-sm font-bold tracking-widest uppercase mb-4">
                    HARVEY LINGAD
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                    <span className="text-purple-400">GRAPHIC</span> <span className="text-white">DESIGN</span><br />
                    <span className="text-purple-400">VIDEO</span> <span className="text-white">EDITING</span><br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 italic" style={{ WebkitTextStroke: '1px #d946ef' }}>SERVICES</span>
                  </h2>
                </div>
                
                {/* Right side */}
                <div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right">
                  <p className="text-white/80 mb-6 leading-relaxed">
                    If you see something you like, imagine what we could build together.
                  </p>
                  <button className="bg-[#d946ef] hover:bg-[#c026d3] text-white px-8 py-3 rounded-full font-bold tracking-wider uppercase transition-colors shadow-[0_0_15px_rgba(217,70,239,0.4)]">
                    LET'S TALK
                  </button>
                </div>
              </div>
              
              {/* Bottom Bar */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-purple-500/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-teal-400">HL</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-white/50 block text-xs">Email:</span>
                    <a href="mailto:harveylingad.creatives@gmail.com" className="text-white/90 hover:text-purple-400 transition-colors">harveylingad.creatives@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Social Icons */}
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="text-center mt-12 text-xs text-white/40">
                All Rights Reserved © : Harvey Lingad Personal Portfolio 2025
              </div>
            </div>
          </footer>
        </main>
      </section>
    </div>
  );
}
