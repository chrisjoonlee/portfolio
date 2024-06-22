"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import SkillCard from "./SkillCard";
import ProjectCard from './ProjectCard';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";


import {
  programmingLanguages,
  frontEnd,
  backEnd,
  cloudServices,
  queryingLanguages,
  markupLanguages,
  tools,
  languages
} from '../data/skills';

import {
  giveMeATask,
  worksheetGenerator
} from '../data/projects';

import proPic from '../media/pro_pic2.jpg';
import giveMeATaskImg from '../media/give_me_a_task.png';
import worksheetGeneratorImg from '../media/worksheet_generator_1.jpg';

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    if (projectsRef.current)
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col h-screen items-center">

      <section className="bg-gray-700 w-full py-12">

        {/* Title */}
        <section className="mb-6 space-y-2 text-center px-8">
          <h1 className="text-gray-200 text-4xl font-semibold uppercase leading-30">
            Christopher Joon Lee
          </h1>
          <h2 className="text-gray-200 text-2xl uppercase font-semibold">
            Software Dev Portfolio
          </h2>
        </section>

        {/* Introduction */}
        <section className="flex space-y-8 items-center max-w-4xl px-8 mx-auto
          flex-col sm:space-y-0 sm:flex-row sm:space-x-8 sm:text-left">
          <Image
            src={proPic}
            alt="Profile picture"
            width={200}
            className="rounded-full"
          />

          <div className="text-center sm:text-start">
            <p className="text-gray-200 text-xl leading-8 text-center sm:text-left">
              Hi! I’m Chris, a full-stack software developer from the U.S. with a background in JavaScript, React, Python, C#, and AWS. I speak English, Spanish, Korean, and Portuguese.
            </p>
            <button
              onClick={handleScrollToProjects}
              className="bg-gray-900 px-4 py-2 rounded-full text-gray-200 mt-4 hover:bg-black transition-colors"
            >
              See my projects
            </button>
          </div>
        </section>

      </section>

      {/* Skills */}
      <section className="flex flex-col px-8 py-16 bg-gray-300 w-full">
        <h2 className="text-gray-900 uppercase font-semibold text-3xl text-center mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-10 rounded-2xl
            md:grid-cols-2 xl:grid-cols-3 mx-auto">
          <SkillCard title="Programming Languages" items={programmingLanguages} />
          <SkillCard title="Front-End" items={frontEnd} />
          <SkillCard title="Back-End" items={backEnd} />
          <SkillCard title="Cloud Services" items={cloudServices} />
          <SkillCard title="Querying Languages" items={queryingLanguages} />
          <SkillCard title="Markup Languages" items={markupLanguages} />
          <SkillCard title="Tools & Technologies" items={tools} />
          <SkillCard title="Languages" items={languages} />
        </div>

      </section>

      {/* Projects */}
      <section
        ref={projectsRef}
        className="bg-gray-600 px-8 py-16 w-full"
      >
        <h2 className="text-gray-200 uppercase font-semibold text-3xl text-center mb-8">
          Projects
        </h2>

        <div className="flex flex-col justify-center items-center space-y-12
            2xl:flex-row 2xl:items-start 2xl:space-x-12 2xl:space-y-0">
          <ProjectCard
            // img={giveMeATaskImg}
            project={giveMeATask}
          />

          <ProjectCard
            // img={worksheetGeneratorImg}
            project={worksheetGenerator}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 flex flex-col space-y-4 py-16 w-full text-gray-900 bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-2xl font-semibold uppercase">
            Experience
          </h2>

          <p className="text-gray-900 text-lg">
            Before transitioning to software development, I worked as a UX designer and project manager at a large startup, an editor and translator at a publishing company, a music producer at an independent record label, and an educator. My programming experience includes collaborating with peers, managing code repositories, and delivering fully functional applications through various personal projects.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="text-gray-900 px-8 flex flex-col space-y-4 pb-16 w-full bg-white">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="font-semibold text-2xl uppercase">
            Contact
          </h2>

          <p className="text-lg">
            Feel free to reach out if you'd like to discuss my work or potential opportunities.
          </p>

          <p>
            <span className="text-lg font-semibold">Email: </span>christopherjoon@gmail.com
          </p>

          {/* Socials */}
          <div className="flex space-x-6 pt-3">
            <a
              href="https://www.linkedin.com/in/christopher-lee-77473152/"
              target="_blank"
            >
              <ImLinkedin className="text-[#0a66c2]" size={36} />
            </a>
            <a
              href="https://github.com/chrisjoonlee"
              target="_blank"
            >
              <FaGithub className="text-[#24292e]" size={36} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
