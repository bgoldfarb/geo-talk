import React, { Component } from 'react'

export default class ShowText extends Component {

    constructor(props){
        super(props)
    }

   
    render(){
        return(
            <div className = "showing-text">
              {this.props.text}
            </div>
        )
    }
}
