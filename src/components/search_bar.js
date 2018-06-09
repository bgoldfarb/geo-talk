import React, { Component } from 'react'
import ShowText from './show_text'
let tempArray = []

export default class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            term : '',
            termArray: []
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
        tempArray.push(this.state.term)
        this.setState({termArray: tempArray })
        this.setState({term: ''})
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
            <ShowText text = {this.state.termArray}/>
            </div>
        )
    }
}
