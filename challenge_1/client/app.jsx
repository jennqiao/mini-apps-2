import ReactDom from 'react-dom';
import React from 'react';
import {Line} from 'react-chartjs-2';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleData = this.handleData.bind(this);
    this.styleData = this.styleData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData () {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((response) => response.json())
    .then( (response) => {
      this.handleData(response.bpi);
    })
    .catch((err) => {
      console.log('here is err', err)
    })
  }

  handleData (data) {
    let dates = Object.keys(data);
    let prices = dates.map((date) => {
      return data[date];
    });
   
    this.styleData(dates, prices);
  }

  styleData (labels, data) {
    let chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Bitcoin Close Rates',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data
        }
      ]
    };

    this.setState({
      chartData: chartData      
    })

  }

  render() {
    return (
      <div>
        <h1>
          CryptoChecker
        </h1>
         <Line data={this.state.chartData} />
      </div>

    )
  }

}

export default App;

