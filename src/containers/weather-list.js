import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart.js';

class WeatherList extends Component {

    render(){

      var that = this;

      //console.log('x',that.renderWeather);
      //console.log('x2',this.props.weather);
      //console.log('x3' + this.props.weather.map(x => console.log('xx'+ x)));

      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th> City </th>
              <th> Temperature (K)</th>
              <th> Pressure (hPa)</th>
              <th> Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(that.renderWeather) }
          </tbody>
        </table>
    );
  }

  renderWeather(data){

    console.log('in renderWeather');

    if(data){

      const temps = data.list.map(weather => weather.main.temp);
      const pressure = data.list.map(weather => weather.main.pressure);
      const humidity = data.list.map(weather => weather.main.humidity);

      console.log("temps:", temps);
      console.log("temps11:", data.city.id + ' ' + Date());

      return (
              <tr key={data.city.id + ' ' + Date()}>
                <td> {data.city.name} </td>
                <td><Chart data={temps} color="blue" units="K" /></td>
                <td><Chart data={pressure} color="green" units="hPa" /></td>
                <td><Chart data={humidity} color="red" units="%" /></td>
              </tr>
            );
        }
  }

}

function mapStateToProps( state ){ // pull state.weather from this like so...
  return { weather: state.weather };  //   === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
