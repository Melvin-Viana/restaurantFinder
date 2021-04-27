import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import {createGoogleScript} from './helpers';
const {GOOGLE_API_KEY} = envKeys;

createGoogleScript(GOOGLE_API_KEY, document);

ReactDOM.render(<App />, document.getElementById('app'));
