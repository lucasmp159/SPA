import React, { Component } from 'react';
import api from './api';


class App extends Component {

  state= {
    personagens: [],
  }

  async componentDidMount(){
    const response = await api.get('')
    
    // console.log(response.data);

    this.setState({ personagens: response.data});
  }

  render(){

    const {personagens} = this.state;

    return( 
      <div>
        <h1>Listar personagens</h1>
        {console.log(personagens)}
        {personagens.map(personagem => (
          <li key={personagem.show.id}>
            <h2>
              <strong>Nome: </strong>
              {personagem.show.name}
              </h2>
          </li>
        ))}
      </div>
    );
  };
};


export default App;
