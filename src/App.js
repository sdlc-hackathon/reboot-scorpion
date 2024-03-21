import './App.css';
import React from 'react';
import { BarChart,LineChart,Line,Pie,PieChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const App = () => {
  const spendingData = [
    {
      name: 'Jan 24',
      Groceries: 400,
      Shopping: 390,
      UtilityBills: 240,
    },
    {
      name: 'Feb 24',
      Groceries: 420,
      Shopping: 300,
      UtilityBills: 240,
    },
    {
      name: 'Mar 24',
      Groceries: 320,
      Shopping: 310,
      UtilityBills: 260,
    },
    {
      name: 'Apr 24',
      Groceries: 470,
      Shopping: 350,
      UtilityBills: 250,
    },
    {
      name: 'May 24',
      Groceries: 420,
      Shopping: 305,
      UtilityBills: 220,
    },
    {
      name: 'June 24',
      Groceries: 470,
      Shopping: 310,
      UtilityBills: 230,
    }
];

const baldata = [
  {
    name: 'Jan 24',
    Balance: 2400,
    PredictedBalance: 2400,
  },
  {
    name: 'Feb 24',
    Balance: 1500,
    PredictedBalance: 1500,
  },
  {
    name: 'Mar 24',
    Balance: 3500,
    PredictedBalance: 3500,
  },
  {
    name: 'Apr 24',
    PredictedBalance: 4100,
  },
  {
    name: 'May 24',
    PredictedBalance: 3100,
  },
  {
    name: 'Jun 24',
    PredictedBalance: 5200,
  },
];

const data = [
  { name: 'Savings', value: 400 },
  { name: 'Entertainment', value: 300 },
  { name: 'Investment', value: 300 },
  { name: 'Reward', value: 200 },
];

  return (
   
    <div className="App">
      <h1>Savings through Data Intelligence</h1>
      <div className="Child">
        <BarChart
          width={500}
          height={300}
          data={spendingData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Groceries" stackId="a" fill="#8884d8" />
          <Bar dataKey="Shopping" stackId="a" fill="#82ca9d" />
          <Bar dataKey="UtilityBills" stackId="a" fill="#ffc658" />
        </BarChart>
      </div>
      <div className="Child">
        <LineChart
          width={500}
          height={300}
          data={baldata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Balance" stroke="#8884d8" />
          <Line type="monotone" dataKey="PredictedBalance" strokeDasharray="5 5" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div>
        <div className="Child">
          <h2>Key Insights :</h2>
          <ul>
            <li>Your spending is expected to grow by 5% per month.i.e £1000 by June end.</li>
            <li>Your balance is expected to grow by 15% per month i.e £5100 by June end.</li>
          </ul>
        </div>
        <div className="Child">
          <h2>Recommendations : </h2>
          <ul>
            <li>Based on our forecast you should invest in savings pot, <a href="#">take a look here</a></li>
            <li>You have a holiday coming. If you need a travel insurance please <a href="#">take a look here</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}


export default App;