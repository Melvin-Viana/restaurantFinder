import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import {GOOGLE_API_KEY} from '../config';
import {createGoogleScript} from './helpers';


createGoogleScript(GOOGLE_API_KEY, document);

ReactDOM.render(<App />, document.getElementById('app'));
