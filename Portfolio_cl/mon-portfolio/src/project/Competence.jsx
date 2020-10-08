
import React, { Component } from "react";
import { Container } from '@material-ui/core';

export default class Competence extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
          scrolled: false,
        }
    }
    
    componentDidMount() {
        window.addEventListener("scroll", () => {
            const isTop = window.scrollY < 10
            if(isTop !== true) {
                this.setState({ scrolled: true })
            }
            else {
                this.setState({ scrolled: true })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener("scroll")
    }

    render () {
        return(
            <div className="competence">
                <Container>
                    <h1 className="competence-titre">Compétences</h1>
                    <div className="container competence-container">
                        <div className="competence-langages">
                            <h4>langages informatiques :</h4>
                            <p data-aos="fade-right">Html5 - Css3 - Sass - Bootstrap - Material-ui</p>                            
                            <p data-aos="fade-right">JavaScript - React.js - Node.js - Express.js</p>                            
                            <p data-aos="fade-right">Git - GitHub - GitLab</p>                            
                            <p data-aos="fade-right">MySQL - MongoDB</p>                            
                            <p data-aos="fade-right">Php</p>                            
                        </div>
                        <div className="competence-div-logo">
                            <ul>
                                <li>
                                    <img data-aos="zoom-in" className="competence-logo" alt="logo javascript.js" src={require('../image/site/imageJavascript.png')}></img>
                                </li>
                                <li>
                                    <img data-aos="zoom-in" className="competence-logo" alt="logo css3" src={require('../image/site/imageCss.png')}></img>
                                </li>
                                <li>
                                    <img data-aos="zoom-in" className="competence-logo" alt="logo react.js" src={require('../image/site/imageReact.png')}></img>
                                </li>
                                <li>
                                    <img data-aos="zoom-in" className="competence-logo" alt="logo html5" src={require('../image/site/imageHtml.png')}></img>
                                </li>
                                <li>
                                    <img data-aos="zoom-in" className="competence-logo" alt="logo node.js" src={require('../image/site/node.png')}></img> 
                                </li>
                                <li>
                                    <img data-aos="zoom-in" className="competence-logo" alt="logo bootstrap" src={require('../image/site/imageBootstrap.png')}></img>                                    
                                </li>
                                <li>
                                    <img data-aos="zoom-in" className="competence-logo" alt="logo php" src={require('../image/site/imagePhp.png')}></img>  
                                </li>
                            </ul>  
                        </div>
                    </div>                              
                </Container>                        
            </div> 
        )
    }
}
