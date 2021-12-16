import React from 'react';

function Saludo() {
  return <h1>Hola Mundo!</h1>;
};



function App() {
  return (
    <>
      <h1>Hola React</h1>
      <Saludo />
    </>
  );
};


export default App;