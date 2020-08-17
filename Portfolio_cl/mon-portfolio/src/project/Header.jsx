import React, { Component } from "react";
import { Container } from '@material-ui/core';

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            scrolled: false,
        }
    }
    render () {
        return(
            <header>
                <Container className="header-container">
                    <h3 className="header-metier">DÉVELOPPEUR WEB</h3>
                    <h4 className="header-nom">CHRISTIAN LENG</h4>
                    <p className="header-text">Passionné par le côté créatif du développement web et je suis actuellement à la recherche d'une alternance en tant que développeur Front-End - React.js du 2 novembre 2020 jusqu'au 29 octobre 2021.</p>                        
                </Container>
                <a href="#propos" className="link-propos">
                    <i className="fas fa-angle-double-down iii"></i>                            
                </a>
            </header>
        )
    }
}