import React from "react";
import "./Header.css";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    const { isAdding } = this.props;
    const actionText = isAdding ? "-" : "+";
    return (
      <div className="header">
        <div className="app-name">My Words</div>
        <div
          onClick={() => {
            this.props.dispatch({ type: "TOGGLE_IS_ADDING" });
          }}
          className="btn-add"
        >
          {actionText}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isAdding: state.isAdding };
}

export default connect(mapStateToProps)(Header);
