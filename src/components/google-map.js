import React, { Component } from 'react';

export default class GoogleMap extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    console.log("lat", this.props.lat);
    console.log("lon", this.props.lon);


    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });

  }

  render(){

    console.log("in render");
    return <div ref="map" />;
  }
}
