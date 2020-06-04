/**
 * @decs root-components
 */

import React from 'react';

import store from './store'; // store
import { Provider } from 'react-redux'; // connector for store

import { BrowserRouter, Route } from "react-router-dom"; // 路由
import Header from './components/header/Header'; // 公共组件
import Home from './pages/home'; // 页面级组件 home
import Deatil from './pages/detail'; // 页面级组件 detail

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/detail' exact component={Deatil} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
