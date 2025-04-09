"use client";
import {SectionHeader} from "../components/SectionHeader";
import {Card} from "@/components/Card";
import bookImage from "@/assets/images/LOTR.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import PythonIcon from "@/assets/icons/python.svg";
import JavaIcon from "@/assets/icons/java.svg";
import csharpIcon from "@/assets/icons/csharp.svg"
import dockerIcon from "@/assets/icons/docker.svg"
import djangoIcon from "@/assets/icons/django.svg"
import oracleIcon from "@/assets/icons/oracle.svg"
import postgreIcon from "@/assets/icons/postgresql.svg"
import typescriptIcon from "@/assets/icons/typescript.svg"
import {useRef} from "react";
import mapImage from "@/assets/images/Dallas-map.png";
import dallasMemoji from "@/assets/images/dallas.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from "framer-motion";


const toolboxItems = [
  {
    title: "JavaScript",
    iconType:JavascriptIcon ,
  },
  {
    title: "TypeScript",
    iconType:typescriptIcon ,
  },


  {
    title: "HTML5",
    iconType:HTMLIcon,
  },
  {
    title: "CSS3",
    iconType:CSSIcon,
  },
  {
    title: "React",
    iconType:ReactIcon,
  },
  {
    title: "Python",
    iconType:PythonIcon,
  },
  {
    title: "Django",
    iconType:djangoIcon,
  },

  {
    title: "Java",
    iconType:JavaIcon,
  },
  {
    title: "C#",
    iconType:csharpIcon,
  },
  {
    title: "Docker",
    iconType:dockerIcon,
  },
  {
    title: "Github",
    iconType:GithubIcon,
  },
  {
    title: "Chrome",
    iconType:ChromeIcon,
  },
  {
    title: "Oracle",
    iconType:oracleIcon,
  },
  {
    title:"PostgreSQL",
    iconType:postgreIcon,
  },
]

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left:'80%',
    top: '5%',
  },
  {
    title: "Fitness",
    emoji: "💪",
    left:'50%',
    top: '5%',
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left:'10%',
    top: '25%',
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left:'35%',
    top: '40%',
  },
  {
    title: "Music",
    emoji: "🎶",
    left:'70%',
    top: '45%',
  },
  {
    title: "Reading",
    emoji: "📚",
    left:'5%',
    top: '70%',
  },
];
  
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
  <div id="about" className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="Glimpse Into My World" description="Learn a little more about me!"/>
      <div className="mt-20 flex flex-col gap-8 ">
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1"> 
            <CardHeader title="My Reads" description="One of my favorite books!"/>
            
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book Cover"/>
            </div>
          </Card>

          <Card className="h-[320px] md:col-span-3 lg:col-span-2"> 
          <CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences"className=""/>
          <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/> 
          <ToolboxItems items={toolboxItems} className="mt-6 " itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"/> 
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid md:grid-cols-5">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm" className="px-6 py-6"/>   
            <div className="relative flex-1" ref= {constraintRef}> 
              {hobbies.map((hobby) => (
                <motion.div key={hobby.title}className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-slate-300 to-blue-500 rounded-full py-1.5 absolute"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-md text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full  flex after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-300 to-blue-500 -z-20 animate-ping [animation-duration:2s]"> </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-300 to-blue-500 -z-10"> </div>
              <Image src={dallasMemoji} alt="Dallas Memoji"className="size-16" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
)};

