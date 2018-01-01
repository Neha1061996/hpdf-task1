import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Right from './Right'
import IconButton from 'material-ui/IconButton';

const style = {
  width: "100%",
  textAlign: 'center',
  display: 'inline-block',
};
const sd={
	marginLeft:"25px",
	marginRight:"25px"
}



class Top extends React.Component{
	render(){
		return(
		<MuiThemeProvider><Navbar />
		<Paper style={{height:40,backgroundColor:"#2196F3"}} zDepth={0}> <div style={{marginLeft:70,fontSize:20,color:"#ffffff"}}><b>Aadhaar</b></div></Paper>
		<Paper zDepth={1}>
		<FlatButton label="Top"></FlatButton>
		<FlatButton label="Latest"></FlatButton>
		<FlatButton label="People"></FlatButton>
		<FlatButton label="Photos"></FlatButton>
		<FlatButton label="Videos"></FlatButton>
		<FlatButton label="News"></FlatButton>
		<FlatButton label="Broadcast"></FlatButton>
		</Paper>
		</MuiThemeProvider>);
	}
}
class Center extends React.Component{
	render(){
		return(
		<Paper><div>
	<Avatar src="https://pbs.twimg.com/profile_images/940256618108788736/uEhO7c_r_bigger.jpg" style={{margin:20}}/> 	
      <span style={{marginLeft:10}}><b>YouTube</b> @YouTube . 29 DEC 2017</span><br/>
	  <p style={{paddingLeft:60}}>An American multinational Social Media company is asking ur Aadhaar details! Modi Govt and UIDAI keep saying Aadhaar data is safe.
Aadhaar is a snooping tool for Govt and a data gold mine for Facebook.</p>
<img src="https://pbs.twimg.com/card_img/945967177332506624/Xrn6w28U?format=jpg&name=600x314" style={{paddingLeft:60,width:"98%"}}/>
	</div>
	<div>
	<span>
	<IconButton style={{marginLeft:70}}><img src="https://png.icons8.com/material/24/000000/facebook-messenger.png"/></IconButton>12
	<IconButton style={{marginLeft:30}}><img src="https://png.icons8.com/material/24/000000/retweet.png"/></IconButton>15
	<IconButton  style={{marginLeft:30}}><img src="https://png.icons8.com/material/24/000000/like.png"/></IconButton>345
	<IconButton  style={{marginLeft:30}}><img src="https://png.icons8.com/material/24/000000/secured-letter.png"/></IconButton></span>
	</div></Paper>
		);
	}
}
class Navbar extends React.Component{
	update(){
		ReactDOM.render(<Top/>, document.getElementById('root'));
        ReactDOM.render(<MuiThemeProvider><Center/></MuiThemeProvider>, document.getElementById('center'));
ReactDOM.render(<MuiThemeProvider><br/><Right/></MuiThemeProvider>, document.getElementById('left'));
ReactDOM.render(<MuiThemeProvider></MuiThemeProvider>, document.getElementById('right'));

		
	}
	render()
	{
		return(
  <div>
    <Paper style={style} zDepth={1} >
	
	<FlatButton hoverColor="#00BCD4" style={{marginLeft:15,padding:5}} label="Home">
      <img style={{paddingLeft:15}} src="https://png.icons8.com/material/24/000000/home.png"/>
	 
    </FlatButton>
	
	<FlatButton hoverColor="#00BCD4" style={{marginLeft:15,padding:5}} label="Moments">
      <img src="https://png.icons8.com/material/24/000000/lightning-bolt.png"/>
	 
    </FlatButton>
	
	<FlatButton hoverColor="#00BCD4" style={{marginLeft:15,padding:5}} label="Notifications">
      <img src="https://png.icons8.com/material/24/000000/jingle-bell.png"/>
    </FlatButton>
	
	<FlatButton hoverColor="#00BCD4" style={{marginLeft:15,padding:5}} label="message"> 
      <img src="https://png.icons8.com/material/24/000000/filled-message.png"/>
	  
    </FlatButton>
	<img style={{marginLeft:100}} src="https://png.icons8.com/color/24/000000/twitter.png"/>
	 <input type="text" className="search-query" placeholder="aadhaar"style={{marginLeft:100}}/>
	  <IconButton tooltip="Search" touch={true} tooltipPosition="bottom-right"  onClick={this.update.bind(this)}>
  <img src="https://png.icons8.com/material/20/000000/search.png"/></IconButton>
     <Avatar src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/19511589_1949351742009544_2809950993926606628_n.jpg?oh=9d87fa6a30c17726274bd1bae924e92e&oe=5AB7D0F9" style={{marginLeft:20}}/> 
	 <RaisedButton primary={true} label="Tweet" style={sd}/>

	</Paper>
  </div>
);}}

export default Navbar;