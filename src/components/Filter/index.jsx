import React from "react";
import "./Filter.css";
import { connect } from "react-redux";
import {
  filterShowAll,
  filterMemorized,
  filterNeedPractice,
} from "./../../actions/filterStatus";

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
            this.props.dispatch(filterShowAll());
          }}
          className="filter-btn"
          style={this.getTextStyle("SHOW_ALL")}
        >
          Show All
        </div>
        <div
          onClick={() => {
            this.props.dispatch(filterMemorized());
          }}
          className="filter-btn"
          style={this.getTextStyle("MEMORIZED")}
        >
          Memorized
        </div>
        <div
          onClick={() => {
            this.props.dispatch(filterNeedPractice());
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
