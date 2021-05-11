import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'FindMyTeam', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Learn more about the FindMyTeam Project', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'FindMyTeam: ',
  subtitle: 'because finding a good group can be a pain.',
  // cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Landing.jpg',
  paragraphOne:
    'We want to help iSchool students form teams quickly and effectively. and also provide them with the opportunity to see a quick preview of potential partners so that they may be more well-informed as for how they are choosing their partners.',
  paragraphTwo:
    'While our platform can be completely student driven, we want to encourage iSchool instructors to use this platform in their classes. By doing so, instructors accounts can also add individuals to classes, and then choose from those individuals to add to groups.',
  paragraphThree: '',
  resume: 'https://youtu.be/byOvlZYs9y4',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Search.jpg',
    title: 'Search for Courses, Teams, and Students',
    info:
      'With FindMyTeam, students can easily search for courses to join and find teams in the classes that they are in to potentially join. Students who are already in teams can search for peers in their classes to invite them to their group.',
    info2:
      'Search Results are filtered down to only include teams and students in the courses that the user is in to make it easier to find relevant results.',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'profile_preview.jpg',
    title: 'Make Your Own User Profile',
    info:
      'No private information is required other than a standard UW email and password for authentication. We also send out verification emails to ensure that our accounts are more secure.',
    info2:
      'We ask that users provide us with some basic information such as their major, career preference and personl links to help provide recommendations in pairings.',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Group.jpg',
    title: 'Make Teams for Your Classes',
    info:
      'For any courses a user is in, they can easily create their own team, set how many members they want to include, and quickly begin finding peers that they are interested in working with.',
    info2:
      'Instructors will also have the ability to create teams for classes that they have created, and can manually put students into teams if they choose to do so.',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Group_page.jpg',
    title: 'Coordinate and communicate efficiently with others',
    info:
      'Within a team profile page, users can easily see who else is in the team and navigate to see their contact information. This will make it faster to reach out and establish an agreed upon means of communication.',
    info2: '',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  // btn: 'Contact Us',
  // linkedIn: 'https://www.linkedin.com/in/treymichaels7/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/company/findmyteam/about/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ashmannsyngle/FindMyTeam',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
