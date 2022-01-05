import React from 'react';
import { useAppState } from '../../context/store';

function VotosInd() {
  const {
    votos, porcentaje,
  } = useAppState();
  let total = 0;
  votos.forEach((a) => { total += a.value; });
  return (
    <div className="VotosInd">
      {votos.map((e, index) => (
        <div className="voto" key={`votoC${index + 1}`} hidden={e.hidden}>
          <h3>
            Votos de Candidato
            {index + 1}
          </h3>
          <span>{porcentaje && total > 0 ? `${((e.value * 100) / total).toFixed(2)}%` : e.value}</span>
        </div>
      ))}

    </div>
  );
}

export default VotosInd;
