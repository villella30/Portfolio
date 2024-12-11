import * as React from 'react';
import Yo from "../images/MyPhoto.JPG"
import "../styles/Hero.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Hero(props) {
    return (
        <div class="hero" id="hero">
            <img src={Yo} alt="Foto de Valentino" class="hero-img" />
            <div class="hero-content">
                <h1>Hola, soy Valentino Villella</h1>
                <h2>Front-end Developer</h2>
                <p>
                    Soy un apasionado desarrollador web frontend y móvil. 
                    Tuve la oportunidad de crear muchos proyectos personales con mucha dedicación y esfuerzo, 
                    disfrutando cada momento. 
                    Busco mejorar la usabilidad, accesibilidad y diseños en cada uno de mis proyectos.
                </p>
                <p>
                    En el ámbito personal, 
                    soy estudiante de Licenciatura en Sistemas en la Universidad Nacional de Lanús, 
                    donde disfruto tanto el estudio como la práctica constante. 
                    Además, hacer deporte diariamente es uno de mis pasatiempos favoritos, 
                    ya que me ayuda a mantener el equilibrio y la energía para nuevos desafíos.
                </p>

                <div class="buttons-container">
                    <a href="https://github.com/villella30" target="_blank" rel='noreferrer'>

                        <button className='button github'>
                            <GitHubIcon className='icon' />
                            VALENTINO VILLELLA
                            </button>
                    </a>
                    <a href="https://www.linkedin.com/in/villella30/" target="_blank" rel='noreferrer'>
                        <button className='button linkedin'>
                            <LinkedInIcon className='icon' />
                            VALENTINO VILLELLA
                            </button>
                    </a>
                </div>
            </div>
        </div>

    );
}