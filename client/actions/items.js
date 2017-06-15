import request from 'superagent'

export const receiveItem = (item) => {
  return {
    type: 'RECEIVE_ITEM',
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
