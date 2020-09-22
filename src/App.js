import React from 'react';
import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
