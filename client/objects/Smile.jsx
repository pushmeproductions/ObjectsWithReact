import Item from './item'

export default class Smile extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.image = 'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558'

  }
  mouseOn() {
    console.log("mouse over");
    this.updateState()
    this.image = 'http://www.freepngimg.com/download/emoji/5-2-face-with-tears-of-joy-emoji-png.png'
  }
  mouseOff() {
    console.log("mouse off");
      this.updateState()

    this.image = 'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558'
  }
}
