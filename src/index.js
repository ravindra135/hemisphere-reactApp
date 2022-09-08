import React from 'react';
import ReactDOM from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {
  
  state = { latitude: null, errorMessage: '' }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude
        })
        // setState is a function that gets put on our app component automatically when we extended react.Component;
      },
      (error) => {
        this.setState({ errorMessage: error.message })
      },
      {timeout:10000}
    );
  }

  render() {
    return (
      <div>
        {<HemisphereDisplay latitude={this.state.latitude} errorMes={this.state.errorMessage} />}
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
