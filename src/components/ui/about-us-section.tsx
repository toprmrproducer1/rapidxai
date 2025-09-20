import React, { useState, useEffect, useRef } from "react";
import {
  Bot,
  Rocket,
  Target,
  Zap,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  TrendingUp,
  Phone,
  Code,
  Shield,
  Award,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

interface AboutUsSectionProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export default function AboutUsSection({ primaryCTA, secondaryCTA }: AboutUsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <Phone className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-purple-400" />,
      title: "AI Voice Agents",
      description:
        "24/7 intelligent voice agents that handle inbound calls, qualify leads, and book meetings with human-grade conversations.",
      position: "left",
    },
    {
      icon: <Target className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-purple-400" />,
      title: "Lead Qualification",
      description:
        "Advanced qualification flows that identify high-value prospects and route them to the right team members instantly.",
      position: "left",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-purple-400" />,
      title: "Automation",
      description:
        "Seamless automation that integrates with your existing CRM, calendar, and communication tools for maximum efficiency.",
      position: "left",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-purple-400" />,
      title: "MVP Development",
      description:
        "Rapid MVP and micro-SaaS development that validates your market before you scale, built with production-ready architecture.",
      position: "right",
    },
    {
      icon: <Code className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-purple-400" />,
      title: "Custom Solutions",
      description:
        "Tailored solutions built for your specific use case, tech stack, and business requirements with enterprise-grade security.",
      position: "right",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-purple-400" />,
      title: "Enterprise Ready",
      description:
        "SOC2-ready processes, compliance-first architecture, and 99.9% uptime targets with dedicated support and monitoring.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: 100, label: "Projects Delivered", suffix: "+" },
    { icon: <Users className="w-6 h-6" />, value: 50, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar className="w-6 h-6" />, value: 3, label: "Years Experience", suffix: "" },
    { icon: <TrendingUp className="w-6 h-6" />, value: 99, label: "Success Rate", suffix: "%" },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-purple-500/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-violet-500/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-16" variants={itemVariants}>
          <motion.span
            className="text-purple-400 font-medium mb-6 flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-center tracking-tight">
            About <span className="gradient-text">RapidXAI</span>
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p 
          className="text-center max-w-4xl mx-auto mb-20 text-xl md:text-2xl text-gray-300 leading-relaxed font-light" 
          variants={itemVariants}
          style={{ fontFamily: '"Instrument Serif", "Crimson Text", Georgia, serif' }}
        >
          We are a passionate team of AI engineers and product builders dedicated to creating intelligent automation 
          that transforms businesses. With meticulous attention to detail and commitment to excellence, we turn 
          ambitious visions into revenue-generating reality.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-sm" variants={itemVariants}>
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop&crop=center"
                  alt="AI Technology Visualization"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    onClick={primaryCTA}
                    className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium shadow-lg shadow-purple-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Work <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-purple-500/30 rounded-3xl -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-purple-600/20 backdrop-blur-sm border border-purple-500/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-violet-600/20 backdrop-blur-sm border border-violet-500/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 text-white p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-display font-bold mb-4 text-white">Ready to transform your business?</h3>
            <p className="text-gray-300 text-lg font-light">Let's build something that moves numbers.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={primaryCTA}
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-8 py-4 rounded-xl flex items-center gap-3 font-medium transition-all duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="w-5 h-5" />
              Book Discovery Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={secondaryCTA}
              className="bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 text-purple-400 hover:text-purple-300 px-8 py-4 rounded-xl flex items-center gap-3 font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-5 h-5" />
              $250 Deep-Dive
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: {
    hidden: { opacity: number; y?: number };
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } };
  };
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-purple-400 bg-purple-600/20 p-4 rounded-2xl transition-all duration-300 group-hover:bg-purple-600/30 relative border border-purple-500/30"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-2xl font-display font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-gray-300 leading-relaxed pl-20 font-light text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        style={{ fontFamily: '"Instrument Serif", "Crimson Text", Georgia, serif' }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-4 pl-20 flex items-center text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-2">
          Learn more <ArrowRight className="w-4 h-4" />
        </span>
      </motion.div>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-gray-900/70 hover:border-purple-500/50 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600/30 transition-colors duration-300 border border-purple-500/30"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-4xl font-display font-bold text-white flex items-center mb-2">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-400 font-medium">{label}</p>
      <motion.div className="w-12 h-1 bg-purple-500 mt-4 group-hover:w-20 transition-all duration-300 rounded-full" />
    </motion.div>
  );
}