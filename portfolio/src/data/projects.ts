import { StaticImageData } from 'next/image';

// Give me a task
import giveMeATaskMainImg from '../media/give_me_a_task.png';
import giveMeATaskImg1 from '../media/giveMeATask/1-daily-tasks.png';
import giveMeATaskImg2 from '../media/giveMeATask/2-daily-tasks.png';
import giveMeATaskImg3 from '../media/giveMeATask/3-daily-tasks.png';
import giveMeATaskImg4 from '../media/giveMeATask/4-daily-tasks.png';
import giveMeATaskImg5 from '../media/giveMeATask/5-timer.png';
import giveMeATaskImg6 from '../media/giveMeATask/6-my-tasks.png';
import giveMeATaskImg7 from '../media/giveMeATask/7-my-tasks.png';
import giveMeATaskImg8 from '../media/giveMeATask/8-my-tasks.png';
import giveMeATaskImg9 from '../media/giveMeATask/9-random-task.png';
import giveMeATaskImg10 from '../media/giveMeATask/10-high-priority.png';
import giveMeATaskImg11 from '../media/giveMeATask/11-my-tasks.png';
import giveMeATaskImg12 from '../media/giveMeATask/12-mobile.png';

// Worksheet generator
import worksheetGeneratorMainImg from '../media/worksheet_generator_1.jpg';
import worksheetGeneratorImg1 from '../media/worksheetGenerator/Example1.jpg';
import worksheetGeneratorImg2 from '../media/worksheetGenerator/Example2.jpg';
import worksheetGeneratorImg3 from '../media/worksheetGenerator/Example3.jpg';
import worksheetGeneratorImg4 from '../media/worksheetGenerator/AnswerKey.png';

import candyCrushImg from '../media/candy_crush.png';

export type ImageAndDescription = {
    image: StaticImageData;
    description: string;
}

export type Project = {
    title: string;
    mainImage: StaticImageData;
    images: ImageAndDescription[];
    technologies: string[];
    description: string[];
    features: string[];
    gitHubUrl: string;
    url?: string;
}

export const giveMeATask: Project = {
    title: "Give me a task",
    mainImage: giveMeATaskMainImg,
    images: [
        {
            image: giveMeATaskImg1,
            description: "Daily tasks tab (list hidden)"
        },
        {
            image: giveMeATaskImg2,
            description: "Daily tasks tab (list visible)"
        },
        {
            image: giveMeATaskImg3,
            description: "Editing a daily task"
        },
        {
            image: giveMeATaskImg4,
            description: "Adding a new daily task"
        },
        {
            image: giveMeATaskImg5,
            description: "Setting the timer"
        },
        {
            image: giveMeATaskImg6,
            description: "My tasks tab (list hidden)"
        },
        {
            image: giveMeATaskImg7,
            description: "My tasks tab (list visible)"
        },
        {
            image: giveMeATaskImg8,
            description: "My tasks tab (task description visible)"
        },
        {
            image: giveMeATaskImg9,
            description: "Getting a random task"
        },
        {
            image: giveMeATaskImg10,
            description: "Getting a high-priority task"
        },
        {
            image: giveMeATaskImg11,
            description: "Adding a new task"
        },
        {
            image: giveMeATaskImg12,
            description: "Responsive mobile design"
        }
    ],
    technologies: [
        "TypeScript & React (frontend)",
        "AWS Amplify (backend)",
        "Cognito (OAuth)",
        "DynamoDB (Database)",
        "GraphQL (querying)",
        "Tailwind (styling)"
    ],
    description: ["This task manager app is similar to Trello but gives users a random task from a task list hidden by default. I built this app to streamline my own task management, and it helps manage the overwhelming feeling of being confronted by long to-do lists all at once.", "To access the website, you can create your own account or log in with the credentials \"user\" and \"password\"."],
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
    gitHubUrl: "https://github.com/chrisjoonlee/give-me-a-task",
    url: "https://dev.d2de08g4x9pahn.amplifyapp.com/"
}

export const worksheetGenerator: Project = {
    title: "Worksheet generator",
    mainImage: worksheetGeneratorMainImg,
    images: [
        {
            image: worksheetGeneratorImg1,
            description: "Converting a list of words and definitions to a matching activity"
        },
        {
            image: worksheetGeneratorImg2,
            description: "Formatting images and text"
        },
        {
            image: worksheetGeneratorImg3,
            description: "Formatting questions and shuffling choices in multiple choice questions"
        },
        {
            image: worksheetGeneratorImg4,
            description: "Generating an answer key from scratch"
        }
    ],
    technologies: [
        "C#",
        "LINQ",
        "OOXML & OpenXML SDK",
        "Bash"
    ],
    description: ["This proof-of-concept program converts plain-text Microsoft Word documents into formatted worksheets. It automates the styling process, shuffles choices in multiple-choice questions, and generates answer keys. This tool is designed for teachers who want to simplify the creation of their worksheets."],
    features: [
        "Parsing text and OOXML elements based on keywords",
        "Creating and applying styles",
        "Shuffling choices in multiple-choice questions",
        "Creating answer keys",
        "Formatting images and mapping image IDs between documents",
        "Generating new Word documents using OpenXML SDK",
        "Bash scripts that zip and unzip Word docs"
    ],
    gitHubUrl: "https://github.com/chrisjoonlee/worksheet-generator"
}

export const candyCrush: Project = {
    title: "Candy Crush",
    mainImage: candyCrushImg,
    images: [],
    technologies: [
        "JavaScript",
        "Mocha & Chai"
    ],
    description: ["This is a version of Candy Crush that you can play in the command terminal. It follows an activity from  App Academy Open's coding bootcamp curriculum, although I added extra functionality to make it more similar to the real Candy Crush game. The activity is designed to help students master object-oriented programming in JavaScript and test-driven development with Mocha and Chai.", "Go to the GitHub repo to see instructions on how to play."],
    features: [
        "A basic game UI displayed in the command terminal",
        "Detection of vertical, horizontal, and combo matches",
        "A score counter",
        "Animated gameplay",
        "Object-oriented programming and test-driven development"
    ],
    gitHubUrl: "https://github.com/chrisjoonlee/candy-crush/tree/main"
}