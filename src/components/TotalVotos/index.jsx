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
      <h2>Total de votos</h2>
      {total}
    </div>
  );
}

export default TotalVotos;
