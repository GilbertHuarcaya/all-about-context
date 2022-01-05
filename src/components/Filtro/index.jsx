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
      <label htmlFor="porcentaje">
        <span> Ver en Porcentajes</span>
        <input name="tipo" type="radio" onChange={toPercentage} />
      </label>

      <label htmlFor="numero">
        <span> Ver en Números</span>

        <input name="tipo" type="radio" onChange={toNumber} defaultChecked />
      </label>

      {votos.map((e, index) => (
        <div key={`votoC${index + 1}`}>
          <label htmlFor={`candidato${index + 1}`}>
            <span>
              Ver votos del Candidato
              {index + 1}
            </span>

            <input name={`candidato${index + 1}`} type="checkbox" onChange={toggleshowOne} value={index} checked={!e.hidden} />
          </label>
        </div>
      ))}
      <label htmlFor="todos">
        <span>Ver todos</span>
        <input name="todos" type="checkbox" onChange={toggleshowAll} checked={validate} />
      </label>

    </div>
  );
}

export default Filtros;
