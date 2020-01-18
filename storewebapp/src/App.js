import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './App.css';
import Root from "./Root";
import {Provider} from "react-redux";
import {createStore} from "redux";
import StoreApp from "./ReduxDB/Reducer"; 

const store = createStore(StoreApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
function App() {
  return (
   <Provider store={store} >
      <Root />
   </Provider>
  );
}

export default App;
