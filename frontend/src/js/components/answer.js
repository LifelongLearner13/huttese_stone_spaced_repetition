var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions');


var Answer = React.createClass({

  checkAnswer: function() {
    var answer = this.refs.answer.value;
    var word2Array = this.props.word2;
    var foundWord;
    console.log(this.props.word2, '<-- Eng Props')

    /* 
    Loops through English words array for user's answer. If a match, show 'Correct!',
    increment score, and fetch new word pair. If not match, decrement score and fetch
    new word pair
    */
    for (var i = 0; i < word2Array.length; i++) {
    	if (answer.toLowerCase() === word2Array[i].toLowerCase()) {
    		foundWord = true;
            this.props.dispatch(actions.correctDisplay());
            this.props.dispatch(actions.incrementScore());
            this.props.dispatch(actions.fetchWords());
            break
    	} 
        if (i === word2Array.length - 1 && !foundWord) {
            this.props.dispatch(actions.decrementScore());
            this.props.dispatch(actions.fetchWords());
        }
    }
  },	

  render: function() {
    return (
    	<div>
    		<input type="text" id="answerInput" ref="answer" placeholder={this.props.answerInput} />
    		<button type="Submit" onClick={this.checkAnswer} >Submit</button>
    	</div>
    );
  }
});

// Needed to have access to 'dispatch' method
var mapStateToProps = function(state, props) {
	return {
	}
}

var Container = connect(mapStateToProps)(Answer)
module.exports = Container;