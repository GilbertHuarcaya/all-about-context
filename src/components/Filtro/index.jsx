import React, { useState, useEffect } from 'react';
import {
  cambiarAPorcentaje, cambiarANumero, mostrarTodos, mostrarUno,
} from '../../context/actions';
import { useAppState, useAppDispatch } from '../../context/store';

function Filtros() {
  const dispatch = useAppDispatch();
  const {
    votos,
  } = useAppState();
  const [validate, setValidate] = useState(true);

  const toNumber = () => {
    cambiarANumero(dispatch);
  };
  const toPercentage = () => {
    cambiarAPorcentaje(dispatch);
  };
  const toggleshowAll = (e) => {
    mostrarTodos(dispatch, e.target.checked);
  };

  function toggleshowOne(e) {
    mostrarUno(dispatch, e.target.value);
  }
  useEffect(() => {
    const validateAllChecked = () => {
      const response = votos.find((e) => e.hidden === true);
      return setValidate(!response);
    };
    return validateAllChecked();
  });

  return (
    <div className="Filtros">
      <span htmlFor="porcentaje">Ver %</span>
      <input name="tipo" type="radio" onChange={toPercentage} />
      <span htmlFor="numero">Ver #</span>
      <input name="tipo" type="radio" onChange={toNumber} defaultChecked />
      {votos.map((e, index) => (
        <div key={`votoC${index + 1}`}>
          <span htmlFor={`candidato${index + 1}`}>
            Ver votos del Candidato
            {' '}
            {index + 1}
          </span>
          <input name={`candidato${index + 1}`} type="checkbox" onChange={toggleshowOne} value={index} checked={!e.hidden} />
        </div>
      ))}
      <span htmlFor="todos">Ver votos de todos los Candidatos</span>
      <input name="todos" type="checkbox" onChange={toggleshowAll} checked={validate} />
    </div>
  );
}

export default Filtros;
