import React from 'react';
import Search from '../Search/search';


class Home extends React.Component {
   
    render() { 
        return ( 
            <div>
                <Search></Search>
                <h1>This is Home Page!!!!</h1>
            </div>
         );
    }
}
 
export default Home;