function items (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case 'RECEIVE_ITEM':
    console.log({action});
      newState.push(action.item)
      return newState
    case 'MOUSE_EVENT':
      return newState
    case 'ADD_TO_INVENTORY':
      return newState.filter(item => item !== action.item)
    case 'DROP_FROM_INVENTORY':
      newState.push(action.item)
      return newState
    default:
      return state
  }
}

export default items
