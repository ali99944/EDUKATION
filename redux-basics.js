import redux from 'redux-thunk';
const createStore = redux.createStore;
const rootReducer = (state, action) =>{
    return state;
}
const store = createStore(rootReducer)
console.log(store.getState())