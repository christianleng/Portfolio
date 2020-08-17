import React, { Component } from "react";
import { Container } from '@material-ui/core';
import cv from "../CV/CV_Christian_Leng.pdf"

export default class Propos extends Component {
    render () {
        return(
            <div className="main-propos-coordonnes">
                <Container className="coordonnees">
                    <h2 className="coordonnees-titre">Coordonnées</h2>
                    <div className="coordonnees-div">
                        <div xs={6} sm={6} className="coordonnees-us">
                            <p data-aos="fade-up">Téléphone : 07 68 06 15 22</p>
                            <p data-aos="fade-up">Email : christan.leng@epitech.eu</p>
                            <p data-aos="fade-up">Vitry-sur-Seine 94400 Val-de-Marne</p>
                        </div>
                        <div xs={6} sm={6} className="coordonnees-web">
                            <p data-aos="fade-up"><a href="https://www.linkedin.com/in/christian-leng-90b4831a6/" rel="noopener noreferrer" target="_blank">Linkedin</a></p>
                            <p data-aos="fade-up"><a href="https://github.com/christianleng" rel="noopener noreferrer" target="_blank">GitHub</a></p>
                            <p data-aos="fade-up"><a href={cv} rel="noopener noreferrer" target="_blank" download>Télécharger mon CV</a></p>     
                        </div>
                    </div> 
                </Container>
            </div>
        )
    }
}


