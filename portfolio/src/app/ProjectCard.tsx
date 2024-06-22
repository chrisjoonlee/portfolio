import { Project } from "@/data/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const openLink = (url?: string) => {
        if (url)
            window.open(url, "_blank", "noopener,noreferrer");
    }

    return (
        <div className="flex flex-col space-y-6 text-gray-900 items-center bg-white px-12 pt-8 pb-12 rounded-2xl max-w-2xl">
            {/* Title */}
            <h3 className="text-xl font-semibold uppercase">
                {project.title}
            </h3>

            {/* Image */}
            <Image
                src={project.image}
                alt={`Preview image for ${project.title}`}
                className="rounded-xl w-96 h-auto"
            />

            {/* Buttons */}
            <div className="flex space-x-4">
                {/* Website button */}
                {project.url &&
                    <button
                        onClick={() => openLink(project.url)}
                        className="bg-gray-800 text-gray-200 px-5 py-2 rounded-full hover:bg-black transition-colors flex items-center space-x-2"
                    >
                        <FaExternalLinkAlt size={15} />
                        <span>Website</span>
                    </button>
                }

                {/* GitHub button */}
                <button
                    onClick={() => openLink(project.gitHubUrl)}
                    className="bg-gray-800 text-gray-200 px-5 py-2 rounded-full hover:bg-black transition-colors flex items-center space-x-2"
                >
                    <FaGithub size={20} />
                    <span>GitHub Repo</span>
                </button>
            </div>


            {/* Description */}
            {project.description.map((paragraph, i) => (
                <p key={i} className="text-lg">
                    {paragraph}
                </p>
            ))}

            {/* Technologies */}
            <div className="flex flex-col space-y-1 w-full">
                <h4 className="font-semibold text-lg">
                    Technologies used
                </h4>
                <ul className="list-disc pl-5 flex flex-col space-y-1 text-lg">
                    {project.technologies.map((technology, i) => (
                        <li key={i}>{technology}</li>
                    ))}
                </ul>
            </div>

            {/* Features */}
            <div className="flex flex-col space-y-1 w-full">
                <h4 className="font-semibold text-lg">
                    Key features
                </h4>
                <ul className="list-disc pl-5 flex flex-col space-y-1 text-lg">
                    {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div >
    );
};