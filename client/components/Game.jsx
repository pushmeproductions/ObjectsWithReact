import React from 'react'
import Item from '../objects/item'
import Smile from '../objects/Smile'
import Thinking from '../objects/thinking'
import {connect} from 'react-redux'
import {receiveItem} from '../actions/items'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      objects: props.items
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({objects: nextProps.items})
  }
  componentWillMount() {
    console.log("mounted");
    this.props.dispatch(receiveItem(new Thinking(this.props.dispatch)))
    this.props.dispatch(receiveItem(new Smile(this.props.dispatch)))
  }
  renderItem(item) {
    return (
      <div className="item" >
        <img onMouseOver={() => item.mouseOn()} onMouseOut={() => item.mouseOff()} src={item.image} />
      </div>
    )
  }
  render() {
    return <div>
      <h1>This is the game</h1>
      {this.state.objects.map(object => this.renderItem(object))}
    </div>
  }
}

const mapStateToProps = (state) => {
  return {items:state.items}
}

export default connect(mapStateToProps)(Game)
