import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { resolve } from "path";

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

// Import the Project model
import Project from "../models/project";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Quick Projects Data (first 7 projects that appear in QuickProjects component)
const quickProjectsData = [
  {
    title:
      "Designator: AI-Powered Product Photography & Marketing Content Platform",
    description:
      "Transform product images into professional model photos, ads, and marketing content in minutes with AI. Features virtual fashion modeling, product isolation & enhancement, and studio-quality photography without expensive photoshoots. Perfect for e-commerce, fashion brands, and content creators.",
    link: "/images/designator.png",
    color: "#EC4889",
    projectLink: "https://designator.siddharthasingh.co.in",
    type: "Full Stack",
    tech: "Next.js 15, React, Tailwind, Shadcn UI, AI Image Generation API, Clerk Auth, Stripe, MongoDB",
    slug: "designator",
    img: "/images/designator.png",
    details:
      "Designator is a cutting-edge AI-powered SaaS platform that revolutionizes product photography and marketing content creation. Transform a single product shot into an entire content library—complete with model photography, lifestyle visuals, and marketing assets in just minutes. The platform offers multiple services including Virtual Fashion Modeling to bring designs to life on AI models, Product Isolation & Enhancement for e-commerce ready visuals, and Professional AI Photography without the studio. With features like smart background removal, realistic fabric flow visualization, precision shadow and reflection customization, and high-resolution outputs with professional formatting options, Designator helps brands create stunning visual content without expensive photoshoots. The platform generates multiple formats and dimensions automatically, offers curated themes for retail, lifestyle, and social media, and maintains consistent brand identity across all visuals. Perfect for fashion brands, e-commerce businesses, content creators, and marketers looking to maximize impact with efficient, professional-grade visual content creation.",
    isQuickProject: true,
    order: 1,
  },
  {
    title: "LOOV: AI-driven platform with customizable digital companions",
    description:
      "A highly scalable multi-user Next.js 14 application to create and interact with AI companions, incorporating OpenAI and  LangChain for dynamic, context-aware conversations. ",
    link: "/images/loov.png",
    color: "#1B0A02",
    projectLink: "https://loov.vercel.app",
    type: "Full Stack",
    tech: "Next.js 14, React, Tailwind, Shadcn UI, OpenAI API, LangChain",
    slug: "loov",
    img: "/images/loov.png",
    details:
      "LOOV is a highly scalable multi-user Next.js 14 application designed to create and interact with AI companions. Leveraging the power of OpenAI and LangChain, LOOV offers dynamic and context-aware conversations that enhance user engagement and interaction. With a user-friendly interface and intuitive features, LOOV provides a seamless experience for users to connect with AI companions and explore new possibilities in conversational AI. By integrating cutting-edge technologies, LOOV opens up new horizons for communication and creativity, empowering users to engage with AI in innovative and meaningful ways.",
    isQuickProject: true,
    order: 2,
  },
  {
    title: "VIRALTWEET: AI-Enhanced Twitter Content Management Platform",
    description:
      "A Next.js 15 SaaS product with automated tweet scheduling, and AI-powered content generation using OpenAI API and Twitter OAuth integration. ",
    link: "/images/viraltweet.png",
    color: "#1A80DA",
    projectLink: "https://viraltweet.co",
    type: "Full Stack",
    tech: "Next.js 15, React, Tailwind, OpenAI API, Twitter OAuth",
    slug: "viraltweet",
    img: "/images/viraltweet.png",
    details:
      "VIRALTWEET is a cutting-edge Next.js 15 SaaS product that offers automated tweet scheduling and AI-powered content generation. By integrating the OpenAI API and Twitter OAuth, VIRALTWEET enables users to create and share engaging content effortlessly. With its user-friendly interface and advanced features, VIRALTWEET streamlines the process of managing social media content and enhances user productivity. Whether you're a content creator, marketer, or social media enthusiast, VIRALTWEET provides the tools you need to elevate your online presence and engage with your audience effectively.",
    isQuickProject: true,
    order: 3,
  },
  {
    title: "Inators UI: Next.js Components Library for Developers",
    description:
      "Inators UI is a frontend components library for developers and designers to make creating nextjs client side as well as server side interfaces easier. Based on Tailwind and Shadcn/ui for just copy and use, with more than 150+ components to choose from.",
    link: "/images/inatorsui.png",
    color: "#0E1929",
    projectLink: "https://inatorsui.vercel.app",
    type: "Full Stack",
    tech: "Next.js 14, React, Tailwind, Shadcn UI",
    slug: "inators-ui",
    img: "/images/inatorsui.png",
    details:
      "Inators UI is a comprehensive UI components library designed to streamline the process of creating interfaces using Next.js. Built upon shadcn-ui and Tailwind CSS, it offers a rich collection of components for both client-side and server-side rendering, catering to the needs of developers and designers alike. By leveraging the power of Next.js, it facilitates the seamless integration of these components into projects, enhancing efficiency and productivity. With its user-friendly interface and versatile features, Inators UI empowers teams to build dynamic and visually appealing web applications with ease.",
    isQuickProject: true,
    order: 4,
  },
  {
    title: "Next Inator: Custom Data AI Chat Web-App",
    description:
      "Next Inator is a web app built in Next.js 14, it is an open-ai based custom data based AI chat web-app, powered by open-ai api and pinecone vector database. Users can add their own data, and chat with the data, to get personalized responses. It is a great tool for content creators, marketers, students, and anyone who wants to get personalized responses from ai chatbots.",
    link: "/images/nextinator.png",
    color: "#E11D48",
    projectLink: "https://nextinator.vercel.app",
    type: "Full Stack",
    tech: "Next.js 14, React, Tailwind, Shadcn UI, OpenAI API, Pinecone, MongoDB",
    slug: "nextinator",
    img: "/images/nextinator.png",
    details:
      "Next Inator is a web app built in Next.js 14, it is an open-ai based custom data based AI chat web-app, powered by open-ai api and pinecone vector database. Users can add their own data, and chat with the data, to get personalized responses. It is a great tool for content creators, marketers, students, and anyone who wants to get personalized responses from ai chatbots.",
    isQuickProject: true,
    order: 5,
  },
  {
    title: "Ethnic Inator: Indian Ethnic Wear E-Commerce Web-App",
    description:
      "A feature-rich indian ethnic wear e-commerce website using Next.js 14, featuring functionalities like Add to Cart, Filtering, and Content Management System and payment system using stripe. With next.js server-side components from Next.js 14 app router, ensuring an optimal user experience and strong SEO performance.",
    link: "/images/ethnicinator.png",
    color: "#FA9614",
    projectLink: "https://ethnicinator.vercel.app",
    type: "Full Stack",
    tech: "Next.js 13.1, React, Tailwind, DaisyUI, MongoDB",
    slug: "ethnicinator",
    img: "/images/ethnicinator.png",
    details:
      "Delve into the vibrant world of Indian Ethnic wear with our meticulously crafted E-commerce web-app. Powered by the sophistication of Next.js 13 Pages Directory, this platform offers a seamless browsing and shopping experience. Explore a diverse range of traditional and contemporary attire, meticulously curated to reflect the rich cultural tapestry of India. With intuitive navigation and immersive visuals, our web-app brings the essence of Indian fashion to your fingertips. Discover timeless elegance and modern sophistication as you browse through our collections, designed to cater to every taste and occasion.",
    isQuickProject: true,
    order: 6,
  },
  {
    title: "Optiflow Inator: Code Optimization Community Web-App",
    description:
      "Optiflowinator is a Multiuser Next.js 14 app-directory based application, incorporating the Open-AI API to create, optimize and share code posts within a community feed. With a secure Google authentication using Next Auth, providing multiple login options.",
    link: "/images/optiflowinator.png",
    color: "#15A34A",
    projectLink: "https://optiflowinator.vercel.app",
    type: "Full Stack",
    tech: "Next.js 14, React, Tailwind, Shadcn UI, OpenAI API, MongoDB",
    slug: "optiflowinator",
    img: "/images/optiflowinator.png",
    details:
      "A Multi-User Next.js 14 app-router based application named OPTIFLOW-INATOR. The application seamlessly incorporates the OpenAI API to enhance user interactions through the creation and sharing of code posts within a dynamic community feed, users can utilize ai based code explainer, optimizer and language converter for upto 5 programming languages.",
    isQuickProject: true,
    order: 7,
  },
];

// All Projects Data (remaining projects)
const allProjectsData = [
  {
    title: "Chatagraminator",
    type: "Full Stack",
    tech: "Next.js 13.4, React, Tailwind, Shadcn UI, OpenAI API, MongoDB",
    slug: "chatagraminator",
    img: "/images/chatagram.png",
    description:
      "An innovative post-sharing platform powered by OpenAI. Unleashing the possibilities of Next.js 13 App Router",
    details:
      "Chatagraminator is a groundbreaking post-sharing platform fueled by OpenAI's capabilities. It harnesses the potential of Next.js 13 App Router, offering users a seamless and immersive experience. With Chatagraminator, users can effortlessly share their thoughts, ideas, and moments in a dynamic and interactive environment. The platform leverages cutting-edge technologies to enhance user engagement and streamline content creation and sharing processes. By integrating OpenAI's features, Chatagraminator opens up new horizons for communication and creativity, empowering users to express themselves freely and connect with others on a deeper level.",
    link: "https://chatagraminator.vercel.app/",
    isQuickProject: false,
    order: 8,
  },
  {
    title: "SwarnaLehenga",
    type: "Full Stack",
    tech: "Next.js 13.1, React, Tailwind, DaisyUI, MongoDB",
    slug: "swarnalehenga",
    img: "/images/swarnalehenga.png",
    description:
      "An Indian Ethnic wear E-commerce web-app crafted with the brilliance of Next.js 13 Pages Directory.",
    details:
      "Delve into the vibrant world of Indian Ethnic wear with our meticulously crafted E-commerce web-app. Powered by the sophistication of Next.js 13 Pages Directory, this platform offers a seamless browsing and shopping experience. Explore a diverse range of traditional and contemporary attire, meticulously curated to reflect the rich cultural tapestry of India. With intuitive navigation and immersive visuals, our web-app brings the essence of Indian fashion to your fingertips. Discover timeless elegance and modern sophistication as you browse through our collections, designed to cater to every taste and occasion.",
    link: "https://swarnalehenga.vercel.app/",
    isQuickProject: false,
    order: 9,
  },
  {
    title: "Blissinator",
    type: "Full Stack",
    tech: "Next.js 14, React, Tailwind, Material Tailwind UI, OpenAI API",
    slug: "blissinator",
    img: "/images/blissinator.png",
    description:
      "Mental Health Counselling website powered by the magic of Next.js 13 App router",
    details:
      "Blissinator is a transformative Mental Health Counseling website that harnesses the magic of Next.js 13 App Router. Designed to provide a supportive and accessible space for individuals seeking emotional well-being, Blissinator offers a range of counseling services and resources. Through intuitive navigation and user-friendly interfaces, visitors can explore personalized support options and connect with qualified professionals. With a focus on empathy and inclusivity, Blissinator empowers users to navigate life's challenges with resilience and grace. Experience the transformative power of mental health support with Blissinator, where healing begins with a click.",
    link: "https://blissinator.vercel.app/",
    isQuickProject: false,
    order: 10,
  },
  {
    title: "Inator",
    slug: "inator",
    img: "/images/portfolio.png",
    description:
      "A SEO optimized personal projects portfolio website that pushes the boundaries of SEO and technology with Next.js 13 App Router.",
    details: "",
    link: "https://siddharthasingh.vercel.app/",
    isQuickProject: false,
    order: 11,
  },
  {
    title: "Plagiarisminator",
    type: "Front-End",
    tech: "Next.js 13.2, React, Tailwind",
    slug: "plagiarisminator",
    img: "/images/plagiarisminator.png",
    description:
      "Plagiarism checker web-app meticulously crafted with the power of React.",
    details:
      "Dive into the world of academic integrity with our meticulously crafted Plagiarism Checker web-app, powered by the robustness of React. Our platform offers a comprehensive solution for educators, students, and professionals to ensure originality and uphold ethical standards in writing. With advanced algorithms and user-friendly interfaces, our Plagiarism Checker empowers users to scan documents and detect potential instances of plagiarism with accuracy and efficiency. Seamlessly integrated with React's powerful features, our web-app delivers a seamless user experience, enhancing productivity and promoting academic honesty. Join us in fostering a culture of originality and integrity in scholarly endeavors.",
    link: "https://plagiarisminator.vercel.app/",
    isQuickProject: false,
    order: 12,
  },
  {
    title: "Ainator",
    type: "Full Stack",
    tech: "Next.js 14, React, Tailwind, Shadcn UI, OpenAI API, Clerk Auth, Prisma, MongoDB",
    slug: "ainator",
    img: "/images/ainator.png",
    description:
      "A Note-taking ai powerd web-app that leverages chatgpt api for note-taking. ",
    details:
      "Ainator is a revolutionary Note-taking AI powered web-app that harnesses the capabilities of the ChatGPT API for seamless note-taking experiences. Whether jotting down ideas, capturing insights, or organizing thoughts, Ainator offers a intuitive platform to streamline the note-taking process. By integrating advanced AI technologies, users can leverage natural language processing to transcribe thoughts effortlessly. Ainator's user-friendly interface enhances productivity, allowing users to focus on creativity and ideation without the hassle of manual note-taking. Experience the future of note-taking with Ainator and unlock new levels of efficiency and organization.",
    link: "https://ainator.vercel.app/",
    isQuickProject: false,
    order: 13,
  },
];

async function seedProjects() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing projects
    await Project.deleteMany({});
    console.log("Cleared existing projects");

    // Seed quick projects
    const quickProjects = await Project.insertMany(quickProjectsData);
    console.log(`Seeded ${quickProjects.length} quick projects`);

    // Seed all other projects
    const allProjects = await Project.insertMany(allProjectsData);
    console.log(`Seeded ${allProjects.length} additional projects`);

    console.log(
      `\nTotal projects seeded: ${quickProjects.length + allProjects.length}`
    );
    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run the seed function
seedProjects();
