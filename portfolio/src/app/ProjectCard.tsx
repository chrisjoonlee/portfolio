// "use client";

import { Project } from "@/data/projects";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type ProjectCardProps = {
    img: StaticImageData;
    project: Project;
}

export default function ProjectCard({ img, project }: ProjectCardProps) {
    // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // useEffect(() => {
    //     const image = new window.Image();
    //     image.src = img.src;
    //     image.onload = () => {
    //         setDimensions({ width: img.width, height: img.height }
    //         );
    //     };
    // }, []);

    return (
        <div className="flex flex-col space-y-6 text-gray-900 items-center bg-white px-12 py-8 rounded-2xl mb-12">
            {/* Title */}
            <h3 className="text-2xl font-semibold">
                {project.title}
            </h3>

            {/* Image */}
            <div className="w-72">
                <Image
                    src={img}
                    alt="Give me a task image"
                    className="rounded-xl"
                />
            </div>
            {/* Description */}
            <p className="text-lg">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-col space-y-1 w-full">
                <h4 className="font-semibold text-lg">
                    Technologies used
                </h4>
                <ul className="list-disc pl-5 flex flex-col space-y-1 text-md">
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
                <ul className="list-disc pl-5 flex flex-col space-y-1 text-md">
                    {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div >
    );
};