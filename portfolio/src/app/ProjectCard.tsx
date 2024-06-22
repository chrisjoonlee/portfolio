import { useState } from 'react';
import { Project } from "@/data/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import { IoMdArrowDropright as RightArrow } from "react-icons/io";
import { IoMdArrowDropleft as LeftArrow } from "react-icons/io";
import { IoClose as CloseIcon } from "react-icons/io5";

type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLink = (url?: string) => {
        if (url)
            window.open(url, "_blank", "noopener,noreferrer");
    }

    const toggleImageModal = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const nextImage = () => {
        if (currentImageIndex < project.images.length - 1)
            setCurrentImageIndex(currentImageIndex + 1);
    }

    const prevImage = () => {
        if (currentImageIndex > 0)
            setCurrentImageIndex(currentImageIndex - 1);
    }

    return (
        <div
            className="flex flex-col text-gray-900 items-center bg-white px-12 pt-8 pb-12 rounded-2xl max-w-3xl">
            {/* Title */}
            <h3 className="text-xl font-semibold uppercase mb-6">
                {project.title}
            </h3>

            {/* Image */}
            <div
                onClick={toggleImageModal}
                className="relative group bg-black rounded-xl hover:cursor-pointer mb-6"
            >
                <Image
                    src={project.mainImage}
                    alt={`Preview image for ${project.title}`}
                    className="rounded-xl w-96 h-auto group-hover:opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <FaExpand className="text-white text-4xl mb-2" />
                    <p className="text-white text-lg">See more</p>
                </div>
            </div>

            {/* Expanded image */}
            {isImageExpanded && (
                <div
                    // onClick={toggleImageModal}
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative flex space-x-4"
                    >
                        {/* Left arrow */}
                        {currentImageIndex > 0 &&
                            <button
                                onClick={prevImage}
                                className="text-gray-200 opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <LeftArrow size={50} />
                            </button>
                        }

                        {/* Image */}
                        <div>
                            {/* Close button */}
                            <button
                                onClick={toggleImageModal}
                                className="bg-gray-700 text-gray-300 flex items-center space-x-2 px-5 py-2 rounded-full mx-auto mb-4 hover:bg-gray-800 transition-colors"
                            >
                                <CloseIcon size={20} />
                                <span>Close</span>
                            </button>

                            <Image
                                src={project.images[currentImageIndex].image}
                                alt={`Preview image for ${project.title}`}
                                className="rounded-xl h-auto w-auto max-h-[80vh]"
                            />

                            {/* Close button */}
                            {/* <button
                                onClick={toggleImageModal}
                                className="absolute -top-5 right-12 text-gray-200 text-2xl bg-gray-600 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                &times;
                            </button> */}

                            {/* Image description */}
                            <p className="text-gray-200 text-center mt-3">
                                {project.images[currentImageIndex].description}
                            </p>
                        </div>

                        {/* Right arrow */}
                        {currentImageIndex < project.images.length - 1 &&
                            <button
                                onClick={nextImage}
                                className="text-gray-200 opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <RightArrow size={50} />
                            </button>
                        }
                    </div>
                </div>
            )}

            {/* Buttons */}
            <div className="flex space-x-4 mb-6">
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
            <div className="flex flex-col space-y-4 mb-6">
                {project.description.map((paragraph, i) => (
                    <p key={i} className="text-lg">
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Technologies */}
            <div className="flex flex-col space-y-1 w-full mb-6">
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