import React, { Component } from 'react'
import ShowText from './show_text'
import moment from 'moment'
let tempArray = []

export default class EnterMessage extends Component {

    constructor(props){
        super(props)
        this.state = {
            term : '',
            termArray: [],
            time: ""
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault()
        tempArray.push(this.timeNow() +" Brian Gold: " + ": " + this.state.term)
        this.setState({termArray: tempArray })
        this.setState({
            term: '', 
            showText:true,
            time: this.timeNow()
        })
    }


     convert(input) {
        return moment(input, 'HH:mm:ss').format('h:mm:ss A');
    }
    

     timeNow() {
        let d = new Date(),
            h = (d.getHours()<10?'0':'') + d.getHours(),
            m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
            s = (d.getSeconds()<10?'0':'') + d.getSeconds();
        let time = h + ':' + m + ':' + s;
        return this.convert(time)
      }

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit} className = "input-group">
                <input 
                    placeholder="Share your news!"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                 />
            <span className = "input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit </button>
            </span>
            </form>
            <ShowText text = {(this.state.termArray)}/>
            </div>
        )
    }
}
