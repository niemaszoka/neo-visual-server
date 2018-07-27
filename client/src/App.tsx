import * as React from 'react';
import './App.scss';
import { NasaApiService } from './services';

class App extends React.Component {
  public render() {
    NasaApiService.getNeoData();
    return (
      <div className="app">
          <header className="app__header">Neo visual!</header>
      </div>
    );
  }
}

export default App;
