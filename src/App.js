import React, { Component } from 'react';
import './App.css';
import SignIn from './containers/signin/SignIn';
import Register from './containers/register/Register';
import Navigation from './components/navigation/navigation';
import Particles from 'react-tsparticles';
import 'tachyons';

const particlesOptions = {
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      enable: true,
      distance: 155,
      opacity: 0.4,
      width: 2
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 300 ,
      },
      value: 30,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 6,
      size_min: 1000,
      sync: false
    },
  },
  detectRetina: true
}

// state when user logs in
const initialState = {
  route: 'signIn',
  isSignedIn: false,
  userProfile: {
      id: '',
      name: '',
      email: '',
      password: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'Home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  loadUser = (data) => {
      this.setState({userProfile: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password
      }});
  }

  render() {
    const { isSignedIn, route} = this.state; // Destructuring
    return (
        <div className="App">
          <Particles className="particles" params={particlesOptions} />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          { this.state.route === 'Home' ?
            <div>
                POSTALOT being maintained...
            </div> : (
              route === 'signIn' ?
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
          }
        </div>
    );
  }
}

export default App;
