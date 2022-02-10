import React,{ Component }  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header.js';
import Bio from './components/bio.js';
import Blog from './components/blog.js';
import configureStore from './store/configureStore.js';
import Contact from './components/contact.js';
import notFound from './components/notFound.js';
import { personaReducer } from './reducers/reducers.js';
import './style/App.css';

const store = configureStore(personaReducer)

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path='/' component={Bio} exact={true} />
              <Route path='/blog' component={Blog} />
              <Route path='/contact' component={Contact} />
              <Route component={notFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
