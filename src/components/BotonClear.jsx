import React from 'react';
import '../styles/BotonClear.css';

const BotonClear = (props) => (
 <div className = 'boton-clear' onClick ={props.manejarClear}>
      {props.children}
      {/* clear */}
 </div>

);

export default BotonClear;