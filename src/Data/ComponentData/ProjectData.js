import Clock from "../Images/Clock.webp";
import RH from "../Images/RH.webp";
import SC from "../Images/SC.webp";
import IWP from "../Images/IWP.webp";
import WA from "../Images/WA.webp";
import R from "../Images/Research.webp";
import M from "../Images/MAPML.webp"

export const projects = [
    {
        id: 0,
        title: "ResearcHaven",
        text: "A web application created for selecting research proposals for funding after filtering and processing them.",
        repo: "https://github.com/sagefell29/ResearcHaven-SIH-BACKEND",
        img: RH
    },
    {
        id: 1,
        title: "SafeChain",
        text: "A revolutionary password management web application that uses only a single field for user authentication.",
        repo: "https://github.com/sagefell29/Safe-Chain-Backend",
        img: SC
    },
    {
        id: 2,
        title: "MAPML",
        text: "A full-stack platform utilizing React and Flask to simplify data preprocessing, machine learning model selection, and result generation, enabling researchers and data scientists to efficiently analyze datasets and apply ML algorithms through an intuitive interface.",
        link: "",
        repo: "https://github.com/sagefell29/MAPML_front-end",
        img: M
    },
    {
        id: 3,
        title: "PhysioExpert Backend",
        text: "The backend of the Hospital Management web application we made for one of our college projects.",
        link: "",
        repo: "https://github.com/sagefell29/IWP-Backend",
        img: IWP
    },
    {
        id: 4,
        title: "Bioinformatics Research Work",
        text: "This is a collection of Python notebooks and data which compare the suitability of various ML and DL algorithms for Drug Discovery.",
        link: "",
        repo: "https://github.com/sagefell29/Bioinformatics-Project",
        img: R
    },
    {
        id: 5,
        title: "Weather App in React",
        text: "A simple weather app made in React using external APIs for location autofill and Weather data.",
        link: "",
        img: WA,
        repo: "https://github.com/sagefell29/Weather-App",
    }
]