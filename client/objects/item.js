
export default class Item  {
  constructor(dispatch) {
    this.image = 'http://www.freepngimg.com/download/emoji/5-2-face-with-tears-of-joy-emoji-png.png'
    this.dispatch = dispatch
    this.message = "I am an item and I am being constructed"
  }
  updateState() {
    this.dispatch({type: 'MOUSE_EVENT'})
  }
  mouseOn() {

  }
  mouseOff() {

  }
  logger() {
    console.log(this.message);
  }
}
