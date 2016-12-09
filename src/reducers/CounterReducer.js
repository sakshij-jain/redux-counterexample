const INITIAL_STATE = {
  count: 0
}


const CounterReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count : action.payload})
    case 'DECREMENT':
      return Object.assign({}, state, { count : action.payload})
    default:
      return state;
  }
}

export default CounterReducer;
