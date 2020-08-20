import React, { Component } from "react";
import { connect } from "react-redux";
import { randomColorActions } from "../actions/RandomColorActions";

class ButtonChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      colors: ["red", "blue", "green", "black", "orange"],
      renderedColor: [],
    };
  }
  handleClick() {
    const { colors } = this.state;
    const { dispatch } = this.props;
    let color = ''
    if (this.state.bgColor === "blue") {
      color = "green";
    } else {
      color = colors[Math.floor(Math.random() * colors.length)];
    }
    this.setState({ bgColor: color });
    if (this.props.renderedColor) {
      var allColors = this.props.renderedColor;
    } else {
       allColors = [];
    }
    var joined = allColors.concat(color);
    dispatch(randomColorActions.storeButtonColors(joined));
  }

  componentDidMount() {
    document.title = "React Screening";
  }

  render() {
    const { renderedColor } = this.props;
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
          {renderedColor.length > 0
            ? renderedColor.map((col, k) => {
                return (
                  <div>
                    {" "}
                    <h2 style={{ color: col, float: "left" }}>
                      {k > 0 ? ", " : ""}
                      {col}
                    </h2>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const renderedColor = state.buttonChange.buttonColors;
  return { renderedColor };
}

export default connect(mapStateToProps)(ButtonChange);
