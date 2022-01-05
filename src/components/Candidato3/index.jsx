import React from 'react';
import { sumarVotoC3, getVotesFromLocalStorage } from '../../context/actions';
import { useAppDispatch } from '../../context/store';

function Candidato3() {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    sumarVotoC3(dispatch);
    getVotesFromLocalStorage(dispatch);
  };

  return (
    <div className="candidate">
      <button type="button" className="button-inline" onClick={handleClick}>Vota por el Candidato3</button>
    </div>
  );
}

export default Candidato3;
