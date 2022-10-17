import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function Graph() {
  const series = [
    {
      name: "Vaccines",
      data: [
        555,
        12038,
        69030,
        88369,
        167466,
        932638,
        2055423,
        3343777,
        3845718,
      ],
    },
    {
      name: "Symptom",
      data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481, 1355481],
    },
    {
      name: "Government Regulation",
      data: [17, 259, 1666, 2996, 6472, 49675, 140658, 238619, 269567],
    },
    {
      name: "Medicine",
      data: [10000, 111559, 111666, 111996, 1114472, 1119675, 117658, 118619, 119567],
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/1/20",
        "2/1/20",
        "3/1/20",
        "4/1/20",
        "5/1/20",
        "6/1/20",
        "7/1/20",
        "8/1/20",
        "9/1/20",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
    
  }

  const events = {
      dataPointSelection: function(event, chartContext, config) {
        console.log(chartContext, config);
        // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
      },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2 style={{ fontSize: "35px", fontWeight: "", fontFamily: "Rockwell"}}>The Most Heated Discussions related to COVID-19</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
        width= '85%'
        align= 'center'
      />
      <br />
      <ReactApexChart
        options={options}
        series={series}
        events={events}
        type="bar"
        height={350}
        width= '85%'
        align= 'center'
      />
    </div>
  );
}

export default Graph;
