import Clock from "../Images/Clock.png";
import RH from "../Images/RH.png";
import SC from "../Images/SC.png";
import IWP from "../Images/IWP.png";
import WA from "../Images/WA.png";
import R from "../Images/Research.png";

export const projects = [
    {
        id: 0,
        title: "ResearcHaven",
        text: "A web application created for selecting research proposals for funding after filtering and processing them.",
        link: "https://webcrawlers.tech",
        repo: "https://github.com/sagefell29/ResearcHaven-SIH-BACKEND",
        img: RH
    },
    {
        id: 1,
        title: "SafeChain",
        text: "A revolutionary password management web application that uses only a single field for user authentication.",
        link: "https://www.safechain.prasoon.codes/",
        repo: "https://github.com/sagefell29/Safe-Chain-Backend",
        img: SC
    },
    {
        id: 2,
        title: "PhysioExpert Backend",
        text: "The backend of the Hospital Management web application we made for one of our college projects.",
        link: "",
        repo: "https://github.com/sagefell29/IWP-Backend",
        img: IWP
    },
    {
        id: 3,
        title: "Bioinformatics Research Work",
        text: "This is a collection of Python notebooks and data which compare the suitability of various ML and DL algorithms for Drug Discovery.",
        link: "",
        repo: "https://github.com/sagefell29/Bioinformatics-Project",
        img: R
    },
    {
        id: 4,
        title: "Weather App in React",
        text: "A simple weather app made in React using external APIs for location autofill and Weather data.",
        link: "",
        img: WA,
        repo: "https://github.com/sagefell29/Weather-App",
    },
    {
        id: 5,
        title: "Analog Clock in JS",
        text: "A simple analog clock made in Vanilla JS.",
        link: "",
        img: Clock,
        repo: "https://github.com/sagefell29/Analog-CLock---JS"
    }
]