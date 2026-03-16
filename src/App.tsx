import React, { useState } from 'react';
import { Menu, ArrowRight, User, Image as ImageIcon, Video, MessageSquare, Mail, MoreHorizontal, CheckCircle2, Search, Bell, Facebook, Instagram, Linkedin, Heart, Play, X } from 'lucide-react';
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

const CONTACT_CONFIG = {
  title: "Let's Work Together",
  description: "I help founders and creators build high-performing brands through cinematic video editing and editorial-grade graphic design. Ready to scale your visual identity?",
  services: ["Social Media Graphics", "Video Editing", "Short-form Content", "Brand Design"],
  projectTypes: ["Graphic Design", "Video Editing", "Full Brand Identity", "Social Media Package", "Other"],
  budgetRanges: ["<$500", "$500 - $1,000", "$1,000 - $3,000", "$3,000+"],
  timelines: ["Urgent (< 1 week)", "Standard (2-4 weeks)", "Long-term (1 month+)", "Not sure yet"],
  email: "harveylingad.creatives@gmail.com",
  bookingLink: "#", // Add actual booking link here
  repliesIn: "Usually replies within 24 hours"
};

const GRAPHIC_CATEGORIES = ['All', 'Social Media Posts', 'Carousel Design', 'Ad Creatives', 'Thumbnails', 'Campaign Visuals'];

const GRAPHIC_PROJECTS = [
  // priority 1: carousels
  {
    id: 9,
    title: "Darna Personal Project",
    category: "Carousel Design",
    description: "A high-impact personal experimental project featuring Darna, focused on motion and visual composite.",
    image: "/works/Images/Carousels/Darna/Darna GIF.mp4",
    images: [
      "/works/Images/Carousels/Darna/carousels-darna-p1-main.png",
      "/works/Images/Carousels/Darna/carousels-darna-p1-slide1.png",
      "/works/Images/Carousels/Darna/carousels-darna-p1-slide2.png",
      "/works/Images/Carousels/Darna/carousels-darna-p1-slide3.png",
      "/works/Images/Carousels/Darna/carousels-darna-p1-slide4.png",
      "/works/Images/Carousels/Darna/carousels-darna-p1-slide5.png",
      "/works/Images/Carousels/Darna/carousels-darna-p1-slide6.png"
    ],
    platform: "Unpublished",
    tools: ["Photoshop"],
    tags: ["Experimental", "Motion"],
    link: "#"
  },
  {
    id: 10,
    title: "Deadpool Social Media Kit",
    category: "Carousel Design",
    description: "Social media post design for a marketing page, leveraging high-contrast comic-book aesthetics.",
    image: "/works/Images/Carousels/Deadpool/Artboard 1.jpg",
    images: [
      "/works/Images/Carousels/Deadpool/Artboard 1.jpg",
      "/works/Images/Carousels/Deadpool/Artboard 2.png",
      "/works/Images/Carousels/Deadpool/Artboard 3.jpg",
      "/works/Images/Carousels/Deadpool/Artboard 4.jpg",
      "/works/Images/Carousels/Deadpool/Artboard 5.jpg",
      "/works/Images/Carousels/Deadpool/Artboard 6.jpg",
      "/works/Images/Carousels/Deadpool/Artboard 7.jpg",
      "/works/Images/Carousels/Deadpool/Artboard 8.jpg"
    ],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Comic", "Vibrant"],
    link: "#"
  },
  {
    id: 11,
    title: "Emotions Marketing Campaign",
    category: "Carousel Design",
    description: "educational carousel design exploring marketing psychology and emotions in design.",
    image: "/works/Images/Carousels/Emotions Post/1.png",
    images: [
      "/works/Images/Carousels/Emotions Post/1.png",
      "/works/Images/Carousels/Emotions Post/2.png",
      "/works/Images/Carousels/Emotions Post/3.png",
      "/works/Images/Carousels/Emotions Post/4.png",
      "/works/Images/Carousels/Emotions Post/5.png",
      "/works/Images/Carousels/Emotions Post/6.png",
      "/works/Images/Carousels/Emotions Post/7.png",
      "/works/Images/Carousels/Emotions Post/8.png",
      "/works/Images/Carousels/Emotions Post/9.png",
      "/works/Images/Carousels/Emotions Post/10.png"
    ],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Psychology", "Minimalist"],
    link: "#"
  },
  // priority 2: social media
  {
    id: 12,
    title: "Gym Shirt Promotion",
    category: "Social Media Posts",
    description: "Gym Shirt Promotion inspired by Anime aesthetics for high energy and engagement.",
    image: "/works/Images/Social Media/1.jpg",
    images: ["/works/Images/Social Media/1.jpg"],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Anime", "Fitness"],
    link: "#"
  },
  {
    id: 13,
    title: "Partnership Gym Shirt Promotion",
    category: "Social Media Posts",
    description: "Gym Shirt Promotion inspired by Anime, highlighting collaboration and brand synergy.",
    image: "/works/Images/Social Media/2.jpg",
    images: ["/works/Images/Social Media/2.jpg"],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Anime", "Partnership"],
    link: "#"
  },
  {
    id: 14,
    title: "VR Game Promotion",
    category: "Social Media Posts",
    description: "Online VR Game Social Media Promotion designed for a futuristic and immersive feel.",
    image: "/works/Images/Social Media/3.png",
    images: ["/works/Images/Social Media/3.png", "/works/Images/Social Media/3.1.png"],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["VR", "Gaming"],
    link: "#"
  },
  {
    id: 15,
    title: "10k Subscribers Celebration",
    category: "Social Media Posts",
    description: "Milestone celebration creative for reaching a 10k follower base.",
    image: "/works/Images/Social Media/4.jpg",
    images: ["/works/Images/Social Media/4.jpg"],
    platform: "YouTube",
    tools: ["Photoshop"],
    tags: ["Milestone", "Community"],
    link: "#"
  },
  {
    id: 16,
    title: "Professional Banner Samples",
    category: "Social Media Posts",
    description: "Curated collection of banner samples showing versatile design styles.",
    image: "/works/Images/Social Media/6.jpg",
    images: ["/works/Images/Social Media/6.jpg", "/works/Images/Social Media/5.png"],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Branding", "Layout"],
    link: "#"
  },
  {
    id: 17,
    title: "TCG Shop Grand Opening",
    category: "Social Media Posts",
    description: "Visual identity and promotion for a TCG shop grand opening event.",
    image: "/works/Images/Social Media/7.png",
    images: ["/works/Images/Social Media/7.png"],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["TCG", "Event"],
    link: "#"
  },
  {
    id: 18,
    title: "Gaming Content Pack",
    category: "Social Media Posts",
    description: "A wide variety of high-impact gaming posts for social media engagement.",
    image: "/works/Images/Social Media/8.png",
    images: [
      "/works/Images/Social Media/8.png", 
      "/works/Images/Social Media/8.1.png", 
      "/works/Images/Social Media/8.2.jpg", 
      "/works/Images/Social Media/8.3.png", 
      "/works/Images/Social Media/8.4.png"
    ],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Gaming", "Dynamic"],
    link: "#"
  },
  // priority 3: thumbnails
  {
    id: 19,
    title: "Horizontal Content Thumbnails",
    category: "Thumbnails",
    description: "High-CTR horizontal thumbnails designed for YouTube video optimization.",
    image: "/works/Images/Thumbnails/wide1.jpg",
    images: ["/works/Images/Thumbnails/wide1.jpg"],
    platform: "YouTube",
    tools: ["Photoshop"],
    tags: ["Youtube", "CTR"],
    link: "#"
  },
  {
    id: 20,
    title: "Branded Horizontal Series",
    category: "Thumbnails",
    description: "Consistent branding applied to a series of horizontal content thumbnails.",
    image: "/works/Images/Thumbnails/wide2.jpg",
    images: ["/works/Images/Thumbnails/wide2.jpg", "/works/Images/Thumbnails/wide3.jpg", "/works/Images/Thumbnails/wide4.jpg", "/works/Images/Thumbnails/wide5.jpg"],
    platform: "YouTube",
    tools: ["Photoshop"],
    tags: ["Consistent Branding"],
    link: "#"
  },
  {
    id: 21,
    title: "Short-form Vertical Kit",
    category: "Thumbnails",
    description: "Vertical thumbnails optimized for TikTok and Reels high-retention content.",
    image: "/works/Images/Thumbnails/vertical1.png",
    images: ["/works/Images/Thumbnails/vertical1.png", "/works/Images/Thumbnails/vertical2.png"],
    platform: "TikTok",
    tools: ["Photoshop"],
    tags: ["Consistent Branding", "Tiktok"],
    link: "#"
  },
  {
    id: 22,
    title: "Meme/Trendy Vertical Kit",
    category: "Thumbnails",
    description: "Fast-paced, trendy vertical thumbnails designed for maximum viral potential.",
    image: "/works/Images/Thumbnails/vertical3.jpg",
    images: ["/works/Images/Thumbnails/vertical3.jpg", "/works/Images/Thumbnails/vertical4.jpg", "/works/Images/Thumbnails/vertical5.jpg", "/works/Images/Thumbnails/vertical6.jpg"],
    platform: "YouTube Shorts",
    tools: ["Photoshop"],
    tags: ["Trendy", "Viral"],
    link: "#"
  },
  // priority 4: campaigns
  {
    id: 4,
    title: "Hobby Store Local Tournaments",
    category: "Campaign Visuals",
    description: "Social media posts of a local hobby store's tournament of different games.",
    image: "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p1-main.jpg",
    images: [
      "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p1-main.jpg",
      "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p1-slide1.jpg",
      "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p1-slide2.jpg",
      "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p1-slide3.jpg",
      "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p1-slide4.png"
    ],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Anime-style", "CTA Highlight"],
    link: "#"
  },
  {
    id: 5,
    title: "TCG Calling Card",
    category: "Campaign Visuals",
    description: "Personalized calling card of the store owner designed with unique branding.",
    image: "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p2-main.png",
    images: ["/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p2-main.png"],
    platform: "Print",
    tools: ["Photoshop"],
    tags: ["Anime-style", "Branding"],
    link: "#"
  },
  {
    id: 6,
    title: "Toy Drive Charity Event",
    category: "Campaign Visuals",
    description: "A high-energy campaign for a charity event tailored for streaming platforms.",
    image: "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p3-main.png",
    images: ["/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p3-main.png"],
    platform: "Twitch",
    tools: ["Photoshop"],
    tags: ["Vibrant", "Charity"],
    link: "#"
  },
  {
    id: 7,
    title: "Toy Drive (Variant)",
    category: "Campaign Visuals",
    description: "Variant design for the Toy Drive campaign featuring different visual arrangements.",
    image: "/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p4-main.png",
    images: ["/works/Images/Campaigns/Seanpaisen/campaigns-seanpaisen-p4-main.png"],
    platform: "Twitch",
    tools: ["Photoshop"],
    tags: ["Vibrant", "Charity"],
    link: "#"
  },
  {
    id: 8,
    title: "Steam Game Page Creatives",
    category: "Campaign Visuals",
    description: "Creative assets displayed on the Steam platform for high-impact game presentation.",
    image: "/works/Images/Campaigns/Steam Game Page/campaigns-steamgame-p1-main.jpg",
    images: [
      "/works/Images/Campaigns/Steam Game Page/campaigns-steamgame-p1-main.jpg",
      "/works/Images/Campaigns/Steam Game Page/campaigns-steamgame-p1-slide1.png",
      "/works/Images/Campaigns/Steam Game Page/campaigns-steamgame-p1-slide2.jpg",
      "/works/Images/Campaigns/Steam Game Page/campaigns-steamgame-p1-slide3.jpg"
    ],
    platform: "Steam",
    tools: ["Photoshop"],
    tags: ["Gaming", "UI/UX"],
    link: "#"
  },
  // priority 5: ads
  {
    id: 1,
    title: "Lead Magnet",
    category: "Ad Creatives",
    description: "A creative ad tailored for lead magnet optimization.",
    image: "/works/Images/Ads/ads-p1-main.jpg",
    images: ["/works/Images/Ads/ads-p1-main.jpg"],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Modern", "CTA Highlight"],
    link: "#"
  },
  {
    id: 2,
    title: "Store Opening",
    category: "Ad Creatives",
    description: "A social media post to advertise a hobby shop from the US.",
    image: "/works/Images/Ads/ads-p2-main.jpg",
    images: ["/works/Images/Ads/ads-p2-main.jpg"],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["Hobby Shop", "Retail"],
    link: "#"
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "Ad Creatives",
    description: "A social media post designed to advertise various products effectively.",
    image: "/works/Images/Ads/ads-p3-main.jpg",
    images: [
      "/works/Images/Ads/ads-p3-main.jpg",
      "/works/Images/Ads/ads-p3-slide1.jpg",
      "/works/Images/Ads/ads-p3-slide2.jpg"
    ],
    platform: "Meta",
    tools: ["Photoshop"],
    tags: ["E-commerce", "Visuals"],
    link: "#"
  }
];

const VIDEO_CASE_STUDIES = [
  {
    id: 1,
    label: "TikTok Video",
    title: "Squidgame Video",
    summary: "Interview Video featuring Squidgame concepts with custom SVG animations.",
    highlights: ["Svg Animation", "TikTok Optimized", "Engaging Narrative"],
    image: "/works/Video/Cover.png",
    video: "/works/Video/v1.mp4",
    link: "#"
  },
  {
    id: 2,
    label: "TikTok Video",
    title: "Bizfile",
    summary: "Professional screen recording and UI animation for Bizfile platform presentation.",
    highlights: ["Screen Recording", "UI Animation", "Smooth Transitions"],
    image: "/works/Video/Cover 2.png",
    video: "/works/Video/4 - Bizfile v1.mp4",
    link: "#"
  },
  {
    id: 3,
    label: "Motion Graphics",
    title: "IG New Size Trend",
    summary: "A professional motion graphics video based on the new size trend of Instagram, created with After Effects from scratch.",
    highlights: ["After Effects", "Motion Graphics", "Trend-ready"],
    image: "/works/Video/Ig new Size Cover.png",
    video: "/works/Video/IG New Size Trend.mp4",
    link: "https://www.instagram.com/p/DPIEOPCk0kl/"
  },
  {
    id: 4,
    label: "Motion Graphics",
    title: "Services Promotion",
    summary: "A high-impact motion graphics video for promoting company services with professional aesthetics.",
    highlights: ["After Effects", "Brand Promotion", "Motion Design"],
    image: "/works/Video/Artboard 1.jpg",
    video: "/works/Video/Offshore MoGraph1_1.mp4",
    link: "https://www.instagram.com/p/DOvIAWNiF3M/"
  },
  {
    id: 5,
    label: "YouTube Shorts",
    title: "Rock Lee Video",
    summary: "High-energy YouTube Shorts featuring Rock Lee with sophisticated UI animations.",
    highlights: ["UI Animations", "Anime Style", "Fast-paced Edit"],
    image: "/works/Video/2 Shorts - Team Might Guy.jpg",
    video: "/works/Video/2 Shorts - Team Might Guy V2.mp4",
    link: "#"
  },
  {
    id: 6,
    label: "Stream Clip Video",
    title: "10k Gift Celebration",
    summary: "Trendy stream clip celebration for 10k milestone, optimized for high retention.",
    highlights: ["Trendy Edits", "Engagement Focused", "Social Media Ready"],
    image: "/works/Video/4 - 10k Gifts 2.jpg",
    video: "/works/Video/Sean 10k Gift V1.mp4",
    link: "#"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [formState, setFormState] = useState({ name: '', email: '', projectType: '', budget: '', timeline: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [visibleItems, setVisibleItems] = useState(6);
  const [likedProjects, setLikedProjects] = useState<Record<number, boolean>>(() => {
    const saved = localStorage.getItem('harvey_portfolio_likes');
    return saved ? JSON.parse(saved) : {};
  });
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const toggleLike = (id: number) => {
    const newLikes = { ...likedProjects, [id]: !likedProjects[id] };
    setLikedProjects(newLikes);
    localStorage.setItem('harvey_portfolio_likes', JSON.stringify(newLikes));
  };

  const filteredProjects = GRAPHIC_PROJECTS.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  // For the 'All' page specifically, we might want to respect the visibleItems limit
  const projectsToShow = selectedCategory === 'All' 
    ? filteredProjects.slice(0, visibleItems) 
    : filteredProjects;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormState({ name: '', email: '', projectType: '', budget: '', timeline: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

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
        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <MoreHorizontal className="w-6 h-6 rotate-45" />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
              {sidebarItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMenuOpen(false);
                    scrollToDashboard();
                  }}
                  className={`text-3xl font-black uppercase tracking-tighter transition-all italic ${
                    activeTab === item.name ? 'text-purple-500 scale-110' : 'text-white/40 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

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
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full hover:bg-white/20 transition-colors"
            >
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToDashboard}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 p-1.5 pr-6 rounded-full hover:bg-white/20 transition-colors group cursor-pointer"
                  >
                    <div className="bg-white text-black p-2 rounded-full group-hover:scale-105 transition-transform">
                      <ArrowRight className="w-5 shadow-[0_0_15px_rgba(255,255,255,0.4)] h-5" strokeWidth={2.5} />
                    </div>
                    <span className="font-medium text-base">Explore My Dashboard</span>
                  </button>

                  <button 
                    onClick={() => {
                      setActiveTab('Contact');
                      scrollToDashboard();
                    }}
                    className="flex items-center gap-4 bg-purple-600 border border-purple-500/50 p-1.5 pr-6 rounded-full hover:bg-purple-500 transition-colors group cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    <div className="bg-white text-purple-600 p-2 rounded-full group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-base uppercase tracking-wider">Hire Me</span>
                  </button>
                </div>
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
            <button 
              onClick={() => setActiveTab('Contact')}
              className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg text-xs font-bold shadow-lg hover:shadow-purple-500/25 transition-all"
            >
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
                {/* About Profile Photo */}
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden h-64 md:h-80 lg:h-96">
                  <img 
                    src="/about-me.jpg" 
                    alt="Harvey Lingad" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '2px' }}>EXPERIENCE</h3>
                  
                  <div className="flex flex-col gap-4 relative">
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
                          { name: 'Adobe Photoshop', icon: '/logos/photoshop.png', val: 90 },
                          { name: 'Figma', icon: '/logos/figma.png', val: 85 },
                          { name: 'Canva Pro', icon: '/logos/canva.png', val: 95 },
                          { name: 'Adobe Premiere Pro', icon: '/logos/premiere.png', val: 88 },
                          { name: 'Adobe After Effects', icon: '/logos/after-effects.png', val: 75 },
                          { name: 'Capcut Pro', icon: '/logos/capcut.png', val: 92 },
                        ].map((tool, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden bg-white/5 border border-white/10">
                              <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
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
                          {[
                            { name: 'ChatGPT', icon: '/logos/chatgpt.png' },
                            { name: 'Midjourney', icon: '/logos/midjourney.png' },
                            { name: 'OpenShot', icon: '/logos/openshot.png' },
                            { name: 'Illustrator', icon: '/logos/illustrator.png' },
                          ].map((tool, i) => (
                            <div key={i} className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center border border-white/20 overflow-hidden" title={tool.name}>
                              <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain p-1.5" />
                            </div>
                          ))}
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

          {activeTab === 'Contact' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 lg:p-12 max-w-7xl mx-auto w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Panel: Value Prop */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  <div>
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                      {CONTACT_CONFIG.title.toUpperCase()}
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed max-w-md">
                      {CONTACT_CONFIG.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {CONTACT_CONFIG.services.map(service => (
                      <span key={service} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-purple-300 uppercase">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-6 mt-4">
                    <div className="flex items-center gap-3 text-teal-400">
                      <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
                      <span className="text-sm font-medium tracking-wide uppercase">{CONTACT_CONFIG.repliesIn}</span>
                    </div>

                    <div className="flex flex-col gap-4">
                      <a href={`mailto:${CONTACT_CONFIG.email}`} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                          <Mail className="w-5 h-5 text-white/70 group-hover:text-purple-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-white/40 uppercase font-bold tracking-widest">Email Me</span>
                          <span className="text-sm font-medium group-hover:text-purple-300 transition-colors">{CONTACT_CONFIG.email}</span>
                        </div>
                      </a>

                      <a href={CONTACT_CONFIG.bookingLink} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all duration-300">
                          <Video className="w-5 h-5 text-white/70 group-hover:text-teal-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-white/40 uppercase font-bold tracking-widest">Book a Call</span>
                          <span className="text-sm font-medium group-hover:text-teal-300 transition-colors">Schedule a 15-min discovery session</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Form */}
                <div className="lg:col-span-7">
                  <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden">
                    {/* Success Overlay */}
                    {showSuccess && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-20 bg-[#0a0a0a]/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                      >
                        <div className="w-20 h-20 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center mb-6">
                          <CheckCircle2 className="w-10 h-10 text-teal-400" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Inquiry Received!</h3>
                        <p className="text-white/60 leading-relaxed max-w-xs mx-auto">
                          Thanks for reaching out! I've received your message and will get back to you within 24 hours.
                        </p>
                        <button 
                          onClick={() => setShowSuccess(false)}
                          className="mt-8 text-sm font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 underline underline-offset-8 transition-colors"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    )}

                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Your Name"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
                          <input 
                            required
                            type="email" 
                            placeholder="hello@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Project</label>
                          <select 
                            required
                            value={formState.projectType}
                            onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer text-white/80"
                          >
                            <option value="" disabled className="bg-[#111]">Select Type</option>
                            {CONTACT_CONFIG.projectTypes.map(type => <option key={type} value={type} className="bg-[#111]">{type}</option>)}
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Budget</label>
                          <select 
                            required
                            value={formState.budget}
                            onChange={(e) => setFormState({...formState, budget: e.target.value})}
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer text-white/80"
                          >
                            <option value="" disabled className="bg-[#111]">Select Range</option>
                            {CONTACT_CONFIG.budgetRanges.map(range => <option key={range} value={range} className="bg-[#111]">{range}</option>)}
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Timeline</label>
                          <select 
                            required
                            value={formState.timeline}
                            onChange={(e) => setFormState({...formState, timeline: e.target.value})}
                            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer text-white/80"
                          >
                            <option value="" disabled className="bg-[#111]">Select Timing</option>
                            {CONTACT_CONFIG.timelines.map(time => <option key={time} value={time} className="bg-[#111]">{time}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                        <textarea 
                          required
                          placeholder="Briefly describe your project goals..."
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
                        ></textarea>
                      </div>

                      <div className="mt-4 flex flex-col gap-4">
                        <button 
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full py-4 bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl font-bold uppercase tracking-[2px] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          ) : (
                            <>
                              <span>Send Inquiry</span>
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                        <p className="text-[10px] text-center text-white/30 uppercase tracking-widest">
                          I'll review your project details and reach out to schedule a discovery call.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Graphic Design Works' && (
            <div className="p-8 lg:p-12 w-full max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl font-black italic tracking-tighter text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>GRAPHIC DESIGN WORKS</h2>
                <p className="text-white/50">Curated showcase of high-impact visual design</p>
              </div>

              {/* Filtering */}
              <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
                {GRAPHIC_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                      selectedCategory === cat 
                      ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                      : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsToShow.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative cursor-pointer"
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                      {project.image.endsWith('.mp4') ? (
                        <video 
                          src={project.image} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-8">
                        <span className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1">{project.category}</span>
                        <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View More Button */}
              {selectedCategory === 'All' && visibleItems < filteredProjects.length && (
                <div className="mt-16 flex justify-center">
                  <button 
                    onClick={() => setVisibleItems(prev => prev + 6)}
                    className="group flex flex-col items-center gap-4 text-white/40 hover:text-white transition-all"
                  >
                    <span className="text-[10px] uppercase font-black tracking-[4px] ml-1">View More Projects</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-all">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </button>
                </div>
              )}

              {/* Project Details Modal */}
              {selectedProject && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                  />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
                  >
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <MoreHorizontal className="w-6 h-6 rotate-45" />
                    </button>

                    <div className="flex-1 overflow-y-auto lg:h-[90vh]">
                      <div className="p-4 flex flex-col gap-4">
                        {selectedProject.images.map((img: string, i: number) => (
                          <img key={i} src={img} alt="" className="w-full rounded-2xl border border-white/5" />
                        ))}
                      </div>
                    </div>

                    <div className="w-full lg:w-80 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/10 bg-white/[0.02] overflow-y-auto">
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-[2px] block mb-4">{selectedProject.category}</span>
                      <h2 className="text-3xl font-bold mb-6 tracking-tight line-height-[1.1]">{selectedProject.title}</h2>
                      
                      <div className="flex flex-col gap-8">
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/30 mb-3">The Brief</h4>
                          <p className="text-sm text-white/70 leading-relaxed font-medium">
                            {selectedProject.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/30 mb-3">Tools Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tools.map((tool: string) => (
                              <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold tracking-widest uppercase">{tool}</span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[3px] text-white/30 mb-3">Platform</h4>
                          <span className="text-sm font-semibold text-white/80">{selectedProject.platform}</span>
                        </div>

                        <button 
                          onClick={() => toggleLike(selectedProject.id)}
                          className={`w-full py-4 rounded-2xl font-black uppercase tracking-[2px] text-xs flex items-center justify-center gap-3 transition-all duration-300 ${
                            likedProjects[selectedProject.id]
                            ? 'bg-red-500/20 text-red-500 border border-red-500/50'
                            : 'bg-white/5 text-white/40 border border-white/10 hover:border-purple-500 hover:text-white'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${likedProjects[selectedProject.id] ? 'fill-current' : ''}`} />
                          {likedProjects[selectedProject.id] ? 'Liked!' : 'Like this Project'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'Video Editing Works' && (
            <div className="w-full bg-[#050505] min-h-[calc(100vh-100px)] relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-12">
              {/* Background Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-teal-600/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="w-full max-w-7xl z-10">
                <div className="flex flex-col gap-10">
                  {/* Header Title */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
                    <div>
                      <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>VIDEO EDITING WORKS</h2>
                      <p className="text-white/40 font-medium tracking-wide uppercase text-sm">Cinematic Presentation • Social Media Strategy • High-Impact Edits</p>
                    </div>
                    <div className="flex items-center gap-4 text-white/20 font-black text-xs tracking-[4px]">
                      <span>{String(currentVideoSlide + 1).padStart(2, '0')}</span>
                      <div className="w-12 h-[1px] bg-white/10"></div>
                      <span>{String(VIDEO_CASE_STUDIES.length).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Main Presentation Board */}
                  <div className="relative aspect-[16/9] md:aspect-[21/9] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default group/board">
                    {/* Visual Side */}
                    <div className="w-full md:w-3/5 h-2/3 md:h-full relative overflow-hidden">
                      <motion.div
                        key={VIDEO_CASE_STUDIES[currentVideoSlide].image}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <img 
                          src={VIDEO_CASE_STUDIES[currentVideoSlide].image} 
                          className="w-full h-full object-cover grayscale-[0.3] group-hover/board:grayscale-0 transition-all duration-700 group-hover/board:scale-105"
                          alt=""
                        />
                      </motion.div>
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent hidden md:block"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:hidden"></div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/board:opacity-100 transition-opacity duration-300">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedVideo(VIDEO_CASE_STUDIES[currentVideoSlide].video)}
                          className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl"
                        >
                          <Play className="w-10 h-10 fill-current ml-1" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-br from-white/[0.03] to-transparent">
                      <motion.div
                        key={VIDEO_CASE_STUDIES[currentVideoSlide].id}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col h-full"
                      >
                        <div className="flex items-center gap-3 mb-6">
                           <span className="w-8 h-[1px] bg-purple-500"></span>
                           <span className="text-purple-400 text-xs font-black tracking-[4px] uppercase">
                            {VIDEO_CASE_STUDIES[currentVideoSlide].label}
                          </span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-white mb-6 uppercase leading-none" style={{ fontFamily: 'Impact, sans-serif' }}>
                          {VIDEO_CASE_STUDIES[currentVideoSlide].title}
                        </h3>
                        
                        <p className="text-white/60 text-lg leading-relaxed mb-10 font-medium max-w-md">
                          {VIDEO_CASE_STUDIES[currentVideoSlide].summary}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-12">
                          {VIDEO_CASE_STUDIES[currentVideoSlide].highlights.map((tag, i) => (
                            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-white/50 tracking-widest uppercase hover:bg-white/10 hover:text-white transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto flex flex-col sm:flex-row items-center gap-6">
                          <button 
                            onClick={() => setSelectedVideo(VIDEO_CASE_STUDIES[currentVideoSlide].video)}
                            className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-[2px] text-xs hover:bg-purple-600 hover:text-white transition-all shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-1"
                          >
                            <Play className="w-4 h-4 fill-current" />
                            WATCH REEL
                          </button>
                          
                          {VIDEO_CASE_STUDIES[currentVideoSlide].link !== "#" && (
                            <a 
                              href={VIDEO_CASE_STUDIES[currentVideoSlide].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/40 hover:text-teal-400 font-bold uppercase tracking-widest text-xs border-b border-white/10 hover:border-teal-400 transition-all py-1 pb-2"
                            >
                              External Link
                            </a>
                          )}
                        </div>
                      </motion.div>

                      {/* Side Controls */}
                      <div className="absolute bottom-10 right-10 flex flex-col gap-4">
                        <button 
                          onClick={() => setCurrentVideoSlide(prev => (prev - 1 + VIDEO_CASE_STUDIES.length) % VIDEO_CASE_STUDIES.length)}
                          className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/40 hover:text-white group"
                        >
                          <ArrowRight className="w-6 h-6 rotate-180 group-active:scale-90 transition-transform" />
                        </button>
                        <button 
                          onClick={() => setCurrentVideoSlide(prev => (prev + 1) % VIDEO_CASE_STUDIES.length)}
                          className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-all text-white group shadow-lg shadow-purple-600/20"
                        >
                          <ArrowRight className="w-6 h-6 group-active:scale-90 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Strip / Navigation Indicator */}
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {VIDEO_CASE_STUDIES.map((item, i) => (
                      <button 
                        key={i}
                        onClick={() => setCurrentVideoSlide(i)}
                        className={`group relative aspect-video rounded-2xl overflow-hidden border transition-all duration-500 ${currentVideoSlide === i ? 'border-purple-500 ring-2 ring-purple-500/20 scale-105 z-10' : 'border-white/10 opacity-40 hover:opacity-100'}`}
                      >
                        <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                        <div className={`absolute inset-0 bg-purple-600/20 transition-opacity duration-300 ${currentVideoSlide === i ? 'opacity-100' : 'opacity-0'}`}></div>
                        <div className="absolute bottom-2 left-3 text-[8px] font-black tracking-[2px] uppercase text-white/80 drop-shadow-md">
                          Slide {i + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'About' && activeTab !== 'Testimonies' && activeTab !== 'Contact' && activeTab !== 'Graphic Design Works' && activeTab !== 'Video Editing Works' && (
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

          {/* Video Modal Overlay */}
          {selectedVideo && (
            <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setSelectedVideo(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-6xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-2xl border border-white/5"
              >
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                >
                  <X className="w-6 h-6" />
                </button>
                <video 
                  src={selectedVideo} 
                  controls 
                  autoPlay 
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          )}

          {activeTab !== 'About' && activeTab !== 'Testimonies' && activeTab !== 'Contact' && activeTab !== 'Graphic Design Works' && activeTab !== 'Video Editing Works' && (
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
                    <span className="text-white bg-clip-text italic drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]" style={{ WebkitTextStroke: '1px #d946ef' }}>SERVICES</span>
                  </h2>
                </div>
                
                {/* Right side */}
                <div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right">
                  <p className="text-white/80 mb-6 leading-relaxed">
                    If you see something you like, imagine what we could build together.
                  </p>
                  <button 
                    onClick={() => setActiveTab('Contact')}
                    className="bg-[#d946ef] hover:bg-[#c026d3] text-white px-8 py-3 rounded-full font-bold tracking-wider uppercase transition-colors shadow-[0_0_15px_rgba(217,70,239,0.4)]"
                  >
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
                  <a href="https://www.facebook.com/profile.php?id=61574558286050" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://www.instagram.com/socialpulse.va/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>

                  <a href="https://www.linkedin.com/in/harvey-lingad-273b53251/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="text-center mt-12 text-xs text-white/40">
                All Rights Reserved © : Harvey Lingad Personal Portfolio 2026
              </div>
            </div>
          </footer>
        </main>
      </section>
    </div>
  );
}
