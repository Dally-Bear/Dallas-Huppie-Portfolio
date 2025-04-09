import dallasImage from "@/assets/images/dallas.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import SnowflakeIcon from "@/assets/icons/snowflake.svg";
import { HeroOrbit } from "@/components/HeroOrbit";


export const HeroSection = () => {
  return (
    <div id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 "></div>
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          <HeroOrbit size={600} rotation={13} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={625} rotation={67} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={28} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="4s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={675} rotation={109} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="3s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={700} rotation={173} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={725} rotation={46} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={750} rotation={221} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="3s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={775} rotation={92} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="4s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={800} rotation={187} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="3s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={825} rotation={312} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={850} rotation={139} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={875} rotation={262} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="4s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={900} rotation={77} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={925} rotation={196} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={950} rotation={25} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="3s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={975} rotation={153} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1000} rotation={284} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="4s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1025} rotation={113} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1050} rotation={239} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1075} rotation={319} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="4s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1100} rotation={166} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1125} rotation={55} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1150} rotation={202} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="6s">
            <SnowflakeIcon className="size-7 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1175} rotation={123} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="4s">
            <SnowflakeIcon className="size-8 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>
          <HeroOrbit size={1200} rotation={273} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="5s">
            <SnowflakeIcon className="size-6 opacity-70" style={{ fill: "#cbd5e1" }} />
          </HeroOrbit>



        </div>

        <div className="container">
          <div className="flex flex-col items-center ">
            <Image 
              src={dallasImage} 
              className="h-[350px] w-[220px] rounded-xl mb-2 z-10" 
              alt="Picture of Dallas Huppie" 
              />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large "></div>
              </div>
              <div className="text-sm font-medium">Available for new projects </div>
              
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">Hello! I&#39;m Dallas, a full-stack developer with a passion for creating scalable, high-quality applications. From designing user-friendly frontends to developing robust backends and managing databases, I focus on delivering seamless and efficient digital experiences. Let&#39;s collaborate to bring your ideas to life!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 bg-gray-950 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4"/>
            </button>

            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl ">
              <span >👋</span>
              <span className="font-semibold">Let&#39;s Connect!</span>
            </button>
          </div>

        </div>
    </div>
  );
 
};
