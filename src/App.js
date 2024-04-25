import React, { Component } from 'react'
import LHL_EventForm from './Component/LHL_EventForm';
import LHL_EventForm2 from './Component/LHL_EventForm2';
import LHL_EventForm3 from './Component/LHL_EventForm3';
import LHL_EventForm4 from './Component/LHL_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event form Demo</h1>
        <LHL_EventForm/>
        <LHL_EventForm2/>
        <LHL_EventForm3/>
        <LHL_EventForm4 Name="Lê Hoàng Long" />
      </div>
    )
  }
}

export default App;