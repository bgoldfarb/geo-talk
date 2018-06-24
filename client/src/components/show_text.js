import React, { Component } from 'react'
import styles from '../style/style.css'

export default class ShowText extends Component {

    constructor(props){
        super(props)
        this.state = {
            showText : this.props.showText
        }
    }

    showText(text){
         return(
                <div>
                    <p>{text.join("\n")} </p>
                </div>
            )
        
    }
  
   
    render(){
        return(
            <div className = "showing-text">
             
            {this.showText(this.props.text)}
             
            </div>
        )   
    }
}
