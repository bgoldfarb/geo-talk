import React, {Component} from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const options = [
    { value: 'one', label: '1 Mile(s)' },
    { value: 'two', label: '5 Mile(s)', className: 'myOptionClassName' },
    { value: 'three', label: '10 Mile(s)', className: 'myOptionClassName' },
    { value: 'four', label: '50 Mile(s)', className: 'myOptionClassName' },
  ]

  const defaultOption = options[0]


export default class Radius  extends Component  {
    constructor(props) {
        super(props);

      }ite
      render() {
        return (
            <Dropdown options={options} onChange={this._onSelect} placeholder="Enter News Radius" />
        );
      }
      
}



