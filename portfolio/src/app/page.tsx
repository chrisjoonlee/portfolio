import Image from "next/image";
import proPic from '../media/pro_pic.png';
import List from "./List";

export default function Home() {

  const programmingLanguages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
    "Bash"
  ];

  const queryingLanguages = [
    "SQL",
    "LINQ",
    "GraphQL"
  ];

  const markupLanguages = [
    "HTML & CSS",
    "XML & OOXML"
  ];

  const cloudServices = [
    "AWS Amplify",
    "AWS Cognito",
    "AWS DynamoDB"
  ];

  const tools = [
    "Git & GitHub",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    ".NET",
    "RESTful APIs",
    "Tailwind",
    "Mocha & Chai"
  ];

  const languages = [
    "🇺🇸 English (native)",
    "🇲🇽 Spanish (fluent)",
    "🇰🇷 Korean (conversational)",
    "🇧🇷 Portuguese (conversational)"
  ];

  return (
    <main className="bg-white h-screen px-8 py-12 space-y-8">

      {/* Header */}
      <section className="mb-12 space-y-2 text-center">
        <h1 className="text-myPurple text-4xl font-consolas font-bold uppercase leading-30">
          Christopher Joon Lee
        </h1>
        <h2 className="text-myPink text-2xl uppercase font-semibold">
          Software Dev Portfolio
        </h2>
      </section>

      {/* Introduction */}
      <section className="flex space-y-8 items-center text-center
          flex-col sm:space-y-0 sm:flex-row sm:space-x-8 sm:text-left">
        <Image
          src={proPic}
          alt="Profile picture"
          width={200}
          className="rounded-full"
        />
        <p className="text-gray-900 font-semibold text-xl leading-8">
          Hi! I’m Chris, a software developer with a background in JavaScript, React, Python, C#, and AWS. I code because I love to create, and I’m eager to bring my expertise to your business.
        </p>
      </section>

      {/* Skills */}
      <section className="flex flex-col space-y-4">
        <h2 className="text-myBlue uppercase font-consolas font-bold text-2xl text-center">
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

      <section>
        This is a test
      </section>
    </main>
  );
}
