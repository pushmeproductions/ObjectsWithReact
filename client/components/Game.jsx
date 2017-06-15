import React from 'react'
import Item from '../objects/item'
import Smile from '../objects/Smile'
import Thinking from '../objects/thinking'
import {connect} from 'react-redux'
import {receiveItem, dropItem} from '../actions/items'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      objects: props.items,
      inventory: props.inventory
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({objects: nextProps.items, inventory: nextProps.inventory})
  }
  componentWillMount() {
    console.log("mounted");
    this.props.dispatch(receiveItem(new Thinking(this.props.dispatch)))
    this.props.dispatch(receiveItem(new Smile(this.props.dispatch)))
  }
  renderItem(item) {
    return (
      <div className="item" >
        <img
          onClick={() => item.mouseClick()}
          onMouseOver={() => item.mouseOn()}
          onMouseOut={() => item.mouseOff()}
          src={item.image} />
      </div>
    )
  }
  render() {
    return <div>
      <h1>This is the game</h1>
      {this.state.objects.map(object => this.renderItem(object))}
      {this.state.inventory.map(item => <h1 onClick={() => this.props.dispatch(dropItem(item))}>{item.message}</h1>)}
    </div>
  }
}

const mapStateToProps = (state) => {
  return {items:state.items,
  inventory: state.inventory}
}

export default connect(mapStateToProps)(Game)
