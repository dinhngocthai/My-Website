import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Resume from '../Components/Resume'
import Result from '../Components/Result'
import Lab from '../Lab/Lab'
export default class RouterURL extends Component {
    render() {
        return (
            <Router>
        <Route exact path= "/" component={Home}/>
            <Route exact path= "/Home" component={Home}/>
            <Route exact path= "/About" component={About}/>
            <Route exact path= "/Contact" component={Contact}/>
            <Route exact path= "/Lab" component={Lab}/>
            <Route exact path= "/Resume" component={Resume}/>
            <Route exact path= "/Result" component={Result}/>
                   </Router>
        )
    }
}
