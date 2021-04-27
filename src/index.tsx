import React from 'react';
// @ts-ignore:
import ReactDOM from 'react-dom';

import { App } from './components/App';
import {createGoogleScript} from './helpers';
// @ts-ignore:
const {GOOGLE_API_KEY} = envKeys;

createGoogleScript(GOOGLE_API_KEY, document);

ReactDOM.render(<App />, document.getElementById('app'));
