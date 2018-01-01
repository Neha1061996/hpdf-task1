import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Center from './Center';
import Left from './Left';
import Right from './Right';



ReactDOM.render(<MuiThemeProvider><Navbar /></MuiThemeProvider>, document.getElementById('root'));

ReactDOM.render(<MuiThemeProvider><Center /></MuiThemeProvider>, document.getElementById('center'));
ReactDOM.render(<MuiThemeProvider><Left /></MuiThemeProvider>, document.getElementById('left'));
ReactDOM.render(<MuiThemeProvider><Right /></MuiThemeProvider>, document.getElementById('right'));
