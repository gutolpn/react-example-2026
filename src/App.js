import Header from './Header';
import Footer from './Footer';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)
  const [pessoas, setPessoas] = useState([])
  const [nome, setNome] = useState("")
  let texto = "Vai Curintia"
  let resultado = () => {
    let sum = 0
    for (let i = 0; i < 100; i++) {
      sum += i
    }

    return sum
  }

  let montarTagPessoa = () => {
    let tag = []

    pessoas?.forEach(pessoa => {
      tag.push(
        <div key={pessoa.id}>
          <label>Nome:</label> <b>{pessoa?.nome}</b>
        </div>
      )
    });

    return tag
  }

  let send2Back = (e) => {
    let novaPessoa = {nome: nome}

    console.log('teste123')
    
    let query = fetch('http://localhost:8080/pessoas', {
      method: 'POST', // Define o método HTTP
      headers: {
        'Content-Type': 'application/json', // Informa ao servidor que o corpo é um JSON
      },
      body: JSON.stringify(novaPessoa), // Converte o objeto JavaScript em string JSON
    });

    query.then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Oooops!");
      }
    }).then((data) => {
      console.log('data: ', data)
      setPessoas(data)
    })
  
  }

  //rodar uma vez
  useEffect(() => {

    let query = fetch("http://localhost:8080/pessoas")

    query.then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Oooops!");
      }
    }).then((data) => {
      console.log('data: ', data)
      setPessoas(data)
    })

  }, [])

  return (
    <div>
      <Header></Header>

      <p>{texto}</p>
      <p>Resultado: {resultado()}</p>

      <div>
        <button onClick={() => { setContador(contador - 1); console.log(contador) }}>-</button>
        {contador}
        <button onClick={() => { setContador(contador + 1); console.log(contador) }}>+</button>
      </div>

      <h2>Nova Pessoa</h2>
      <div>
        <label>Nome:</label> <input name="nome" onChange={(e) => { setNome(e.target.value) }}></input>
        <button onClick={send2Back}>OK</button>

      </div>

      <h2>Pessoas</h2>
      {montarTagPessoa()}

      <Footer></Footer>
    </div>
  );
}

export default App;
