import React from 'react';

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



function App() {
  return (
    <>
      <h1>Hola React</h1>
      <SaludarAMuchos />
    </>
  );
};


export default App;