import React, { Component } from 'react'
import Radius from './radius'

// import keys from '../config/keys'

export default class GeoLocator  extends Component  {

constructor(props){
    super(props)
    this.state = {
        position: null,
        latitude: 0,
        longitude: 0,
        city: ""
    }
    this.geoLocator = this.geoLocator.bind(this)
    this.fetchCity = this.fetchCity.bind(this)

}

fetchCity = async () => {
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}`)
    const json = await res.json()
    this.setState({
        city: json.results[1].formatted_address
    })
 }

    geoLocator(){
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.setState({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                })
                this.fetchCity()
            }
                
            )
   
          } 
    }   
        render(){
            return(
            <div>
               <button className = "btn" onClick = {() => this.geoLocator()}> Find My Location </button> 
               <div className = "current-position"> Position: {this.state.latitude}, {this.state.longitude} </div>
               <div className = "current-city" > City: {this.state.city}</div>
               <Radius />
            </div>
        )
    }
   
}


