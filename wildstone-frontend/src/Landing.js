import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pipelinePhoto = "https://media.istockphoto.com/id/1253222864/photo/bulldozer-on-the-natural-gas-pipeline-construction-work-a-dug-trench-in-the-ground-for-the.jpg?s=612x612&w=0&k=20&c=QwQw1QwQw1QwQw1QwQw1QwQwQwQwQwQwQwQwQwQwQwQ=";

const services = [
  {
    title: 'Construction Reporting',
    description: 'Comprehensive reporting solutions tailored for construction projects, from progress tracking to cost analysis.',
    icon: '📊'
  },
  {
    title: 'Project Analytics',
    description: 'Real-time analytics and insights to optimize construction workflows and resource allocation.',
    icon: '📈'
  },
  {
    title: 'Pay Item Management',
    description: 'Advanced cost tracking and forecasting systems to keep your construction projects on budget.',
    icon: '💰'
  },
  {
    title: 'Document Management',
    description: 'Streamlined document control and reporting for construction permits, inspections, and compliance.',
    icon: '📋'
  }
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 pb-16">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <span className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-neutral-900 text-zinc-100 text-xs font-semibold shadow">Built for Construction & Pipeline Teams</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100 mb-4 leading-tight">
            Transform How You Report &amp; Manage Construction Projects
          </h1>
          <p className="text-zinc-100 mb-8 max-w-lg">
            WildStone Solutions empowers field crews and managers in the pipeline industry with real-time, accurate reporting using the PIPE (Pipeline Information & Project Evaluation) reporting system. Streamline your workflows, track progress, and make data-driven decisions—right from the job site to the boardroom. Our platform is purpose-built for the unique challenges of pipeline construction and maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="rounded-2xl px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white shadow-md transition duration-300 font-semibold">Get Started</a>
            <a href="#services" className="rounded-2xl px-6 py-3 bg-transparent border border-slate-700 text-zinc-100 hover:bg-slate-800 shadow-md transition duration-300 font-semibold relative group overflow-hidden">
              <span>See How It Works</span>
              <span className="absolute left-0 bottom-2 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </div>
        </div>
        {/* Right: PIPE Logo in bottom right of Pipeline Photo */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-start relative h-full">
          <div className="relative w-full flex flex-col items-center z-10">
            <div className="block md:hidden w-full flex justify-center" style={{ marginTop: 0 }}>
              <div className="w-72 relative">
                <img src="/images/wildstone-header.png" alt="WildStone Solutions" className="w-full" style={{ marginTop: '-3rem', marginBottom: '-2rem', zIndex: 20, position: 'relative' }} />
              </div>
            </div>
            <div className="relative w-full min-h-[400px] h-[520px] md:h-[600px] overflow-hidden shadow-2xl -mt-8">
              <img src="/images/pipeline-bg.jpg" alt="Pipeline Construction" className="absolute bottom-0 left-0 w-full h-auto min-h-full object-cover object-[center_bottom_80%]" />
              <img src="/images/PIPE-Logo.png" alt="PIPE Logo" className="absolute bottom-6 right-2 w-56 md:w-80 h-56 md:h-80 object-contain drop-shadow-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div id="services" className="py-16 px-4 bg-zinc-900/95">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-100 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col p-6 rounded-xl bg-zinc-800 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-zinc-700">
                  <div className="text-4xl mb-6 flex items-center justify-center">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2 text-center">{service.title}</h3>
                  <div className="h-px bg-zinc-700 my-2" />
                  <p className="text-zinc-300 text-center">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing; 