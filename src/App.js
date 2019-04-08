import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }
  render() {
    return (
      <div>
        <header className="main-header">
        <div className={this.state.showMenu ? 'menu slide' : 'menu'}>
          <span>SERVICES</span>
          <span>PORTFOLIO</span>
          <span>ABOUT</span>
          <span>TEAM</span>
          <span>CONTACT</span>
        </div>
          <nav className="nav-bar">
            <div className="title">Start Bootstrap</div>
            <div className="links-container">
              <span>SERVICES</span>
              <span>PORTFOLIO</span>
              <span>ABOUT</span>
              <span>TEAM</span>
              <span>CONTACT</span>
            </div>
            <div 
              className="ham-menu"
              onClick={() => this.setState({showMenu: !this.state.showMenu})}
              >MENU &#9776;</div>
          </nav>
          <div className="center-text">
            <h3>Welcome To Our Studio!</h3>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </header>
        <div className="top-body">
          <h1>SERVICES</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="layout">
            <div className="col">
              <div className="circle"></div>
              <h5>E-Commerce</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col">
              <div className="circle"></div>
              <h5>Responsive Design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col">
              <div className="circle"></div>
              <h5>Web Security</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
