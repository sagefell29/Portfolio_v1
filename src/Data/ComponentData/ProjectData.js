import Clock from '../Images/Clock.webp';
import RH from '../Images/RH.webp';
import SC from '../Images/SC.webp';
import IWP from '../Images/IWP.webp';
import WA from '../Images/WA.webp';
import R from '../Images/Research.webp';
import MAPML from '../Images/MAPML.webp';
import PORT from '../Images/Portfolio.webp'

export const projects = [
  {
    id: 0,
    title: 'MAPML',
    text: 'A full stack web application made on React and Flask to crate a one-stop solution for preprocessing your data, applying ML algorithms and visualizing results.',
    link: '',
    repo: 'https://github.com/sagefell29/MAPML_front-end',
    img: MAPML,
  },
  {
    id: 1,
    title: 'ResearcHaven',
    text: 'A web application created for selecting research proposals for funding after filtering and processing them.',
    link: '',
    repo: 'https://github.com/sagefell29/ResearcHaven-SIH-BACKEND',
    img: RH,
  },
  {
    id: 2,
    title: 'SafeChain',
    text: 'A revolutionary password management web application that uses only a single field for user authentication.',
    link: '',
    repo: 'https://github.com/sagefell29/Safe-Chain-Backend',
    img: SC,
  },
  {
    id: 3,
    title: 'PhysioExpert Backend',
    text: 'The backend of the Hospital Management web application we made for one of our college projects.',
    link: '',
    repo: 'https://github.com/sagefell29/IWP-Backend',
    img: IWP,
  },
  {
    id: 4,
    title: 'Portfolio',
    text: "The portfolio you're on currently is also built from scratch completely on React.js.",
    link: '',
    img: PORT,
    repo: 'https://github.com/sagefell29/Portfolio_v1',
  },
  {
    id: 5,
    title: 'Bioinformatics Research Work',
    text: 'This is a collection of Python notebooks and data which compare the suitability of various ML and DL algorithms for Drug Discovery.',
    link: '',
    repo: 'https://github.com/sagefell29/Bioinformatics-Project',
    img: R,
  },
  {
    id: 6,
    title: 'Weather App in React',
    text: 'A simple weather app made in React using external APIs for location autofill and Weather data.',
    link: '',
    img: WA,
    repo: 'https://github.com/sagefell29/Weather-App',
  },
  {
    id: 7,
    title: 'Analog Clock in JS',
    text: 'A simple analog clock made in Vanilla JS.',
    link: '',
    img: Clock,
    repo: 'https://github.com/sagefell29/Analog-CLock---JS',
  },
];
