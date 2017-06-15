import request from 'superagent'

export const receiveItem = (item) => {
  return {
    type: 'RECEIVE_ITEM',
    item
  }
}

export const dropItem = (item) => {
  return {
    type: 'DROP_FROM_INVENTORY',
    item
  }
}

export const addItemToInventory = (item) => {
  return {
    type: 'ADD_TO_INVENTORY',
    item
  }
}

export function getGreetings () {
  return (dispatch) => {
    request
      .get(`/api/greetings`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveGreetings(res.body))
      })
  }
}
