import * as React from "react";

export default class Home extends React.Component {
    render () {
        return (
            <>
                <div className="experience-formation">
                    <div className="container-formation">
                        <div className="container formation">
                            <h1 className="formation-titre">Formation</h1>
                            <h4 data-aos="fade-right">Samsung Campus by Epitech - Développeur web</h4>                                    
                            <p data-aos="fade-right" className="formation-adresse">12 Rue Fructidor, 93400 Saint-Ouen</p>
                            <p data-aos="fade-right" className="formation-text">"La pédagogie par projets proposée par EPITECH repose sur un modèle novateur qui permet à l’apprenant de développer ses capacités d’apprentissage par lui-même en adoptant les bons mécanismes de questionnement. Il sera ainsi à même d'entrer dans une démarche de perfectionnement constant et de s'adapter à l'évolution des technologies."</p>                
                            <a data-aos="fade-right" href="https://campus.samsung.fr/" rel="noopener noreferrer" target="_blank">Voir</a>                                    
                        </div>
                    </div>
                    <div className="container-experience">
                        <div className="container experience">
                            <h1 className="experience-titre">Expérience professionnelle</h1>
                            <h4 data-aos="fade-right">Southcomp Polaris - Magasinier</h4>
                            <p data-aos="fade-right" className="experience-adresse">2 Rue du Puits Dixme, 94310 Orly</p>
                            <ul className="experience-ul">
                                <li data-aos="fade-right">Réception de colis</li>
                                <li data-aos="fade-right">Rangement des produits</li>
                                <li data-aos="fade-right">Préparation et colisage de commandes à expédier aux clients</li>
                            </ul>         
                            <a data-aos="fade-right" href="https://www.google.com/search?sxsrf=ALeKk01cqQD5at7jQonrglcY2QHDeJexfA:1594736565177&q=southcomp+polaris&npsic=0&rflfq=1&rlha=0&rllag=48750260,2386551,270&tbm=lcl&ved=2ahUKEwjzzOjT-MzqAhUOohQKHY3JCMIQtgN6BAgLEAQ&rldoc=1#rlfi=hd:;si:932213130657205125,l,ChFzb3V0aGNvbXAgcG9sYXJpc1omChFzb3V0aGNvbXAgcG9sYXJpcyIRc291dGhjb21wIHBvbGFyaXM;mv:[[48.752843999999996,2.3878474],[48.7476768,2.3852547]]" rel="noopener noreferrer" target="_blank">Voir</a>
                        </div>
                    </div> 
                </div>
            </>
        )
    }
}