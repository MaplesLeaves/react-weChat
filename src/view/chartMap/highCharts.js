import React, { Component } from 'react'
import Highcharts from 'highcharts';
class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}

export class highCharts extends Component {
  render() {
    const options = {
      title: {
        text: 'Fruit Consumption',
      },
      xAxis: {
        categories: [
          'Apples',
          'Bananas',
          'Oranges',
          'Pineapples',
          'Blueberries',
        ],
      },
      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'Jane',
          data: [1, 0, 4, 0, 3],
        },
        {
          name: 'John',
          data: [5, 7, 3, 2, 4],
        },
        {
          name: 'Doe',
          data: [0, 0, 0, 1, 0],
        },
      ],
    };
    return (
      <div>
        <h2>图表</h2>        
        <Chart options={options} />
      </div>
    )
  }
}

export default highCharts
