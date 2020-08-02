import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css'
import Home from './pages/Home';
import CadastroVideo from './pages/CadastroVideo';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/video' component={CadastroVideo}/>
      <Route component={() => <div>404</div>} /> {/* 404 */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

