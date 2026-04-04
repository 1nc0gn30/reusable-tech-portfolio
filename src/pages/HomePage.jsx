import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Linkedin, Send, Sparkles } from 'lucide-react';
import Project3DCard from '@/components/Project3DCard.jsx';
import Three3DScene from '@/components/Three3DScene.jsx';
import AnimatedText3D from '@/components/AnimatedText3D.jsx';
import { portfolioConfig } from '@/config/portfolioConfig.js';

const HomePage = () => {
  const { brand, links, projects } = portfolioConfig;

  return (
    <>
      <Helmet>
        <title>{brand.title}</title>
        <meta name="description" content={brand.description} />
      </Helmet>

      <Three3DScene />

      <div className="relative z-10">
        <section id="home" className="relative min-h-screen flex items-center pt-20 pb-14 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(var(--primary),0.22),transparent_48%),radial-gradient(ellipse_at_bottom_right,hsla(var(--accent),0.16),transparent_52%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <motion.div
                className="lg:col-span-8 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-[0.18em] font-semibold border border-border/60 bg-card/55">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  AI Security Portfolio
                </span>

                <div className="mt-5 mb-7 flex justify-center lg:justify-start">
                  <AnimatedText3D text={brand.heroHeadline} />
                </div>

                <motion.p
                  className="text-xl md:text-2xl text-primary/90 mb-5 font-semibold tracking-wide uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {brand.role}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {brand.heroIntro}
                </motion.p>
              </motion.div>

              <motion.aside
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <div className="rounded-3xl border border-border/60 bg-card/45 backdrop-blur-xl p-6 md:p-7 shadow-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    Quick Actions
                  </p>
                  <div className="space-y-3">
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <span className="inline-flex items-center gap-2 font-medium">
                        <Github className="w-4 h-4" />
                        GitHub
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </a>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <span className="inline-flex items-center gap-2 font-medium">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </a>
                    <a
                      href={links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border/60 px-4 py-3 bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <span className="inline-flex items-center gap-2 font-medium">
                        <Globe className="w-4 h-4" />
                        Website
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </a>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section id="projects" className="relative py-28 border-y border-border/20 bg-background/45 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,hsla(var(--primary),0.16),transparent_28%),radial-gradient(circle_at_88%_100%,hsla(var(--accent),0.12),transparent_30%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 text-xs uppercase tracking-[0.18em] font-semibold text-primary">
                Projects
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {brand.sectionIntro}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Project3DCard
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  url={project.url}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-card/30 backdrop-blur-md border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:col-span-2">
                <span className="inline-block mb-4 text-xs uppercase tracking-[0.18em] font-semibold text-primary">
                  About
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 tracking-tight">
                  About This Template
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Built to be edited quickly while still looking premium on desktop and mobile.
                </p>
              </div>
              <div className="lg:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
                {brand.about.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className="border-l-2 border-primary/35 pl-4"
                  >
                    <span className="text-primary/80 mr-2 font-semibold">{`0${index + 1}`}</span>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="relative py-28 bg-background/60 backdrop-blur-sm border-t border-border/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsla(var(--primary),0.15),transparent_38%)] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-center lg:text-left">
                  <span className="inline-block mb-4 text-xs uppercase tracking-[0.18em] font-semibold text-primary">
                    Contact
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                    Let's Connect
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                    Send a message directly from this site. Form submissions are handled by Netlify Forms.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 px-5 py-4 bg-card/55 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="inline-flex items-center gap-3 font-semibold">
                        <Github className="w-5 h-5" />
                        GitHub
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </a>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 px-5 py-4 bg-card/55 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="inline-flex items-center gap-3 font-semibold">
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </a>
                    <a
                      href={links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 px-5 py-4 bg-card/55 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="inline-flex items-center gap-3 font-semibold">
                        <Globe className="w-5 h-5" />
                        Website
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    </a>
                  </div>
                </div>

                <form
                  name="contact"
                  method="POST"
                  action="/?form=success#contact"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="rounded-3xl border border-border/60 bg-card/55 backdrop-blur-xl p-6 md:p-8 text-left shadow-2xl"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
