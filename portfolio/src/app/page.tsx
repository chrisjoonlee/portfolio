import Image from "next/image";
import List from "./List";
import ProjectCard from './ProjectCard';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";


import {
  programmingLanguages,
  queryingLanguages,
  markupLanguages,
  cloudServices,
  tools,
  languages
} from '../data/skills';

import {
  giveMeATask,
  worksheetGenerator
} from '../data/projects';

import proPic from '../media/pro_pic.png';
import giveMeATaskImg from '../media/give_me_a_task.png';

export default function Home() {
  return (
    <main className="flex flex-col bg-white h-screen py-12 space-y-8 items-center">

      {/* Header */}
      <section className="mb-4 space-y-2 text-center">
        <h1 className="text-myPurple text-4xl font-semibold uppercase leading-30">
          Christopher Joon Lee
        </h1>
        <h2 className="text-myPink text-2xl uppercase font-semibold">
          Software Dev Portfolio
        </h2>
      </section>

      {/* Introduction */}
      <section className="flex space-y-8 items-center text-center max-w-4xl px-8
          flex-col sm:space-y-0 sm:flex-row sm:space-x-8 sm:text-left">
        <Image
          src={proPic}
          alt="Profile picture"
          width={200}
          className="rounded-full"
        />
        <p className="text-gray-900 text-xl leading-8">
          Hi! I’m Chris, a software developer with a background in JavaScript, React, Python, C#, and AWS. I code because I love to create, and I’m eager to bring my expertise to your business.
        </p>
      </section>

      {/* Skills */}
      <section className="flex flex-col space-y-4 mx-8">
        <h2 className="text-myBlue uppercase font-semibold text-2xl text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-10 border-4 border-myBlue rounded-2xl p-8
            sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          <List title="Programming Languages" items={programmingLanguages} />
          <List title="Querying Languages" items={queryingLanguages} />
          <List title="Markup Languages" items={markupLanguages} />
          <List title="Cloud Services" items={cloudServices} />
          <List title="Tools & Technologies" items={tools} />
          <List title="Languages" items={languages} bullets={false} />
        </div>

      </section>

      {/* Projects */}
      <section className="bg-red-200 px-8">
        <h2 className="text-myPink uppercase font-semibold text-2xl text-center my-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-12
            lg:grid-cols-2">
          <ProjectCard
            img={giveMeATaskImg}
            project={giveMeATask}
          />

          <ProjectCard
            img={giveMeATaskImg}
            project={worksheetGenerator}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 flex flex-col space-y-4 max-w-4xl py-6 w-full text-gray-900">
        <h2 className="text-2xl font-semibold uppercase">
          Experience
        </h2>

        <p className="text-gray-900 text-lg">
          Before transitioning to software development, I worked as a UX designer and project manager at a large startup, an editor and translator at a publishing company, a music producer at an independent record label, and an educator. My programming experience includes collaborating with peers, managing code repositories, and delivering fully functional applications through various personal projects.
        </p>
      </section>

      {/* Contact */}
      <section className="text-gray-900 px-8 max-w-4xl flex flex-col space-y-4 pb-12 w-full">
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
        <div className="flex space-x-4 pt-3">
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
      </section>
    </main>
  );
}
