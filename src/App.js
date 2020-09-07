import React from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters:[],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <input type='search' placeholder='search monster' onChange={e=> {
          this.setState({ searchField: e.target.value },()=>console.log(this.state.searchField))
        }}></input>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
