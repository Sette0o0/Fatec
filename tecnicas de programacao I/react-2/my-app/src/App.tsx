import './App.css'
import { Component } from 'react'

class App extends Component{
  verificarClique = (e: any) => {
    console.log(e)
    console.log("Voce clicou em: Clique aqui!")
  }

  render(){
    return (
      <div>
        <button onClick={this.verificarClique}>Clique aqui!</button>
      </div>
    )
  }
}

export default App
