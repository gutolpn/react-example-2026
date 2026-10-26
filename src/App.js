import Header from './Header';
import Footer from './Footer';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)
  let texto = "Vai Curintia"
  let resultado = ()=>{
    let sum=0
    for(let i=0; i< 100; i++){
      sum+=i
    }
    
    return sum
  }

  useEffect(()=>{
    setContador(contador+1)
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

      <Footer></Footer>
    </div>
  );
}

export default App;
