const projects = [
  {
    title: "M2 Marketplace Agency",
    carousel: [
      require("../images/m2-1.png"),
      require("../images/m2-2.png"),
      require("../images/m2-3.png"),
      require("../images/m2-4.png"),
      require("../images/m2-5.png"),
      require("../images/m2-6.png"),
    ],
    text: "Developed a responsive landing page using React, TypeScript and Tailwind, translating detailed design prototypes into react components. Implemented complex UI animations with Framer Motion,dark and light theme and built a validated contact form using EmailJS and Zod, improving performance and component organization.",
    secondText:
      "In this project, I got better at turning detailed design prototypes into clean, responsive code and learned how to add more advanced animations to make the UI feel smoother. I also improved my React component structure and overall workflow with TypeScript and Tailwind.",
    techs: ["REACT", "TYPESCRIPT", "TAILWIND"],
    github: "https://github.com/Mateus1rosengarten/GrupoM2-MARKETPLACES",
    website: "https://m2grupo.com.br/",

    ProjectKind: "Costumer",
    creationOrder: 8,
    challangeOrder: 7,
    apprenticeshipOrder: 7,
  },
  {
    title: "MKT Embalagem website",
    carousel: [
      require("../images/mkt-lading-page-1.png"),
      require("../images/mkt-lading-page-2.png"),
      require("../images/mkt-lading-page-3.png"),
      require("../images/mkt-lading-page-4.png"),
    ],
    text: "Built a production-ready website with Next.js focusing on SEO and performance optimization. Integrated dynamic map features and automated email workflows while improving server-side rendering and project structure. Waiting for real pictures from the company.",
    techs: ["NextJS", "TYPESCRIPT", "TAILWIND"],
    github: "https://github.com/Mateus1rosengarten/MktEmbalagem",

    ProjectKind: "Costumer",
    creationOrder: 5,
    challangeOrder: 6,
    apprenticeshipOrder: 6,
  },
  {
    title: "Sustentools E-commerce",
    carousel: [
      require("../images/e-commerce-1.png"),
      require("../images/e-commerce-2.png"),
      require("../images/e-commerce-3.png"),
    ],
    text: "Implemented full frontend from Figma designs and developed authentication and advanced product filtering. Worked on backend integration with Express and MongoDB, gaining practical experience in full-stack architecture and team collaboration. Although the project is currently on hold due to changes in Brazil taxation policies that affected international product sourcing.",
    techs: ["REACT", "NodeJS", "EXPRESS", "MongoDB"],
    ProjectKind: "Costumer",

    creationOrder: 3,
    challangeOrder: 3,
    apprenticeshipOrder: 2,
  },
  {
    title: "Payment Simulation CRUD",
    carousel: [
      require("../images/payment-crud-1.png"),
      require("../images/payment-crud-2.png"),
      require("../images/payment-crud-3.png"),
    ],
    text: "As part of a code challenge Built a full CRUD application with Next.js, TypeScript and PostgreSQL. Implemented transaction states, data validation and UI consistency using MUI, strengthening my experience with project folder architecture,components best practices and structured backend communication.",
    techs: ["NextJS", "TYPESCRIPT", "MUI", "PostgreSQL"],
    github: "https://github.com/Mateus1rosengarten/PayoutStructure",

    ProjectKind: "Academic",
    creationOrder: 4,
    challangeOrder: 4,
    apprenticeshipOrder: 5,
  },
  {
    title: "Guto Therapist Page",
    carousel: [
      require("../images/therapist-land-page-1.png"),
      require("../images/therapist-land-page-2.png"),
      require("../images/therapist-land-page-3.png"),
    ],

    text: "Developed a landing page for a client specializing in therapy services, a responsive landing page using Next.js and Styled Components. Focused on reusable component structure and was my first-time deployment with custom domain configuration.",
    techs: ["NextJS", "TYPESCRIPT", "STYLED-COMPONENTS"],
    github: "https://github.com/Mateus1rosengarten/gutoMaia",

    ProjectKind: "Costumer",
    creationOrder: 4,
    challangeOrder: 8,
    apprenticeshipOrder: 8,
  },
  {
    title: "Menu Restaurant",
    carousel: [
      require("../images/menu-restaurant-1.png"),
      require("../images/menu-restaurant-2.png"),
      require("../images/menu-restaurant-3.png"),
    ],
    text: "Menu Restaurant Optimizer is my own fullstack SaaS project, designed and developed a SaaS platform enabling digital ordering and operational tracking. Built REST APIs with Express and PostgreSQL, and implemented state management with Redux.",
    techs: ["REACT", "TYPESCRIPT", "NodeJS", "EXPRESS", "PostgreSQL", "MUI"],
    github: "https://github.com/Mateus1rosengarten/AllYouCanEat-Manager",

    ProjectKind: "Costumer",
    creationOrder: 6,
    challangeOrder: 2,
    apprenticeshipOrder: 3,
  },

  {
    title: "SmartBastket",
    carousel: [
      require("../images/basket-1.png"),
      require("../images/basket-2.png"),
      require("../images/basket-3.png"),
    ],
    text: "Contributed to the evolution of the frontend architecture using React, TypeScript, and Tailwind and Radix UI component library. Collaborated on structural improvements and refactored legacy patterns introduced by previous developers, ensuring organiztion and rigorous adherence to the design provided in Figma.",
    techs: ["REACT", "TAILWIND", "TYPESCRIPT", "RADIX UI"],
    github:
      "https://github.com/Mateus1rosengarten/GesplanListaFornecedores/tree/master",

    ProjectKind: "Costumer",
    creationOrder: 7,
    challangeOrder: 5,
    apprenticeshipOrded: 4,
  },
  {
    title: "Student Course Projects",
    image: require("../images/thankful-way.png"),
    carousel: [
      require("../images/thankful-way.png"),
      require("../images/stock-search.png"),
      require("../images/pet-adoption.png"),
      require("../images/movie-search.png"),
    ],
    text: "These projects are a selected showcase of the many applications I completed during the Full Stack course (online and in-person, Tel Aviv 2022–2023).Built multiple full-stack applications using Javascript, React, Node.js and Express, creating dynamic UI features, implementing authentication, database integration while following industry best practices.",
    techs: ["REACT", "JAVASCRIPT", "EXPRESS", "FIREBASE", "NodeJS", "MongoDB"],
    github: "https://github.com/Mateus1rosengarten?tab=repositories",

    ProjectKind: "Academic",
    creationOrder: 1,
    challangeOrder: 1,
    apprenticeshipOrder: 1,
  },
];

export default projects;
