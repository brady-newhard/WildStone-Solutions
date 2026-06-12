import React from "react";
import { motion } from "framer-motion";
import { Apple, Play, Gauge, Waypoints, ClipboardList, BarChart3, HardHat, FileCheck } from "lucide-react";

// Drop real store URLs here when the apps go live. Leave empty ("") to show "Coming Soon".
const STORE_LINKS = {
  compactIQ: {
    ios: "",
    android: "",
  },
  pipe: {
    ios: "",
    android: "",
  },
};

const apps = [
  {
    key: "compactIQ",
    name: "CompactIQ",
    tagline: "Structural & Compaction Testing Intelligence",
    description:
      "Capture, organize, and analyze structural and compaction test data right from the field. CompactIQ turns raw readings into clear, shareable results so your team can move faster with confidence.",
    image: "/images/CompactIQ-Icon.png",
    Icon: Gauge,
    accent: "from-blue-600 to-cyan-500",
    badge: "Now in Review",
    links: STORE_LINKS.compactIQ,
  },
  {
    key: "pipe",
    name: "PIPE",
    tagline: "Pipeline Information & Project Evaluation",
    description:
      "Real-time field reporting purpose-built for pipeline construction and maintenance—progress tracking, inspections, and compliance from the job site to the boardroom.",
    Icon: Waypoints,
    accent: "from-amber-500 to-orange-600",
    badge: "Coming Soon",
    links: STORE_LINKS.pipe,
  },
];

const services = [
  {
    title: "Field Reporting & Inspection",
    description:
      "Mobile-ready reporting for inspections, daily logs, and compliance across every trade and phase of construction.",
    Icon: ClipboardList,
  },
  {
    title: "Testing & Quality Control",
    description:
      "Structural, compaction, and materials testing tools that turn field measurements into reliable, auditable data.",
    Icon: HardHat,
  },
  {
    title: "Project Analytics",
    description:
      "Real-time analytics and insights to optimize workflows, resource allocation, and decision-making across your projects.",
    Icon: BarChart3,
  },
  {
    title: "Document & Compliance Management",
    description:
      "Streamlined document control and reporting for permits, inspections, and regulatory compliance—organized and accessible.",
    Icon: FileCheck,
  },
];

const StoreButton = ({ href, Icon, top, bottom }) => {
  const available = Boolean(href);
  const className =
    "inline-flex items-center gap-3 rounded-xl px-5 py-2.5 border transition duration-300 " +
    (available
      ? "bg-black border-zinc-700 text-white hover:bg-zinc-900 hover:border-zinc-500"
      : "bg-zinc-900/60 border-zinc-800 text-zinc-500 cursor-not-allowed");

  const content = (
    <>
      <Icon className="w-6 h-6 shrink-0" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.65rem] uppercase tracking-wide opacity-80">
          {available ? top : "Coming Soon"}
        </span>
        <span className="text-sm font-semibold">{bottom}</span>
      </span>
    </>
  );

  if (!available) {
    return (
      <span className={className} aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 pb-16">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <span className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-neutral-900 text-zinc-100 text-xs font-semibold shadow">
            An Expanding Suite of Construction Software
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-100 mb-4 leading-tight">
            Smarter Software for Every Phase of Construction
          </h1>
          <p className="text-zinc-100 mb-8 max-w-lg">
            WildStone Solutions builds a growing family of purpose-built apps that bring clarity and
            efficiency to the field—across testing, inspection, reporting, and compliance. From
            structural and compaction testing with <span className="font-semibold">CompactIQ</span> to
            pipeline project evaluation with <span className="font-semibold">PIPE</span>, our tools help
            crews and managers capture accurate data and make confident decisions, right from the job
            site to the boardroom.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <a
              href="#apps"
              className="rounded-2xl px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white shadow-md transition duration-300 font-semibold"
            >
              Explore Our Apps
            </a>
            <a
              href="#services"
              className="rounded-2xl px-6 py-3 bg-transparent border border-slate-700 text-zinc-100 hover:bg-slate-800 shadow-md transition duration-300 font-semibold relative group overflow-hidden"
            >
              <span>What We Do</span>
              <span className="absolute left-0 bottom-2 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </div>
        </div>
        {/* Right: Construction imagery with WildStone branding */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-start relative h-full">
          <div className="relative w-full flex flex-col items-center z-10">
            <div className="block md:hidden w-full flex justify-center" style={{ marginTop: 0 }}>
              <div className="w-72 relative">
                <img
                  src="/images/wildstone-header.png"
                  alt="WildStone Solutions"
                  className="w-full"
                  style={{ marginTop: "-3rem", marginBottom: "-2rem", zIndex: 20, position: "relative" }}
                />
              </div>
            </div>
            <div className="relative w-full min-h-[400px] h-[520px] md:h-[600px] overflow-hidden shadow-2xl -mt-8">
              <img
                src="/images/pipeline-bg.jpg"
                alt="Construction site"
                className="absolute bottom-0 left-0 w-full h-auto min-h-full object-cover object-[center_bottom_80%]"
              />
              <img
                src="/images/wildstone-symbol.png"
                alt="WildStone Solutions"
                className="absolute bottom-6 right-2 w-44 md:w-64 h-44 md:h-64 object-contain drop-shadow-2xl pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Apps Section */}
      <div id="apps" className="py-16 px-4 bg-zinc-900/95">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-100 mb-3">Our Apps</h2>
          <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-12">
            Purpose-built mobile tools for the field. Download our latest release and watch this space as
            we expand the WildStone suite.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map(({ key, name, tagline, description, image, Icon, accent, badge, links }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full p-6 md:p-8 rounded-2xl bg-zinc-800 border border-zinc-700 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    {image ? (
                      <img
                        src={image}
                        alt={`${name} app icon`}
                        className="w-14 h-14 rounded-2xl shadow-lg object-cover"
                      />
                    ) : (
                      <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${accent} shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-zinc-100">{name}</h3>
                        <span className="text-[0.65rem] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-200">
                          {badge}
                        </span>
                      </div>
                      <p className="text-blue-400 text-sm font-medium">{tagline}</p>
                    </div>
                  </div>
                  <p className="text-zinc-300 mb-6 flex-1">{description}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <StoreButton href={links.ios} Icon={Apple} top="Download on the" bottom="App Store" />
                    <StoreButton href={links.android} Icon={Play} top="Get it on" bottom="Google Play" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-100 mb-3">What We Do</h2>
          <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-12">
            We build software for the full breadth of construction—not just one trade. Wherever the work
            happens, WildStone helps your team capture it accurately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ title, description, Icon }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col h-full p-6 rounded-xl bg-zinc-800 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-zinc-700">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-700">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2 text-center">{title}</h3>
                  <div className="h-px bg-zinc-700 my-2" />
                  <p className="text-zinc-300 text-center">{description}</p>
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
