import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactApexChart from 'react-apexcharts';

// import { getRecentOrders } from '../../actions/indexpageActions';

export default class RecentOrder extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
  
        series: [61],
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
  