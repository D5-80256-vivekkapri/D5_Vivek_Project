import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import StatusService from '../services/StatusService';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabularComponent from './TabularComponent';

class StatusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      filteredStatus: [],
      startTime: '',
      endTime: ''
    };
  }

  componentDidMount() {
    StatusService.getStatus().then((response) => {
      const status = response.data;
      this.setState({ status, filteredStatus: status });
    });
  }

  filterData = () => {
    const { status, startTime, endTime } = this.state;
    if (!startTime || !endTime) return;

    const filteredStatus = status.filter((item) => {
      const timestamp = new Date(item.ts).getTime();
      return timestamp >= new Date(startTime).getTime() && timestamp <= new Date(endTime).getTime();
    });

    this.setState({ filteredStatus });
  };

  handleStartTimeChange = (event) => {
    this.setState({ startTime: event.target.value });
  };

  handleEndTimeChange = (event) => {
    this.setState({ endTime: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.filterData();
  };

  render() {
    const { filteredStatus } = this.state;

    const timestamps = filteredStatus.map((item) => item.ts);
    const vibrations = filteredStatus.map((item) => item.vibration);
    const machineStatus = filteredStatus.map((item) => item.machine_status);

    const colors = machineStatus.map((status) => (status === 0 ? 'yellow' : 'green'));

    const data = [
      {
        x: timestamps,
        y: vibrations,
        type: 'bar',
        marker: {
          color: colors
        }
      }
    ];

    return (
      <div className="container">
        <h1 className="text-center my-4">Machine Status</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Start Time:</label>
              <input type="datetime-local" className="form-control" value={this.state.startTime} onChange={this.handleStartTimeChange} />
            </div>
            <div className="col">
              <label className="form-label">End Time:</label>
              <input type="datetime-local" className="form-control" value={this.state.endTime} onChange={this.handleEndTimeChange} />
            </div>
            <div className="col-auto align-self-end">
              <button type="submit" className="btn btn-primary">Filter</button>
            </div>
          </div>
        </form>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Plot
              data={data}
              layout={{
                width: '100%',
                height: 400,
                title: 'Machine Vibration vs. Timestamp',
                xaxis: { title: 'Timestamp' },
                yaxis: { title: 'Vibration' }
              }}
            />
          </div>
        </div>

        <div>
          <TabularComponent/>
        </div>
      </div>

     
    );
  }
}

export default StatusComponent;
