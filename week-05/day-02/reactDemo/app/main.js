import React from 'react';
import ReactDom from 'react-dom';

import Component1 from './components/Component1.jsx';
import style from './styles/style.css';

ReactDom.render(
    <Component1 />,
    document.getElementById('content')
);