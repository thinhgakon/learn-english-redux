import React from "react";
import "./Main.css";
import { connect } from "react-redux";
import Word from "./../Word";
import Filter from "./../Filter";
import Header from "./../Header";
import AddWordForm from "./../AddWordForm";

class Main extends React.Component {
  getWordList() {
    const { filterStatus, arrWords } = this.props;
    if (filterStatus === "MEMORIZED")
      return arrWords.filter((e) => e.memorized);
    if (filterStatus === "NEED_PRACTICE")
      return arrWords.filter((e) => !e.memorized);
    return arrWords;
  }

  render() {
    const { isAdding } = this.props;
    console.log(this.props);
    return (
      <div className="main-wrapper">
        <Header />
        {isAdding ? <AddWordForm /> : null}

        <div className="list-word">
          {this.getWordList().map((item) => (
            <Word key={item.id} word={item} />
          ))}
        </div>
        <Filter />
      </div>
    );
  }
}

Main.propTypes = {};

function mapStateToProps(state) {
  return {
    filterStatus: state.filterStatus,
    arrWords: state.arrWords,
    isAdding: state.isAdding,
  };
}

export default connect(mapStateToProps)(Main);
