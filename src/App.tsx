/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Users, 
  Coffee, 
  Sparkles, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Mail,
  ChevronDown,
  Moon,
  Sun,
  Heart,
  CheckCircle2,
  Loader2
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

// --- Constants ---
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/FTXqjwNQqLk8af6xcCUrb2";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi guys, I was directed from the website. I would be glad to join the IOW Community, and I'm happy to be here. My name is _____");
// Note: Group links don't support pre-filled messages directly. 
// We'll use the group link as the primary destination.
const WHATSAPP_LINK = WHATSAPP_GROUP_LINK; 
const CONTACT_EMAIL = "inother.words1125@gmail.com";

// --- Components ---

const LoadingSkeleton = () => (
  <div className="w-full h-full bg-iow-sand/20 animate-pulse rounded-2xl flex items-center justify-center">
    <Loader2 className="w-6 h-6 text-iow-terracotta animate-spin" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        isScrolled ? "bg-iow-linen/40 backdrop-blur-xl border-b border-white/10 shadow-sm py-3" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="text-2xl font-serif font-semibold tracking-tighter cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          IOW
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          {[
            { name: "About", href: "#about" },
            { name: "Experience", href: "#experience" },
            { name: "Rhythms", href: "#rhythms" },
            { name: "Gallery", href: "#gallery" },
            { name: "Contact", href: "#contact" }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="hover:text-iow-terracotta transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-iow-deep-oak text-iow-linen px-6 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-iow-terracotta transition-colors duration-300"
        >
          Join Us
        </motion.a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop" 
          alt="Cozy reading space" 
          className="w-full h-full object-cover brightness-[0.7]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-iow-deep-oak/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tight leading-tight">
            Read. Reflect. <br />
            <span className="italic">Connect.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            A calm space where books become conversations and thoughts become connection.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="bg-iow-terracotta text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase shadow-xl hover:bg-iow-bronze transition-all"
            >
              Join the Community
            </motion.a>
            <motion.a
              href="#rhythms"
              whileHover={{ y: -2 }}
              className="bg-transparent border border-white/30 text-white backdrop-blur-sm px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              Explore Reading Rhythms
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-iow-linen">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-iow-terracotta text-sm font-semibold tracking-[0.3em] uppercase block mb-6">Our Essence</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A quiet, intentional gathering where people come together to read, reflect, and share in their own words.
            </h2>
            <p className="text-iow-earth text-lg leading-relaxed mb-8">
              In a world that demands constant noise, we choose silence. In a world of fast scrolls, we choose slow pages. In Other Words (IOW) is a sanctuary for the modern mind, blending the solitude of reading with the warmth of human presence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=2070&auto=format&fit=crop" 
              alt="People reading together" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyExists = () => {
  const reasons = [
    { title: "Space to slow down", desc: "Disconnect from the digital rush and find your center in the written word.", icon: <Moon className="w-6 h-6" /> },
    { title: "Thoughtful expression", desc: "Articulate your inner world without the pressure to be profound.", icon: <Mail className="w-6 h-6" /> },
    { title: "Genuine connection", desc: "Meet people who value depth and intentionality over small talk.", icon: <Heart className="w-6 h-6" /> },
    { title: "Life beyond screens", desc: "A tangible, sensory experience that grounds you in the present moment.", icon: <Sun className="w-6 h-6" /> },
  ];

  return (
    <section className="py-32 px-6 bg-iow-deep-oak text-iow-linen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            Why In Other Words Exists
          </motion.h2>
          <div className="w-24 h-px bg-iow-terracotta mx-auto" />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-iow-terracotta mb-6">{reason.icon}</div>
              <h3 className="text-xl font-serif mb-4">{reason.title}</h3>
              <p className="text-iow-sand/70 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ f, idx }: { f: { title: string, img: string }, idx: number, key?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
    >
      <motion.img 
        style={{ y }}
        src={f.img} 
        alt={f.title} 
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-iow-deep-oak/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute bottom-8 left-8">
        <h3 className="text-white text-xl font-serif">{f.title}</h3>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          className="h-px bg-iow-terracotta mt-2"
        />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [isLoading, setIsLoading] = useState(true);
  const features = [
    { title: "Reading Windows", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop" },
    { title: "Sharing Circles", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop" },
    { title: "Topic Discussions", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" },
    { title: "Safe Conversations", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="py-32 px-6 bg-iow-linen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-iow-terracotta text-sm font-semibold tracking-[0.3em] uppercase block mb-4">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif">Curated moments of human resonance.</h2>
          </div>
          <p className="text-iow-earth max-w-sm">Every gathering is designed to facilitate ease, respect, and discovery.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="h-[400px]">
                <LoadingSkeleton />
              </div>
            ))
          ) : (
            features.map((f, idx) => (
              <ExperienceCard key={idx} f={f} idx={idx} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const Rhythms = () => {
  const rhythms = [
    { 
      name: "Novara", 
      pace: "Steady Rhythm", 
      desc: "About 1 book in 2 months. For those who savor every sentence and let thoughts simmer.",
      icon: <BookOpen className="w-8 h-8" />
    },
    { 
      name: "Statera", 
      pace: "Balanced Rhythm", 
      desc: "About 1 book per month. A consistent flow of ideas and regular community touchpoints.",
      icon: <Users className="w-8 h-8" />,
      featured: true
    },
    { 
      name: "Meraki", 
      pace: "Immersive Rhythm", 
      desc: "About 2 books per month. For the voracious seekers who live between the lines.",
      icon: <Sparkles className="w-8 h-8" />
    },
  ];

  return (
    <section id="rhythms" className="py-32 px-6 bg-iow-linen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Reading Rhythms</h2>
          <p className="text-iow-earth max-w-xl mx-auto">Choose a pace that honors your lifestyle and your curiosity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rhythms.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-12 rounded-[2.5rem] transition-all duration-500 glass ${
                r.featured 
                ? "bg-white text-iow-deep-oak shadow-2xl scale-105 z-10 border-2 border-iow-terracotta/20" 
                : "bg-white/40 border border-iow-sand/30 text-iow-deep-oak hover:shadow-xl"
              }`}
            >
              <div className={`${r.featured ? "text-iow-terracotta" : "text-iow-terracotta"} mb-8`}>{r.icon}</div>
              <h3 className={`text-3xl font-serif mb-2 ${r.featured ? "text-iow-deep-oak" : ""}`}>{r.name}</h3>
              <p className={`text-sm font-semibold tracking-widest uppercase mb-6 ${r.featured ? "text-iow-terracotta" : "text-iow-earth"}`}>
                {r.pace}
              </p>
              <p className={`leading-relaxed mb-10 ${r.featured ? "text-black" : "text-iow-earth"}`}>
                {r.desc}
              </p>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                  r.featured 
                  ? "bg-iow-deep-oak text-iow-linen hover:bg-iow-terracotta" 
                  : "bg-iow-deep-oak text-iow-linen hover:bg-iow-terracotta"
                }`}
              >
                Select Rhythm
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const images = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2056&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2098&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526721940322-145d642da846?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476081718509-d5d0b661a376?q=80&w=2070&auto=format&fit=crop",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="gallery" className="py-32 px-6 bg-iow-linen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-[300px]">
                <LoadingSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={img} 
                  alt={`Gallery image ${idx}`} 
                  className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    setStatus("loading");
    
    try {
      const response = await fetch("https://formspree.io/f/xreorwly", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-iow-linen">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-iow-terracotta text-sm font-semibold tracking-[0.3em] uppercase block mb-6">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              We'd love to hear from you.
            </h2>
            <p className="text-iow-earth text-lg leading-relaxed mb-8">
              Have questions about our reading rhythms, want to host a gathering, or just want to say hi? Send us a message and we'll get back to you soon.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-iow-sand/30 flex items-center justify-center text-iow-terracotta">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-iow-clay">Email</p>
                  <p className="text-iow-deep-oak">{CONTACT_EMAIL}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-iow-sand/30 flex items-center justify-center text-iow-terracotta">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-iow-clay">Instagram</p>
                  <p className="text-iow-deep-oak">@inotherwords</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-iow-sand/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-iow-clay mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  placeholder="Your name"
                  className="w-full bg-iow-linen/50 border border-iow-sand/30 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-iow-terracotta transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-iow-clay mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  placeholder="your@email.com"
                  className="w-full bg-iow-linen/50 border border-iow-sand/30 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-iow-terracotta transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-iow-clay mb-2">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required 
                  placeholder="Tell us what's on your mind..."
                  className="w-full bg-iow-linen/50 border border-iow-sand/30 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-iow-terracotta transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-iow-deep-oak text-iow-linen py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-iow-terracotta transition-all flex items-center justify-center space-x-3 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Sent</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-iow-linen">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-iow-deep-oak rounded-[3rem] p-16 md:p-24 text-center text-iow-linen relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-iow-terracotta rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-iow-clay rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Ready to find your <br />
            <span className="italic">other words?</span>
          </h2>
          <p className="text-iow-sand/70 text-lg mb-12 max-w-xl mx-auto">
            Join our next gathering and experience the quiet luxury of intentional connection <span className="italic">In Other Words.</span>
          </p>
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-iow-linen text-iow-deep-oak px-12 py-5 rounded-full text-sm font-bold tracking-[0.2em] uppercase shadow-2xl hover:bg-white transition-all"
          >
            Join Next Meet-up
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to subscribe. Please ensure GMAIL_USER and GMAIL_APP_PASSWORD are configured correctly in the environment.");
      setStatus("idle");
    }
  };

  return (
    <footer className="bg-iow-linen py-20 px-6 border-t border-iow-sand/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="text-3xl font-serif mb-6">In Other Words</h2>
            <p className="text-iow-earth max-w-sm mb-8">
              A quiet luxury digital experience for the modern reader. Cultivating depth in an age of distraction.
            </p>
            <div className="flex space-x-6">
              <motion.a whileHover={{ y: -3 }} href="#" className="text-iow-terracotta hover:text-iow-deep-oak transition-colors"><Instagram /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-iow-terracotta hover:text-iow-deep-oak transition-colors"><Twitter /></motion.a>
              <motion.a whileHover={{ y: -3 }} href={`mailto:${CONTACT_EMAIL}`} className="text-iow-terracotta hover:text-iow-deep-oak transition-colors"><Mail /></motion.a>
            </div>
          </div>
          <div>
            <h4 id="footer-explore" className="text-sm font-bold tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-4 text-iow-clay text-sm">
              <li><a href="#about" className="hover:text-iow-deep-oak transition-colors">About IOW</a></li>
              <li><a href="#experience" className="hover:text-iow-deep-oak transition-colors">The Experience</a></li>
              <li><a href="#rhythms" className="hover:text-iow-deep-oak transition-colors">Reading Rhythms</a></li>
              <li><a href="#gallery" className="hover:text-iow-deep-oak transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-iow-deep-oak transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 id="footer-newsletter" className="text-sm font-bold tracking-widest uppercase mb-6">Newsletter</h4>
            <p className="text-iow-clay text-sm mb-6">Receive quiet reflections and meet-up invites.</p>
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center space-x-2 text-iow-deep-oak font-medium"
                >
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  <span>Welcome to the community.</span>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubscribe}
                  className="flex relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    required
                    className="bg-white border border-iow-sand/30 px-4 py-3 rounded-l-full w-full text-sm focus:outline-none focus:border-iow-terracotta disabled:opacity-50"
                    disabled={status === "loading"}
                  />
                  <button 
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-iow-deep-oak text-white px-6 py-3 rounded-r-full hover:bg-iow-terracotta transition-colors flex items-center justify-center min-w-[60px]"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            <p className="text-[10px] text-iow-clay mt-4 italic">
              *Submissions are sent to {CONTACT_EMAIL}
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-iow-sand/20 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs text-iow-clay tracking-widest uppercase">
          <p className="text-center md:text-left">© 2026 In Other Words. All rights reserved.</p>
          
          <div className="flex space-x-8 justify-center order-2 md:order-none">
            <a href="#" className="hover:text-iow-deep-oak transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-iow-deep-oak transition-colors">Terms of Service</a>
          </div>

          <p className="text-center md:text-right order-3 md:order-none">
            Site created by{" "}
            <a 
              href="https://www.linkedin.com/in/kuteyi-oluwaloye-vincent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-iow-terracotta hover:text-iow-deep-oak transition-colors font-bold"
            >
              Kuteyi Vincent
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyExists />
        <Experience />
        <Rhythms />
        <Gallery />
        <Contact />
        <CTA />
      </main>
      <Footer />
      
      {/* Custom Cursor or Subtle Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
      </div>
    </div>
  );
}
