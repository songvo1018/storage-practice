import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/configureStore'
import { Provider } from "react-redux";
import "bootstrap";
import App from './App';

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<Provider store={Store.store}>
		<PersistGate loading={null} persistor={Store.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);


