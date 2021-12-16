import React from "react";

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

export default Saludo