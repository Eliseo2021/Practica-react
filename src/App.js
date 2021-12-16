import React, { useState } from 'react';

function Saludo({nombre, apellido, edad}) {
  const inLineStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem'
  }

  return (
          <h1 style={inLineStyle}>
          Hola {nombre}, {apellido}, de edad: {edad}!
          </h1>
  );
};

function SaludarAMuchos() {
  return (
      <div>
          <Saludo nombre={"Juan"} apellido={"Perez"} edad={"30"}/>
        </div>
  )
}

function Counter() {
  /* useState: un objeto con dos elementos [count, setCount]  */
 const [count, setCount] = useState(0); //inicio de estado: puede ser cualquier dato.
  return (
    <div>
    <p> clickeaste: {count}</p>
    <button onClick={() => setCount(count + 1)}>
        Click Aqui!
    </button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Hola React</h1>
      <SaludarAMuchos />
      <Counter />
    </>
  );
};


export default App;