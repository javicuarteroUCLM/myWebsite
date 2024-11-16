import {
    mobile,
    backend,
    creator,
    web,
    javascript, //no - angular
    html,
    reactjs, // ?//no - VUE//no Power BI
    nodejs,
    mongodb,
    git, //no - JAVA
    docker,
    angular,
    powerbi,
    mysql,
    python,
    java,
    flask,
    caserio,
    tbm,
    yourperformance,
    gestortareas,
    wisebet,
    ipokemon,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Application Developer",
      icon: web,
    },
    {
      title: "Automation Specialist",
      icon: mobile,
    },
    {
      title: "E-commerce Developer",
      icon: backend,
    },
    {
      title: "Data Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Power BI",
      icon: powerbi,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "docker",
      icon: docker,
    },

  ];
  
  const experiences = [
    {
      title: "Process Automation for Email Delivery",
      company_name: "BM Caserío Ciudad Real",
      icon: caserio,
      iconBg: "#383E56",
      date: "October 2024",
      points: [
        "Designed and implemented a custom email automation system for a handball club.",
        "Developed a solution to distribute personalized tickets to members, ensuring each member received their specific entry via email.",
        "Collaborating with cross-functional teams including such as marketing and customer service",
        "Optimized existing workflows to eliminate manual email handling, reducing time and errors",
        "Ensuring accuracy, reliability, and seamless integration with the club’s existing email automation tools.",
      ],
    },
    {
      title: "e-Commerce Developer",
      company_name: "Things by Eme",
      icon: tbm,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "Developing and optimizing a fully functional online store using Shopify and Liquid, tailored to client needs.",
        "Designing an intuitive user interface (UI) to enhance user experience and engagement",
        "Implementing SEO strategies to improve search engine visibility and website performance.",
        "Providing long-term support through website updates, server maintenance, and proactive collaboration with the client.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Your Performance",
      description:
        "Web application that allows users to input their academic marks and track their performance over the years.",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        }
      ],
      image: yourperformance,
      source_code_link: "https://github.com/javicuarteroUCLM/YourPerformance",
    },
    {
      name: "Wise Bet",
      description:
        "Web application that integrates two external APIs to recommend betting odds for sports betting and displays relevant statistics.",
      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "html",
          color: "violet-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "orange-text-gradient",
        }

      ],
      image: wisebet,
      source_code_link: "https://github.com/",
    },
    {
      name: "Task Manager",
      description:
        "Desktop application that allows users to manage their daily tasks, categorizing them by task type. It also features roles, where managers can assign tasks to employees.",
      tags: [
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "orange-text-gradient",
        }
      ],
      image: gestortareas,
      source_code_link: "https://github.com/javicuarteroUCLM/GestorDeTareas",
    },
    {
      name: "iPokemon",
      description:
        "Desktop application developed in C#. The application allows the visualization of Pokémon designed with Blend in WPF, as well as displaying their characteristics and abilities, and includes a small game that allows capturing and battling, thanks to the animated designs.",
      tags: [
        {
          name: "c",
          color: "violet-text-gradient",
        },
        {
          name: ".net",
          color: "pink-text-gradient",
        },
        {
          name: "git",
          color: "orange-text-gradient",
        },
        {
          name: "xaml",
          color: "yellow-text-gradient",
        }
      ],
      image: ipokemon,
      source_code_link: "https://github.com/gonzalodlr/ipokemon",
    },
  ];
  
  export { services, technologies, experiences, projects };