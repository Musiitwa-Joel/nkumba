import React, { useState } from "react";
import styles from "./Indexpage.module.scss";
import Pageheader from "../Layouts/Pageheader/Pageheader";
import {
  Card,
  Col,
  Nav,
  Row,
  Tab,
  Form,
  Collapse,
  Dropdown,
  ProgressBar,
  Button,
  Accordion,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
// import faces6 from '../../../../src/assets/img/faces/6.jpg';
import faces6 from "../../assets/img/faces/6.jpg";
import { Link } from "react-router-dom";
// import { PagesGallery } from '../../CommonFileComponents/LightGallery';
import { PagesGallery } from "../CommonFileComponents/LightGallery";
// import faces1 from '../../../../src/assets/img/faces/1.jpg';
import faces1 from "../../assets/img/faces/1.jpg";

import faces2 from "../../assets/img/faces/2.jpg";
import faces3 from "../../assets/img/faces/3.jpg";
import faces4 from "../../assets/img/faces/4.jpg";
import faces5 from "../../assets/img/faces/5.jpg";
// import faces6 from '../../assets/img/faces/6.jpg';
import faces7 from "../../assets/img/faces/7.jpg";
import faces8 from "../../assets/img/faces/8.jpg";
import faces12 from "../../assets/img/faces/12.jpg";
import faces15 from "../../assets/img/faces/15.jpg";
// import noTaking from '../../../../src/assets/img/svgicons/note_taking.svg';
import noTaking from '../../assets/img/svgicons/note_taking.svg';
// import media4 from '../../../assets/img/media/4.jpg';
import media4 from "../../assets/img/media/4.jpg";
import faces9 from "../../assets/img/faces/9.jpg";
import PhoneInput from "react-phone-input-2";
import InputMask from "react-input-mask";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import RevoCalendar from "revo-calendar";
import RecentOrder from "./RecentOrder";

const Tabs = () => {
  //Show Code variables

  const [i, seti] = useState(false);
  const [i2, seti2] = useState(false);
  const [i3, seti3] = useState(false);
  const [i4, seti4] = useState(false);
  const [i5, seti5] = useState(false);

  const FriendData = [
    { id: 1, image: faces1, username: "James Thomas", role: "Web designer" },
    {
      id: 2,
      image: faces3,
      username: "Reynante Labares",
      role: "Web designer",
    },
    { id: 3, image: faces4, username: "Owen Bongcaras", role: "Web designer" },
    {
      id: 4,
      image: faces8,
      username: "Stephen Metcalfe",
      role: "Administrator",
    },
    {
      id: 5,
      image: faces2,
      username: "Socrates Itumay",
      role: "Project Manager",
    },
    { id: 6, image: faces5, username: "Florinda Carasco", role: "Team Leader" },
    { id: 7, image: faces7, username: "Zula Mclaughin", role: "App Developer" },
    { id: 8, image: faces9, username: "Alina Bernier", role: "Administrator" },
  ];
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.Tabs}>
      <Pageheader titles="Elements" active="Tabs" />
      {/* <!-- container --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        {/* <!-- /div --> */}

        <Col xl={12}>
          {/* <!-- div --> */}
          <Card className="mg-b-20" id="tabs-style3">
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Student and staff assessment portal
              </div>
              <div className="d-grid d-sm-flex">
                <p className="mg-b-20 mg-b-20">
                  It is Very Easy to monitor and ensure quality assurance is key
                  for each stakeholder at the university premises.
                </p>
                {/* <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { seti3(!i3) }} /> */}
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="panel panel-primary tabs-style-3">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <div className="tabs-menu ">
                        <Nav variant="" className=" nav panel-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="first">
                              <i className="fa fa-laptop me-2"></i>Student
                              Assessment Center
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              <i className="fa fa-cube me-2"></i>Lecturer
                              Assessment Center
                            </Nav.Link>
                          </Nav.Item>
                          {/* <Nav.Item>
														<Nav.Link eventKey="third"><i className="fa fa-cogs"></i> Tab Style 03</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="fourth"><i className="fa fa-tasks"></i> Tab Style 04</Nav.Link>
													</Nav.Item> */}
                        </Nav>
                      </div>
                      <Tab.Content className="panel-body tabs-menu-body border-top-0">
                        <Tab.Pane eventKey="first">
                          <InputGroup className="mb-2">
                            <FormControl
                              type="text"
                              className="rounded-3 br-te-0 br-be-0"
                              placeholder="Enter Student Number"
                            />
                            <InputGroup.Text className="bg-transparent p-0 rounded-3 br-ts-0 br-bs-0 overflow-hidden">
                              <Button
                                variant="primary"
                                className="ripple"
                                type="button"
                              >
                                Search
                              </Button>
                            </InputGroup.Text>
                          </InputGroup>
                          <Row className="row-sm">
                            <Col lg={4}>
                              <Card className="mg-b-20">
                                <Card.Body>
                                  <div className="ps-0">
                                    <div className="main-profile-overview">
                                      <div className="main-img-user profile-user">
                                        <img
                                          alt=""
                                          src="https://student1.zeevarsity.com:8001/get_photo.yaws?ic=nkumba&stdno=2000100121"
                                        />
                                        <Link
                                          className="fas fa-camera profile-edit"
                                          to="#"
                                        ></Link>
                                      </div>
                                      <div className="d-flex justify-content-between mg-b-20">
                                        <div>
                                          <h5 className="main-profile-name">
                                            Musiitwa Joel
                                          </h5>
                                          <p className="main-profile-name-text">
                                            2000100121
                                          </p>
                                          <p className="main-profile-name-text">
                                            2021/FEB/BCS/B228043/DAY
                                          </p>
                                          <p className="main-profile-name-text">
                                            BACHELOR OF SCENCE IN COMPUTER
                                            SCENCE
                                          </p>
                                        </div>
                                      </div>
                                      <h6>Bio</h6>
                                      <div className="main-profile-bio">
                                        Musiitwa Joel joined Nkumba University
                                        in the year 2021 and was enrolled with a
                                        Bachelors degree in Computer Science. A
                                        Ugandan by nationality and a
                                        Non-Resident Student
                                        <Link to="#"> More</Link>
                                      </div>
                                      {/* <!-- main-profile-bio --> */}
                                      <Row>
                                        <Col md={4} className="col mb20">
                                          <h5>3</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Year
                                          </h6>
                                        </Col>
                                        <Col md={4} className="col mb20">
                                          <h5>1</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Semester
                                          </h6>
                                        </Col>
                                        <Col md={4} className="col mb20">
                                          <h5>BCSSC</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Course
                                          </h6>
                                        </Col>
                                      </Row>
                                      <Row style={{ marginTop: 20 }}>
                                        <Col md={4} className="col mb20">
                                          <h5>Male</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Gender
                                          </h6>
                                        </Col>
                                        <Col md={4} className="col mb20">
                                          <h5>Private</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Sponsorship
                                          </h6>
                                        </Col>
                                        <Col md={4} className="col mb20">
                                          <h5>February</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Intake
                                          </h6>
                                        </Col>
                                      </Row>
                                      <Row style={{ marginTop: 20 }}>
                                        <Col md={4} className="col mb20">
                                          <h5>Main</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Campus
                                          </h6>
                                        </Col>
                                        <Col md={4} className="col mb20">
                                          <h5>Non-Resident</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Residence
                                          </h6>
                                        </Col>
                                        <Col md={4} className="col mb20">
                                          <h5>active</h5>
                                          <h6 className="text-small text-muted mb-0">
                                            Status
                                          </h6>
                                        </Col>
                                      </Row>
                                      {/* <hr className="mg-y-30" /> */}
                                      {/* <label className="main-content-label tx-13 mg-b-20">Social</label> */}
                                      {/* <div className="main-profile-social-list">
										<div className="media">
											<div className="media-icon bg-primary-transparent text-primary">
												<i className="icon ion-logo-github"></i>
											</div>
											<div className="media-body">
												<span>Github</span> <Link to="#">github.com/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-success-transparent text-success">
												<i className="icon ion-logo-twitter"></i>
											</div>
											<div className="media-body">
												<span>Twitter</span> <Link to="#">twitter.com/spruko.me</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-info-transparent text-info">
												<i className="icon ion-logo-linkedin"></i>
											</div>
											<div className="media-body">
												<span>Linkedin</span> <Link to="#">linkedin.com/in/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-danger-transparent text-danger">
												<i className="icon ion-md-link"></i>
											</div>
											<div className="media-body">
												<span>My Portfolio</span> <Link to="#">spruko.com/</Link>
											</div>
										</div>
									</div> */}
                                      <hr className="mg-y-30" />
                                      {/* <h6>Skills</h6> */}
                                      {/* <div className="skill-bar mb-4 clearfix mt-3">
										<span>HTML5 / CSS3</span>

										<ProgressBar className="mt-2" variant='primary-gradient' now={85} />
									</div> */}
                                      {/* <!--skill bar--> */}
                                      {/* <div className="skill-bar mb-4 clearfix">
										<span>Javascript</span>

										<ProgressBar className="mt-2" variant='danger-gradient' now={89} />

									</div> */}
                                      {/* <!--skill bar--> */}
                                      {/* <div className="skill-bar mb-4 clearfix">
										<span>Bootstrap</span>

										<ProgressBar className="mt-2" variant='success-gradient' now={80} />
									</div> */}
                                      {/* <!--skill bar--> */}
                                      {/* <div className="skill-bar clearfix">
										<span>Coffee</span>

										<ProgressBar className="mt-2" variant='info-gradient' now={95} />
									</div> */}
                                      {/* <!--skill bar--> */}
                                    </div>
                                    {/* <!-- main-profile-overview --> */}
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col lg={8}>
                              <Row className="row-sm"></Row>
                              <Card>
                                <Card.Body>
                                  <Tab.Container
                                    className="tabs-menu "
                                    id="left-tabs-example"
                                    defaultActiveKey="first"
                                  >
                                    <Nav className="profile navtab-custom panel-tabs">
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="first"
                                        >
                                          <i className="las la-user-circle tx-16 me-1 visible-xs"></i>
                                          BASIC DATA
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="second"
                                        >
                                          <i className="las la-images tx-15 me-1 visible-xs"></i>
                                          PAYMENT STATUS
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="third"
                                        >
                                          <i className="las la-life-ring tx-16 me-1 visible-xs"></i>
                                          GATE ENTRANCE
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="fourth"
                                        >
                                          <i className="las la-cog tx-16 me-1 visible-xs"></i>
                                          LECTURE STATUS
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="fifth"
                                        >
                                          <i className="las la-cog tx-16 me-1 visible-xs"></i>
                                          ENROLLMENT TRACK
                                        </Nav.Link>
                                      </Nav.Item>
                                    </Nav>

                                    <Tab.Content className="border border-top-0 p-4 br-dark">
                                      <Tab.Pane eventKey="first">
                                        {/* <h4 className="tx-15 text-uppercase mb-3">BIO Data</h4>
										<p className="m-b-5">Hi I'm Petey Cruiser,has been the industry's standard dummy
											text ever since the 1500s, when an unknown printer took a galley of type.
											Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
											justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
											eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
											semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
											eu, consequat vitae, eleifend ac, enim.</p>
										<div className="m-t-30">
											<h4 className="tx-15 text-uppercase mt-3">Experience</h4>
											<div className=" p-t-10">
												<h5 className="text-primary m-b-5 tx-14">Lead designer / Developer</h5>
												<p className="">websitename.com</p>
												<p><b>2010-2015</b></p>
												<p className="text-muted tx-13 m-b-0">Lorem Ipsum is simply dummy text of
													the printing and typesetting industry. Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type
													specimen book.</p>
											</div>
											<hr />
											<div className="">
												<h5 className="text-primary m-b-5 tx-14">Senior Graphic Designer</h5>
												<p className="">coderthemes.com</p>
												<p><b>2007-2009</b></p>
												<p className="text-muted tx-13 mb-0">Lorem Ipsum is simply dummy text of the
													printing and typesetting industry. Lorem Ipsum has been the
													industry's standard dummy text ever since the 1500s, when an unknown
													printer took a galley of type and scrambled it to make a type
													specimen book.</p>
											</div>
										</div> */}
                                        <div className="example p-2">
                                          <Row>
                                            <Col md={6}>
                                              <div className=" ">
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4}>
                                                    <Form.Label
                                                      className="mg-b-0 text-sm"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Student No.
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      required
                                                      type="text"
                                                      // type="text"
                                                      className="mb-0"
                                                      placeholder="Input box (disabled)"
                                                      disabled
                                                      style={{ fontSize: 14 }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Registration No.
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{ fontSize: 14 }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Gender
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{ fontSize: 14 }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Entry Study Year
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="email"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Nationality
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <PhoneInput
                                                      containerStyle={{
                                                        minWidth: "100%",
                                                      }}
                                                      inputStyle={{
                                                        minWidth: "100%",
                                                      }}
                                                      country={"ug"}
                                                      // value={this.state.phone}
                                                      // onChange={(phone) =>
                                                      // this.setState({ phone })
                                                      // }
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Sponsorship
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    {/* <Form.Control
                                    type="text"
                                    style={{
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  /> */}
                                                    <InputMask
                                                      className="form-control"
                                                      mask="99/99/9999"
                                                      placeholder="MM/DD/YYYY"
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Email
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>

                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Intake
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Program
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Faculty
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      College
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Hall
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Hall
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Verified
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Date of Birth
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                              </div>
                                            </Col>

                                            <Col md={6}>
                                              <div className="">
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4}>
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 13,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Old Student{" "}
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Status
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      type="text"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Entry Acad Yr.
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>{" "}
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Discount Codes
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Campus
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Telephone No.
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Study Time
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Program Code
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Program Duration
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Faculty Code
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      College Code
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Residence
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Residence
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Affiliate
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                                <Row className="row-xs align-items-center mg-b-5">
                                                  <Col md={4} className="">
                                                    <Form.Label
                                                      className="mg-b-0"
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    >
                                                      Department
                                                    </Form.Label>
                                                  </Col>
                                                  <Col
                                                    md={8}
                                                    className="mg-t-5 mg-md-t-0"
                                                  >
                                                    <Form.Control
                                                      style={{
                                                        fontSize: 14,
                                                        fontFamily: "poppins",
                                                      }}
                                                    />
                                                  </Col>
                                                </Row>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="second">
                                        {/* <PagesGallery /> */}
                                        <Row>
                                          <Col lg={12} md={12}>
                                            <Card>
                                              <Card.Body>
                                                {/* <div>
              <Card.Title as='h6' className="mb-1">Colored Style Accordion</Card.Title>
              <p className="text-muted card-sub-title">The default collapse behavior to create an
                accordion.</p>
            </div> */}

                                                {/* <!-- accordion --> */}

                                                <Accordion
                                                  defaultActiveKey="0"
                                                  flush
                                                  className="border coloured-accordion"
                                                >
                                                  <Accordion.Item eventKey="0">
                                                    <Accordion.Header>
                                                      Year 1 Semester 1
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                      <div className="border p-3 table-responsive">
                                                        <Table className="mb-0 table-bordered border-top mb-0">
                                                          <thead>
                                                            <tr>
                                                              <th>
                                                                Invoice No
                                                              </th>
                                                              <th>
                                                                Invoice Amount
                                                              </th>
                                                              <th>Paid</th>
                                                              <th>Due</th>
                                                              <th>Naration</th>
                                                              <th>% Paid</th>
                                                            </tr>
                                                          </thead>
                                                          <tbody>
                                                            <tr>
                                                              <th scope="row">
                                                                2U00100121-58335192
                                                              </th>
                                                              <td>
                                                                1.129.400.00
                                                              </td>
                                                              <td>
                                                                1.129.400.00
                                                              </td>
                                                              <td>0.00</td>
                                                              <td>Tuition</td>
                                                              <td>100%</td>
                                                            </tr>
                                                            <tr>
                                                              <th scope="row">
                                                                186U00100121-58335192
                                                              </th>
                                                              <td>
                                                                457,500.00
                                                              </td>
                                                              <td>
                                                                457,500.00
                                                              </td>
                                                              <td>0.00</td>
                                                              <td>
                                                                Functional
                                                              </td>
                                                              <td>100%</td>
                                                            </tr>
                                                          </tbody>
                                                        </Table>
                                                      </div>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                                  <Accordion.Item eventKey="1">
                                                    <Accordion.Header>
                                                      Year 1 Semester 2
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                      <div className="border p-3 table-responsive">
                                                        <Table className="mb-0 table-bordered border-top mb-0">
                                                          <thead>
                                                            <tr>
                                                              <th>
                                                                Invoice No
                                                              </th>
                                                              <th>
                                                                Invoice Amount
                                                              </th>
                                                              <th>Paid</th>
                                                              <th>Due</th>
                                                              <th>Naration</th>
                                                              <th>% Paid</th>
                                                            </tr>
                                                          </thead>
                                                          <tbody>
                                                            <tr>
                                                              <th scope="row">
                                                                2U00100121-58335192
                                                              </th>
                                                              <td>
                                                                1.129.400.00
                                                              </td>
                                                              <td>
                                                                1.129.400.00
                                                              </td>
                                                              <td>0.00</td>
                                                              <td>Tuition</td>
                                                              <td>100%</td>
                                                            </tr>
                                                            <tr>
                                                              <th scope="row">
                                                                186U00100121-58335192
                                                              </th>
                                                              <td>
                                                                457,500.00
                                                              </td>
                                                              <td>
                                                                457,500.00
                                                              </td>
                                                              <td>0.00</td>
                                                              <td>
                                                                Functional
                                                              </td>
                                                              <td>100%</td>
                                                            </tr>
                                                          </tbody>
                                                        </Table>
                                                      </div>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                                  <Accordion.Item eventKey="2">
                                                    <Accordion.Header>
                                                      Year 2 Semester 1
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                      <div className="border p-3 table-responsive">
                                                        <Table className="mb-0 table-bordered border-top mb-0">
                                                          <thead>
                                                            <tr>
                                                              <th>
                                                                Invoice No
                                                              </th>
                                                              <th>
                                                                Invoice Amount
                                                              </th>
                                                              <th>Paid</th>
                                                              <th>Due</th>
                                                              <th>Naration</th>
                                                              <th>% Paid</th>
                                                            </tr>
                                                          </thead>
                                                          <tbody>
                                                            <tr>
                                                              <th scope="row">
                                                                2U00100121-58335192
                                                              </th>
                                                              <td>
                                                                1.129.400.00
                                                              </td>
                                                              <td>
                                                                1.129.400.00
                                                              </td>
                                                              <td>0.00</td>
                                                              <td>Tuition</td>
                                                              <td>100%</td>
                                                            </tr>
                                                            <tr>
                                                              <th scope="row">
                                                                186U00100121-58335192
                                                              </th>
                                                              <td>
                                                                457,500.00
                                                              </td>
                                                              <td>
                                                                457,500.00
                                                              </td>
                                                              <td>0.00</td>
                                                              <td>
                                                                Functional
                                                              </td>
                                                              <td>100%</td>
                                                            </tr>
                                                          </tbody>
                                                        </Table>
                                                      </div>
                                                    </Accordion.Body>
                                                  </Accordion.Item>
                                                </Accordion>
                                              </Card.Body>
                                            </Card>
                                          </Col>
                                        </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="third">
                                        {/* <Row className="row-sm">
											{FriendData.map((idx) => (
												<Col sm={12} md={6} lg={6} xl={6} xxl={3} key={Math.random()}>
													<Card className="custom-card border">
														<Card.Body className="user-lock text-center">
															<Dropdown className='text-end'>
																<Dropdown.Toggle as="a" className="option-dots" variant="" id="dropdown-basic">
																	<i className="fe fe-more-vertical"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu className="dropdown-menu-end shadow" style={{marginTop: '0px'}}>
																	<Dropdown.Item href="#"><i className="fe fe-message-square me-2"></i> Message</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-edit-2 me-2"></i> Edit</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-eye me-2"></i> View</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
															<Link to={`${import.meta.env.BASE_URL}pages/profile`}>
																<img alt="avatar" className="rounded-circle" src={idx.image} />
																<h5 className="fs-16 mb-0 mt-3 text-dark fw-semibold">{idx.username}</h5>
																<span className="text-muted">{idx.role}</span>
																<div className="mt-3 d-flex mx-auto text-center justify-content-center">
																	<span className="btn btn-icon me-3 btn-facebook">
																		<span className="btn-inner--icon"> <i className="bx bxl-facebook tx-18 tx-prime"></i>
																		</span>
																	</span>
																	<span className="btn btn-icon me-3">
																		<span className="btn-inner--icon"> <i className="bx bxl-twitter tx-18 tx-prime"></i>
																		</span>
																	</span>
																	<span className="btn btn-icon me-3">
																		<span className="btn-inner--icon"> <i className="bx bxl-linkedin tx-18 tx-prime"></i>
																		</span>
																	</span>
																</div>
															</Link>
														</Card.Body>
													</Card>
												</Col>
											))}
										</Row> */}
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
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="fourth">
                                        <div>
                                          <h6>
                                            Course units for this semester
                                          </h6>
                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>Database programming</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={67}
                                            />
                                          </div>
                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>
                                              Modelling and simulation
                                            </span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={51}
                                            />
                                          </div>

                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>Computer Graphics</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="danger-gradient"
                                              now={38}
                                            />
                                          </div>

                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>
                                              Survey of programming languages
                                            </span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={92}
                                            />
                                          </div>
                                          {/* <!--skill bar--> */}
                                          <div className="skill-bar mb-4 clearfix">
                                            <span>Artificial Intelligence</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={67}
                                            />
                                          </div>
                                          {/* <!--skill bar--> */}
                                          <div className="skill-bar mb-4 clearfix">
                                            <span>Systems Programming</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="danger-gradient"
                                              now={5}
                                            />
                                          </div>
                                          {/* <!--skill bar--> */}

                                          <RecentOrder />
                                        </div>
                                        {/* <!-- main-profile-overview --> */}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="fifth">
                                      <Col>
					<Card>
						<Card.Header className="pb-1">
							{/* <Card.Title as='h3' className="mb-2">Sales Activity</Card.Title> */}
							{/* <p className="tx-12 mb-0 text-muted">Sales activities are the tactics that salespeople use to achieve their goals and objective</p> */}
						</Card.Header>
						<Card.Body className="product-timeline pt-2 mt-1">
							<ul className="timeline-1 mb-0">
								<li className="mt-0" id="mrg-8"> <i className="ti-pie-chart bg-primary-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Total Products</span> <Link to="#" className="float-end tx-11 text-muted">3 days ago</Link>
									<p className="mb-0 text-muted tx-12">1.3k New Products</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="mdi mdi-cart-outline bg-danger-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Total Sales</span> <Link to="#" className="float-end tx-11 text-muted">35 mins ago</Link>
									<p className="mb-0 text-muted tx-12">1k New Sales</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="ti-bar-chart-alt bg-success-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Toatal Revenue</span> <Link to="#" className="float-end tx-11 text-muted">50 mins ago</Link>
									<p className="mb-0 text-muted tx-12">23.5K New Revenue</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="ti-wallet bg-warning-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Toatal Profit</span> <Link to="#" className="float-end tx-11 text-muted">1 hour ago</Link>
									<p className="mb-0 text-muted tx-12">3k New profit</p>
								</li>
								<li className="mt-0" id="mrg-8"> <i className="si si-eye bg-purple-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Customer Visits</span> <Link to="#" className="float-end tx-11 text-muted">1 day ago</Link>
									<p className="mb-0 text-muted tx-12">15% increased</p>
								</li>
								<li className="mt-0 mb-0 mrg-8"> <i className="icon-note icons bg-primary-gradient text-white product-icon"></i> <span className="fw-semibold mb-4 tx-14 ">Customer Reviews</span> <Link to="#" className="float-end tx-11 text-muted">1 day ago</Link>
									<p className="mb-0 text-muted tx-12">1.5k reviews</p>
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
                                      </Tab.Pane>
                                    </Tab.Content>
                                  </Tab.Container>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="fifth">
                          <div>
                            <Row>
                              <Col lg={12}>
                                <Card className="custom-card">
                                  <Card.Header className="custom-card-header">
                                    <Card.Title as="h6" className="mb-0">
                                      Vertical Timeline
                                    </Card.Title>
                                  </Card.Header>
                                  <Card.Body>
                                    <div className="vtimeline">
                                      <div className="timeline-wrapper timeline-wrapper-primary">
                                        <div className="timeline-badge success">
                                          <img
                                            className="timeline-image"
                                            alt="img"
                                            src={faces3}
                                          />
                                        </div>
                                        <div className="timeline-panel">
                                          <div className="timeline-heading">
                                            <h6 className="timeline-title">
                                              Art Ramadani posted a status
                                              update
                                            </h6>
                                          </div>
                                          <div className="timeline-body">
                                            <p>
                                              Tolerably earnestly middleton
                                              extremely distrusts she boy now
                                              not. Add and offered prepare how
                                              cordial two promise. Greatly who
                                              affixed suppose but enquire
                                              compact prepare all put. Added
                                              forth chief trees but rooms think
                                              may.
                                            </p>
                                          </div>
                                          <div className="timeline-footer d-flex align-items-center flex-wrap">
                                            <i className="fe fe-heart  text-muted mx-1"></i>
                                            <span>19</span>
                                            <span className="ms-auto">
                                              <i className="fe fe-calendar text-muted mx-1"></i>
                                              19 Oct 2019
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-wrapper timeline-inverted timeline-wrapper-secondary">
                                        <div className="timeline-badge">
                                          <i className="las la-business-time"></i>
                                        </div>
                                        <div className="timeline-panel">
                                          <div className="timeline-heading">
                                            <h6 className="timeline-title">
                                              Job Meeting
                                            </h6>
                                          </div>
                                          <div className="timeline-body">
                                            <p>
                                              You have a meeting at Laborator
                                              Office Today.
                                            </p>
                                          </div>
                                          <div className="timeline-footer d-flex align-items-center flex-wrap">
                                            <i className="fe fe-heart  text-muted mx-1"></i>
                                            <span>25</span>
                                            <span className="ms-auto">
                                              <i className="fe fe-calendar text-muted mx-1"></i>
                                              10th Oct 2019
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-wrapper timeline-wrapper-info">
                                        <div className="timeline-badge">
                                          <i className="las la-user-circle"></i>
                                        </div>
                                        <div className="timeline-panel">
                                          <div className="timeline-heading">
                                            <h6 className="timeline-title">
                                              Arlind Nushi checked in at New
                                              York
                                            </h6>
                                          </div>
                                          <div className="timeline-body">
                                            <p>
                                              Alpha 5 has arrived just over a
                                              month after Alpha 4 with some
                                              major feature improvements and a
                                              boat load of bug fixes.
                                            </p>
                                          </div>
                                          <div className="timeline-footer d-flex align-items-center flex-wrap">
                                            <i className="fe fe-heart  text-muted mx-1"></i>
                                            <span>19</span>
                                            <span className="ms-auto">
                                              <i className="fe fe-calendar text-muted mx-1"></i>
                                              5th Oct 2019
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                                        <div className="timeline-badge success">
                                          <img
                                            className="timeline-image"
                                            alt="img"
                                            src={faces12}
                                          />
                                        </div>
                                        <div className="timeline-panel">
                                          <div className="timeline-heading">
                                            <h6 className="timeline-title">
                                              Eroll Maxhuni uploaded 4 new
                                              photos to album Summer Trip
                                            </h6>
                                          </div>
                                          <div className="timeline-body">
                                            <p>
                                              Pianoforte principles our
                                              unaffected not for astonished
                                              travelling are particular.
                                            </p>
                                            <img
                                              src={media4}
                                              className="mb-3"
                                              alt="img"
                                            />
                                          </div>
                                          <div className="timeline-footer d-flex align-items-center flex-wrap">
                                            <i className="fe fe-heart  text-muted mx-1"></i>
                                            <span>19</span>
                                            <span className="ms-auto">
                                              <i className="fe fe-calendar text-muted mx-1"></i>
                                              27th Sep 2017
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-wrapper timeline-wrapper-success">
                                        <div className="timeline-badge">
                                          <i className="las la-envelope-open-text"></i>
                                        </div>
                                        <div className="timeline-panel">
                                          <div className="timeline-heading">
                                            <h6 className="timeline-title">
                                              Support Team sent you an email
                                            </h6>
                                          </div>
                                          <div className="timeline-body">
                                            <p>
                                              Etsy doostang zoodles disqus
                                              groupon greplin oooj voxy zoodles,
                                              weebly ning heekya handango imeem
                                              plugg dopplr jibjab, movity jajah
                                              plickers sifteo edmodo ifttt
                                              zimbra. Babblely odeo kaboodle
                                              quora plaxo ideeli hulu weebly
                                              balihoo....
                                            </p>
                                            <a className="btn ripple btn-primary text-white mb-3">
                                              Read more
                                            </a>
                                          </div>
                                          <div className="timeline-footer d-flex align-items-center flex-wrap">
                                            <i className="fe fe-heart  text-muted mx-1"></i>
                                            <span>25</span>
                                            <span className="ms-auto">
                                              <i className="fe fe-calendar text-muted mx-1"></i>
                                              25th Sep 2017
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-wrapper timeline-inverted timeline-wrapper-warning">
                                        <div className="timeline-badge success">
                                          <img
                                            className="timeline-image"
                                            alt="img"
                                            src={faces15}
                                          />{" "}
                                        </div>
                                        <div className="timeline-panel">
                                          <div className="timeline-heading">
                                            <h6 className="timeline-title">
                                              Mr. Doe shared a video
                                            </h6>
                                          </div>
                                          <div className="timeline-body">
                                            <div className="embed-responsive embed-responsive-16by9 mb-3">
                                              <iframe
                                                className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/XZmGGAbHqa0?rel=0&amp;controls=0&amp;showinfo=0"
                                                allowFullScreen
                                              ></iframe>
                                            </div>
                                          </div>
                                          <div className="timeline-footer d-flex align-items-center flex-wrap">
                                            <i className="fe fe-heart  text-muted mx-1"></i>
                                            <span>32</span>
                                            <span className="ms-auto">
                                              <i className="fe fe-calendar text-muted mx-1"></i>
                                              19th Sep 2017
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="timeline-wrapper timeline-wrapper-dark">
                                        <div className="timeline-badge">
                                          <i className="las la-check-circle"></i>
                                        </div>
                                        <div className="timeline-panel">
                                          <div className="timeline-heading">
                                            <h6 className="timeline-title">
                                              Sarah Young accepted your friend
                                              request
                                            </h6>
                                          </div>
                                          <div className="timeline-body">
                                            <p>
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipisicing elit. Amet
                                              cupiditate, delectus deserunt
                                              doloribus earum eveniet explicabo
                                              fuga iste magni maxime
                                            </p>
                                          </div>
                                          <div className="timeline-footer d-flex align-items-center flex-wrap">
                                            <i className="fe fe-heart text-muted mx-1"></i>
                                            <span>26</span>
                                            <span className="ms-auto">
                                              <i className="fe fe-calendar text-muted mx-1"></i>
                                              15th Sep 2017
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <InputGroup className="mb-2">
                            <FormControl
                              type="text"
                              className="rounded-3 br-te-0 br-be-0"
                              placeholder="Enter Staff Number"
                            />
                            <InputGroup.Text className="bg-transparent p-0 rounded-3 br-ts-0 br-bs-0 overflow-hidden">
                              <Button
                                variant="primary"
                                className="ripple"
                                type="button"
                              >
                                Search
                              </Button>
                            </InputGroup.Text>
                          </InputGroup>
                          <Row className="row-sm">
                            <Col lg={4}>
                              <Card className="mg-b-20">
                                <Card.Body>
                                  <div className="ps-0">
                                    <div className="main-profile-overview">
                                      <div className="main-img-user profile-user">
                                        <img
                                          alt=""
                                          src="	http://199.241.139.118:9000/api/lecturer/image/NUA213"
                                        />
                                        <Link
                                          className="fas fa-camera profile-edit"
                                          to="#"
                                        ></Link>
                                      </div>
                                      <div className="d-flex justify-content-between mg-b-20">
                                        <div>
                                          <h5 className="main-profile-name">
                                            Jude Lubega
                                          </h5>
                                          <p className="main-profile-name-text">
                                            NUA213
                                          </p>
                                          <p className="main-profile-name-text">
                                            Vice Chancellor
                                          </p>
                                        </div>
                                      </div>
                                      <h6>Bio</h6>
                                      <div className="main-profile-bio">
                                        Jude Lubega acquired a PhD. Computer
                                        Science December in 2006, Msc. Net Work
                                        Centred Computing, December 2002,
                                        Specialised in Electronic Commerce (Data
                                        Mining and Knowledge Discovery),Bsc.
                                        Computer Science and Statistics with an
                                        upper second-class honours degree
                                        October 2001 and Certificate in Human
                                        Resource and management in 2001.
                                      </div>
                                      {/* <!-- main-profile-bio --> */}

                                      {/* <hr className="mg-y-30" /> */}
                                      {/* <label className="main-content-label tx-13 mg-b-20">Social</label> */}
                                      {/* <div className="main-profile-social-list">
										<div className="media">
											<div className="media-icon bg-primary-transparent text-primary">
												<i className="icon ion-logo-github"></i>
											</div>
											<div className="media-body">
												<span>Github</span> <Link to="#">github.com/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-success-transparent text-success">
												<i className="icon ion-logo-twitter"></i>
											</div>
											<div className="media-body">
												<span>Twitter</span> <Link to="#">twitter.com/spruko.me</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-info-transparent text-info">
												<i className="icon ion-logo-linkedin"></i>
											</div>
											<div className="media-body">
												<span>Linkedin</span> <Link to="#">linkedin.com/in/spruko</Link>
											</div>
										</div>
										<div className="media">
											<div className="media-icon bg-danger-transparent text-danger">
												<i className="icon ion-md-link"></i>
											</div>
											<div className="media-body">
												<span>My Portfolio</span> <Link to="#">spruko.com/</Link>
											</div>
										</div>
									</div> */}
                                      {/* <hr className="mg-y-30" /> */}
                                      {/* <h6>Skills</h6> */}
                                      {/* <div className="skill-bar mb-4 clearfix mt-3">
										<span>HTML5 / CSS3</span>

										<ProgressBar className="mt-2" variant='primary-gradient' now={85} />
									</div> */}
                                      {/* <!--skill bar--> */}
                                      {/* <div className="skill-bar mb-4 clearfix">
										<span>Javascript</span>

										<ProgressBar className="mt-2" variant='danger-gradient' now={89} />

									</div> */}
                                      {/* <!--skill bar--> */}
                                      {/* <div className="skill-bar mb-4 clearfix">
										<span>Bootstrap</span>

										<ProgressBar className="mt-2" variant='success-gradient' now={80} />
									</div> */}
                                      {/* <!--skill bar--> */}
                                      {/* <div className="skill-bar clearfix">
										<span>Coffee</span>

										<ProgressBar className="mt-2" variant='info-gradient' now={95} />
									</div> */}
                                      {/* <!--skill bar--> */}
                                    </div>
                                    {/* <!-- main-profile-overview --> */}
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col lg={8}>
                              <Row className="row-sm"></Row>
                              <Card>
                                <Card.Body>
                                  <Tab.Container
                                    className="tabs-menu "
                                    id="left-tabs-example"
                                    defaultActiveKey="first"
                                  >
                                    <Nav className="profile navtab-custom panel-tabs">
                                      {/* <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="first"
                                        >
                                          <i className="las la-user-circle tx-16 me-1 visible-xs"></i>
                                          BASIC DATA
                                        </Nav.Link>
                                      </Nav.Item> */}
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="first"
                                        >
                                          <i className="las la-images tx-15 me-1 visible-xs"></i>
                                          LECTURE INFO
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="third"
                                        >
                                          <i className="las la-life-ring tx-16 me-1 visible-xs"></i>
                                          TUTOR GATE ENTRANCE
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="fourth"
                                        >
                                          <i className="las la-cog tx-16 me-1 visible-xs"></i>
                                          TEACHING MODE
                                        </Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item as="li">
                                        <Nav.Link
                                          className="hidden-xs"
                                          eventKey="fifth"
                                        >
                                          <i className="las la-cog tx-16 me-1 visible-xs"></i>
                                          NOTIFICATIONS
                                        </Nav.Link>
                                      </Nav.Item>
                                    </Nav>

                                    <Tab.Content className="border border-top-0 p-4 br-dark">
                                      <Tab.Pane eventKey="first">
                                        {/* <PagesGallery /> */}
                                        <Row>
                                          <Col lg={12} md={12}>
                                            <Card>
                                              <Card.Body>
                                                {/* <div>
              <Card.Title as='h6' className="mb-1">Colored Style Accordion</Card.Title>
              <p className="text-muted card-sub-title">The default collapse behavior to create an
                accordion.</p>
            </div> */}

                                                {/* <!-- accordion --> */}

                                                <div className="example">
                                                  <div className="panel panel-primary tabs-style-1">
                                                    <Tab.Container
                                                      id="left-tabs-example"
                                                      defaultActiveKey="first"
                                                    >
                                                      <Nav
                                                        variant="pills"
                                                        className="nav panel-tabs main-nav-line"
                                                      >
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="first">
                                                            WK 1
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="second">
                                                            WK 2
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="three">
                                                            WK 3
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="fourth">
                                                            WK 4
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="fifth">
                                                            WK 5
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="sixth">
                                                            WK 6
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="seventh">
                                                            WK 7
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="eighth">
                                                            WK 8
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="nineth">
                                                            WK 9
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="tenth">
                                                            WK 10
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="eleventh">
                                                            WK 11
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                          <Nav.Link eventKey="twelveth">
                                                            WK 12
                                                          </Nav.Link>
                                                        </Nav.Item>
                                                      </Nav>
                                                      <Tab.Content className="panel-body tabs-menu-body main-content-body-right border-top-0 border">
                                                        <Tab.Pane eventKey="first">
                                                          <Row>
                                                          <Col>
                                                            <Card className="bg-success">
                                                              <Card.Body>
                                                                <Card.Title
                                                                  as="h5"
                                                                  className="text-white"
                                                                >
                                                                  Survey Of Programming Languages
                                                                </Card.Title>
                                                                <Card.Subtitle
                                                                  as="h6"
                                                                  className="mb-2 text-white"
                                                                >
                                                                  Jude Lubega
                                                                </Card.Subtitle>
                                                                <Card.Text as="p">
                                                                  Week 1 Topics:<br/>
                                                                  Introduction to Survey Of Programming languages

                                                                </Card.Text>
                                                                <Card.Link
                                                                  to="#"
                                                                  className="text-white"
                                                                >
                                                                  Duration: 2hrs
                                                                </Card.Link>
                                                                <Card.Link
                                                                  to="#"
                                                                  className="text-white"
                                                                >
                                                                  Lecture Mode: Online
                                                                </Card.Link>
                                                              </Card.Body>
                                                            </Card>
                                                          </Col>
                                                          </Row>
                                                          <Row>
                                                          <Col>
                                                            <Card className="bg-success">
                                                              <Card.Body>
                                                                <Card.Title
                                                                  as="h5"
                                                                  className="text-white"
                                                                >
                                                                  Computer Graphics
                                                                </Card.Title>
                                                                <Card.Subtitle
                                                                  as="h6"
                                                                  className="mb-2 text-white"
                                                                >
                                                                  Jude Lubega
                                                                </Card.Subtitle>
                                                                <Card.Text as="p">
                                                                  Week 1 Topics: <br/>
                                                                  Introduction to Reflection and Computer Graphics
                                                                </Card.Text>
                                                                <Card.Link
                                                                  to="#"
                                                                  className="text-white"
                                                                >
                                                                  Duration: 1hrs 45 mins
                                                                </Card.Link>
                                                                <Card.Link
                                                                  to="#"
                                                                  className="text-white"
                                                                >
                                                                  Lecture Mode: Physical
                                                                </Card.Link>
                                                              </Card.Body>
                                                            </Card>
                                                          </Col>
                                                          </Row>
                                                          <Row>
                                                          <Col>
                                                            <Card className="bg-danger">
                                                              <Card.Body>
                                                                <Card.Title
                                                                  as="h5"
                                                                  className="text-white"
                                                                >
                                                                  Distributed Systems
                                                                </Card.Title>
                                                                <Card.Subtitle
                                                                  as="h6"
                                                                  className="mb-2 text-white"
                                                                >
                                                                  Jude Lubega
                                                                </Card.Subtitle>
                                                                <Card.Text as="p">
                                                                 The Lecture didnt take place due to illness of the lecturer on 12/04/23, Apologies.
                                                                </Card.Text>
                                                            
                                                              </Card.Body>
                                                            </Card>
                                                          </Col>
                                                          </Row>
                                                          
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="third">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="fourth">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="fifth">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="sixth">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="seventh">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>
 
                                                        <Tab.Pane eventKey="eighth">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="nineth">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="tenth">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="eleventh">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>

                                                        <Tab.Pane eventKey="twelveth">
                                                          <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                          
                                                        </Tab.Pane>
                                                        
                                                        <Tab.Pane eventKey="three">
                                                        <div style={{
                                                            display: "flex",
                                                            justifyContent: "center"
                                                          }}>
                                                        <Col lg={4} md={4} xl={0}>
                                                          
                                                          <div className="mg-b-20 text-center center">
                                                            <Card.Body className="h-100">
                                                              <img src={noTaking} alt="" className="wd-35p" />
                                                              <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
                                                            </Card.Body>
                                                          </div>
				                                                </Col>

                                                          </div>
                                                        </Tab.Pane>
                                                      </Tab.Content>
                                                    </Tab.Container>
                                                  </div>
                                                </div>
                                              </Card.Body>
                                            </Card>
                                          </Col>
                                        </Row>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="third">
                                        {/* <Row className="row-sm">
											{FriendData.map((idx) => (
												<Col sm={12} md={6} lg={6} xl={6} xxl={3} key={Math.random()}>
													<Card className="custom-card border">
														<Card.Body className="user-lock text-center">
															<Dropdown className='text-end'>
																<Dropdown.Toggle as="a" className="option-dots" variant="" id="dropdown-basic">
																	<i className="fe fe-more-vertical"></i>
																</Dropdown.Toggle>
																<Dropdown.Menu className="dropdown-menu-end shadow" style={{marginTop: '0px'}}>
																	<Dropdown.Item href="#"><i className="fe fe-message-square me-2"></i> Message</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-edit-2 me-2"></i> Edit</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-eye me-2"></i> View</Dropdown.Item>
																	<Dropdown.Item href="#"><i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item>
																</Dropdown.Menu>
															</Dropdown>
															<Link to={`${import.meta.env.BASE_URL}pages/profile`}>
																<img alt="avatar" className="rounded-circle" src={idx.image} />
																<h5 className="fs-16 mb-0 mt-3 text-dark fw-semibold">{idx.username}</h5>
																<span className="text-muted">{idx.role}</span>
																<div className="mt-3 d-flex mx-auto text-center justify-content-center">
																	<span className="btn btn-icon me-3 btn-facebook">
																		<span className="btn-inner--icon"> <i className="bx bxl-facebook tx-18 tx-prime"></i>
																		</span>
																	</span>
																	<span className="btn btn-icon me-3">
																		<span className="btn-inner--icon"> <i className="bx bxl-twitter tx-18 tx-prime"></i>
																		</span>
																	</span>
																	<span className="btn btn-icon me-3">
																		<span className="btn-inner--icon"> <i className="bx bxl-linkedin tx-18 tx-prime"></i>
																		</span>
																	</span>
																</div>
															</Link>
														</Card.Body>
													</Card>
												</Col>
											))}
										</Row> */}
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
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="fourth">
                                        <div>
                                          <h6>
                                            Course units for this semester
                                          </h6>
                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>Database programming</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={67}
                                            />
                                          </div>
                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>
                                              Modelling and simulation
                                            </span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={51}
                                            />
                                          </div>

                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>Computer Graphics</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="danger-gradient"
                                              now={38}
                                            />
                                          </div>

                                          <div className="skill-bar mb-4 clearfix mt-3">
                                            <span>
                                              Survey of programming languages
                                            </span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={92}
                                            />
                                          </div>
                                          {/* <!--skill bar--> */}
                                          <div className="skill-bar mb-4 clearfix">
                                            <span>Artificial Intelligence</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={67}
                                            />
                                          </div>
                                          {/* <!--skill bar--> */}
                                          <div className="skill-bar mb-4 clearfix">
                                            <span>Systems Programming</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="danger-gradient"
                                              now={5}
                                            />
                                          </div>

                                          <div className="skill-bar mb-4 clearfix">
                                            <span>Distributed Systems</span>

                                            <ProgressBar
                                              className="mt-2"
                                              variant="success-gradient"
                                              now={67}
                                            />
                                          </div>
                                          {/* <!--skill bar--> */}

                                          {/* <RecentOrder /> */}
                                        </div>
                                        {/* <!-- main-profile-overview --> */}
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="fifth">
                                        
                                      </Tab.Pane>
                                    </Tab.Content>
                                  </Tab.Container>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Temporibus autem quibusdam et aut officiis debitis
                            aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae sint et molestiae non
                            recusandae
                          </p>
                          <p className="mb-0">
                            Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus.{" "}
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          <p>
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so beguiled and
                            demoralized by the charms of pleasure of the moment,
                            so blinded by desire
                          </p>
                          <p className="mb-0">
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod maxime
                            placeat facere possimus, omnis voluptas assumenda
                            est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum
                            necessitatibus{" "}
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- /div --> */}
      </Row>
    </div>
    // <!-- /row -->
    // <!-- Container closed -->
  );
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
