import React, { Component } from 'react'
import Input from './Input';
import '../App.css'
import Sample from './Sample';
export default class Home_page extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">

          <div class="col">
            <Sample />
            <div className="home-container">
              <div className="home-content">
                <h1 className="home-title">Welcome to ZF</h1>
                <p className="home-intro">
                  Hello! My name is <span className="home-name">Roshan Kharode</span>. <br />
                  <br />
                  I have created this platform to enable faster workflows and easier access to comprehensive documentation, ensuring efficiency and clarity throughout the entire process.
                </p>
                <p className="home-extra">
                  Feel free to explore the site and let us know how we can improve to reduce effort and enhance efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="col">

          </div>

          <div className="col inputformis">
            <Input />
          </div>

        </div >
      </div>

    )
  }
}
