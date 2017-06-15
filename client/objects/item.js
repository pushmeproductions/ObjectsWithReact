
export default class Item  {
  constructor(dispatch) {
    this.image = 'http://www.freepngimg.com/download/emoji/5-2-face-with-tears-of-joy-emoji-png.png'
    this.dispatch = dispatch
  }
  mouseOn() {

  }
  mouseOff() {
    
  }
  getImage() {
    console.log(this.image);
    return this.iamge
  }
}
