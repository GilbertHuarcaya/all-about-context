import React, { useEffect } from 'react';
import { getVotesFromLocalStorage } from './context/actions';
import { useAppDispatch } from './context/store';
import './App.scss';
import Candidato1 from './components/Candidato1';
import Candidato2 from './components/Candidato2';
import Candidato3 from './components/Candidato3';
import Candidato4 from './components/Candidato4';
import Filtros from './components/Filtro';
import TotalVotos from './components/TotalVotos';
import VotosInd from './components/VotosIndividuales';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getVotesFromLocalStorage(dispatch);
  }, []);

  const handleClick = async () => {
    localStorage.clear();
    getVotesFromLocalStorage(dispatch);
  };
  return (
    <div className="App">
      <Candidato1 />
      <Candidato2 />
      <Candidato3 />
      <Candidato4 />
      <Filtros />
      <TotalVotos />
      <VotosInd />
      <button type="button" className="restart" onClick={handleClick}>Volver a empezar</button>
    </div>
  );
}

export default App;
