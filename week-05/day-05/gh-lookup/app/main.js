import React from 'react';
import ReactDom from 'react-dom';

import Root from './components/Root.jsx';
import commom from './style/common.scss';

ReactDom.render(
	<Root />,
    document.getElementById('content')
);