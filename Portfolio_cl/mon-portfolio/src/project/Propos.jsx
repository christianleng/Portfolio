import React, { Component } from "react";
import { Container } from '@material-ui/core';

export default class Propos extends Component {
    render () {
        return(
            <div id="propos" className="main-propos-coordonnes">
                <Container className="propos">
                    <h2 className="propos-titre">À propos</h2>
                    <p data-aos="fade-up" className="propos-text">Dès mon enfance, j'ai été plongé dans l'univers des jeux vidéo, des animes, des mangas, c'est de là où je tire mon inspiration. J'explore avec curiosité les youtubeurs et les différents sites web qui m'inspire dans ma démarche créative.</p>
                    <div className="propos-container">
                        <img className="christian" alt="Christian Leng" src={require('../image/site/christian.png')}></img>                               
                    </div>
                    <p data-aos="fade-up" className="propos-text">Le Samsung Campus m'a permis de me former dans le développement web, et de développer ma passion pour ce travail ainsi que d'exprimer ma pensée notamment grâce au Front-End que j’approfondis tous les jours.</p>                              
                </Container>
            </div>
        )
    }
}
