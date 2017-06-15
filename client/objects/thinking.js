import Item from './item'

export default class Thinking extends Item {
  constructor(dispatch) {
    super(dispatch)
    this.logger()
    this.message = 'thinkin about love'
    this.image = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060'
  }
  mouseOn() {
    this.updateState()
    this.image = 'https://cdn.shopify.com/s/files/1/1061/1924/files/Heart_Eyes_Emoji_2.png?11214052019865124406'
  }
  mouseOff() {
    this.updateState()
    this.image = 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060'
  }

}
