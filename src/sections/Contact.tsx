"use client";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
  <div id="contact" className='py-16 pt-12 lg:py-24 lg:pt-20 relative z-10'>
    <div className='container'>
      <div className='bg-gradient-to-r from-slate-300 to-blue-500 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden'> 
        <div className='absolute inset-0 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>

        <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10'>
          <div>
            <h2 className='font-serif text-2xl md:text-3xl'>Let&#39;s create something amazing together</h2>
            <p className='text-sm mt-2 md:text-base'>If you have an idea for a project or need help bringing a concept to life, I&#39;d be thrilled to collaborate and turn your vision into reality. Whether it&#39;s something simple or a more complex build, feel free to reach out—I&#39;d love to discuss how we can create something exceptional together.</p>
          </div>
          <div className="relative z-20">
            <a 
              href="mailto:dallasmaxim15@icloud.com"
              
              className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white cursor-pointer'
            >
              <span className='font-semibold'>Contact me</span>
              <ArrowUpRightIcon className="size-4"/> 
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};
