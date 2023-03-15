import React from 'react';
import ReactApexChart from 'react-apexcharts';

//Map



// TODAY ORDERS

const oprderSeries = [
  {
    data: [5, 9, 5, 6, 4, 12, 18, 14, 10, 15, 12, 5, 8, 5, 12, 5, 12, 10, 16, 12]
  }
];

const orderOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function Order() {
  return (
    <div id="chart">
      <ReactApexChart options={orderOptions} className="pt-1" series={oprderSeries} type="area" height={30} />
    </div>
  )
};


// TODAY DANGER EARNINGS

const earningSeries = [
  {
    data: [3, 2, 4, 6, 12, 14, 8, 7, 14, 16, 12, 7, 8, 4, 3, 2, 2, 5, 6, 7]
  }
];

const earningOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function DangerEarnings() {
  return (
    <div id="chart">
      <ReactApexChart options={earningOptions} className="pt-1" series={earningSeries} type="area" height={30} />
    </div>
  )
};

// TODAY SUCCESS EARNINGS 

const earningsSeries = [
  {
    data: [5, 10, 5, 20, 22, 12, 15, 18, 20, 15, 8, 12, 22, 5, 10, 12, 22, 15, 16, 10]
  }
];

const earningsOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function SuccessEarning() {
  return (
    <div id="chart">
      <ReactApexChart options={earningsOptions} className="pt-1" series={earningsSeries} type="area" height={30} />
    </div>
  )
};

// PRODUCT SOLD

const soldSeries = [
  {
    data: [5, 9, 5, 6, 4, 12, 18, 14, 10, 15, 12, 5, 8, 5, 12, 5, 12, 10, 16, 12]
  }
];

const soldOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function Sold() {
  return (
    <div id="chart">
      <ReactApexChart options={soldOptions} className="pt-1" series={soldSeries} type="area" height={30} />
    </div>
  )
};

// Order Status 

const Statusseries = [
  {
    name: 'Impressions',
    data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29, 57],
    color: '#0074d9'
  },
  {
    name: 'Turnover',
    data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46, 76],
    color: '#dc3545'
  },
  {
    name: 'In progress',
    data: [26, 35, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23, 49],
    color: '#fd7e14'
  }
];

const Statusoptions = {
  legend: {
    position: 'top',
    horizontalAlign: 'left',

  },
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

export function OrderStatus() {

  return (

    <div id="chart">
      <ReactApexChart className="sales-bar mt-1" options={Statusoptions} series={Statusseries} type="bar" height={280} />
    </div>

  )
}

// USA MAP


//RECENT CUSTOMERS

//row#1

const rowSeries = [
  {
    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  }
];

const rowOption = {
  chart: {
    id: 'spark1',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#0a9ae1']
};


export function Samantha() {
  return (
    <div id="chart">
      <ReactApexChart options={rowOption} className="wd-100p" series={rowSeries} height={30} />
    </div>
  )
};

//row#2

const jimmySeries = [
  {
    data: [0, 0, 2, 0, 0, 0, 0, 0, ]
  }
];

const jimmyOption = {
  chart: {
    id: 'spark2',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  markers: {
    size: 0
  },
  colors: ['#ff516e']
};


export function Jimmy() {
  return (
    <div id="chart">
      <ReactApexChart options={jimmyOption} className="wd-100p" series={jimmySeries} height={30} />
    </div>
  )
};

//row#3

const GabeSeries = [
  {
    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }
];

const GabeOption = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#28b98a'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
};


export function Gabe() {
  return (
    <div id="chart">
      <ReactApexChart options={GabeOption} className="wd-100p" series={GabeSeries} height={30} />
    </div>
  )
};

//row#4

const ManuelSeries = [
  {
    data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
  }
];

const ManuelOption = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#f48846'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
};


export function Manuel() {
  return (
    <div id="chart">
      <ReactApexChart options={ManuelOption} className="wd-100p" series={ManuelSeries} height={30} />
    </div>
  )
};

//row#5

const SharonSeries = [
  {
    data: [12, 25, 76, 35, 17, 43, 10, 26, 69, 31]
  }
];

const SharonOption = {
  chart: {
    id: 'spark5',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#673ab7'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
};


export function Sharon() {
  return (
    <div id="chart">
      <ReactApexChart options={SharonOption} className="wd-100p" series={SharonSeries} height={30} />
    </div>
  )
};

//Recent Order

export class RecentOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [83],
      options: {
        chart: {
          width: 200,
          height: 205,
          responsive: 'true',
          reset: 'true',
          type: 'radialBar',
          offsetX: 0,
          offsetY: 0,
        },
        plotOptions: {
          radialBar: {
            responsive: 'true',
            startAngle: -135,
            endAngle: 135,
            size: 120,
            imageWidth: 50,
            imageHeight: 50,

            track: {
              strokeWidth: "80%",
              background: '#ecf0fa',
            },
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              bottom: 0,
              blur: 3,
              opacity: 0.5
            },
            dataLabels: {
              name: {
                fontSize: '16px',
                offsetY: 30,
              },
              hollow: {
                size: "60%"
              },
              value: {
                offsetY: -10,
                fontSize: '22px',
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        colors: ['#0047aa', ],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: .6,
            gradientToColors: "#0082a3",
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          dashArray: 4
        },
        series: [83],
        labels: [""]
      }
    }
  }

  render() {
    return (

      <div id="chart" className='recent_order'>
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={205} />
      </div>


    );
  }
}

export function LineCharts() {
  const option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'line'
          }
      },
      grid: {
          top: '6',
          right: '0',
          bottom: '17',
          left: '25',
      },
      xAxis: [
          {
              type: 'category',
              data: ['2014', '2015', '2016', '2017', '2018', '2019'],
          }
      ],
      yAxis: [
          {
              type: 'value',

          }
      ],
      series: [
          {
              name: 'sales',
              type: 'line',
              barMaxWidth: 20,
              color: '#f7557a',
              smooth: true,
              emphasis: {
                  focus: 'series'
              },
              data: [10, 15, 9, 18, 10, 15]
          },
          {
              name: 'growth',
              type: 'line',
              barMaxWidth: 20,
              color: '#285cf7',
              smooth: true,
              emphasis: {
                  focus: 'series'
              },
              data: [10, 14, 10, 15, 9, 25]
          },
      ]
  };

  return (<ReactECharts className="chartsh " option={option} />);
};

//VERTICAL Line CHART

export function VerticalLineCharts() {
  const option = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'line'
          }
      },
      grid: {
          top: '6',
          right: '0',
          bottom: '17',
          left: '25',
      },
      xAxis: [
          {
              type: 'value',

          }
      ],
      yAxis: [
          {
              type: 'category',
              data: ['2014', '2015', '2016', '2017', '2018', '2019'],
          }
      ],
      series: [
          {
              name: 'sales',
              type: 'line',
              barMaxWidth: 20,
              color: '#f7557a',
              smooth: true,
              emphasis: {
                  focus: 'series'
              },
              data: [10, 15, 9, 18, 10, 15]
          },
          {
              name: 'growth',
              type: 'line',
              barMaxWidth: 20,
              color: '#285cf7',
              smooth: true,
              emphasis: {
                  focus: 'series'
              },
              data: [10, 14, 10, 15, 9, 25]
          },
      ]
  };

  return (<ReactECharts className="chartsh " option={option} />);
};



//Map Data Source

