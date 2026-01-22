import posterImage from "../assets/prepit/poster.jpg";
import homepageImage from "../assets/prepit/homepage.png";

export const projectsData = [
  {
    id: "prepit",
    title: "PrepIt",
    shortDescription: "AI-Powered Meal Planning and Price Comparison.",
    mainImage: posterImage,
    images: [posterImage, homepageImage],
    description: "PrepIt is a mobile app that allows users to explore recipes...",
    github: "https://github.com/joshwant/...",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB"],
    category: "Mobile App"
  },
  {
    id: "toothtrack",
    title: "ToothTrack",
    shortDescription: "Dental Care Mobile App to Simplify Patient Experience.",
    mainImage: posterImage,
    images: [posterImage, homepageImage],
    description: "ToothTrack is a mobile app that offers convenient appointment scheduling, secure communication, easy access to dental records, order dental supplies, and more...",
    github: "https://github.com/joshwant/...",
    technologies: ["Flutter", "Dart", "Node.js"],
    category: "Mobile App"
  },
];