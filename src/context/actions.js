import {
  SUMAR_VOTO_C1,
  SUMAR_VOTO_C2,
  SUMAR_VOTO_C3,
  SUMAR_VOTO_C4,
  GET_VOTES_FROM_LOCALSTORAGE,
  PORCENTAJE,
  NUMERO,
  MOSTRAR_1,
  MOSTRAR_TODOS,
} from './constants';

const Allvotos = [{ name: 'votosC1', hidden: false }, { name: 'votosC2', hidden: false }, { name: 'votosC3', hidden: false }, { name: 'votosC4', hidden: false }];

export const mostrarUno = (dispatch, candidate) => {
  Allvotos[candidate].hidden = !Allvotos[candidate].hidden;
  dispatch({ type: MOSTRAR_1, payload: Allvotos });
};
export const mostrarTodos = (dispatch, value) => {
  Allvotos[0].hidden = !value;
  Allvotos[1].hidden = !value;
  Allvotos[2].hidden = !value;
  Allvotos[3].hidden = !value;
  dispatch({ type: MOSTRAR_TODOS, payload: Allvotos });
};

export const cambiarAPorcentaje = (dispatch) => {
  dispatch({ type: PORCENTAJE, payload: true });
};
export const cambiarANumero = (dispatch) => {
  dispatch({ type: NUMERO, payload: true });
};

export const sumarVotoC1 = (dispatch) => {
  const votos = localStorage.getItem('C1');
  if (!votos) {
    localStorage.setItem('C1', 1);
    dispatch({ type: SUMAR_VOTO_C1, payload: null });
  }
  if (votos) {
    localStorage.setItem('C1', Number(votos) + 1);
    dispatch({ type: SUMAR_VOTO_C1, payload: null });
  }
};

export const sumarVotoC4 = (dispatch) => {
  const votos = localStorage.getItem('C4');
  if (!votos) {
    localStorage.setItem('C4', 1);
    dispatch({ type: SUMAR_VOTO_C4, payload: null });
  }
  if (votos) {
    localStorage.setItem('C4', Number(votos) + 1);
    dispatch({ type: SUMAR_VOTO_C4, payload: null });
  }
};
export const sumarVotoC2 = (dispatch) => {
  const votos = localStorage.getItem('C2');
  if (!votos) {
    localStorage.setItem('C2', 1);
    dispatch({ type: SUMAR_VOTO_C2, payload: null });
  }
  if (votos) {
    localStorage.setItem('C2', Number(votos) + 1);
    dispatch({ type: SUMAR_VOTO_C2, payload: null });
  }
};
export const sumarVotoC3 = (dispatch) => {
  const votos = localStorage.getItem('C3');
  if (!votos) {
    localStorage.setItem('C3', 1);
    dispatch({ type: SUMAR_VOTO_C3, payload: null });
  }
  if (votos) {
    localStorage.setItem('C3', Number(votos) + 1);
    dispatch({ type: SUMAR_VOTO_C3, payload: null });
  }
};

export const getVotesFromLocalStorage = (dispatch) => {
  Allvotos[0].value = Number(localStorage.getItem('C1'));
  Allvotos[1].value = Number(localStorage.getItem('C2'));
  Allvotos[2].value = Number(localStorage.getItem('C3'));
  Allvotos[3].value = Number(localStorage.getItem('C4'));
  if (Allvotos) {
    dispatch({ type: GET_VOTES_FROM_LOCALSTORAGE, payload: Allvotos });
  }
};
