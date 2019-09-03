import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props)

        //  THIS IS THE ONLY TIME WE DIRECTLY ASSIGN
        // TO this.state
        this.state = { lat: null }

        // FETCH CURRENT USER LOCATION
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            err => console.log(err)
        );
    }
    // React says we have to define render
    render() {
        return <div>Latitude: {this.state.lat} </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

