import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  constructor() {
    super();

    this.state = {
      montsers: [
        {
          id: '12a1B',
          name: 'Hilda',
        },
        {
          id: '12a1B19n',
          name: 'Bertha',
        },
        {
          id: '12a1B08912n',
          name: 'Jack',
        },
        {
          id: '12a1Boij12',
          name: 'Alfred',
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.montsers.map((monster) => {
            return ( 
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
              );
          })
        }
      </div>
    );  
  }
}

export default App;
