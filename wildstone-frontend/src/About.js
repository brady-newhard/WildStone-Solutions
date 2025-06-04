import React from "react";

const narrative = `At WildStone Solutions, we believe that technology should work as hard as the crews in the field. Founded by a civil engineer turned software developer with over two decades of experience in pipeline construction and environmental compliance, our mission is simple: to bring clarity, efficiency, and structure to the reporting process.\n\nWhat began as a frustration with fragmented spreadsheets, email chains, and outdated workflows evolved into a passion for building something better — a unified platform designed for inspectors, engineers, and project managers alike. With a career rooted in civil engineering and a deep understanding of how data drives decisions, our founder set out to design a solution that could streamline field reporting without sacrificing accuracy or compliance.\n\nBlending real-world field insight with technical fluency, WildStone Solutions bridges the gap between boots-on-the-ground operations and modern software. Backed by a foundation in civil engineering from Iowa State University and formal training in software engineering from General Assembly, our approach is grounded in precision, usability, and adaptability.\n\nWe're not just building another app — we're crafting a tool forged from experience. Whether you're tracking environmental compliance, welding progress, coating reports, or utility inspections, WildStone empowers your team to submit, review, and act on critical information—faster and more effectively.\n\nFrom custom workflows to mobile-ready forms and cloud storage integrations, WildStone Solutions is built for the complexities of construction. We're here to transform how teams capture the field—one report at a time.`;

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex flex-col items-center pt-24 px-4 pb-16">
    <div className="flex flex-col items-center w-full max-w-2xl">
      <img src="/images/profile.jpg" alt="Brady R. Newhard" className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-lg mb-4 object-cover" />
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1 text-center">Brady R. Newhard</h1>
      <div className="text-blue-400 font-medium mb-8 text-center">Owner</div>
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-6 text-center">About WildStone Solutions</h2>
      <div className="text-zinc-200 text-lg leading-relaxed whitespace-pre-line bg-zinc-800 rounded-xl p-6 shadow-md border border-zinc-700">
        {narrative}
      </div>
    </div>
  </div>
);

export default About; 