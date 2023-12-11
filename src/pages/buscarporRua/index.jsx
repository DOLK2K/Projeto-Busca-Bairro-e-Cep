import { useState } from 'react'
import bonequinho from '../../assets/images/undraw_searching_re_3ra9.svg'
import './index.scss'
import axios from 'axios'

export default function Encontar () {

    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [Logradouro, setLogradouro] = useState('')
    const [resultado, setResultado] = useState('')


    async function BuscarCep () {
        const url = 'https://viacep.com.br/ws/'+ uf +'/' + cidade + '/' + Logradouro + '/json/'

          let busca =  await axios.get(url)
          setResultado ( 'CEP: ' + busca.data[0].cep )
          console.log(busca.data[0].cep)
    }

    return (
        <div className='container1'>
            <div className='elemento2'>
                
            <div className='textos2'>
            <h1>Descobrir seu Cep</h1>
             <div className="busca">
                UF
                <input value={uf} onChange={e => setUf (e.target.value)} placeholder="ex: SP, RS, BH..."   type="text" />

                <div>
                    Cidade 
                    <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} />
                </div>

                <div>
                    Logradouro
                    <input type="text" value={Logradouro} onChange={e => setLogradouro(e.target.value)} />
                </div>
                <button onClick={BuscarCep}>Buscar</button>

                <h2> {resultado}  </h2>
                <h2 className="erro">  </h2>
                </div>
            </div>
            <div className='imagem-boneco'>
            <img src= {bonequinho} />
            </div>
            
            </div>

            <div className='pagina-rua'> <a href='/'>Buscar seu Endereço</a> </div>
        </div>
    )
}