import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/main/js/header'
import Home from './component/home/js/home'
import Quote from './component/quote/js/quote'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
const th = require('./locale/th')
const en = require('./locale/en')

const store =  createStore(
  combineReducers({
    i18n: i18nReducer
  }),
  applyMiddleware(thunk)
);

syncTranslationWithStore(store)
store.dispatch(loadTranslations({th: th,en: en}));
store.dispatch(setLocale('th'));


const NotFoundPage = () => {return<h1>404</h1>}

const AppWithRouter = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/quote' component={Quote} />
            <Route  component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<AppWithRouter store={store} />, document.getElementById('root'));
