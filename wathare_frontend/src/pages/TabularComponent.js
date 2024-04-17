import React, { Component } from 'react';
import StatusService from '../services/StatusService';
import 'bootstrap/dist/css/bootstrap.min.css';

class TabularComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      summary: {
        numOnes: 0,
        numZeros: 0,
        continuousOnes: 0,
        continuousZeros: 0
      }
    };
  }

  componentDidMount() {
    StatusService.getStatus().then((response) => {
      const status = response.data;
      const summary = this.generateSummary(status);
      this.setState({ status, summary });
    });
  }

  generateSummary(status) {
    let numOnes = 0;
    let numZeros = 0;
    let continuousOnes = 0;
    let maxContinuousOnes = 0;
    let continuousZeros = 0;
    let maxContinuousZeros = 0;

    for (let i = 0; i < status.length; i++) {
      if (status[i].machine_status === 0) {
        numZeros++;
        continuousZeros++;
        continuousOnes = 0; // Reset continuous ones counter
        maxContinuousOnes = Math.max(maxContinuousOnes, continuousOnes);
        maxContinuousZeros = Math.max(maxContinuousZeros, continuousZeros);
      } else {
        numOnes++;
        continuousOnes++;
        continuousZeros = 0; // Reset continuous zeros counter
        maxContinuousOnes = Math.max(maxContinuousOnes, continuousOnes);
        maxContinuousZeros = Math.max(maxContinuousZeros, continuousZeros);
      }
    }

    return { numOnes, numZeros, maxContinuousOnes, maxContinuousZeros };
  }

  render() {
    const { summary } = this.state;

    return (
      <div className="container">
        <h2 className="text-center my-4">Summary</h2>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Number of 1s</td>
              <td>{summary.numOnes}</td>
            </tr>
            <tr>
              <td>Number of 0s</td>
              <td>{summary.numZeros}</td>
            </tr>
            <tr>
              <td>Max Continuous 1s</td>
              <td>{summary.maxContinuousOnes}</td>
            </tr>
            <tr>
              <td>Max Continuous 0s</td>
              <td>{summary.maxContinuousZeros}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TabularComponent;
