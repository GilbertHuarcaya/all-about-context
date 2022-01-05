import React from 'react';
import { sumarVotoC4, getVotesFromLocalStorage } from '../../context/actions';
import { useAppDispatch } from '../../context/store';

function Candidato4() {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    sumarVotoC4(dispatch);
    getVotesFromLocalStorage(dispatch);
  };
  return (
    <div className="Candidato4">
      <button type="button" className="c4" onClick={handleClick}>Vota por el Candidato4</button>
    </div>
  );
}

export default Candidato4;
