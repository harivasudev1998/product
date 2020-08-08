import React from 'react';
import NavigationBar from './navbar';
import 'C:/React-redux/react-app/reactspa/src/App.css';


class Header extends React.Component {
   
    render() { 
        // const head={
        //     backgroundColor: "lightsalmon",
        //     overflow: 'auto',
        //     padding: '20px 10px',
        //     float: 'right'

        // }

        return ( 
            <div className="head">
            
             <NavigationBar ></NavigationBar>       
            {/* <h1 >This is header!!!!</h1> */}
    
            </div>
         );
    }
}
 
export default Header;