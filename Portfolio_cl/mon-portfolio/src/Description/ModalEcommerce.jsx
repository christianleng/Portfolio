import React, { Component } from "react";
import { Modal } from "react-bootstrap";  
import Button from '@material-ui/core/Button';

export default class ModalEcommerce extends Component {
    render() {
        return (
            <React.Fragment>
                <Modal 
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <div className="modal-container">
                        <Modal.Header closeButton>
                        <Modal.Title>Print'n go</Modal.Title>
                        </Modal.Header>
                        <p className="modal-p">Print'n go met en place plusieurs shops avec différent figurine que peuvent acheter nos clients. Ces figurines sont réalisées par des vendeurs, inscrit au site, qui possèdent leurs propres boutiques.</p>
                        <p className="modal-p">Le site Print'n go a été réalisé en 1 mois en groupe de 9. Ce projet m'a permis d'améliorer mon niveau en react.js et Laravel mais aussi de découvrir un domaine que je ne connaissais pas, le marketing, et de voir l'importance du marketing au sein d'un site marchand.</p>
                        <div className="modal-img">
                            <img alt= "represente la partie accueil du site" src={require('../image/ecommerce/siteaccueil.png')} className="ecommerce-image-du-site"></img>
                            <p>Page d'accueil du site Print'n go.</p>              
                            <img alt= "represente la partie devis du site" src={require('../image/ecommerce/sitedevis.png')} className="ecommerce-image-du-site"></img>
                            <p>Devis qui permet au client d'imprimer tout type de figurine.</p>
                            <img alt= "represente la partie inscription du site" src={require('../image/ecommerce/siteinscription.png')} className="ecommerce-image-du-site"></img>
                            <p>Page d'inscription qui permet de choisir son orientation: un client ou un vendeur.</p>                       
                        </div>
                        <div>    
                            <div className="modal-figurine">
                                <img alt= "des figurines" src={require('../image/ecommerce/figurineUn.png')} className="ecommerce-image-de-figurine"></img>
                                <img alt= "des figurines" src={require('../image/ecommerce/figurineDeux.png')} className="ecommerce-image-de-figurine"></img>
                                <img alt= "des figurines" src={require('../image/ecommerce/figurineTrois.png')} className="ecommerce-image-de-figurine"></img>
                            </div>
                            <p className="modal-figutine-p">Voici quelques représentations de figurines, imprimer par nos vendeurs, que peuvent retrouver les clients.</p>  
                        </div>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.props.onHide}>
                                Fermer
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}