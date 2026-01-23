import prepitThumb from "../assets/prepit/poster.jpg";
import prepit1 from "../assets/prepit/homepage.png";

import toothThumb from "../assets/toothtrack/homepage.jpg";
import tooth1 from "../assets/toothtrack/tooth1.png";

export const projectsData = [
  {
    id: "prepit",
    title: "PrepIt",
    shortDescription: "AI-Powered Meal Planning and Price Comparison.",
    mainImage: prepitThumb,
    images: [prepitThumb, prepit1],
    description: "PrepIt is a mobile app that allows users to explore recipes...",
    github: "https://github.com/joshwant/...",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB"],
    category: "Mobile App"
  },
  {
    id: "toothtrack",
    title: "ToothTrack",
    shortDescription: "Dental Care Mobile App to Simplify Patient Experience.",
    mainImage: toothThumb,
    images: [toothThumb, tooth1],
    description: "ToothTrack is a mobile app that offers convenient appointment scheduling, secure communication, easy access to dental records, order dental supplies, and more...",
    github: "https://github.com/joshwant/...",
    technologies: ["Flutter", "Dart", "Node.js"],
    category: "Mobile App"
  },
];