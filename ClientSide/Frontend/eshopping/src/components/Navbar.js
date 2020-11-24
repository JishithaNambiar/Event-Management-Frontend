import React, { Component } from 'react'
import Home from './Home'

class Navbar  extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Home</a>
    <a class="navbar-brand" href="/event">Events</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
            </nav>
         );
    }
}
 
export  default Navbar ;
