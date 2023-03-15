import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Table,
  ProgressBar,
  Dropdown,
  Modal,
  Button,
} from "react-bootstrap";
import {
  OrderStatus,
  Order,
  DangerEarnings,
  SuccessEarning,
  Sold,
  Samantha,
  Jimmy,
  Gabe,
  Manuel,
  Sharon,
  RecentOrder,
  LineCharts,
  VerticalLineCharts,
} from "./Data/IndexpageData";
import styles from "./Indexpage.module.scss";
import RevoCalendar from "revo-calendar";
import USAMap from "react-usa-map";
import { Link } from "react-router-dom";
// images
import faces1 from '../../assets/img/faces/3.jpg';
import faces3 from "../../assets/img/faces/3.jpg";
import faces4 from "../../assets/img/faces/3.jpg";
import faces2 from "../../assets/img/faces/3.jpg";
import faces13 from "../../assets/img/faces/11.jpg";
import faces16 from "../../assets/img/faces/17.jpg";
import faces15 from "../../assets/img/faces/15.jpg";
import faces6 from "../../assets/img/faces/6.jpg";
import faces14 from "../../assets/img/faces/6.jpg";
// import { BasicColumn, ColumnMarker, ColumnNegativeValue, StackedColumn } from '../ChartFunction/apexchart';
// import { BarNagetiveValue, BasicBarChart, GroupedBarChart, StackedBar } from '../ChartFunction/apexchart';
import {GroupedBarChart} from './ChartFuunction/apex';
import {
  BasicColumn,
  PieChartData,
  ColumnMarker,
  ColumnNegativeValue,
  StackedColumn,
} from "./ChartFuunction/apex";
import { DataAttr, DataAttribute, BarChart, VerticalBarChart, LineChart, VerticalLineChart, DataLineChart, SmoothLineChart, DataChart } from './Echarts/echart';
import { PieChart } from "./Echarts/echart";

const Indexpage = () => {
  let mapHandler = (event) => {
    // console.log(event.target.dataset.name);

    alert(event.target.dataset.name);
  };

  let statesCustomConfig = () => {
    return {
      // "NJ": {
      // 	fill: "#fff",
      // 	clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      // },
      AL: {
        fill: "#0162e8",
      },
      AK: {
        fill: "#0162e8",
      },
      AS: {
        fill: "#0162e8",
      },
      AZ: {
        fill: "#0162e8",
      },
      AR: {
        fill: "#0162e8",
      },
      CA: {
        fill: "#99c0f6",
      },
      CO: {
        fill: "#0162e8",
      },
      CT: {
        fill: "#0162e8",
      },
      DE: {
        fill: "#0162e8",
      },
      DC: {
        fill: "#0162e8",
      },
      FL: {
        fill: "#99c0f6",
      },
      FM: {
        fill: "#0162e8",
      },
      GA: {
        fill: "#0162e8",
      },
      GU: {
        fill: "#0162e8",
      },
      HI: {
        fill: "#0162e8",
      },
      ID: {
        fill: "#0162e8",
      },
      IL: {
        fill: "#0162e8",
      },
      IN: {
        fill: "#0162e8",
      },
      IA: {
        fill: "#0162e8",
      },
      KS: {
        fill: "#0162e8",
      },
      KY: {
        fill: "#0162e8",
      },
      LA: {
        fill: "#0162e8",
      },
      ME: {
        fill: "#0162e8",
      },
      MH: {
        fill: "#0162e8",
      },
      MD: {
        fill: "#0162e8",
      },
      MA: {
        fill: "#0162e8",
      },
      MI: {
        fill: "#0162e8",
      },
      MN: {
        fill: "#0162e8",
      },
      MS: {
        fill: "#0162e8",
      },
      MO: {
        fill: "#f7a556",
      },
      MT: {
        fill: "#0162e8",
      },
      NE: {
        fill: "#0162e8",
      },
      NV: {
        fill: "#0162e8",
      },
      NH: {
        fill: "#0162e8",
      },
      NJ: {
        fill: "#0162e8",
      },
      NM: {
        fill: "#0162e8",
      },
      NY: {
        fill: "#fa5773",
      },
      NC: {
        fill: "#0162e8",
      },
      ND: {
        fill: "#0162e8",
      },
      MP: {
        fill: "#0162e8",
      },
      OH: {
        fill: "#0162e8",
      },
      OK: {
        fill: "#0162e8",
      },
      OR: {
        fill: "#fa5773",
      },
      PW: {
        fill: "#0162e8",
      },
      PA: {
        fill: "#0162e8",
      },
      PR: {
        fill: "#0162e8",
      },
      RI: {
        fill: "#0162e8",
      },
      SC: {
        fill: "#0162e8",
      },
      SD: {
        fill: "#0162e8",
      },
      TN: {
        fill: "#0162e8",
      },
      TX: {
        fill: "#f7a556",
      },
      UM: {
        fill: "#0162e8",
      },
      UT: {
        fill: "#0162e8",
      },
      VT: {
        fill: "#0162e8",
      },
      VA: {
        fill: "#0162e8",
      },
      VI: {
        fill: "#0162e8",
      },
      WA: {
        fill: "#0162e8",
      },
      WV: {
        fill: "#0162e8",
      },
      WI: {
        fill: "#0162e8",
      },
      WY: {
        fill: "#99c0f6",
      },
    };
  };
  let viewDemoShow = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(true);
        break;
      case "show2":
        setShow2(true);
        break;
      case "show3":
        setShow3(true);
        break;
      case "show4":
        setShow4(true);
        break;
      case "show5":
        setShow5(true);
        break;
      case "show6":
        setShow6(true);
        break;
      case "show7":
        setShow7(true);
        break;
      case "show8":
        setShow8(true);
        break;
      case "show9":
        setShow9(true);
        break;
    }
  };

  let viewDemoClose = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(false);
        break;
      case "show2":
        setShow2(false);
        break;
      case "show3":
        setShow3(false);
        break;
      case "show4":
        setShow4(false);
        break;
      case "show5":
        setShow5(false);
        break;
      case "show6":
        setShow6(false);
        break;
      case "show7":
        setShow7(false);
        break;
      case "show8":
        setShow8(false);
        break;
      case "show9":
        setShow9(false);
        break;
    }
  };
  const [show3, setShow3] = useState(false);
  return (
    <div className={styles.Indexpage}>
      {/* <!-- container --> */}

      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <div>
            <h2 className="main-content-title tx-24 mg-b-1 mg-b-lg-1">
              Hi, welcome back!
            </h2>
            <p className="mg-b-0">
              Education monitoring dashboard.(Quality Assurance)
            </p>
          </div>
        </div>
        {/* <div className="main-dashboard-header-right">
					<div>
						<label className="tx-13">Customer Ratings</label>
						<div className="main-star">
							<i className="typcn typcn-star active"></i> <i className="typcn typcn-star active"></i> <i className="typcn typcn-star active"></i> <i className="typcn typcn-star active"></i> <i className="typcn typcn-star"></i> <span>(14,873)</span>
						</div>
					</div>
					<div>
						<label className="tx-13">Online Sales</label>
						<h5>563,275</h5>
					</div>
					<div>
						<label className="tx-13">Offline Sales</label>
						<h5>783,675</h5>
					</div>
				</div> */}
      </div>
      {/* <!-- breadcrumb --> */}

      {/* <!-- row --> */}
      <Row className="row-sm">
        <Col xl={3} lg={6} md={6} xm={12}>
          <Card className="overflow-hidden sales-card bg-primary-gradient">
            <div className="px-3 pt-3  pb-2 pt-0">
              <div className="">
                <h6 className="mb-3 tx-12 text-white">TODAY STUDENTS</h6>
              </div>
              <div className="pb-0 mt-0">
                <div className="d-flex">
                  <div className="">
                    <h4 className="tx-20 fw-bold mb-1 text-white">1254</h4>
                    <p className="mb-0 tx-12 text-white op-7">
                      Compared to yesterday
                    </p>
                  </div>
                  <span className="float-end my-auto ms-auto">
                    <i className="fas fa-arrow-circle-up text-white"></i>
                    <span className="text-white op-7"> +42</span>
                  </span>
                </div>
              </div>
            </div>

            <Order />
          </Card>
        </Col>
        <Col xl={3} lg={6} md={6} xm={12}>
          <Card className="overflow-hidden sales-card bg-danger-gradient">
            <div className="px-3 pt-3  pb-2 pt-0">
              <div className="">
                <h6 className="mb-3 tx-12 text-white">TODAY STAFF</h6>
              </div>
              <div className="pb-0 mt-0">
                <div className="d-flex">
                  <div className="">
                    <h4 className="tx-20 fw-bold mb-1 text-white">230</h4>
                    <p className="mb-0 tx-12 text-white op-7">
                      Compared to yesterday
                    </p>
                  </div>
                  <span className="float-end my-auto ms-auto">
                    <i className="fas fa-arrow-circle-down text-white"></i>
                    <span className="text-white op-7"> -23</span>
                  </span>
                </div>
              </div>
            </div>
            <DangerEarnings />
          </Card>
        </Col>
        <Col xl={3} lg={6} md={6} xm={12}>
          <Card className="overflow-hidden sales-card bg-success-gradient">
            <div className="px-3 pt-3  pb-2 pt-0">
              <div className="">
                <h6 className="mb-3 tx-12 text-white">TOTAL VISIORS</h6>
              </div>
              <div className="pb-0 mt-0">
                <div className="d-flex">
                  <div className="">
                    <h4 className="tx-20 fw-bold mb-1 text-white">25</h4>
                    <p className="mb-0 tx-12 text-white op-7">
                      Compared to yesterday
                    </p>
                  </div>
                  <span className="float-end my-auto ms-auto">
                    <i className="fas fa-arrow-circle-up text-white"></i>
                    <span className="text-white op-7"> 15</span>
                  </span>
                </div>
              </div>
            </div>

            <SuccessEarning />
          </Card>
        </Col>
        <Col xl={3} lg={6} md={6} xm={12}>
          <Card className="overflow-hidden sales-card bg-warning-gradient">
            <div className="px-3 pt-3  pb-2 pt-0">
              <div className="">
                <h6 className="mb-3 tx-12 text-white">
                  TOTAL NON TEACHING STAFF
                </h6>
              </div>
              <div className="pb-0 mt-0">
                <div className="d-flex">
                  <div className="">
                    <h4 className="tx-20 fw-bold mb-1 text-white">56</h4>
                    <p className="mb-0 tx-12 text-white op-7">
                      Compared to yesterday
                    </p>
                  </div>
                  <span className="float-end my-auto ms-auto">
                    <i className="fas fa-arrow-circle-down text-white"></i>
                    <span className="text-white op-7"> 52</span>
                  </span>
                </div>
              </div>
            </div>

            <Sold />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">
                Basic summmary of Ongoing, Missed and lecturers that haven't
                started
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <BasicColumn />
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">
                Basic summmary of total students accessing campus per school
              </Card.Title>
            </Card.Header>
            <Card.Body
              style={{
                marginBottom: "65px",
              }}
            >
              <PieChartData />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row opened --> */}
      {/*     */}
      {/* <!-- row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col xl={4} md={12} lg={12} className="">
          <Card>
            <Card.Header className="pb-1">
              <Card.Title as="h3" className="mb-2">
                Lecturers abandoning the system at the gate
              </Card.Title>
              <p className="tx-12 mb-0 text-muted">
                This report or visual clearly shows and filters out all
                lecturers who abandon the use of the system on a weekly basis
              </p>
            </Card.Header>
            <Card.Body className="p-0 customers mt-1">
              <ListGroup className="list-lg-group list-group-flush">
                <ListGroup.Item className="list-group-item-action">
                  <div className="media mt-0">
                    <img
                      className="avatar-lg rounded-circle my-auto me-3"
                      src="https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000100121"
                      alt="Image description"
                      onClick={() => viewDemoShow("show3")}
                    />
                    <Modal size="lg" show={show3}>
                      <Modal.Header>
                        <Modal.Title>Large Modal</Modal.Title>
                        <Link
                          to="#"
                          as="span"
                          className="d-flex ms-auto text-dark"
                          onClick={() => {
                            viewDemoClose("show3");
                          }}
                        >
                          <i className="fe fe-x ms-auto"></i>
                        </Link>
                      </Modal.Header>

                      <Modal.Body>
                        <RevoCalendar
                          //   events={eventList}
                          style={{
                            borderRadius: "5px",
                            border: "5px solid #4F6995",
                          }}
                          highlightToday={true}
                          lang="en"
                          primaryColor="#4F6995"
                          secondaryColor="#D7E6EE"
                          todayColor="#3B3966"
                          textColor="#333333"
                          indicatorColor="orange"
                          animationSpeed={300}
                          sidebarWidth={180}
                          detailWidth={280}
                          showDetailToggler={true}
                          showSidebarToggler={true}
                          onePanelAtATime={false}
                          allowDeleteEvent={true}
                          allowAddEvent={true}
                          openDetailsOnDateSelection={true}
                          timeFormat24={true}
                          showAllDayLabel={false}
                          detailDateFormat="DD/MM/YYYY"
                          //   deleteEvent={deleteEvent}
                          //   addEvent={addEvent}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button className="ripple" variant="primary">
                          Save Changes
                        </Button>
                        <Button
                          className="ripple"
                          variant="secondary"
                          onClick={() => {
                            viewDemoClose("show3");
                          }}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <div className="media-body">
                      <div className="d-sm-flex align-items-center">
                        <div className="mt-0">
                          <h5 className="mb-1 tx-15">Musiitwa Joel</h5>
                          <p className="mb-0 tx-13 text-muted">
                            User ID: NUL435{" "}
                            <span className="text-danger ms-2">Not Seen</span>
                          </p>
                        </div>
                        <span className="ms-auto wd-45p fs-16 mt-2">
                          <Samantha />
                        </span>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action br-t-1">
                  <div className="media mt-0">
                    <img
                      className="avatar-lg rounded-circle my-auto me-3"
                      src="http://199.241.139.118:9000/api/lecturer/image/NUA213"
                      alt="Image description"
                    />
                    <div className="media-body">
                      <div className="d-sm-flex align-items-center">
                        <div className="mt-1">
                          <h5 className="mb-1 tx-15">Jude Lubega</h5>
                          <p className="mb-0 tx-13 text-muted">
                            User ID: NUA213{" "}
                            <span className="text-warning ms-2">Rare</span>
                          </p>
                        </div>
                        <span className="ms-auto wd-45p fs-16 mt-2">
                          <Jimmy />
                        </span>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action br-t-1">
                  <div className="media mt-0">
                    <img
                      className="avatar-lg rounded-circle my-auto me-3"
                      src="https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000100539"
                      alt="Image description"
                    />
                    <div className="media-body">
                      <div className="d-sm-flex align-items-center">
                        <div className="mt-1">
                          <h5 className="mb-1 tx-15">Lubega Tasha</h5>
                          <p className="mb-0 tx-13 text-muted">
                            User ID: NUL453
                            <span className="text-danger ms-2">Not Seen</span>
                          </p>
                        </div>
                        <span className="ms-auto wd-45p fs-16 mt-2">
                          <Gabe />
                        </span>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action br-t-1">
                  <div className="media mt-0">
                    <img
                      className="avatar-lg rounded-circle my-auto me-3"
                      src="http://199.241.139.118:9000/api/lecturer/image/NUA211"
                      alt="Image description"
                    />
                    <div className="media-body">
                      <div className="d-sm-flex align-items-center">
                        <div className="mt-1">
                          <h5 className="mb-1 tx-15">Hakim Mulinde</h5>
                          <p className="mb-0 tx-13 text-muted">
                            User ID: NUL678
                            <span className="text-warning ms-2">Rare</span>
                          </p>
                        </div>
                        <span className="ms-auto wd-45p fs-16 mt-2">
                          <Manuel />
                        </span>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item-action br-t-1 br-br-7 br-bl-7">
                  <div className="media mt-0">
                    <img
                      className="avatar-lg rounded-circle my-auto me-3"
                      src={faces6}
                      alt="Image description"
                    />
                    <div className="media-body">
                      <div className="d-sm-flex align-items-center">
                        <div className="mt-1">
                          <h5 className="mb-1 tx-15">Ndebesa Hudu</h5>
                          <p className="b-0 tx-13 text-muted mb-0">
                            User ID: NUL678
                            <span className="text-danger ms-2">Not Seen</span>
                          </p>
                        </div>
                        <span className="ms-auto wd-45p fs-16 mt-2">
                          <Sharon />
                        </span>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} md={4} lg={4} className="col-xl-4 col-md-12 col-lg-6">
          <Card style={{
           
          }}>
            <Card.Header>
              <Card.Title as="h3">
                Lecturers who misssed lecturers today  <Link to="#">   SEE MORE</Link>
              </Card.Title>
              <p className="tx-12 mb-0 text-muted">
                This clearly shows the summary of the lecturers who misssed
                lecturers today and the lecturers who misssed lecturers this
                week.
              </p>
            </Card.Header>
            <Card.Body style={{marginBottom: '30px'}}>
              <div>
                <div className="chips">
                  <div className="team">
                    <Link to="#" className="chip">
                      <img
                        className="avatar cover-image"
                        src="https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000100539"
                      />{" "}
                      Lubega Tasha
                    </Link>
                    {/* <i className="fab fa-facebook text-primary" aria-hidden="true"></i>
										<i className="fab fa-twitter text-primary" aria-hidden="true"></i>
										<i className="fas fa-envelope text-primary" aria-hidden="true"></i> */}
                    <p>
                      Mr. Lubega Tasha missed almost 3 lectures today minus
                      supplying a geneius reason
                    </p>
                  </div>
                  <div className="team">
                    <Link to="#" className="chip">
                      <img
                        className="avatar cover-image"
                        src="https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000100121"
                      />{" "}
                      Musiitwa Joel
                    </Link>
                    {/* <i className="fab fa-facebook text-primary" aria-hidden="true"></i>
										<i className="fab fa-twitter text-primary" aria-hidden="true"></i>
										<i className="fas fa-envelope text-primary" aria-hidden="true"></i> */}
                    <p>
                      Mr. Musiitwa Joel missed almost 2 lectures today after
                      notifying the adminstration and students and provided
                      various reasons
                    </p>
                  </div>
                  <div className="team">
                    <Link to="#" className="chip">
                      <img
                        className="avatar cover-image"
                        src="https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000101041"
                      />{" "}
                      Akampereza Darlington
                    </Link>
                    {/* <i className="fab fa-facebook text-primary" aria-hidden="true"></i>
										<i className="fab fa-twitter text-primary" aria-hidden="true"></i>
										<i className="fas fa-envelope text-primary" aria-hidden="true"></i> */}
                    <p className="mb-0">
                      Mr. Akampereza Darlington missed almost 3 lectures today
                      minus supplying a geneius reason to both the Adminstration
                      and the students.
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      
				<Col lg={4} md={4}>
					<Card className="mg-b-20">
						<Card.Body className="">
							<div className="main-content-label mg-b-5">
								Attendence Weekly
							</div>
							<p className="mg-b-20">This clearly illustrates the weekly attendence of both staff and students.</p>
							<div id="echart2" className="ht-300">
								<LineChart />
							</div>
						</Card.Body>
					</Card>
				</Col>       
      </Row>

      <Row>
      <Col md={6} lg={6} xl={4}>
					<Card>
						<Card.Header className="bg-transparent pd-b-0 pd-t-20 bd-b-0">
							<div className="d-flex justify-content-between">
								<Card.Title as='h4' className="card-title mb-0">Order status</Card.Title>
								<Dropdown>
									<Dropdown.Toggle as='a' variant="light" className='no-caret' id="dropdown-basic">
										<i className="mdi mdi-dots-horizontal text-gray"></i>
									</Dropdown.Toggle>
									<Dropdown.Menu style={{ marginTop: '0px' }}>
										<Dropdown.Item>Action</Dropdown.Item>
										<Dropdown.Item>Another action</Dropdown.Item>
										<Dropdown.Item>Something else</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<p className="tx-12 text-muted mb-0">Order Status and Tracking. Track your order from ship date to arrival. To begin, enter your order number.</p>
						</Card.Header>
						<Card.Body className="b-p-apex">
							<div className="total-revenue pb-0">
								<div>
									<h4>120,750</h4>
								</div>
								<div>
									<h4>56,108</h4>
								</div>
								<div>
									<h4>32,895</h4>
								</div>
							</div>

							<OrderStatus />
						</Card.Body>
					</Card>
				</Col>
      </Row>
    </div>
  );
};

Indexpage.defaultProps = {};

export default Indexpage;
