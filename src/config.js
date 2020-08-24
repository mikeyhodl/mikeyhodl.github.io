module.exports = {
  siteTitle: 'Mike Owino | Web Developer',
  siteDescription:
    'Mike Owino is a software engineer based in Boston, MA who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Mike Owino, Oiwno, Okumu, mikeeowino, software engineer, front-end engineer, web developer, javascript, kenya',
  siteUrl: 'https://mikeowino.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Mike Owino',
  location: 'Boston, MA',
  email: 'mikeowino@mail.ru',
  github: 'https://github.com/MikeOwino',
  twitterHandle: '@mikeeowino',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/MikeOwino',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mikeeowino',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/mikeowino',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mikeeowino',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mikeeowino',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: '¯\_(°_O)_/¯',
      url: '/#jekyll_game',
    },
    {
      name: 'COVID-19',
      url: '',
    },
    {
      name: 'BLOG',
      url: '',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
