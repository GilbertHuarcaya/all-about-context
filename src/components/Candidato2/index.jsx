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
    <div className="candidate">
      <button type="button" className="button-inline" onClick={handleClick}>Vota por el Candidato2</button>
    </div>
  );
}

export default Candidato2;
