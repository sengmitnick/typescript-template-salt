import * as React from 'react';
import { hot } from 'react-hot-loader';
import './index.less';
// import logo from './logo.svg';
// import SnTabBar from '../Control/SnTabBar'
import SnScrollList from '../Control/SnScrollList'

class App extends React.Component {
  public render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     TypeScript + React + Less + SaltUI
      //   </p>
      //   <SnTabBar/>
      // </div>
      <SnScrollList/>
    );
  }
}

export default hot(module)(App);
