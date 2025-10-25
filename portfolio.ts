import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  CertificationType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Rahul Singh",
  title: "Hi all, I'm Rahul",
  description: `I'm a passionate Mobile and Full Stack Developer with hands-on experience in building Native Android applications using Kotlin and cross-platform apps with React Native. I also develop modern web applications using technologies like React.js, Node.js, and various databases (SQL & NoSQL).

I’m deeply interested in exploring new technologies and integrating them into real-world projects. As a self-motivated and hardworking developer, I enjoy collaborating in teams, learning continuously, and delivering efficient, user-focused solutions across mobile and web platforms.`,
  resumeLink: "https://drive.google.com/file/d/1KDVn3tcXKbY134yELhhJEYJjYmL9OHQw/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "rahulsingh9063", // Change this to your github username to view your profile in Contact Section.
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:rjsingh9063@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahul-singh-367405236/",
  github: "https://github.com/rahulsingh9063",
  instagram: "https://www.instagram.com/it.rahuls/",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Mobile Application Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing high-performance Native Android apps using Kotlin & Java"),
        emoji("⚡ Building cross-platform mobile applications using React Native"),
        emoji("⚡ Creating responsive and dynamic web applications using React.js"),
        emoji("⚡ Building RESTful APIs and backend services with Node.js and Express"),
        emoji("⚡ Integrating Firebase and cloud databases for real-time data sync"),
        emoji("⚡ Managing local and remote storage using SQLite, RoomDB, and MongoDB"),
      ],

      softwareSkills: [
        { skillName: "C", iconifyTag: "vscode-icons:file-type-c" },
        // { skillName: "C++", iconifyTag: "vscode-icons:file-type-cpp" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "Java", iconifyTag: "logos:java" },
        { skillName: "Kotlin", iconifyTag: "logos:kotlin" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        // { skillName: "React.js", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "React Native", iconifyTag: "logos:react" },
        // { skillName: "Next.js", iconifyTag: "vscode-icons:file-type-light-next" },
        // { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
        { skillName: "Express", iconifyTag: "simple-icons:express" },
        { skillName: "Tailwind CSS", iconifyTag: "vscode-icons:file-type-tailwind" },
        { skillName: "Firebase", iconifyTag: "logos:firebase" },
        // { skillName: "Firestore", iconifyTag: "logos:google-cloud-firestore" },
        { skillName: "MongoDB", iconifyTag: "vscode-icons:file-type-mongo" },
        { skillName: "MySQL", iconifyTag: "logos:mysql-icon" },
        { skillName: "RoomDB", iconifyTag: "material-symbols:database" },
        { skillName: "SQLite", iconifyTag: "vscode-icons:file-type-sqlite" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Git", iconifyTag: "logos:git-icon" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
        { skillName: "Vercel", iconifyTag: "logos:vercel-icon" },
        // { skillName: "Android Studio", iconifyTag: "logos:android-studio" },
        { skillName: "IntelliJ IDEA", iconifyTag: "logos:intellij-idea" },
        { skillName: "VS Code", iconifyTag: "logos:visual-studio-code" },
        { skillName: "Redux", iconifyTag: "logos:redux" },
        { skillName: "Axios", iconifyTag: "simple-icons:axios" },
        // { skillName: "Retrofit", iconifyTag: "simple-icons:retrofit" },
        { skillName: "Volley", iconifyTag: "mdi:network" },
        { skillName: "React Navigation", iconifyTag: "logos:react" },
        { skillName: "Expo CLI", iconifyTag: "logos:expo-icon" },
        { skillName: "GitHub Actions", iconifyTag: "logos:github-actions" },
        { skillName: "Problem Solving", iconifyTag: "mdi:lightbulb-on-outline" },
        { skillName: "Communication", iconifyTag: "mdi:account-voice" },
        { skillName: "Time Management", iconifyTag: "mdi:clock-outline" },
      ],

    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [

  {
    "schoolName": "Punjab Technical University, Jalandhar",
    "subHeader": "B.Tech in Computer Science and Engineering",
    "duration": "2022 – Present",
    "desc": "",
    "grade": "CGPA: 8.32/10.0",
    "descBullets": []
  },
  {
    "schoolName": "Uttar Pradesh State Board",
    "subHeader": "Class 12th",
    "duration": "2020",
    "desc": "",
    "grade": "77%",
    "descBullets": []
  },
  {
    "schoolName": "CBSE Board",
    "subHeader": "Class 10th",
    "duration": "2018",
    "desc": "",
    "grade": "78%",
    "descBullets": []
  }
]
  ;

export const experience: ExperienceType[] = [

  {
    role: "Frontend Developer",
    company: "Hoping Minds",
    companyLogo: "/img/icons/common/Asset-5.png",
    date: "Jun 2024 - July 2024",
    desc: "Designed and deployed a cross-platform blog app using React Native (Android/iOS), and real-time authentication.Engineered scalable REST APIs in Node.js with MongoDB, reducing query latency to sub-200ms.Implemented Agile methodology with GitHub for version control and CI/CD pipelines, accelerating deployment by 20%.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },

];

export const projects: ProjectType[] = [
  {
    name: "Fingaurd (Financial Learning & Simulation Platform)",
    desc: "Developed a finance-learning app with 8+ calculators (EMI, SIP, Loan, Investment) and an AI chatbot using FastAPI.Integrated push notifications and fraud alerting with Firebase and JWT-secured Node.js backend.",
    github: "https://github.com/rohan2107-lab/FinGuard",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
    image: "/img/icons/common/finance.svg",
  },
  {
    name: "TripGo (AI Powered trip planner application)",
    desc: " Built AI-powered trip planner that auto-generates itineraries, boosting user planning efficiency by 45%.Integrated Google Places API and real-time trip visualization, increasing engagement by 50%.",
    github: "https://github.com/rahulsingh9063/TripGo",
    // link: "https://gibeo.io/",
    image: "/img/icons/common/travel.svg",
  },
  {
    name: "Blogging App",
    desc: "Rich text editor with real-time preview and auto-save functionality, improving content creation efficiency by 45%. Integrated SEO optimization tools with keyword suggestions, increasing blog visibility by 50%.",
    github: "https://github.com/rahulsingh9063/LetShare",
    // link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
    image: "/img/icons/common/blog.svg",
  },
  {
    name: "Expense Manager App",
    desc: " Automated expense tracking and categorization, improving user financial awareness by 40%.Integrated budgeting features with alerts, reducing overspending by 35%",
    github: "https://github.com/rahulsingh9063/eManager",
    // link: "https://hooliganculture.com/",
    image: "/img/icons/common/expense.svg",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

export const certifications: CertificationType[] = [
  {
    title: "Hackathon Winner - CT Group of Institutions 2025",
    issuer: "Hackathon Organizer",
    date: "2025",
    description: "Won 1st place best UI/UX in a hackathon organized by CT Group of Institutions.",
    image: "/img/icons/common/ct.jpg",
    link: "https://drive.google.com/file/d/1TSZPdhnAcmjRo4K1PG3u8xvN1-5Ap0RH/view?usp=drive_link",
  },
  {
    title: " Cisco Certified Introduction to Data Science",
    issuer: "Cisco",
    date: "2025",
    description: "Fundamentals of data science.",
    image: "/img/icons/common/cisco.png",
    link: "https://www.netacad.com/certificates?issuanceId=f06e934e-db51-420c-bb76-c8e65f144a28",
  },
  {
    title: "Master Android App Development– Udemy (Denis Panjuta)",
    issuer: "Udemy",
    date: "2024",
    description: "Built multiple  mobile apps using Java & Kotlin.",
    image: "/img/icons/common/udemy.png",
    link: "https://www.udemy.com/certificate/UC-4c832ba9-cd5b-48c6-8277-df37a128a303/",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Rahul Singh",
  description: greetings.description,
  author: "Rahul Singh",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://rahulsingh-seven.vercel.app/",
  keywords: [
    "Rahul",
    "@rahulsingh9063",
    "rahulsingh9063",
    "Portfolio",
    "Rahul Singh Portfolio",
    "Rahul Portfolio",
    "software developer portfolio",
    "full stack developer portfolio",
    "mobile developer portfolio",
    "android developer portfolio",
    "react native developer portfolio",
    "kotlin developer portfolio",
    "nodejs developer portfolio",
    "express developer portfolio",
    "reactjs developer portfolio",
    "software developer ",
    "full stack developer ",
    "mobile developer ",
    "android developer ",
    "react native developer ",
    "kotlin developer ",
    "nodejs developer ",
    "express developer ",
    "reactjs developer ",
  ],
};           
