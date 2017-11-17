import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
              <th> Temperature </th>
              <th> Pressure </th>
              <th> Humidity </th>
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

      return (
              <tr key={data.city.id}>
                <td> {data.city.name} </td>
                <td>
                  <Sparklines height={120} width={180} data={temps}>
                    <SparklinesLine color="blue" />
                  </Sparklines>
                </td>
              </tr>
            );
        }
  }

}

function mapStateToProps( state ){ // pull state.weather from this like so...
  return { weather: state.weather };  //   === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
