
import './App.css';
import React, { Component } from 'react';
import styles from './styles/Main.module.css';
import Card from './components/Card'
import Header from './components/Header/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      api : [],
    }
  }

  componentDidMount(){
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(response => response.json())
    .then(json => setTimeout(()=> this.setState({api : json}),2000))
  }

  render(){ 
    let cardArr = this.state.api.Search
    return ( 
    <>
    <Header/>
      <div className={ styles.Main }>
          <div className={ styles.CardGrid }>
            { cardArr ?  cardArr.map(item => <Card props={item}/>)   : null }
          </div>
        
      </div>
    </>
    );
  }
}
 

export default App;
