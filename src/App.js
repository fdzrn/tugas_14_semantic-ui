import React, {Component} from 'react';
import Tabel from './components/Tabel';
import FeedSection from './components/Feed';
import Link from './components/Link';
import {Grid} from 'semantic-ui-react';
class App extends Component {
  render(){
    return(
      <div>
      	<br />
        <Tabel/>
        <br /> <br />
        <Grid container columns={2}>
		    	<Grid.Column width={12}>
        	  <FeedSection />
        	</Grid.Column>
        	<Grid.Column width={4}>
        	  <Link/>
        	</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
