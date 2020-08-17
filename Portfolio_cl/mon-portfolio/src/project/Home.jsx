import React, { Component } from "react";

import Experience from "./Experience";
import Header from "./Header";
import Propos from "./Propos";
import Competence from "./Competence";
import Projet from "./Projet";
import Contact from "./Contact";
import Footer from "./Footer";
import Coordonnees from './Coordonnees';

export default class Home extends Component {
    render () {
        return (
            <>
                <Header />
                <main>
                        <Propos />
                        <Experience />
                        <Competence />
                        <Projet />
                        <Coordonnees />
                        <Contact />
                </main>
                <Footer />
            </>
        )
    }
}

