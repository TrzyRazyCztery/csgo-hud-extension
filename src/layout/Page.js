import React, { Component } from 'react';
import Content from './Content';
import Notifications from '../shared/Notifications';
import Header from './Header';
class Page extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Notifications />
        <Header />
        <Content />
      </div>
    );
  }
}

export default Page;
