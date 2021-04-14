// 3 core concepts
//store:- holds state of your application 
//actions:- describe what happened
//reducer:- ties the store and action together

const redux = require('redux')
const createStore = redux.createStore

//Action:-
const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
//Reducer:- (previousState, action)=> newState

const initialState = {
    numOfCakes: 10
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
//Store:-
const store=createStore(reducer)                                          //1-holding application state
console.log('Initial State',store.getState())                             //2-allow access to state via getState()
const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()))        //4-register listeners via subscribe(listener)
store.dispatch(buyCake())                                                 //3-allow state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()                                                             