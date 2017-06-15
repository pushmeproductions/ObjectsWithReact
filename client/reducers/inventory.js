function inventory (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case 'ADD_TO_INVENTORY':
      console.log({action});
      newState.push(action.item)
      return newState
    case 'DROP_FROM_INVENTORY':
      return newState.filter(item => item !== action.item)
    default:
      return state
  }
}

export default inventory
