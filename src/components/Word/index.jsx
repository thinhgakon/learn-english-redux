import React from "react";
import "./Word.css";
import { connect } from "react-redux";
import {
  toggleMemorized,
  toggleShow,
  removeWord,
} from "./../../actions/arrWords";

class Word extends React.Component {
  memorizedWord() {
    const { id } = this.props.word;
    this.props.dispatch(toggleMemorized(id));
  }
  showWord() {
    const { id } = this.props.word;
    this.props.dispatch(toggleShow(id));
  }
  removeWord() {
    const { id } = this.props.word;
    this.props.dispatch(removeWord(id));
  }
  render() {
    const { en, vn, memorized, isShow } = this.props.word;
    const textDecorationLine = memorized ? "line-through" : "none";
    const memorizedButtonText = memorized ? "forget" : "memorized";
    const showButtonText = isShow ? "hide" : "show";
    const meaning = isShow ? vn : "-----";
    return (
      <div className="word-line">
        <div style={{ textDecorationLine }} className="word-en">
          {en}
        </div>
        <div className="word-vn">{meaning}</div>
        <div className="word-action">
          <div
            onClick={this.memorizedWord.bind(this)}
            className="word-btn word-memorized"
          >
            {memorizedButtonText}
          </div>
          <div
            onClick={this.showWord.bind(this)}
            className="word-btn word-show"
          >
            {showButtonText}
          </div>
          <div
            onClick={this.removeWord.bind(this)}
            className="word-btn word-show"
          >
            Remove
          </div>
        </div>
      </div>
    );
  }
}

Word.propTypes = {};

export default connect()(Word);
