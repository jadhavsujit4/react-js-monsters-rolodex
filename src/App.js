import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [
        {
          id: '1',
          name : 'Frankenstein',
          "email": "Franken@stein.com"
        },
        {
          id: '2',
          name : 'Dracula',
          "email": "Dra@cula.com"
        },
        {
          id: '3',
          name : 'Zombie',
          "email": "Zom@bie.com"
        },
        {
          id: '4',
          name : 'Vampire',
          "email": "Vam@pire.com"
        },
        {
          id: '5',
          name : 'Shakaal',
          "email": "Shak@all.com"
        },
        {
          id: '6',
          name : 'Mogambo',
          "email": "Mogam@bo.com"
        }
      ],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({monsters  : users}))
  // }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
