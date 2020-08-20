import React, { Component } from "react";
import {connect} from 'react-redux'
import { randomColorActions } from "../actions/RandomColorActions";

class ButtonChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      colors: ["red", "blue", "green", "black", "orange"],
      renderedColor: []
    };
  }
  handleClick() {
    const { colors } = this.state;
    const { dispatch } = this.props
    const color = colors[Math.floor(Math.random() * colors.length)];
    if (this.state.bgColor === "green") {
      this.setState({ bgColor: "blue" });
    } else {
      this.setState({ bgColor: color });
    }
     var joined = this.props.renderedColor.concat(color)
    debugger
    dispatch(randomColorActions.storeButtonColors(joined))
  }

  componentDidMount() {
    document.title = "React Screening";
  }

  render() {
    const {renderedColor} = this.props
    return (
      <div>
        <div>
          <h1>Click button to view the random change of color</h1>
          <button
            className="button-change"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.handleClick.bind(this)}
          >
            Change
          </button>
          { 
            renderedColor.empty === false ?
            renderedColor.map((col, k) => {
              return(
                <div> <h2 style = {{color: col, float: "left"}}>{k > 0 ? ', ' :''}{col}</h2></div>
              
              )
            })
            : ''
          }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  debugger
  const  renderedColor = state.buttonChange.buttonColors
  return { renderedColor }
}

// export default ButtonChange
export default  connect(mapStateToProps)(ButtonChange)

