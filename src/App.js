import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/header/Header';
import store from './store';
import Home from './pages/home';
import Deatil from './pages/detail';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/detail' exact component={Deatil} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
