import Informacao from "./Informacao"

function App(){
  return(
    <>
      <Informacao titulo="{props.titulo}" mensagem="{props.mensagem}"></Informacao>
    </>
  )
}
export default App