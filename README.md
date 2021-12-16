Ejercitacion:
-------------------------------------------------------
1- Instalar React en un repositorio local
2- Crear un componente que muestre un mensaje saludando al usuario
3- Crear un componente que muestre un contador con dos botones (sumar y restar)
- Sostener en un estado el contador del usuario

NOTA: Usaremos el hook ueState para sostener el estado del componente.
NOTA: En clase podemos realizar el ejercicio en un solo componente (archivo), y posteriormente componetizarlo.
-------------------------------------------------------
1 Construyamos nuestra primera aplicación en React
Create react app: Comandos de consola: npx create-react-app my-app-name
import React from 'react';
function App() {
  return (
    <div>
      <Saludo />
    <div/>
  );
}
-------------------------------------------------------
2Componentes funcionales
function Saludo() {
        return <h1>Hola!</h1>
    }

    export default Saludo

-------------------------------------------------------
3Reutilización de componentes
- Podemos reutilizar componentes para crear componentes que se repiten en nuestra aplicación.
- Al ser funciones comprendemos que podemos recibir propiedades y utilizarlas


import Saludo from './Saludo'

    function SaludarAMuchos() {
        return (
            <div>
                <Saludo nombre="Juan" />
                <Saludo nombre="Pedro" />
                <Saludo nombre="Luis" />
            </div>
        )
    }
    function Saludo({nombre}) {
        return <h1>Hola ${nombre}!</h1>
    }

    export default Saludo

-------------------------------------------------------
4 Crear un componente que muestre un contador
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
