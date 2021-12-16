import React, { useState } from 'react';

function Titulo({title, isLink}) {
  if (isLink) {
    return (
      <a href='#' className='titulo__a'>
        {title}
      </a>
    );
  } else {
    return <h1>{title}</h1>;
  }
}


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
      <p> clickeaste cantidad de veces: {count}</p>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

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