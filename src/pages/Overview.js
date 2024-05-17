import React, { useState, useEffect } from "react";
//import BarChart from '../components/BarChart';
import { Chart } from "react-google-charts";

import { Bar, Pie } from "react-chartjs-2";
import { useHistory  } from "react-router-dom";


export const Overview = () => {
   const [data1, setData1] = useState("");
   const history = useHistory();
   const labels = ["January", "February", "March", "April", "May", "June"];
   const currTime = new Date().toLocaleTimeString();
   const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  //Pie chart
  const piedata = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      is3d:true,
      hoverOffset: 4
    }]
  };
  // Google chart - Pie
   const dataG = [
    ["SAS Types", "Outstanding"],
    ["Reactive Outstanding", 450],
    ["SACS", 28],
    ["AV", 34],
    ["CCTV", 312],
    ["ETD&XRAY", 50]
    
  ];
  const options = {
     is3D: true,
     slices: {
      2: {color: 'blue', offset: 0.2 },
      4: {color: 'black', offset: 0.3 },
      5: {color: 'white', offset: 0.4 },
      
    },
    pieStartAngle: 10,
    
  };

  const options2 = {
    is3D: true
    
   
   
 };
  
  // Google chart - Bar
   const dataBar = [
    ["X", "Y"],
    ["A", 40],
    ["B", 70],
    ["C", 60],
    ["D", 30],
  ];
  
  const optionsBAR = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };

  //
  const gotToNewPage=()=>{
    history.push("/Asset/Asset");
  }
  
  function handleSubmit(e) {
    // const url = "http://localhost:5000/api/v1/product/add";
    console.log("--1--");
  }

  return (
    <div>
      <div className="select-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <table className="select-table">
              <tr>
                <td>
                <button name="button" className="overview-button" onClick={() => gotToNewPage()}>SACS-Asset Information</button>
                </td>
                <td>
                <button name="button" className="overview-button">CCTV-Asset Information</button>
                </td>
                <td>
                  <h1>{currTime}</h1>
                </td>
                <td>
                <button name="button" className="overview-button">AV-Asset Information</button>
                </td>
                <td>
                <button name="button" className="overview-button">ETD & XRAY-Asset Information</button>
                </td>
              </tr>
            </table>
          </div>
        </form> 
      </div>

      <div class="column top left">
      
      <Chart
      chartType="Bar"
      data={dataBar}
      options={optionsBAR}
      width={"100%"}
      height={"250px"}
    />
     
   
      </div>
      <div class="column top middle">
      <Chart
      chartType="Bar"
      data={dataG}
      options={options}
      width={"100%"}
      height={"250px"}
    />
      </div>
      <div class="column top right">
      <Chart
      chartType="PieChart"
      data={dataG}
      options={options}
      width={"100%"}
      height={"250px"}
    />
      </div>

      <div class="column bottom left">
      <Chart
      chartType="Bar"
      data={dataBar}
      options={optionsBAR}
      width={"100%"}
      height={"250px"}
    />
      </div>
      <div class="column bottom middle">
      <Chart
      chartType="Bar"
      data={dataG}
      options={options}
      width={"100%"}
      height={"250px"}
    />
      </div>
      <div class="column bottom right">
      <Chart
      chartType="PieChart"
      data={dataG}
      options={options2}
      width={"100%"}
      height={"250px"}
    />
      </div>
     
    </div>
  );
};

export default Overview;
