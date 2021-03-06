import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserAuth from './components/UserAuth';
import DashBoard from './components/DashBoard';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Favorites from './components/Favorites';

import Facebook from './components/socialmedia/Facebook';
import YouTube from './components/socialmedia/YouTube';
import SoundCloud from './components/socialmedia/SoundCloud';
import Spotify from './components/socialmedia/Spotify';
import HypeM from './components/socialmedia/HypeM';

import './style/style.css';

class App extends Component {
  render() {
    return(
      <div>
        <Col md={4}>
          <SideBar />
        </Col>
        <Col md={8}>
          <Row>
            <Col>
              <UserAuth />
            </Col>
          </Row>
          <Row>
            {/* <BrowserRouter>
              <div>
                <Route path="/dashboard" component={DashBoard}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/feed" component={Feed}/>
              </div>
            </BrowserRouter> */}
          </Row>
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        linkValue: state.linkValue
    };
};

export default connect(mapStateToProps)(App);
