import _ from 'lodash';
import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
  return _.round( _.sum(data) / data.length );
}

export default class Chart extends Component {

  constructor(props){
    super(props);

    this.data = props.data;
    this.color = props.color;
    this.units = props.units;
  }

  render(){

    return (
      <div>
        <Sparklines height={120} width={180} data={this.data}>
          <SparklinesLine color={this.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        Average: {average(this.data) + " " + this.units}
      </div>
    );
  }
}
