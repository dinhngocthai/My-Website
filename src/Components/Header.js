import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
       {/* ======= Header ======= */}
       <header id="header" className="fixed-top">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <h1 className="logo"><a href="/">Thai</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav className="nav-menu d-none d-lg-block">
              {/* <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Resume">Resume</a></li>
                <li><a href="https://github.com/dinhngocthai/MyWebsite" target="_blank">Github</a></li>
                <li><a href="http://project07.tk/" target="_blank">Project</a></li>
                <li><a href="/Lab">Lab</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul> */}
            </nav>{/* .nav-menu */}
            <div className="header-social-links">
              {/* <a href="#" className="twitter"><i className="icofont-twitter" /></a>
              <a href="#" className="facebook"><i className="icofont-facebook" /></a>
              <a href="#" className="instagram"><i className="icofont-instagram" /></a>
              <a href="#" className="linkedin"><i className="icofont-linkedin" /></a> */}
                <a href="/">Home</a>
                <a></a>
                <a href="/About">About</a>
                <a></a>


                <a href="https://github.com/dinhngocthai/MyWebsite" target="_blank">Github</a>
                <a></a>

               <a href="https://projecthci07.tk/" target="_blank">Project</a>
               <a></a>
                <a href="/Lab">Lab</a>
                <a></a>
                <a href="/Result">Result</a>
                <a></a>


                <a href="/Contact">Contact</a>
            </div>
          </div>
        </header>{/* End Header */}
            </div>
        )
    }
}
