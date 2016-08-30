import React from 'react'
import ReactDOM from 'react-dom'
import * as actions from './actions'
var Provider = require('react-redux').Provider;
// import Provider from 'react-redux.Provider'

import store from './store'

import Landing from './components/Landing'
import QuizContainer from'./components/Quiz-Container'

document.addEventListener('DOMContentLoaded', () => {
	store.dispatch(actions.fetchWords())

	ReactDOM.render(
		<Provider store={store}>
		  <QuizContainer />
		</Provider>, document.getElementById('root')
	)
})
