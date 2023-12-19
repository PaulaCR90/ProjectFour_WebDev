import { initAbout } from '../components/About/About';
import { initWorks } from '../components/Works/Works';
import { initHome } from '../components/Home/Home';

export const navBar = [
  {
    name: 'home',
    href: '/home',
    className: 'liHome',
    component: initHome
  },
  {
    name: 'about-me',
    href: '/about',
    className: 'liAbout',
    component: initAbout
  },
  {
    name: 'works',
    href: '/works',
    className: 'liWorks',
    component: initWorks
  }
];

export const AboutInfo = [
  "Hello, I'm Paula",

  "I'm a full-stack developer based in Higueruela (AB), Spain.",
  'After exploring many different carrer paths, I finally found my dream job. I have started to transition professionally from horse riding teacher to a full-stack developer.',
  "Now I'm studying at Rock{TheCode} by ThePowerMBA to become a versatile full-stack web developer.",
  'I have already begun honing my skills with practice work for charities, small shops, bootcamp projects and junior UX/UI designers.'
];

export const skills = [
  {
    category: 'Languages',
    items: 'Html, CSS, JavasCript'
  },
  {
    category: 'Tools',
    items: 'VSCode, Figma, Git, GitHub, Netlify'
  },
  {
    category: 'Frameworks',
    items: 'React, Vite'
  }
];

export const SmallWorks = [
  {
    Image: './assets/Fofuchicas.webp',
    Title: `Fofuchicas's shop`,
    Description: 'Shopping page',
    Sources: 'HTML, CSS, JavaScript',
    Site: 'https://fofuchicas.netlify.app/',
    Button: 'Fofuchicas',
    Logo: './assets/logoFofuchicas.png'
  },
  {
    Image: './assets/Bigote.webp',
    Title: 'Site development',
    Description: 'Web for animal association',
    Sources: 'HTML, CSS, JavaScript, React',
    Site: 'https://donbigote.netlify.app/',
    Button: 'Don Bigote',
    Logo: './assets/logoDonBigote.jpeg'
  },
  {
    Image: './assets/New.webp',
    Title: 'Already developing',
    Description: 'Portfolios for UX/UIs',
    Sources: 'HTML, CSS, JavaScript, React',
    Site: '#',
    Button: 'Loading pages...',
    Logo: './assets/New.webp'
  }
];

export const SchoolProjects = [
  {
    Image: './assets/Cleopatra.webp',
    Title: 'Landing page',
    Description: 'Landing for cat shelter',
    Sources: 'HTML, CSS',
    Site: 'https://losbigotesdecleopatra.netlify.app/',
    Button: 'LBDC',
    Logo: './assets/logoBigotesCleopatra.png'
  },
  {
    Image: './assets/Fofuchicas.webp',
    Title: `Fofuchicas's shop`,
    Description: 'Shopping page',
    Sources: 'HTML, CSS, JavaScript',
    Site: 'https://fofuchicas.netlify.app/',
    Button: 'Fofuchicas',
    Logo: './assets/logoFofuchicas.png'
  },
  {
    Image: './assets/Nasa.webp',
    Title: "NASA API's site",
    Description: 'Astronomical picture',
    Sources: 'HTML, CSS, JavaScript, React',
    Site: 'https://nasa-project-paulacr90.netlify.app/',
    Button: 'NASA',
    Logo: './assets/logoNasa.jpg'
  },
  {
    Image: './assets/Weather.webp',
    Title: 'Weather site',
    Description: 'Weather app',
    Sources: 'HTML, CSS, JavaScript, React',
    Site: 'https://weatherapp-paulacr.netlify.app/',
    Button: 'Weather',
    Logo: './assets/logoWeather.jpg'
  },
  {
    Image: './assets/GamesHub.webp',
    Title: 'GamesHub',
    Description: "Games. Password: 'Luigi'",
    Sources: 'HTML, CSS, JavaScript, React',
    Site: 'https://gameshub-paulacr90.netlify.app/',
    Button: 'GamesHub',
    Logo: './assets/gamesLogo.png'
  },
  {
    Image: './assets/CountrySide.webp',
    Title: 'Countryside Homes',
    Description: 'Home page',
    Sources: 'HTML, CSS',
    Site: 'https://projectone-webdev-paulacr90.netlify.app/',
    Button: 'CSHomes',
    Logo: './assets/logoCSH.png'
  },
  {
    Image: './assets/Cabezuela.webp',
    Title: "Improved 'La Cabezuela'",
    Description: 'Upgrade La Cabezuela site',
    Sources: 'HTML, CSS, JavaScript',
    Site: 'https://projecttwo-webdev-paulacr90.netlify.app/',
    Button: 'La Cabezuela',
    Logo: './assets/logoCabezuela.png'
  },
  {
    Image: './assets/Pinterest.webp',
    Title: 'Pic browser',
    Description: 'Image browser',
    Sources: 'HTML, CSS, JavaScript',
    Site: 'https://projectthree-webdev-paulacr90.netlify.app/',
    Button: 'Pinterest',
    Logo: './assets/logoPinterest.png'
  },
  {
    Image: './assets/Portfolio.webp',
    Title: 'My Portfolio',
    Description: 'This portfolio!',
    Sources: 'HTML, CSS, JavaScript',
    Site: 'https://projectfour-webdev-paulacr90.netlify.app/',
    Button: 'Portfolio',
    Logo: './assets/favicon.png'
  }
];

export const FooterInfo = [
  {
    mediaHref: 'mailto:p.a.castrorodriguez@gmail.com',
    mediaSrc: './assets/mailpeq.jpg'
  },
  {
    mediaHref:
      'https://www.linkedin.com/in/paula-alejandra-castro-rodr%C3%ADguez-a671b3208/',
    mediaSrc: './assets/linkkedinpeq.jpg'
  },
  {
    mediaHref: 'https://github.com/PaulaCR90/',
    mediaSrc: './assets/github.jpg'
  }
];
