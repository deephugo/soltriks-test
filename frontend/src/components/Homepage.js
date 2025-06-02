import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Shield, 
  Truck, 
  Users, 
  Scan, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const Homepage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Soltriks</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1700936655679-83f4b37d7d74')`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent"
          >
            Smart Software.
            <br />
            <span className="text-blue-400">Serious Security.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering businesses, governments, and logistics with cutting-edge custom software solutions, 
            enterprise-grade security, and intelligent digital platforms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300"
            >
              Explore Solutions <ArrowRight className="h-5 w-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-400 hover:border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Demo
            </motion.button>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Our Solutions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Comprehensive software solutions designed to transform your business operations 
              with security, efficiency, and innovation at the core.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Truck,
                title: "E-Logistics",
                description: "Streamline your supply chain with intelligent logistics management and real-time tracking.",
                image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
              },
              {
                icon: Users,
                title: "Smart Attendance",
                description: "Advanced biometric and AI-powered attendance systems for accurate workforce management.",
                image: "https://images.pexels.com/photos/6694477/pexels-photo-6694477.jpeg"
              },
              {
                icon: Scan,
                title: "eScan",
                description: "Secure document scanning and digital archival solutions with OCR capabilities.",
                image: "https://images.unsplash.com/photo-1598777092715-ad79ed3907e0"
              },
              {
                icon: MessageSquare,
                title: "Fletushka",
                description: "Collaborative platform for seamless team communication and project management.",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600 hover:border-blue-500 transition-all duration-300"
              >
                <div 
                  className="w-full h-48 rounded-lg mb-6 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-4 text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose <span className="text-blue-400">Soltriks</span>?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                We deliver enterprise-grade solutions with uncompromising security, 
                scalability, and performance for businesses of all sizes.
              </p>
              
              <div className="space-y-6">
                {[
                  "Enterprise-grade security and compliance",
                  "Custom solutions tailored to your needs",
                  "24/7 dedicated support and maintenance",
                  "Scalable architecture for future growth"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div 
                className="w-full h-96 rounded-2xl bg-cover bg-center shadow-2xl"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1573497701175-00c200fd57f0')` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "150+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-slate-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by industry leaders across government, logistics, and enterprise sectors.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "Soltriks transformed our logistics operations with their E-Logistics platform. Efficiency increased by 40% in just 3 months.",
                author: "Sarah Johnson",
                role: "COO, LogiTech Solutions"
              },
              {
                quote: "The security and reliability of their solutions gave us complete confidence in our digital transformation journey.",
                author: "Michael Chen",
                role: "CTO, SecureGov"
              },
              {
                quote: "Outstanding support and custom development. They truly understand enterprise needs and deliver beyond expectations.",
                author: "Elena Rodriguez",
                role: "IT Director, GlobalCorp"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600"
              >
                <div className="flex text-blue-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-slate-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Soltriks for their mission-critical software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative py-20 bg-slate-900"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1599580546666-c26f15e00933')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">Soltriks</span>
              </div>
              <p className="text-slate-300 mb-6">
                Empowering businesses with smart software solutions and serious security.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="#" 
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">E-Logistics</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Smart Attendance</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">eScan</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Fletushka</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">contact@soltriks.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">123 Tech Plaza, Innovation District</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Soltriks. All rights reserved. Built with ❤️ for innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;