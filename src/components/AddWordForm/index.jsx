import React, { Component } from "react";
import "./AddWordForm.css";
import { connect } from "react-redux";

class AddWordForm extends Component {
  constructor(props) {
    super(props);
    this.state = { en: "", vn: "" };

    this.handleChangeEN = this.handleChangeEN.bind(this);
    this.handleChangeVN = this.handleChangeVN.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  handleChangeEN(event) {
    this.setState({ en: event.target.value });
  }
  handleChangeVN(event) {
    this.setState({ vn: event.target.value });
  }
  onAdd() {
    const { en, vn } = this.state;
    this.props.dispatch({
      type: "ADD_WORD",
      en,
      vn,
    });
    this.setState({ en: "", vn: "" });
  }
  render() {
    return (
      <div className="form-add-word">
        <div className="english-word-input">
          <input
            type="text"
            value={this.state.en}
            onChange={this.handleChangeEN}
            placeholder="English word"
          />
        </div>
        <div className="meaning-input">
          <input
            type="text"
            value={this.state.vn}
            onChange={this.handleChangeVN}
            placeholder="Meaning"
          />
        </div>
        <div onClick={this.onAdd} className="btn-add-new-word">
          ADD
        </div>
      </div>
    );
  }
}

export default connect()(AddWordForm);
