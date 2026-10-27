import Header from './Header';
import Footer from './Footer';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)
  const [pessoa, setPessoa] = useState({})
  let texto = "Vai Curintia"
  let resultado = ()=>{
    let sum=0
    for(let i=0; i< 100; i++){
      sum+=i
    }
    
    return sum
  }

  let montarTagPessoa = () => {
    let tag = <div>
                <label>Nome:</label> 
                <p>{pessoa?.name?.title}. {pessoa?.name?.first} {pessoa?.name?.last}</p>
              </div>

    return tag
  }

  //rodar uma vez
  useEffect(()=>{
    
    let query = fetch("https://randomuser.me/api/")
    
    query.then((response)=>{
      if(response.ok){
        return response.json()      
      } else {
        throw new Error("Oooops!");
      }
    }).then((data)=>{
        console.log('data: ', data.results[0])  
        setPessoa(data.results[0])
      })
    
  },[])

  return (
    <div>
      <Header></Header>

      <p>{texto}</p>
      <p>Resultado: {resultado()}</p>
      
      <div>
        <button onClick={()=>{setContador(contador-1); console.log(contador)}}>-</button>
        {contador}
        <button onClick={()=>{setContador(contador+1); console.log(contador)}}>+</button>
      </div>


      <h2>Pessoas</h2>
      {montarTagPessoa()}

      <Footer></Footer>
    </div>
  );
}

export default App;
