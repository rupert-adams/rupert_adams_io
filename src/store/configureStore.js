import { createStore } from 'redux';
import { switchPersona } from '../actions/actions.js';
import { personaOne } from '../data/personaData.js';
import { personaReducer } from '../reducers/reducers.js'

export default () => {
    const store = createStore(personaReducer)
    store.dispatch(switchPersona( personaOne ))
    return store;
}
