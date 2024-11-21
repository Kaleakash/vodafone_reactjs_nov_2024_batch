import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer'


let store = createStore(reducer);   // our initialState variable become global state. 


export default store;