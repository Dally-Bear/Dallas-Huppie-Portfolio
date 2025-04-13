
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import {Card} from "@/components/Card";
import  grainImage  from '@/assets/images/grain.jpg';
import { Fragment } from "react";

const testimonials = [
  {
    name: "Abduallah Shaklaoon",
    position: "Student @ SAIT",
    text: "Dallas is a dedicated and hardworking programmer! He's eager to always be learning and discovering new things while programming!",
    
  },
  
  
  {
    name: "Mehdi Shokrani",
    position: "Instructor @ SAIT",
    text: "I can confidently say that Dallas is one of the most promising emerging developers I've worked with.",
  },
  {
    name: "Colton Courage",
    position: "Foreman @ Western Electrical",
    text: "Always reliable, quick to pick things up, and a solid team player and someone you can count on to get the job done right.",
    
  },


  
];

export const TestimonialsSection = () => {
  return (
  <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader 
        eyebrow="Testimonials"
        title="What Other&#39;s Say About Me"
        description="Here&#39;s what colleagues and collaborators say about working with me."
      />
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, i) =>(
            <Fragment key={i}>
              {testimonials.map((testimonial) => ( 
                <Card key ={testimonial.name} className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    
                    <div>
                      <div className="font-semibold"> {testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>
    
                  <p className=" mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              ))}
            </Fragment>
           ))}
          
        </div>
      </div>
    </div>

  </div>
  )
};
