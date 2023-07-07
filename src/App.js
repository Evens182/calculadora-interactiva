import './App.css';
import fcclogo from './images/fcc_primary.jpg';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, SetInput] = useState('');
  
  const agregarInput = val => {
    SetInput(input + val);
  };

  /*const calcularResultado = () => {
    if(input) {
      SetInput(evaluate(input));
    }if((input.search('+') !=-1) || (input.search('-') !=-1) || (input.search('/') !=-1) || (input.search('*') !=-1)) {
      SetInput(evaluate(input));
    }else{
      alert('Ingrese valores validos para hacer el calculo!');
    }
  }*/

  const calcularResultado = () => {
    if((input) && ( (input.includes('+')) || (input.includes('-')) || (input.includes('/')) || (input.includes('*')) ) ){
      SetInput(evaluate(input));
    }else{
      //alert('Ingrese valores validos para hacer el calculo!');
    }
  }
  
  const retroceder = () => {
    if(input) {
      var str = input;
      str = str.substring(0, str.length - 1);
      SetInput(str);
    }else{
      //alert('Ingrese valores validos para hacer el calculo!');
    }
  }

  return (
    <div className='App'>
      <div className = 'cal-logo-contenedor'>
        <img src={fcclogo} className='cal-logo' alt='Logo de Calculadora'/>
      </div>
      
      <div className='contenedor-calculadora'> 
              
          <Pantalla input = {input}/>
      
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {agregarInput}>*</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {agregarInput}>-</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {agregarInput}>+</Boton>
        </div>
        <div className = 'fila'>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {agregarInput}>.</Boton>
          <Boton manejarClic = {retroceder}>back</Boton>
          <Boton manejarClic = {agregarInput}>/</Boton>
        </div>

        <div className = 'fila'>
        <BotonClear manejarClear = {() => SetInput('')}>
          Clear
        </BotonClear>
        <Boton manejarClic = {calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
