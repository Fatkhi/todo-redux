import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'todomvc-app-css/index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer)

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>	,
	document.getElementById('root'));
registerServiceWorker();
