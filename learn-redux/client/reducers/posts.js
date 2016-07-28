// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. A copy of current state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      const idx = action.index;
      console.log("Action is ", action);
      console.log("Incrementing likes", state[idx]);
      return [
        ...state.slice(0,idx), //before the one we are updating
        {...state[idx], likes: state[idx].likes + 1},
        ...state.slice(idx+1) //after the one we are updating

      ]
      break;
    default:
      return state;
  }
  return state;
}

export default posts;
