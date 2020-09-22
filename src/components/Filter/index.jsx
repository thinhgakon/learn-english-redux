import React from "react";
import "./Filter.css";
import { connect } from "react-redux";

class Filter extends React.Component {
  getTextStyle(statusName) {
    const { filterStatus } = this.props;
    if (statusName === filterStatus)
      return { color: "yellow", backgroundColor: "lightslategrey" };
    else return { color: "white" };
  }

  render() {
    return (
      <div className="filter-box">
        <div
          onClick={() => {
            this.props.dispatch({ type: "FILTER_SHOW_ALL" });
          }}
          className="filter-btn"
          style={this.getTextStyle("SHOW_ALL")}
        >
          Show All
        </div>
        <div
          onClick={() => {
            this.props.dispatch({ type: "FILTER_MEMORIZED" });
          }}
          className="filter-btn"
          style={this.getTextStyle("MEMORIZED")}
        >
          Memorized
        </div>
        <div
          onClick={() => {
            this.props.dispatch({ type: "FILTER_NEED_PRACTICE" });
          }}
          className="filter-btn"
          style={this.getTextStyle("NEED_PRACTICE")}
        >
          Need Practice
        </div>
      </div>
    );
  }
}

Filter.propTypes = {};

function mapStateToProps(state) {
  return { filterStatus: state.filterStatus };
}

export default connect(mapStateToProps)(Filter);
