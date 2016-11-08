import React, { Component } from 'react';

import Header from '../Header';
import Nav from '../Nav';
import Intro from '../Intro';
import Footer from '../Footer';
import Sponsors from '../Sponsors';
import Offer from '../Offer';
import Timeline from '../Timeline';
import Venue from '../Venue';
import Ticket from '../Ticket';
import Questions from '../Questions';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div id="wrapper">
        Hello
      </div>
    );
  }
}
