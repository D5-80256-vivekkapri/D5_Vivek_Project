import React, { Component } from 'react';

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      temperature: null,
      isLoading: false,
      error: null
    };
  }

  fetchWeather = (location) => {
    const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=4929be576ac34dd49f5101031241704&q=${location}`;

    fetch(weatherApiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then(data => {
        const temperature = data.current.temp_c;
        this.setState({
          location: data.location.name,
          temperature: temperature,
          isLoading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: 'Error fetching weather data',
          isLoading: false
        });
        console.error('Error fetching weather data:', error);
      });

    this.setState({ isLoading: true });
  };

  handleLocationChange = (event) => {
    const location = event.target.value;
    this.fetchWeather(location);
  };

  render() {
    const { location, temperature, isLoading, error } = this.state;

    return (
      <div className="container mt-5">
        <h2 className="mb-4">Weather Information</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Location"
            onChange={this.handleLocationChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.fetchWeather(location)}
          >
            Search
          </button>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-danger">Error: {error}</p>}
        {location && temperature && (
          <p className="text-success">Location: {location}, Temperature: {temperature}°C</p>
        )}
      </div>
    );
  }
}

export default WeatherComponent;
