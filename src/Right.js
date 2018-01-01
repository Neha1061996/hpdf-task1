import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import IconButton from 'material-ui/IconButton';
const Right = () => (
  <div>
   <Paper  zDepth={1} style={{}}>
	<span style={{fontSize:20}}><b>Who to Follow</b></span>
    <br/><br/>
	<Avatar src="https://pbs.twimg.com/profile_images/732607941912592384/zQYONCEY_bigger.jpg" style={{marginLeft:20}}/> 
	<span style={{color:"#64B5F6",marginLeft:10}}>Monster Gamming</span>
	<FlatButton label="Follow" style={{marginLeft:50}}/>
	<Divider/>
	
	<Avatar src="https://pbs.twimg.com/profile_images/732607941912592384/zQYONCEY_bigger.jpg" style={{marginLeft:20}}/> 
	<span style={{color:"#64B5F6",marginLeft:10}}>Monster Gamming</span>
	<FlatButton label="Follow" style={{marginLeft:50}}/>
	<Divider/>
	<Avatar src="https://pbs.twimg.com/profile_images/732607941912592384/zQYONCEY_bigger.jpg" style={{marginLeft:20}}/> 
	<span style={{color:"#64B5F6",marginLeft:10}}>Monster Gamming</span>
	<FlatButton label="Follow" style={{marginLeft:50}}/>
	<Divider/>
</Paper>
  </div>
);

export default Right;