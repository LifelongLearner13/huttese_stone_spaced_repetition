var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions');
var LogOutButton = require('./logout-button');
var Correct = require('./correct');
var CurrentWord = require('./currentword');
var Answer = require('./answer');
var Score = require('./score');


var QuizContainer = React.createClass({

  // Fetches new word pair on initial mounting of component
  componentDidMount: function() {
    this.props.dispatch(actions.fetchWords())
  },

  logOutUser: function() {
  // TODO: Needs to dispatch action to log out user
  },

  // Toggles 'correct' state boolean to show/hide 'Correct!' display
  toggleCorrect: function() {
    this.props.dispatch(actions.correctDisplay())
  },

  render: function() {
    return (
      <div className="Quiz">
        <div className="Quiz-header">
          <h2>FrenchX Header</h2>
          <LogOutButton logOutUser={this.logOutUser} />
        </div>
        <Correct correct={this.props.correct} toggleCorrect={this.toggleCorrect} />
        <CurrentWord word1={this.props.word1} />      
        <Answer checkAnswer={this.checkAnswer} word2={this.props.word2} answerInput={this.props.answerInput} />
        <Score score={this.props.score} />
      </div>

    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    correct: state.correct,
    word1: state.word1,
    word2: state.word2,
    score: state.score,
    answerInput: state.answerInput
  }
};

var Container = connect(mapStateToProps)(QuizContainer);
module.exports = Container;
