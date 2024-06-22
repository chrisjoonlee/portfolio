import { StaticImageData } from 'next/image';
import giveMeATaskImg from '../media/give_me_a_task.png';
import worksheetGeneratorImg from '../media/worksheet_generator_1.jpg';

export type Project = {
    title: string;
    image: StaticImageData;
    technologies: string[];
    description: string;
    features: string[];
    gitHubUrl: string;
}

export const giveMeATask: Project = {
    title: "Give me a task",
    image: giveMeATaskImg,
    technologies: [
        "JavaScript & React (frontend)",
        "AWS Amplify (backend)",
        "Cognito (OAuth)",
        "DynamoDB (Database)",
        "GraphQL (querying)",
        "Tailwind (styling)"
    ],
    description: "This task manager app is similar to Trello but gives users a random task from a task list hidden by default. I built this app to streamline my own task management, and it helps manage the overwhelming feeling of being confronted by long to-do lists all at once.",
    features: [
        "Separate task lists for different users",
        "Task records with titles, descriptions, and due dates",
        "The ability to create, delete, and update task records",
        "A daily task list and general task list, each with unique features",
        "Widgets that present tasks one by one randomly, in order, or by due date",
        "A customizable timer",
        "A custom-built bullet list formatter",
        "OAuth flow via AWS Amplify",
        "Responsive design for mobile and desktop"
    ],
    gitHubUrl: "https://github.com/chrisjoonlee/give-me-a-task"
}

export const worksheetGenerator: Project = {
    title: "Worksheet generator",
    image: worksheetGeneratorImg,
    technologies: [
        "C#",
        "LINQ",
        "OOXML & OpenXML SDK",
        "Bash"
    ],
    description: "This proof-of-concept program converts plain-text Microsoft Word documents into formatted worksheets. It automates the styling process, shuffles choices in multiple-choice questions, and generates answer keys. This tool is designed for teachers who want to simplify the creation of their worksheets.",
    features: [
        "Parsing text and OOXML elements based on keywords",
        "Creating and applying styles",
        "Shuffling choices in multiple-choice questions",
        "Creating answer keys",
        "Formatting images and mapping image IDs between documents",
        "Generating new Word documents using OpenXML SDK"
    ],
    gitHubUrl: "https://github.com/chrisjoonlee/worksheet-generator"
}