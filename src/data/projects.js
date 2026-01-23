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
    description: "PrepIt is a mobile app that allows users to explore recipes, create a meal plan and shopping list, and get a price comparison from top UK supermarkets.",
    github: "https://github.com/joshwant/COMP3000-JOSHWANT",
    technologies: ["React Native", "Expo", "Node.js", "MongoDB", "Firebase"],
    category: "Mobile App",
    fullDescription: `
### The Challenge
Building a meal planner that syncs with real-time prices was **no easy task**. I had to ensure the data was accurate across 4 different supermarkets.

### Key Features
* **AI Recipe Scraping:** Uses NLP to extract ingredients.
* **Price Comparison:** Real-time API integration.
* *Note: This was built during a 48-hour hackathon.*

### Technical Implementation
I chose **MongoDB** for its schema flexibility, which allowed me to store varying ingredient formats from different supermarket APIs without rigid migrations.
    `
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
    category: "Mobile App",
    fullDescription: `
### The Challenge
The dental industry often relies on outdated paper systems. The goal was to create a centralized mobile hub for both patients and clinics to manage the entire lifecycle of an appointment.

### Key Features
* **Smart Scheduling:** Prevents double-booking and sends automated push notifications.
* **Supply Management:** Integrated store for ordering dental hygiene products.
* **Secure Records:** Encrypted storage for patient x-rays and history.

### Technical Implementation
Using **Flutter** allowed for a highly responsive UI that looks native on both iOS and Android, while the **Node.js** backend handled the heavy lifting for scheduling logic.
    `
  },
];