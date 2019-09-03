import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props)

        //  THIS IS THE ONLY TIME WE DIRECTLY ASSIGN
        // TO this.state

        // (INITIALIZING STATE OBJECT)
        this.state = { lat: null, errorMessage: '' }

        // FETCH CURRENT USER LOCATION
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }
    // React says we have to define render
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Error: { this.state.lat }</div>
        }

        return <div>Waiting....</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

