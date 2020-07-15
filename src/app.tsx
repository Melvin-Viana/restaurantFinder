import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import {GOOGLE_API_KEY} from '../config';

ReactDOM.render(<App googleApiKey={GOOGLE_API_KEY}/>, document.getElementById('app'));
