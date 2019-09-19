import React, {Component} from 'react';
import {List} from 'semantic-ui-react';

class Link extends Component {
	render(){
		return(
		        <List>
		        	<List.Header size='medium'><h4>Website Terkait</h4></List.Header>
					    <List.Item>
					      <List.Icon name='google' />
					      <List.Content>
					        <a href='http://www.google.com'>Google</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='facebook official' />
					      <List.Content>
					        <a href='http://www.facebook.com'>Facebook</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='youtube' />
					      <List.Content>
					        <a href='http://www.youtube.com'>Youtube</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='instagram' />
					      <List.Content>
					        <a href='http://www.instagram.com'>Instagram</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='react' />
					      <List.Content>
					        <a href='http://www.reactjs.org'>React</a>
					      </List.Content>
					    </List.Item>
					  </List>
		);
	}
}

export default Link;