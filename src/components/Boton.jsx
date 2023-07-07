import React from 'react';
import '../styles/Boton.css';

function Boton (props) {

    const esOperador = valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=') && (valor != 'back');
    }

     return(
        <div className={`contenedor-boton ${esOperador(props.children) ? 'operador' : props.children === '=' ? 'igual' : 
             props.children === 'back' ? 'atras' : ''}`.trimEnd()}
             onClick={() => props.manejarClic (props.children)}>
             {props.children}
        </div>
     );

}
export default Boton;
