import React from 'react';
import { Chart,Pie } from 'react-chartjs-2';
import axios from 'axios';


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
       
        selectedData:[],
        chartData:{    
        }
    }
}

componentWillMount(){
  
    if(localStorage.getItem('loggedIn') === null){
        this.props.history.push('/');
    }
}
componentDidMount() {
  this.getChartData();
}

getChartData() {
  
    axios.get('http://localhost:3000/allProducts').then((res)=>{
        let titles=[]
        var stocks=[]
        console.log(res.data)
        this.setState({selectedData:res.data})
        this.state.selectedData.map((cat)=>{
           return(
            titles.push(cat.name)
           ) 
        });
        this.state.selectedData.map((cat)=>{
            return(
             stocks.push(parseInt(cat.stock))
             
            ) 
         });
         console.log(titles)
         console.log("stocks"+stocks)
         this.setState({chartData:
            {
                labels:[...titles],
            datasets:[{
                label:'Stock Availability',
                data:[
                    stocks
                ],
                backgroundColor:[
                    'rgba(225,99,132,0.6)',
                    'rgba(225,206,86,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(153,102,255,0.6)',
                    'rgba(225,159,64,0.6)',
                    'rgba(225,99,132,0.6)'
                ]
            }],
            } 
        });
    })
    
    
    console.log(this.state.chartData)
}
render() { 
    return ( 
        <div className="dashboard">
            <div>
              
                
            </div>
            <div>
            {/* {Object.keys(this.state.chartData).length &&
            <Chart
              chartData={this.state.chartData}
              location="Massachusetts"
              legendPosition="bottom"
            />
          } */}
                <h1>Chart</h1>
                <Pie
                data={this.state.chartData}
                height={80}
                options={{
                    title:{
                        display:true,
                        text:'Stock Availability'
                    },
                    legend:{
                        display:true,
                        position:"top"
                    }
                }}>

                </Pie>
            </div>
        </div>
     );
}
}
export default Home;