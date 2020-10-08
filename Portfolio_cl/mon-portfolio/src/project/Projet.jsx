
import React, { Component } from "react";
import { Button, Container } from '@material-ui/core';
import ModalEcommerce from "../Description/ModalEcommerce";
import AOS from 'aos';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
export default class Projet extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            addModalShow: false,
            show: false,
        }

    }
    render () {
        const addModalClose = () => this.setState({ addModalShow : false })
        const close = () => this.setState({ show : false })
        return(
            <div className="projet" id="projet">
                <Container>
                    <h1 className="projet-titre">Mes projets</h1>
                    <div className="container-projet-box">
                        <div className="projet-box">
                            <div className="projet-box-un" data-aos="fade-up">
                                <h3>Site Ecommerce</h3>
                                <p className="projet-date">Juin 2020</p>
                                <p>Réalisation d'un site ecommerce, en équipe de 9, avec une partie consacrée au marketing pour convaincre les business angels d'investir dans notre projet lors d'une présentation de 20 minutes.</p>
                                <p>React.js & Laravel & MySQL</p>
                                <ul className="ul-link-projet">
                                    <li>
                                        <Button variant="outlined"><a href="https://github.com/christianleng/Ecommerce" rel="noopener noreferrer" target="_blank">GitHub du projet Ecommerce</a></Button>
                                    </li>
                                    <li>
                                        <Button className="screen-printngo" variant="outlined" onClick={()=> this.setState({addModalShow : true})}>Screens du site Print'n go</Button>
                                        <ModalEcommerce show={this.state.addModalShow} onHide={addModalClose}/>
                                    </li>
                                </ul>
                            </div>                                
                        </div>
                        <div className="projet-box">
                            <div className="projet-box-un" data-aos="fade-up">
                                <h3>Framework MVC</h3>
                                <p className="projet-date">Mai 2020</p>
                                <p>Projet individuel qui a pour but de créer son propre framework MVC pour mieux comprendre le fonctionnement des frameworks utilisant l'architecture MVC.</p>
                                <p className="php-bottom">PHP</p>
                                <ul className="ul-link-projet">
                                    <li>
                                        <Button variant="outlined"><a href="https://github.com/christianleng/PiePHP" rel="noopener noreferrer" target="_blank">GitHub du projet PiePHP</a></Button>
                                    </li>
                                </ul>
                            </div>                                
                        </div>
                        <div className="projet-box">
                            <div className="projet-box-un" data-aos="fade-up">
                                <h3>Maquette responsive</h3>
                                <p className="projet-date">Mai 2020</p>
                                <p>Reproduction d'une maquette et rendre le site responsive.</p>
                                <p className="html-bottom">HTML5 & CSS3</p>
                                <ul className="ul-link-projet">
                                    <li>
                                        <Button variant="outlined"><a href="https://github.com/christianleng/maquette_responsive" rel="noopener noreferrer" target="_blank">GitHub pour la maquette</a></Button>
                                    </li>
                                </ul>
                            </div>                                    
                        </div>
                        <div className="projet-box">
                            <div className="projet-box-un" data-aos="fade-up">
                                <h3>Pushswap</h3>
                                <p className="projet-date">Juillet 2020</p>
                                <p>Projet qui a pour but de trier une liste de nombres avec le moins de coups possible.</p>
                                <br></br>
                                <p className="html-bottom">JavaScript</p>
                                <ul className="ul-link-projet">
                                    <li>
                                        <Button variant="outlined"><a href="https://github.com/christianleng/ALG_Pushswap" rel="noopener noreferrer" target="_blank">GitHub pour l'algo Pushswap</a></Button>
                                    </li>
                                </ul>
                            </div>                                    
                        </div>
                        <div className="projet-box">
                            <div className="projet-box-un" data-aos="fade-up">
                                <h3>My_irc <span className="projet-en-cours">( projet en cours )</span></h3>
                                <p className="projet-date">Octobre 2020</p>
                                <p>Projet qui a pour but de réaliser un serveur IRC. Ce serveur peut accepter plusieurs connexions simultanées.</p>
                                <p className="html-bottom projet-en-cours-l">React.js & Node.js & Express.js & Socket.io</p>
                                <ul className="ul-link-projet">
                                    <li>
                                        <Button variant="outlined"><a href="https://github.com/christianleng/my_irc" rel="noopener noreferrer" target="_blank">GitHub du projet My_irc</a></Button>
                                    </li>
                                </ul>
                            </div>                                    
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
