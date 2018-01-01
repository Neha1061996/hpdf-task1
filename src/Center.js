import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

import IconButton from 'material-ui/IconButton';
const Center = () => (
  <div>
    <Paper  zDepth={1} >
	<div style={{backgroundColor:"#B2EBF2"}}>
	<span><Avatar src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/19511589_1949351742009544_2809950993926606628_n.jpg?oh=9d87fa6a30c17726274bd1bae924e92e&oe=5AB7D0F9" style={{marginLeft:20}}/> 	
	<input type="text" placeholder="Tweet here"style={{borderRadius:5,width:460,marginLeft:5}}/>
	 </span>
	</div>
	<div>
	<Avatar src="https://pbs.twimg.com/profile_images/940256618108788736/uEhO7c_r_bigger.jpg" style={{margin:20}}/> 	
      <span style={{marginLeft:10}}><b>YouTube</b> @YouTube . 29 DEC 2017</span><br/>
	  <p style={{paddingLeft:60}}>Sing along if you know it!

ðŸŽ¶  Have you ever seen a video that you, um, you had, your, you- you could, youâ€™ll do, you- you wants, you, you could do so, you- youâ€™ll do, you could- you, you want â€¦ you get it hahaha!</p>
<img src="https://pbs.twimg.com/media/DSOqlIeXcAAkAUl.jpg" style={{paddingLeft:60,width:"98%"}}/>
	</div>
	<div>
	<span>
	<IconButton style={{marginLeft:70}}><img src="https://png.icons8.com/material/24/000000/facebook-messenger.png"/></IconButton>12
	<IconButton style={{marginLeft:30}}><img src="https://png.icons8.com/material/24/000000/retweet.png"/></IconButton>15
	<IconButton  style={{marginLeft:30}}><img src="https://png.icons8.com/material/24/000000/like.png"/></IconButton>345
	<IconButton  style={{marginLeft:30}}><img src="https://png.icons8.com/material/24/000000/secured-letter.png"/></IconButton></span>
	</div></Paper>
	
  </div>
);

export default Center;