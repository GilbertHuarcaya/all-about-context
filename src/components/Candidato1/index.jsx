import React from 'react';
import { sumarVotoC1, getVotesFromLocalStorage } from '../../context/actions';
import { useAppDispatch } from '../../context/store';

function Candidato1() {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    sumarVotoC1(dispatch);
    getVotesFromLocalStorage(dispatch);
  };

  return (
    <div className="candidate">
      <button type="button" className="button-inline" onClick={handleClick}>Vota por el Candidato1</button>
    </div>
  );
}

export default Candidato1;
