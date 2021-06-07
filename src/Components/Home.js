import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                   {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay={100}>
            <h1>Dinh Ngoc Thai</h1>
            <h2>I'm a student on the way to become Designer and Developer</h2>
            <a href="/About" className="btn-about">About Me</a>
          </div>
        </section>{/* End Hero */}
            </div>
        )
    }
}
