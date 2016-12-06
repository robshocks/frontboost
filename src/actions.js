export const addDeck = name => ({ type: 'ADD_DECK', data: name });
export const showAddDeck = () => ({ type: 'SHOW_ADD_DECK' });
export const hideAddDeck = () => ({ type: 'HIDE_ADD_DECK' });
export const addModalFolder = () => ({type: 'ADD_MODAL_FOLDER'});
export const addModalProc = () => ({type: 'ADD_MODAL_PROCESS'});

export const modalShowFold = () => ({type: 'ADD_MODAL_FOLD'});
export const modalShowProc = () => ({type: 'ADD_MODAL_PROCESS'});
export const modalShowDef = () => ({type: 'SHOW_MODAL_DEFAULT'});

export const addCard    = card   => ({ type: 'ADD_CARD',    data: card   });
export const updateCard = card   => ({ type: 'UPDATE_CARD', data: card   });
export const deleteCard = cardId => ({ type: 'DELETE_CARD', data: cardId });

export const filterCards = query => ({ type: 'FILTER_CARDS', data: query });
export const setShowBack = back  => ({ type: 'SHOW_BACK', data: back });

export const receiveData = data => ({ type: 'RECEIVE_DATA', data: data });
