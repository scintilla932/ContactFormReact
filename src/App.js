import React, { Component } from 'react';
import "./scss/style.scss"
import "./scss/reset.scss"
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ContactForm />
      </div>
    );
  }
}

export default App;
