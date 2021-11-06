import React, { Component } from 'react';
import './App.css';
import SignIn from './containers/signin/SignIn';
import Register from './containers/register/Register';
import Navigation from './components/navigation/navigation';
import Particles from 'react-tsparticles';
import 'tachyons';

const particlesOptions = {
  background: {
    color: {
      value: "#0d47a1",
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      //outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 30,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
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
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> :
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
