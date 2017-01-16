// export const showBack = (state, action) => {
//   switch(action.type) {
//     case 'SHOW_BACK':
//       return action.data || false;
//     default:
//       return state || false;
//   }
// };
// {cardFilter: data or ''}
// export const cardFilter = (state, action) => {
//   switch (action.type) {
//     case 'FILTER_CARDS':
//       return action.data;
//     default:
//       return state || '';
//   }
// };
//
// export const cards = (state, action) => {
//   switch (action.type) {
//     case 'RECEIVE_DATA':
//       return action.data.cards || state;
//     case 'ADD_CARD':
//       let newCard = Object.assign({}, action.data, {
//         score: 1,
//         id: +new Date
//       });
//
//       return state.concat([newCard]);
//     case 'UPDATE_CARD':
//       let cardUpdate = action.data;
//       return state.map(card => (card.id !== cardUpdate.id) ?
//         card :
//         Object.assign({}, card, cardUpdate)
//       );
//     case 'DELETE_CARD':
//       return state.filter(c => c.id !== action.data);
//     default:
//       return state || [];
//   }
//};

export const folders = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
    console.log('recieve data');
      return action.data.folders || state;
    case 'ADD_FOLDER':
    //console.log('ADD FOLDER BOOM');
      let newFolder = { name: action.data, id: +new Date };
      return state.concat([newFolder]);
    default:
      return state || [];
  }
};
export const processes = (state, action) => {
//console.log('action process name '+ action.processName);
//console.log('action dets '+ action.dets);
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.data.processes || state;
    case 'ADD_PROCESS':
      let newProcess = Object.assign({}, {
      processName: action.processName,
      score: 1,
      id: +new Date,
      folderId: action.dets
      });
      return state.concat([newProcess]);
      //
      // let newProcess = { name: action.data, id: +new Date };
      // return state.concat([newProcess]);
    default:
      return state || [];
  }
};



// {addingDeck: true }}
// export const addingDeck = (state, action) => {
//   switch (action.type) {
//     case 'SHOW_ADD_DECK': return true;
//     case 'HIDE_ADD_DECK': return false;
//     default: return !!state;
//   }
// };

export const addingFolder = (state, action) => {
        switch (action.type) {
            case 'ADD_MODAL_FOLDER': return true;
            default: return !!state;
        }
};

export const addingFromModal = (state, action) => {
      switch (action.type) {
        case 'ADD_MODAL_FOLD': return 'folderShow';
        case 'ADD_MODAL_PROCESS': return 'processShow';
        case 'SHOW_MODAL_DEFAULT': return 'defaultAdd';
        default: return state || 'defaultAdd';
      }
};
