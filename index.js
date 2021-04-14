// 3 core concepts
//store:- holds state of your application 
//actions:- describe what happened
//reducer:- ties the store and action together

const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

//Action:-
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM
    }
}
//Reducer:- (previousState, action)=> newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }
const initialIcecreamState = {
    numOfIcecreams: 20
}
const initialCakeState = {
    numOfCakes: 10
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIcecreams: state.numOfIcecreams - 1
//         }
//         default: return state
//     }
// }
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}
//Store:-

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))                                          //1-holding application state
console.log('Initial State', store.getState())                             //2-allow access to state via getState()
const unsubscribe = store.subscribe(() => {})        //4-register listeners via subscribe(listener)
store.dispatch(buyCake())                                                 //3-allow state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()