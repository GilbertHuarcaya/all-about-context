import React from 'react';
import { sumarVotoC2, getVotesFromLocalStorage } from '../../context/actions';
import { useAppDispatch } from '../../context/store';

function Candidato2() {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    sumarVotoC2(dispatch);
    getVotesFromLocalStorage(dispatch);
  };
  return (
    <div className="Candidato2">
      <button type="button" className="c2" onClick={handleClick}>Vota por el Candidato2</button>
    </div>
  );
}

export default Candidato2;
