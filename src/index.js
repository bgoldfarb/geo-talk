import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const PORT = process.env.PORT || 5000

ReactDOM.render(<App />, document.querySelector('.container'));
