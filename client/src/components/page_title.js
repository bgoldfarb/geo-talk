import React, {Component} from 'react'

const pageTitle = () => {

    return(
        <nav>
            <div className="nav-wrapper teal lighten-3">
            <a href="#" className="brand-logo">GeoTalk</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href='/auth/google'> Sign in with Google </a></li>
                <li><a href='/api/logout'> Logout </a></li>
            </ul>
            </div>
      </nav>
    )
}


export default pageTitle