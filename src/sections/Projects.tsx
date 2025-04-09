import WhatTheTruckPage from "@/assets/images/WhatTheTruck.png";
import GundamnPage from "@/assets/images/Gundamn.png";
import MedivoidPage from "@/assets/images/MediVoid.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "Chinook Transport Services",
    year: "2025",
    title: "What The Truck",
    results: [
      { title: "Replaced paper inspection logs with a mobile-first React app for truck drivers" },
      { title: "Enabled instant digital submissions and real-time supervisor access" },
      { title: "Improved UX by 40%, site speed by 50%, and boosted mobile traffic by 35%" },
    ],
    link: "https://github.com/KrisSenger/CapstoneWTT",
    image: WhatTheTruckPage,
  },
  {
    company: "SAIT",
    year: "2024",
    title: "MediVoid",
    results: [
      { title: "Designed a mobile app to manually track bladder retention, urine color, and movement patterns for MS patients" },
      { title: "Provided visual trends and health insights through daily logs and easy-to-use tracking tools" },
      { title: "Built using React Native with a focus on accessibility, simplicity, and patient-centered design" },
    ],
    link: "https://github.com/Dally-Bear/MediVoid",
    image: MedivoidPage,
  },
  {
    company: "SAIT",
    year: "2024",
    title: "Gundamn",
    results: [
      { title: "Delivered a streamlined user interface to easily browse and compare kits" },
      { title: "Built a web scraper app to aggregate and display Gundam model data for hobbyists" },
      { title: "Empowered collectors with filters, wishlists, and pricing insights " },
    ],
    link: "https://github.com/KrisSenger/Gundamn",
    image: GundamnPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transform innovative concepts into impactful, real-world projects that make a difference."/>

        
        
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (

            <Card key={project.title} 
            className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky top-16"
            style={{
              top: `calc(64px + ${index * 40}px)`,
            }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-slate-300 to-blue-500 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div >
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 "/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className=" bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Project Repo</span>
                      <ArrowUpRightIcon className=" size-4 "/>
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


 