


//export const addFolder = name => ({ type: 'ADD_FOLDER', data: name });

// Used for spinner or saving ..
export function creatingFolder() {
  return { type: 'CREATING_FOLDER' };
}
// Final action used to add folder to State
// export function folderCreated(name) {
//   //console.log('turtle1' + name);
// return { type: 'ADD_FOLDER', data: name };
//
// }


// Account failed to create don't update State
export function folderCreatingFailed(error) {
  return { type: 'FOLDER_CREATING_FAILED', payload: error };
}

export const addFolder2 = name => {
console.log("adflasdfasdfsdf" + name);
//   function folderStateCreate() {
//     var name1 = name;
//     //return dispatch(folderCreated(name));
//     console.log('fuck it'+ name1);
//     //return dispatch(folderCreated(name1));
//     export const createFuckingFolder = name => ({ type: 'ADD_FOLDER', data: name });
//
//   };
//
//   return dispatch => {
//     dispatch(creatingFolder());
//     //console.log('ares1'+ name);
//
//     fetch('/api/folder', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: name
//       }),
//       //success: function() {console.log('tits')}
//
//     })
//     .then(dispatch(folderStateCreate()))
//     //.then(res => console.log(res))
//     //.then(res => res.json())
// //continue from here you were figuring out how to get message back from server
//     //.then(json => dispatch(folderCreated(json)))
//     //.then(json => console.log(json))
//     // .then(nameJson => {
//     //   respl = JSON.parse(nameJson);
//     //   console.log('addFold dispatch' + respl);
//
//       //dispatch(folderCreated('rrit'));
//     // })
//     .catch(err => {
//       dispatch(folderCreatingFailed(err));
//       console.log('folder Create Fail');
//     });
//
//     // fetch('api/folder',
//     // {
//     // method: "POST",
//     // body: { name: "turnip" }
//     // })
//       //.then(res => console.log(res))
//     //  .then(res => res.json())
//       //.then(json => console.log(json))
//       //.then(json => dispatch(receiveData(json)))
//   };
};
//LOGIN START
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('http://localhost:3333/sessions/create', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.id_token)
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

...

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}


// LOGIN END

export const addFolder3 = name => ({ type: 'ADD_FOLDER', data: name });
export const showAddDeck = () => ({ type: 'SHOW_ADD_DECK' });
export const hideAddDeck = () => ({ type: 'HIDE_ADD_DECK' });
export const addModalFolder = () => ({type: 'ADD_MODAL_FOLDER'});
export const addModalProc = () => ({type: 'ADD_MODAL_PROCESS'});

export const modalShowFold = () => ({type: 'ADD_MODAL_FOLD'});
export const modalShowProc = () => ({type: 'ADD_MODAL_PROCESS'});
export const modalShowDef = () => ({type: 'SHOW_MODAL_DEFAULT'});

export const addCard    = card   => ({ type: 'ADD_CARD',    data: card   });
export const addProcess = (name, folderDets)  => ({ type: 'ADD_PROCESS', processName: name, dets: folderDets});
export const updateCard = card   => ({ type: 'UPDATE_CARD', data: card   });
export const deleteCard = cardId => ({ type: 'DELETE_CARD', data: cardId });

export const filterCards = query => ({ type: 'FILTER_CARDS', data: query });
export const setShowBack = back  => ({ type: 'SHOW_BACK', data: back });

export const receiveData = data => ({ type: 'RECEIVE_DATA', data: data });
// fetchData is called at launch to pull in state from express server
// pull folders and processes from mongo
export const fetchData = () => {
  return dispatch => {
    fetch('/api/data')
      //.then(res => console.log(res))
      .then(res => res.json())
      //.then(json => console.log(json))
      .then(json => dispatch(receiveData(json)))
  };
};


export const folderData = data => ({ type: 'ADD_FOLDER', data: data });
export const addFolder = (name) => {
  return dispatch => {
    //var name1 = name;
    fetch('/api/folder', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name
          })
        })
      .then(json => dispatch(folderData(name)))
  };
};

//Maybe add a spinner here and error control
