import React, { Component } from 'react';
import './App.css';
import { CardList }  from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
	constructor() {
    super();
    
		this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      console.log(users)
      this.setState({monsters: users})
    })
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value})
  }

	render() {

    // distructuring
    const {monsters, searchField} = this.state

    // Same as 
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField

    const filterMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

		return (
      <div>
			  <div className="App">
          <h1>Monsters</h1>
          <SearchBox
            placeholder='Search Monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filterMonsters}/>
        </div>
      </div>
		);
	}
}

export default App;
