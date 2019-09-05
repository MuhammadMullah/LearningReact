import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {
    //  THIS IS THE ONLY TIME WE DIRECTLY ASSIGN
    // TO this.state

    // (INITIALIZING STATE OBJECT)
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        // FETCH CURRENT USER LOCATION
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    // componentDidUpdate() {
    //     console.log("My Component was just updated -- it rerendered")
    // }
    // React says we have to define render
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = { this.state.lat }/>
        }

        return <Spinner message="Please accept location request.." />
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

