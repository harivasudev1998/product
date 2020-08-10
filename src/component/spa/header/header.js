import React from 'react';
import NavigationBar from './navbar';
import '../contentcontainer/css/App.css'


class Header extends React.Component {
   
    render() { 
     

        return ( 
            <div className="head">
            
             <NavigationBar ></NavigationBar>       
          
    
            </div>
         );
    }
}
 
export default Header;