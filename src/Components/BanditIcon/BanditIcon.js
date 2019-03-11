import React, { Component } from 'react';
import './BanditIcon.css';

class BanditIcon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <img className="BanditIcon" src={"./" + this.props.url + ".png"} alt={this.props.name}/>
    );
  }
}

export default BanditIcon;

