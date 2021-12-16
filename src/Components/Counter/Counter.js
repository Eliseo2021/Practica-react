import React, { useState }  from "react";

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

export default Counter;