const projects = [
  {
    title: "Rosentech Digital Agency",
    images: [
      require("../images/rosentech-lading-page-1.png"),
      require("../images/rosentech-lading-page-2.png"),
      require("../images/rosentech-lading-page-3.png"),
      require("../images/rosentech-lading-page-4.png"),
    ],
    text: "I developed a digital agency landing page in collaboration with a web designer, highlighting services, plans, and Contact/FAQs. Built with my preferred stack: React, Tailwind, TypeScript and Node.js, valued for simplicity, efficiency, and industry-wide use.The site features rich animations, great efficiency in driving user actions and a dynamic contact form.",
    techs: ["REACT", "TYPESCRIPT", "TAILWIND", "NODEJS"],
    gitLink: "https://github.com/Mateus1rosengarten/RosenTechDigital",
    imgLoading: "eager",
  },
  {
    title: "MKT Embalagem website",
    images: [
      require("../images/mkt-lading-page-1.png"),
      require("../images/mkt-lading-page-2.png"),
      require("../images/mkt-lading-page-3.png"),
      require("../images/mkt-lading-page-4.png"),
    ],
    text: "MKT Embalagem specializes in high-quality can printing for major brands like Ambev, Pepsico, and Johnson & Johnson in Brazil. Built with Next.js to enhance SEO and performance, the website highlights services, expertise, and innovation, and is currently in its final stage, awaiting real company photos for completion.",
    techs: ["NextJS", "TYPESCRIPT", "TAILWIND"],
    gitLink: "https://github.com/Mateus1rosengarten/MktEmbalagem",
    imgLoading: "eager",
  },
  {
    title: "Sustentools E-commerce",
    images: [
      require("../images/e-commerce-1.png"),
      require("../images/e-commerce-2.png"),
      require("../images/e-commerce-3.png"),
    ],
    text: "Sustentools E-commerce is a sustainable marketplace developed by a team of partners, focusing on eco-friendly products. I implemented all pages from Figma designs, built authentication, created a product database with advanced search filters. The project provided hands-on experience in full-stack development and collaborative work. Although the project is currently on hold due to changes in Brazil taxation policies that affected international product sourcing, however it reflects the technical skills and problem-solving approaches I applied during its development.",
    techs: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],
    imgLoading: "lazy",
  },
  {
    title: "Payment Simulation CRUD",
    images: [
      require("../images/payment-crud-1.png"),
      require("../images/payment-crud-2.png"),
      require("../images/payment-crud-3.png"),
    ],
    text: "The Payout Simulation App was developed as part of a developer bootcamp challenge and concluded with a code review by experienced developers. It allows users to view, create, edit, and delete simulated payment transactions with fail/success scenarios. MUI was chosen for its wide range of components, consistency across the UI, and to deepen my familiarity with the library, while the overall stack selection was part of the challenge.",
    techs: ["NextJS", "TYPESCRIPT", "MUI", "PostgreSQL"],
    gitLink: "https://github.com/Mateus1rosengarten/PayoutStructure",
    imgLoading: "lazy",
  },
  {
    title: "Guto Therapist Page",
    images: [
      require("../images/therapist-land-page-1.png"),
      require("../images/therapist-land-page-2.png"),
      require("../images/therapist-land-page-3.png"),
    ],
    text: "Developed a landing page for a client specializing in therapy services, supporting individuals with complex neurodivergencies and their families with accessible resources and personalized care.This was my first freelance experience, where I used styled-components to explore component-based styling and also learned how to deploy a live site with a custom domain.",
    techs: ["NextJS", "TYPESCRIPT", "STYLED-COMPONENTS"],
    gitLink: "https://github.com/Mateus1rosengarten/gutoMaia",
    imgLoading: "lazy",
  },
  {
    title: "Menu Restaurant Optimizer",
    images: [
      require("../images/menu-restaurant-1.png"),
      require("../images/menu-restaurant-2.png"),
      require("../images/menu-restaurant-3.png"),
    ],
    text: "Menu Restaurant Optimizer is my own SaaS project, created to fill a gap I identified in the restaurant market. Accessible via QR codes, it allows customers to order food and drinks, provide feedback, and request service, while helping restaurants optimize operations, track preferences, and reduce waste. The goal is once its ready to offer this solution to pizzerias and other restaurants in Brazil on a subscription basis.",
    techs: ["REACT", "TYPESCRIPT", "NODE.JS", "EXPRESS", "PostgreSQL", "MUI"],
    gitLink: "https://github.com/Mateus1rosengarten/AllYouCanEat-Manager",
    imgLoading: "lazy",
  },

  {
    title: "Suppliers Management System",
    images: [
      require("../images/supplier-crud-1.png"),
      require("../images/supplier-crud-2.png"),
      require("../images/supplier-crud-3.png"),
    ],
    text: "Suppliers Management System is a CRUD full-stack project developed for a friend’s small business to efficiently manage supplier information. Users can store, edit, and mark favorites, helping the business organize and track supplier data. I chose to create this project spontaneously specifically to gain real-world full-stack experience, applying React, Node.js, Express, and SQL while learning how to build maintainable and functional applications.",
    techs: ["REACT", "SQL", "EXPRESS", "NODE.JS"],
    gitLink:
      "https://github.com/Mateus1rosengarten/GesplanListaFornecedores/tree/master",
    imgLoading: "lazy",
  },
  {
    title: "Student Course Projects",
    images: [
      require("../images/thankful-way.png"),
      require("../images/pet-adoption.png"),
      require("../images/stock-search.png"),
      require("../images/movie-search.png"),
    ],
    text: "These projects are a selected showcase of the many applications I completed during the Full Stack course (online and in-person, Tel Aviv 2022–2023). The course exposed students to real-world scenarios and diverse technology stacks while guiding us to follow industry best practices. Through these projects, I built functional web applications with interactive interfaces, responsive layouts, and features demonstrating practical proficiency in JavaScript, React, Node.js, Express, and database management.",
    techs: ["REACT", "JAVASCRIPT", "EXPRESS", "FIREBASE", "NODEJS", "MONGODB"],
    gitLink: "https://github.com/Mateus1rosengarten?tab=repositories",
    imgLoading: "lazy",
  },
];

export default projects;
