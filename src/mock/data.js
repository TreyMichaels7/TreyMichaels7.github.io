import { nanoid } from 'nanoid';
import resume from '../files/trey_new_grad_resume.pdf'

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Trey Michaels',
  subtitle: "I\'m an Informatics Student at UW seeking Software Engineering Roles",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'trey_profile.jpg',
  paragraphOne: 'I am currently entering my fourth year at the University of Washington with three years of software development experience. I have a well-rounded technical background having worked in several languages (Java, JavaScript, PHP, GoLang, etc.) to build front-end, back-end, and full-stack applications.' ,
  paragraphTwo: 'Creating impactful full-stack applications that can integrate information and technology to foster learning and community is one of the reasons why I want to be a Software Engineer. Technology paired with a great idea and hard work can change a person\'s life.',
  paragraphThree: 'Current Occupation: Full Stack Developer Intern at eNotes',
  resume: resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'eNotes.jpg',
    title: 'eNotes.com (Internship)',
    info: 'I am currently a Full Stack Developer Intern for eNotes, a company that provides online literature resources for both students and teachers.', 
    info2: 'My responsibilities include developing new features and completing tasks on a full-stack basis for the new company site, writing maintainable and scalable code in PHP following best practices, and writing unit tests to ensure that all code works exactly as intended. My work has already culminated in producing hundreds of newly implemented pages for their new site.',
    url: 'https://enotes.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CoverCovid.jpg',
    title: 'CoverCovid-19 (Project)',
    info: 'Tools: PHP, JavaScript, Laravel, MySQL, Leaflet.js, CSS, AWS', 
    info2: 'I created an application with a partner called CoverCovid-19 to help foster a sense of civic responsibility and community by empowering people to self-report anonymously on the map to warn their peers of potential Covid-19 hotspots. The map is powered by both crowdsourced and updated official data from the New York Times to help people stay informed of important Covid-19 statistics and updates.',
    url: 'https://covercovid-19.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DOTA.jpg',
    title: 'Dating on the Ave (Project)',
    info: 'Tools: GoLang, Node.js, React.js, MongoDB, AWS, Redis, MySQL',
    info2: 'I collaborated with a friend to make a full-stack Speed-Dating application exclusive for the students at the University of Washington. Through Dating on the Ave, students are matched with each other based on their preferences, and if they mutually like each other can have a quick video chat with each other. This is a great way for students to make face-to-face connections when they are busy during the school year and during the pandemic.',
    url: 'https://youtu.be/1WBivpTIS2Q',
    repo: 'https://github.com/TreyMichaels7/DOTA', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PlanMe.jpg',
    title: 'Plan Me (Project)',
    info: 'Tools: React.js, Firebase, HTML/CSS, JavaScript',
    info2: 'With a small team, I created an Event Planning Platform that is free and easy to use for the public. Users can view upcoming events and filter by location, keywords, and time. In addition, there are other interactive features such as a map display highlighting where events are, as well as the ability to post about meeting times and group events publicly. Users authentication, data storage, and hosting are built in using firebase.',
    url: 'https://info340-thomam7.firebaseapp.com/',
    repo: 'https://github.com/TreyMichaels7/PlanMe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sensol.jpg',
    title: 'SENSOL Systems (Volunteer Work)',
    info: 'Tools: Gatsby.js, CSS, AWS',
    info2: 'I worked with a small team of 4 to help SENSOL Systems, a startup, build the front end of the initial stages of their company website primarily using Gatsby.js. Other responbilities included planning out the layout of the website, how each page would be designed, and what features needed to be implemented.',
    url: 'https://sensolsystems.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '(Languages): Java, PHP, JavaScript, Python, MySQL, GoLang, HTML/CSS (Libraries/Frameworks): React.js, Node.js, Express.js, Leaflet.js, Laravel, jQuery, Gatsby.js, Symfony (Tools): Git, AWS, Docker, Firebase, MongoDB, Redis',
  btn: 'Contact Me',
  email: 'thomam7@uw.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/treymichaels7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TreyMichaels7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
