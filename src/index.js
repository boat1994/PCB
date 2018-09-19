import React from 'react';
import ReactDOM from 'react-dom';
import Header from './app/component/main/js/header'
import Home from './app/component/home/js/home'
import Quote from './app/component/quote/js/quote'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

const NotFoundPage = () => {return<h1>404</h1>}

const AppWithRouter = () => (

<BrowserRouter>
  <div>

    <Header/>

    <div className="App container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/quote' component={Quote} />
        <Route  component={NotFoundPage} />
      </Switch>
    </div>

  </div>
</BrowserRouter>

)

ReactDOM.render(<AppWithRouter/>, document.getElementById('root'));
