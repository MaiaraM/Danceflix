import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css'
import HomePage from './pages/HomePage';
import VideoRegisterPage from './pages/VideoRegisterPage';
import CategoryRegisterPage from './pages/CategoryRegisterPage';
import NotFoundPage from './pages/NotFoundPage';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path='/cadastro/video' component={VideoRegisterPage}/>
      <Route path='/cadastro/categoria' component={CategoryRegisterPage}/>
      <Route component={NotFoundPage} /> {/* 404 */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

