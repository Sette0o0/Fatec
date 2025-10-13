import { Component } from "react"

type DataState = {
    data: Date
}

export default class Data extends Component<{}, DataState>{
    private temporizador: any
    constructor(props: any){
        super(props);
        this.state = {
            data: new Date()
        }
    }

    alteracao(){
        this.setState({
            data: new Date()
        })
    }

    componentDidMount(){
        this.temporizador = setInterval(() => this.alteracao(), 1000)
    }

    render(){
        return (
            <div>
                <h1>Data e hora de agora</h1>
                <h2>
                    Data: {this.state.data.toLocaleDateString()}
                    <span>{" "}</span>
                    Hora: {this.state.data.toLocaleTimeString()}
                </h2>

            </div>
        )
    }
}