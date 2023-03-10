import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsRight, FastForward } from 'react-feather';

const Resume = () => {
  const icon = <FastForward className="inline-flex justify-center items-center pb-1 text-slate-400" size={15} />

  return (
    <div id="resume" className="relative w-full h-screen">
      <motion.img
        className="w-full h-screen object-contain object-left-bottom lg:object-cover lg:object-left"
        alt="Sketch of a tiger"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        viewport={{ once: true }}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-stone-100/60">
        <div className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Resume
          </motion.h2>
          <motion.div
            className="mb-12 flex flex-col justify-center items-center w-full h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
            viewport={{ once: true }}
          >
            <a href="/resume.pdf">
              <button type="submit" className="group w-[160px]">
                Download Resume
                <span className="group-hover:text-slate-400 group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} className="ml-2" />
                </span>
              </button>
            </a>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-full sm:w-3/4 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.25 }}
            viewport={{ once: true }}
          >
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Languages</h3>
              {icon} JavaScript (ES6)<br />
              {icon} HTML5<br />
              {icon} CSS3<br />
              {icon} jQuery
            </div>
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Technologies</h3>
              {icon} ReactJS<br />
              {icon} NodeJS<br />
              {icon} GraphQL<br />
              {icon} REST APIs<br />
              {icon} Tailwind CSS<br />
              {icon} Bootstrap
            </div>
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Database</h3>
              {icon} MySQL<br />
              {icon} MongoDB
            </div>
            <div className="leading-loose">
              <h3 className="block font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">Tools</h3>
              {icon} Git + GitHub<br />
              {icon} Heroku<br />
              {icon} Chrome Dev Tools<br />
              {icon} Photoshop
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;