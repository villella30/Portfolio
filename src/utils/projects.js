import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SvgReact from "../images/React.svg";
import PngJavaScript from '../images/JS.png';
import SvgFB from "../images/FB.svg";
import SvgHtml from '../images/HTML.svg';
import SvgCss from '../images/CSS.svg';
import ProjectOne from "../images/ProjectOne.png";
import ProjectTwo from "../images/ProjectTwo.png";
import Ecommerce from '../images/Ecommerce.png';
import JuiceWrldTribute from '../images/JuiceWrldTribute.png';
import Portfolio from '../images/Portfolio.png';
import SvgNode from '../images/NODE.svg';
import SvgNext from '../images/SvgNext.svg';


export const projectsData = [

    {
        title: "Juice Wrld Tribute",
        date: "Finalizada",
        image: JuiceWrldTribute,
        description: "Web dedicada a mi artista favorito como un simple tributo por tantas canciones y sentimientos que nos dejó en ellas. Juice WRLD 999",
        githubLink: 'https://github.com/villella30/JuiceWrldTribute',
        pageLink: "https://juicewrldtribute.netlify.app/",
        avatar: <LibraryMusicIcon />,
        language1: "REACT",
        language2: "CSS",
        icons: {
            react: SvgReact,
            css: SvgCss,

        },
    },
    {
        title: "Futbol Match",
        date: "Finalizada",
        image: ProjectOne,
        description: "Se basa en una app para organizar partidos de fútbol mediante publicaciones realizadas por un usuario.",
        githubLink: 'https://github.com/villella30/Futbol-Match1',
        avatar: <SportsSoccerSharpIcon />,
        language1: "REACT NATIVE",
        language2: "JAVASCRIPT",
        language3: "FIREBASE",
        icons: {
            react: SvgReact,
            javascript: PngJavaScript,
            firebase: SvgFB,
        },
    },
    {
        title: "Portfolio Personal",
        date: "Finalizada",
        image: Portfolio,
        description: "Portfolio personal, donde puedo exhibir mis proyectos y mis habilidades para el mundo profesional.",
        githubLink: 'https://github.com/villella30/Portfolio',
        pageLink: "https://valentino-villella.netlify.app/",
        avatar: <BusinessCenterIcon />,
        language1: "REACT",
        language2: "CSS",
        icons: {
            react: SvgReact,
            css: SvgCss,
        },
    },
    {
        title: "AreaMovil",
        date: "Finalizada",
        image: ProjectTwo,
        description: "Esta es una página web dedicada a proporcionar información sobre ventas de productos para motores automáticos, así como servicios de reparación e instalación de los mismos.",
        githubLink: 'https://github.com/villella30/Areamovil.github.io',
        pageLink: "https://villella30.github.io/Areamovil.github.io/",
        avatar: <SettingsIcon />,
        language1: "HTML",
        language2: "CSS",
        language3: "JAVASCRIPT",
        icons: {
            html: SvgHtml,
            css: SvgCss,
            javascript: PngJavaScript,
        },
    },
    {
        title: "Sportwear",
        date: "En proceso",
        image: Ecommerce,
        description: "Proyecto de web e-commerce sobre venta de ropa deportiva, incluido con pasarela de pago, barra de búsqueda, filtro de búsqueda y muchas cosas más.",
        githubLink: 'https://github.com/villella30/Sport-Clothes',
        avatar: <SportsBasketballIcon />,
        language1: "REACT",
        language2: "NODE",
        language3: "NEXT",
        icons: {
            react: SvgReact,
            node: SvgNode,
            next: SvgNext,
        },
    },

];