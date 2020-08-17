import React, { Component } from 'react';

export default class Footer extends Component {
  render () {
    return (
        <footer>
            <div className="footer-logo">
                <a style={{ color: 'black',textDecoration: 'inherit' }} href="https://www.linkedin.com/in/christian-leng-90b4831a6/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a style={{ color: 'black',textDecoration: 'inherit' }} href="https://github.com/christianleng" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                <a href="#contact" style={{ color: 'black',textDecoration: 'inherit' }}><i class="fas fa-envelope"></i></a>
            </div>
        </footer>
    )
  }
}
