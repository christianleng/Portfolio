import React, { Component } from "react";
import { Container } from '@material-ui/core';
import * as emailjs from 'emailjs-com';

const emailRegex = RegExp(
    /^[A-Za-z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/
);

const formValid = ({ formErrors, ...res }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    })

    Object.values(res).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
}

export default class Header extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            scrolled: false,
            addModalShow: false,
            show: false,
            element: {
                prenom: '',
                email: '',
                sujet: '',
                message: '',                
            },
            formErrors: {
                prenom: "",
                email: "",
                sujet: "",
                message: "",
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case "prenom":
                formErrors.prenom = 
                    value.length < 2 ? "Veuillez saisir un prénom valide." : "";
                break;
            case "email":
                formErrors.email = 
                    emailRegex.test(value) ? "" : "L'adresse e-mail n'est pas valide.";
                break;
            case "sujet":
                formErrors.sujet =
                    value.length < 5 ? "Veuillez saisir un sujet correct." : "";
                break;
            case "message":
                formErrors.message = 
                    value.length < 10 ? "Veuillez saisir un message." : "";
                break;
                default:
                break;
        }

        this.setState({ formErrors, [name]: value });
    }
    onSubmit(e) {
        e.preventDefault();
        if(this.state.element !== "" ) {
            if(formValid(this.state)) {
                var service_id = "default_service";
                var template_id = "template_wW3Zl91A";
                var user_id = "user_RY69VNF68jekmUviH3tWd";
                emailjs.send(service_id, template_id, this.state, user_id)  
            }        
            this.setState({
                prenom: '',
                email: '',
                sujet: '',
                message: ''
            })  
        }
  
        
    }
    render () {
        const { formErrors } = this.state;

        return(
            <div className="contact" id="contact">
                <Container>
                    <h3 className="form-h3 m-titre contact-titre">Me contacter</h3>
                    <form action="Contact" method="POST" onSubmit={this.onSubmit}>
                        <div className="form-main">
                            <div className="form-div">
                                <div className="form-div-un">
                                    <input 
                                        type="text"
                                        name="prenom"
                                        id="prenom"
                                        placeholder="Votre prénom"
                                        required
                                        className="form-input"
                                        value={this.state.prenom}
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.prenom.length > 0 && (
                                        <span className="errorMessage">{formErrors.prenom}</span>
                                    )}
                                </div>
                                <div className="form-div-un ">
                                    <input 
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="Votre email"
                                        className="form-input"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className="form-div-un">
                                    <input 
                                        type="text" 
                                        name="sujet"
                                        id="sujet"
                                        required
                                        placeholder="Sujet"
                                        className="form-input"
                                        value={this.state.sujet}
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.sujet.length > 0 && (
                                        <span className="errorMessage">{formErrors.sujet}</span>
                                    )}
                                </div>
                            </div>
                            <div className="form-div-text">
                                <div className="form-div-textarea">  
                                    <textarea 
                                        type="text"
                                        name="message" 
                                        rows="4"
                                        id="message"
                                        required
                                        placeholder="Message"
                                        className="form-input form-textarea"
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.message.length > 0 && (
                                        <span className="errorMessage error-textarea">{formErrors.message}</span>
                                    )}
                                </div>                            
                            </div>
                        </div>
                        <div className="contact-bouton">
                            <button variant="outlined" type="submit">Envoyer</button>                            
                        </div>
                    </form>
                </Container>                        
            </div>
        )
    }
}
