import React, { Component } from 'react';
import './Bandit.css';
import BanditIcon from './BanditIcon/BanditIcon';

const icons = [
  "moon",
  "music",
  "sun"
]

class Bandit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: [],
      win: "JACKPOT"
    }
  }
  
  render() {
    for(var i in icons) {
      this.state.random.push(icons[Math.floor((Math.random() * icons.length))])
    }

    for(var j in this.state.random) {
      if(this.state.random[j] !== this.state.random[0]) {
        this.state.win = "Zkuste to příště!";
      }
    }
    const randomicons = this.state.random.map((icon) => 
      <BanditIcon url={icon} name={icon}/>
    );

    return (
    <div className="Bandit">
      <div>
        {randomicons}
      </div>
      <h1>{this.state.win}</h1>
    </div>
    );
  }
}

export default Bandit;

