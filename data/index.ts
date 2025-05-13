export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on Proactive Agents",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "RAG Chatbot for Multiple PDFs",
      des: "A RAG chatbot capable of interacting with and answering queries based on multiple PDF documents.",
      img: "/rag-chatbot.png",
      iconLists: ["/python-5.svg", "/langchain.svg", "/gemini.svg", "/streamlit.svg"],
      link: "https://github.com/abbasmithaiwala/rag-chatbot-for-multiple-pdfs",
    },
    {
      id: 2,
      title: "Meme Detection System",
      des: "The system detects memes, provides its reference and suggests other relevant memes",
      img: "/meme-detector.jpg",
      iconLists: ["/python-5.svg", "/langchain.svg", "/gemini.svg", "/streamlit.svg"],
      link: "meme-detector.streamlit.app/",
    },
    {
      id: 3,
      title: "Movie Recommender System",
      des: "The system employs content-based algorithms to provide tailored recommendations across various genres of cinema.",
      img: "/Movie-Recommender-System-3.png",
      iconLists: ["/python-5.svg", "/numpy.svg", "/pandas.svg", "/scikit-learn.svg", "/streamlit.svg"],
      link: "https://github.com/abbasmithaiwala/movie-recommender-system/",
    },
    {
      id: 4,
      title: "Handwritten Digit Recognition",
      des: "A machine learning project that uses Convolutional Neural Networks (CNNs) to accurately classify handwritten digits.",
      img: "/Handwritten-Digit-Recognition.png",
      iconLists: ["/python-5.svg", "/numpy.svg", "/pandas.svg", "/tensorflow.svg", "/keras.svg", "/pygame.svg"],
      link: "handwritten-digit-recognition-am.streamlit.app/",
    },
    {
      id: 5,
      title: "Air Canvas using Python",
      des: "An interactive computer vision application that allows users to draw in the air using hand gestures captured by a webcam.",
      img: "/air-canvas.png",
      iconLists: ["/python-5.svg", "/numpy.svg", "/opencv.svg"],
      link: "https://github.com/abbasmithaiwala/air-canvas/",
    },
    {
      id: 6,
      title: "Greeny - Responsive and Dynamic Web Application",
      des: "A user-friendly platform to promote environmental sustainability with the use of Django to ensure robustness.",
      img: "/greeny3.png",
      iconLists: ["/html-1.svg", "/css-3.svg", "/javascript-1.svg", "/python-5.svg", "/django.svg"],
      link: "https://github.com/abbasmithaiwala/greeny/",
    },
  ];
  
  export const testimonials = [
    {
      quote:"The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence.",
      name: "Charles Bukowski",
      title: ""
    },
    {
      quote:"I dream of a quiet man who explains nothing and defends nothing, but only knows where the rarest wildflowers are blooming, and who goes, and finds that he is smiling not by his own will.",
      name: "Wendell Berry",
      title: "",
    },
    {
      quote:"I would like to paint the way a bird sings.",
      name: "Claude Monet",
      title: "",
    },
    {
      quote:"Whenever you find yourself on the side of the majority, \nit is time to pause and reflect.",
      name: "Mark Twain",
      title: "",
    },
    {
      quote:"I never wish to be easily defined. I'd rather float over other people's minds as something strictly fluid and non-perceivable; more like a transparent, paradoxically iridescent creature rather than an actual person.",
      name: "Franz Kafka",
      title: "",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      desc: "Developed and maintained multiple websites using technologies like React, Next.js, FastAPI, PostgreSQL, etc.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 2,
      title: "AI Engineer",
      desc: "Led the development of an AI Chatbot to process user queries and provide accurate responses by understanding user context and intent. ",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "IOT Developer",
      desc: "Designed and developed a home automation system, integrating IoT devices for remote control and monitoring using mobile interface.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Frontend Developer Intern",
      desc: "Played a key role in developing multiple responsive and dynamic web applications.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp1.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      addr: "https://github.com/abbasmithaiwala/"
    },
    {
      id: 2,
      img: "/insta.svg",
      addr: "https://www.instagram.com/abbas_1604_"
    },
    {
      id: 3,
      img: "/link.svg",
      addr: "https://www.linkedin.com/in/abbas-mithaiwala/"
    },
  ];