import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { Chart } from 'react-google-charts'
import axios from 'axios';

class Dashboard extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
        stockList: [],
        
        
    }
}
componentWillMount() {
  this.stockData()
}

stockData = () => {
  axios.get('http://localhost:3000/products')
      .then(response => {
          console.log(response.data)
          this.setState({ stockList: response.data.stock })
      }, error => { console.error(error) })
  
}

render() {

  return (
      <span className="chart">
          <Chart
              width='500px'
              height='270px'
              chartType="Bar"
              loader={<span>Loading Chart</span>}
              data={[
                  ['Stock',this.state.stockList.stock]
                  // ['Monday', this.state.seedSapling.monday, this.state.machinery.monday, this.state.tool.monday],
                  // ['Tuesday', this.state.seedSapling.tuesday, this.state.machinery.tuesday, this.state.tool.tuesday],
                  // ['Wednesday', this.state.seedSapling.wednesday, this.state.machinery.wednesday, this.state.tool.wednesday],
                  // ['Thusday', this.state.seedSapling.thursday, this.state.machinery.thursday, this.state.tool.thursday],
                  ['Friday', this.state.seedSapling.friday, this.state.machinery.friday, this.state.tool.friday]
              ]}
              options={{
                  chart: {
                      title: 'OverAll Sales per Week',
                      subtitle: 'Sales based on the category',
                  },
              }}
          />
      </span>
  );
}
}

export default Dashboard;
