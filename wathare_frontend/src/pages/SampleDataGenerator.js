import React, { Component } from 'react';

class SampleDataGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numDataPoints: 10, // Default number of data points
      sampleData: ''
    };
  }

  // Function to generate random sample data
  generateSampleData = () => {
    const { numDataPoints } = this.state;
    const data = [];

    // Generate data for the specified number of data points
    for (let i = 0; i < numDataPoints; i++) {
      const timestamp = new Date().toISOString(); // Generate new timestamp for each data point
      const machineStatus = Math.random() < 0.5 ? 0 : 1; // Randomly choose 0 or 1 for machine status
      const vibration = Math.floor(Math.random() * 1000); // Random vibration value between 0 and 999

      // Add data point to the array
      data.push({ ts: timestamp, machine_status: machineStatus, vibration: vibration });
    }

    // Convert data to JSON format
    const jsonData = JSON.stringify(data, null, 2);

    // Update state with the generated sample data
    this.setState({ sampleData: jsonData });
  };

  // Function to handle changes in the number of data points input field
  handleNumDataPointsChange = (event) => {
    const numDataPoints = parseInt(event.target.value, 10); // Parse input value as integer
    this.setState({ numDataPoints });
  };

  render() {
    const { numDataPoints, sampleData } = this.state;

    return (
      <div className="container">
        <h2 className="mt-4">Sample Data Generator</h2>
        <div className="form-group">
          <label htmlFor="numDataPoints" className="mt-3">Number of Data Points:</label>
          <input
            type="number"
            id="numDataPoints"
            className="form-control"
            value={numDataPoints}
            onChange={this.handleNumDataPointsChange}
          />
        </div>
        <button className="btn btn-primary" onClick={this.generateSampleData}>
          Generate Sample Data
        </button>

        <h3 className="mt-4">Generated Sample Data:</h3>
        <pre>{sampleData}</pre>
      </div>
    );
  }
}

export default SampleDataGenerator;
