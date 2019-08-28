import React, { Component } from 'react';
import Grid from './components/grid/Grid.jsx';
// import Modal from './components/modal/Modal.jsx';
import NavBar from './components/navbar/NavBar.jsx'
import Carousel from './components/carousel/Carousel.jsx'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavBar/>
        <Carousel/>
        <Grid/>
      </>
    );
  }
}

export default App;
