import { Component } from "react"

type InformacaoProps = {
    titulo: string,
    mensagem: string
}

class Informacao extends Component<InformacaoProps>{
    constructor(props: InformacaoProps){
        super(props)
    }
    render(){
        return(
            <>
                <h1>{this.props.titulo}</h1>
                <h2>{this.props.mensagem}</h2>
            </>
        )
    }
    
}
export default Informacao