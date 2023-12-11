import { useState } from "react"
import './buscaCep.scss'
import Bonequinhos from '../../assets/images/undraw_searching_re_3ra9.svg'
import axios from "axios"

export default function PorCep () {
    const [cep, setCep] = useState('')
    const [informacao, setInformacao] = useState('')
    const [erro, setErro] = useState('')
    
    async function chamada () {

        
        try {

            
            let link = 'https://viacep.com.br/ws/' + cep + '/json'

            let r = await axios.get (link)
            setInformacao(r.data.logradouro + ' Bairro:' + r.data.bairro + ' Localidade: ' + r.data.localidade )
            
        
        } 
        catch (err) {
               
            setErro('CEP não encontrado')
            
        }

       
      
    }



    return (
        <div className="container">
            <div className="elemento1">
                <img src= {Bonequinhos} />
                <div className="textos">
            <h1>Buscar seu Endereço por Cep</h1>

            <div className="search">
                Cep
                <input value={cep} onChange={e => setCep(e.target.value)} type="number" />
                <button onClick={chamada}>Buscar</button>

                <h2> {informacao} </h2>
                <h2 className="erro"> {erro} </h2>
            </div>
            </div>
            </div>
            <div className="pagina">
                <a href="/EncontrarCep">Consultar seu Cep </a>
                </div>
        </div>
    )
}