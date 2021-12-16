import React from 'react';
import Titulo from './Components/Titulo/Titulo';
import SaludarAMuchos from './Components/SaludarAMuchos/SaludarAMuchos';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <>
      <Titulo title={"Hola React"}/>
      <Titulo title={"un link"} isLink={true} />
      <SaludarAMuchos />
      <Counter />
    </>
  );
};


export default App;