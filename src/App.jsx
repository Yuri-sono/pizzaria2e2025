import { useState } from "react"


function App(){

  const [nome, setNome] = useState('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('Flamengo')
  const [pi] = useState(3.14)

  //var idade = 18;
  //let time = "Flamengo";
  //const pi = 3.14;

  const Formulario = (props)=> {
    const [valor, setValor] = useState()
    return (
      <div>
         <input 
        className="nome"
        placeholder= {props.sombra}
        onChange={(e)=>{setValor(e.target.value)}}
        type="text" />

        <button
          className="botao"
          onClick={()=>{
            if(valor.lenght > 0)
            alert(valor)
          else            
            ()=>{alert(props.nome + 'idade é'+ props.idade)}}
          if
            
          }
        >
          CLIQUE AQUI
        </button>
      </div>
    )
  }

  return (
      <div>
        <h3>Pizaaria 2E</h3>
      
       <Formulario nome="Ricardo" 
       idade= {45}
       sombra="Digite nome..." />
       <Formulario nome="sabo mt" sombra="Digite uma frase.."/>
       <Formulario nome="Cleberson" sombra="Digite seu apelido"/>
       <Formulario nome="Antonieta" sombra="valor de pi" />
      
      </div>
  )
}

export default App