import {addItemToInventory} from '../actions/items'

export default class Item  {
  constructor(dispatch) {
    this.image = 'http://www.freepngimg.com/download/emoji/5-2-face-with-tears-of-joy-emoji-png.png'
    this.dispatch = dispatch
    this.message = "Item in inventory"
  }
  updateState() {
    this.dispatch({type: 'MOUSE_EVENT'})
  }
  mouseClick() {
    this.dispatch(addItemToInventory(this))
  }
  mouseOn() {

  }
  mouseOff() {

  }
  logger() {
    console.log(this.message);
  }
}
