import React from 'react';
import { useAppState } from '../../context/store';

function TotalVotos() {
  const {
    votos,
  } = useAppState();

  let total = 0;
  votos.forEach((a) => { total += a.value; });

  return (
    <div className="TotalVotos">
      <h2 className="subtitle">Total de votos</h2>
      <span>{total}</span>
    </div>
  );
}

export default TotalVotos;
