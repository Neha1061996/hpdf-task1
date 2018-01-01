import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

import IconButton from 'material-ui/IconButton';
const Left = () => (
  <div>
   <Paper  zDepth={1} style={{height:190}}>
	
    <Paper  zDepth={0} style={{height:85,backgroundColor:"#2196F3"}}>
	
	<Avatar src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/19511589_1949351742009544_2809950993926606628_n.jpg?oh=9d87fa6a30c17726274bd1bae924e92e&oe=5AB7D0F9" style={{marginLeft:20,marginTop:50}} size={70} /> 
	</Paper><span style={{marginLeft:100}}><b>Neha Singh</b></span><br/><span style={{marginLeft:100}}>@NehaSingh10</span><br/><br/>
	<span  style={{marginLeft:10}} ><b>Tweets </b></span><span style={{marginLeft:15}}><b>   Followings  </b></span><span style={{marginLeft:15}}><b>  Followers</b></span>
	<br/>
	<span  style={{marginLeft:10}} ><b>234</b></span><span style={{marginLeft:40}}><b>  225 </b></span><span style={{marginLeft:65}}><b> 24565</b></span>
	
	</Paper>
	<br/>
	<Paper zDepth={1}><div style={{padding:10}}>
	<span style={{fontSize:20}}><b>Trends For You</b>  <a href="#">. change</a></span><br/><br/>
	<span style={{color:"#64B5F6"}}><b>#HappyNewYear2018</b></span><br/>
	839 k Tweets<br/><br/>
	<span style={{color:"#64B5F6"}}><b>#Welcome2018</b></span><br/>
	359 k Tweets<br/><br/>
	<span style={{color:"#64B5F6"}}><b>#HappyNewYear2018</b></span><br/>
	839 k Tweets<br/><br/>
	<span style={{color:"#64B5F6"}}><b>#Welcome2018</b></span><br/>
	359 k Tweets<br/><br/>
	<span style={{color:"#64B5F6"}}><b>#HappyNewYear2018</b></span><br/>
	839 k Tweets<br/><br/>
	<span style={{color:"#64B5F6"}}><b>#Welcome2018</b></span><br/>
	359 k Tweets<br/><br/>
</div>
</Paper>
  </div>
);

export default Left;