import Header from './Components/Header';
import Form from './Components/form';
import React, { useState } from 'react';
import ResponseRecipe from './Components/ResponseRecipe';
export default function App() {
  const [ingrediArr, setIngrediArr] = React.useState([]);
  function grabItem(data) {
    const info = data.get('recipePutter');
    setIngrediArr(prev => [...prev, info]);
  }

  const [response,setResponse]=useState(false)

  function resC(){
    setResponse(prev=>!prev)
  }

  const listEle = ingrediArr.map((d,i) => <li key={i}>{d}</li>);
  return (
    <>
      <Header />
      <Form clk={grabItem} ingreC={ingrediArr} items={listEle} resC={resC}/>
      {response && <ResponseRecipe/>}
    </>
  );
}
