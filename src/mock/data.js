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
  subtitle:
    'The platform dedicated to help you make the most out of your collaborative experiences.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Landing.jpg',
  paragraphOne:
    'FindMyTeam is a web application that is meant to help iSchool students find groups quickly and effectively. and also provide them with the opportunity to see a quick preview of potential partners so that they may be more well-informed as for how they are choosing their partners.',
  paragraphTwo:
    'Our current version of FindMyTeam is meant to focus on supporting iSchool students, especially because it is fairly common for Informatics classes to have some form of major collaborative project. This would also benefit students looking for groups for their capstone project.',
  paragraphThree:
    'While our platform can be completely student driven, we want to encourage iSchool instructors to use this platform in their classes. If they want to use the platform to manually create groups, instructors accounts can also add individuals to classes, and then choose from those individuals to add to groups.',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Search.jpg',
    title: 'Easily Search for Courses, Teams, and Students',
    info:
      'With FindMyTeam, students can easily search for courses to join and find teams in the classes that they are in to potentially join. Students who are already in teams can search for peers in their classes to invite them to their group.',
    info2:
      'Search Results are filtered down to only include teams and students in the courses that the user is in to make it easier to find relevant results.',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Profile.jpg',
    title: 'Make Your Own User Profile',
    info:
      'Making your own student account is quick and simple with FindMyTeam and no private information is needed other than a standard UW email and password for authentication. We also send out verification emails to ensure that our accounts are more secure.',
    info2:
      'We ask that users provide us with some information such as their major, career preference, as well as some information about themselves to help find better student pairings for the individual. Students can also post links to other projects and sites that they may want to share such as Portfolio sites, Github, and/or LinkedIn.',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Group.jpg',
    title: 'Easily Make Teams for Your Classes',
    info:
      'For any courses a user is in, they can quickly create their own team, set how many members they want to include, and quickly begin finding peers that they are interested in working with.',
    info2:
      'Instructors will also have the ability to create teams for classes that they have created, and can manually put students into teams if they choose to do so.',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Group_page.jpg',
    title: 'Coordinate and communicate quickly with others',
    info:
      'Within a team profile page, users can easily see who else is in the team and navigate to see their contact information. This will make it faster to reach out and establish an agreed upon means of communication.',
    info2:
      'Group Owners can also send requests to reach out to other inviduals that do not currently have a team in the same course.',
    url: 'https://github.com/ashmannsyngle/FindMyTeam',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Ashmann Syngle, Trey Michaels, Samuel Christ, Zikai Song',
  btn: 'Contact Us',
  linkedIn: 'https://www.linkedin.com/in/treymichaels7/',
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
      url: 'https://github.com/ashmannsyngle/FindMyTeam',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
