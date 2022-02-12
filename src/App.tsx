import { useReducer } from 'react';

import { Store, reducer, initialState } from 'store';
import Main from 'sections/Main';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Main />
    </Store.Provider>
  );
}

export default App;
