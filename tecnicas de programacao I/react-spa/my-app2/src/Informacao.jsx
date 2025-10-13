import { Component } from "react"

class Informacao extends Component{
    render(){
        return(
            <>
                <h1>{props.titulo}</h1>
                <h2>{props.mensagem}</h2>
            </>
        )
    }
    
}
export default Informacao