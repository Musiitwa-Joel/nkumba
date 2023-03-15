import React, { useState } from "react";
import styles from "./indexpage.module.scss";
// import Pageheader from '../../Layouts/Pageheader/Pageheader';
import {
  BasicData,
  outlineAlert,
  solidAlert,
  linkAlert,
  dismissAlert,
  iconAlert,
  iconDismissable,
} from "./Data/data";
import Pageheader from "../Layouts/Pageheader/Pageheader";
import {
  Card,
  Col,
  Nav,
  Row,
  Tab,
  Form,
  Collapse,
  Accordion,
  Modal,
  Alert,
  Button,
} from "react-bootstrap";
import { Link, redirect } from "react-router-dom";
import SunEditor from "suneditor-react";
import { FilePond, registerPlugin } from "react-filepond";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InputMask from 'react-input-mask';


//sun editor
const htmlWithTableImages = `<center>  </center>`;
const Tabs = () => {
  //Show Code variables

  const [i, seti] = useState(false);
  const [i2, seti2] = useState(false);
  const [i3, seti3] = useState(false);
  const [i4, seti4] = useState(false);
  const [i5, seti5] = useState(false);
  const [showdata3, setshowdata3] = useState(dismissAlert);
  const [show3, setShow3] = useState(false);
  const [i6, seti6] = useState(false);
  //basicAlert
  function handleRemove(id) {
    const RemoveData = showdata.filter((ale) => ale.id !== id);
    setshowdata(RemoveData);
    // console.log(RemoveData);
  }
  //outlineAlert
  function handleRemove1(id) {
    const RemoveData = showdata1.filter((outline) => outline.id !== id);
    setshowdata1(RemoveData);
  }
  //SolidAlert
  function handleRemove2(id) {
    const RemoveData = showdata2.filter((solid) => solid.id !== id);
    setshowdata2(RemoveData);
  }

  const [value, setValue] = React.useState(htmlWithTableImages);

  //dismissAlert
  function handleRemove3(id) {
    const RemoveData = showdata3.filter((dis) => dis.id !== id);
    setshowdata3(RemoveData);
  }
  //dismiss with iconAlert
  function handleRemove4(id) {
    const RemoveData = showdata4.filter((ids) => ids.id !== id);
    setshowdata4(RemoveData);
  }

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
  const [files, setFiles] = useState([]);

	const [startDate, setStartDate] = React.useState(new Date());

	const [monthYear, setmonthYear] = React.useState(new Date());

	const [Year, setYear] = React.useState(new Date());

  return (
    <div className={styles.Tabs}>
      <Row>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className=""
        >
          <Col md={3} className="mg-md-t-0">
            <Card>
              <Card.Header className="tx-medium bd-0 tx-white bg-gray-800">
                FORM SECTIONS
              </Card.Header>
              <Card.Body className="p-0">
                <Nav variant="pills" className="flex-column tab_list">
                  <Nav.Item
                    className="flex-grow-1"
                    style={{
                      borderRadius: 0,
                      borderColor: "red",
                    }}
                  >
                    <Nav.Link eventKey="first" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="mdi mdi-account-settings me-2"></i>
                        BIO INFORMATION
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="second" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="zmdi zmdi-collection-item-1 me-2"></i>
                        PROGRAM CHOICES
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="third" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="fe fe-user-plus me-2"></i>
                        OTHER QUALIFICATIONS
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="fourth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="fa fa-graduation-cap me-2"></i>
                        A-LEVEL INFORMATION
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="fifth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="fa fa-graduation-cap me-2"></i>
                        O-LEVEL INFORMATION
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="thirtenth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="fa fa-graduation-cap me-2"></i>
                        COLLEGE
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="forteen" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="fa fa-graduation-cap me-2"></i>
                        FIRST DEGREE
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="sixteen" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="ion-md-add-circle me-2"></i>
                        ADDITIONAL INFORMATION
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="sixth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="zmdi zmdi-attachment-alt me-2"></i>
                        ATTACHEMENTS
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="seventh" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="fe fe-user-check me-2"></i>
                        REFEREE DETAILS
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="eighth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="ti-location-pin me-2"></i>
                        PERMANENT ADDRESS
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="nineth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="ti-support me-2"></i>
                        MEDICAL HISTORY
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="tenth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="mdi mdi-account-switch me-2"></i>
                        PARENT INFORMATION
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="eleventh" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="fa fa-dollar-sign me-2"></i>
                        PAYEMENT
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="flex-grow-1">
                    <Nav.Link eventKey="twelveth" className="w-100">
                      <span
                        style={{ fontWeight: "bold", fontFamily: "poppins" }}
                      >
                        <i className="mdi mdi-approval me-2"></i>
                        SUBMIT APPLICATIONS
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9} className="mg-md-t-0">
            <Card>
              <Card.Header className="tx-medium bd-0 tx-white bg-gray-800">
                Description
              </Card.Header>
              <Card.Body className="p-0">
                <div className="tabs-style-4 p-0">
                  <Tab.Content className="panel-body tabs-menu-body">
                    <Tab.Pane eventKey="first">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>

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
                                    Salutation
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    required type="text" 
                                    // type="text"
                                    
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
                                    Surname
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Other Name
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control style={{ fontSize: 14 }} />
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
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Telephone
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <PhoneInput
                                  containerStyle={{
                                    
                                    minWidth: '100%'
                                   
                                  
                                  }}
                                  inputStyle={{

                                    minWidth: '100%'
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
                                    Date Of Birth
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0"> 
                                  {/* <Form.Control
                                    type="text"
                                    style={{
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  /> */}
                                  <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />
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
                                    District Of Birth
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    District Of Origin
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Citizenship
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Religion
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    District of Residence{" "}
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Gender
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Marital Status
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Nationality
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    National ID No
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Passport No
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    EMIS No
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Current Position
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Name of employer
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Employer Address
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                      <div
                        className="btn-list"
                        style={{
                          display: "flex",
                          marginTop: 10,
                          justifyContent: "flex-end",
                          marginRight: -4,
                        }}
                      >
                        <Button
                          variant="success"
                          className="mx-1 button-icon mb-1"
                          style={{
                            backgroundColor: "#2d2f8f",
                            // width: '100px',
                            // height: '50px'
                          }}
                        >
                          <i className="fe fe-save me-2"></i>Save
                        </Button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <Col sm={12} md={12} lg={0}>
                        <div
                          style={{
                            marginRight: -10,
                          }}
                        >
                          <Row>
                            <Col md={10} className="">
                              <Form.Control
                                type="text"
                                style={{ fontSize: 14, fontFamily: "poppins" }}
                              />
                            </Col>
                            <Button
                              variant="success"
                              // className="ripple btn-b"
                              style={{
                                paddingBottom: 4,
                                backgroundColor: "#2d2f8f",
                                width: "100px",
                                height: "35px",
                                fontFamily: "poppins",
                              }}
                              onClick={() => viewDemoShow("show3")}
                            >
                              SELECT
                            </Button>
                          </Row>
                        </div>

                        <div className="example p-2" style={{ marginTop: 5 }}>
                          <Row>
                            <Col md={6}>
                              <div className=" ">
                                <Row
                                  className="row-xs align-items-center mg-b-5"
                                  style={{ borderRadius: 0 }}
                                >
                                  <Col md={4}>
                                    <Form.Label
                                      className="mg-b-0 text-sm"
                                      style={{
                                        fontSize: 14,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      Prog Code
                                      <span
                                        className="mg-l-2"
                                        style={{
                                          color: "red",
                                          marginLeft: 5,
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        *
                                      </span>
                                    </Form.Label>
                                  </Col>
                                  <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                      Campus
                                      <span
                                        className="mg-l-2"
                                        style={{
                                          color: "red",
                                          marginLeft: 5,
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        *
                                      </span>
                                    </Form.Label>
                                  </Col>
                                  <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                      Acad Year
                                      <span
                                        className="mg-l-2"
                                        style={{
                                          color: "red",
                                          marginLeft: 5,
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        *
                                      </span>
                                    </Form.Label>
                                  </Col>
                                  <Col md={8} className="mg-t-5 mg-md-t-0">
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

                            <Col md={6}>
                              <div className="">
                                <Row className="row-xs align-items-center mg-b-5">
                                  <Col md={4}>
                                    <Form.Label
                                      className="mg-b-0"
                                      style={{
                                        fontSize: 14,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      Entry Year{" "}
                                      <span
                                        className="mg-l-2"
                                        style={{
                                          color: "red",
                                          marginLeft: 5,
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        *
                                      </span>
                                    </Form.Label>
                                  </Col>
                                  <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                      Sponsorship
                                      <span
                                        className="mg-l-2"
                                        style={{
                                          color: "red",
                                          marginLeft: 5,
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        *
                                      </span>
                                    </Form.Label>
                                  </Col>
                                  <Col md={8} className="mg-t-5 mg-md-t-0">
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
                          </Row>
                        </div>
                        <hr />
                        <div
                          style={{
                            marginLeft: 20,
                          }}
                        >
                          <Form.Check defaultChecked type="checkbox" />
                          <span
                            className="tx-13"
                            style={{ fontFamily: "poppins" }}
                          >
                            Phd by Research & Publication
                          </span>
                          <Form.Check defaultChecked type="checkbox" />
                          <span
                            className="tx-13"
                            style={{ fontFamily: "poppins" }}
                          >
                            Phd by Coursework
                          </span>
                        </div>

                        <Modal size="lg" show={show3}>
                          <Modal.Header>
                            <Modal.Title style={{ fontFamily: "poppins" }}>
                              Large Modal
                            </Modal.Title>

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
                            <h6></h6>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              className="ripple"
                              variant="primary"
                              style={{ fontFamily: "poppins" }}
                            >
                              Save Changes
                            </Button>
                            <Button
                              style={{ fontFamily: "poppins" }}
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
                      </Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <div
                        style={{
                          marginLeft: -11,
                          marginRight: -11,
                        }}
                      >
                        <Form.Label
                          className="mg-b-0"
                          style={{
                            fontSize: 14,
                            paddingLeft: 12,
                            fontFamily: "poppins",
                          }}
                        >
                          Institution Name
                          <span
                            className="mg-l-2"
                            style={{
                              color: "red",
                              marginLeft: 5,
                            }}
                          >
                            *
                          </span>
                        </Form.Label>
                        <Col md={12} className="">
                          <Form.Control
                            type="text"
                            style={{ fontSize: 14, fontFamily: "poppins" }}
                          />
                        </Col>
                      </div>

                      <div className="example p-2" style={{ marginTop: 5 }}>
                        <Row>
                          <Col md={6}>
                            <div className=" ">
                              <Row
                                className="row-xs align-items-center mg-b-5"
                                style={{ borderRadius: 0 }}
                              >
                                <Col md={4}>
                                  <Form.Label
                                    className="mg-b-0 text-sm"
                                    style={{
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    Award Obtained
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Award Type
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Award Duration
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    style={{
                                      fontSize: 12,
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
                                    Award Body
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    style={{
                                      fontSize: 12,
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
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  >
                                    Classification{" "}
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Grade(CGPA)
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    Start Date
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  {/* <Form.Control
                                    type="text"
                                    style={{
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  />*/}
                                                                  <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />
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
                                    End Date
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                        fontFamily: "poppins",
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  {/* <Form.Control
                                    type="text"
                                    style={{
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  /> */}
                                                                    <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />

                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div
                        className="btn-list"
                        style={{
                          display: "flex",
                          marginTop: 10,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          style={{
                            fontFamily: "poppins",
                          }}
                          variant="outline-primary"
                          className="mx-1 button-icon mb-1"
                        >
                          <i className="fe fe-plus me-2"></i>ADD
                        </Button>
                        <Button
                          variant="success"
                          className="mx-1 button-icon mb-1"
                          style={{
                            backgroundColor: "#2d2f8f",
                            // width: '100px',
                            // height: '50px'
                            fontFamily: "poppins",
                          }}
                        >
                          <i className="fe fe-save me-2"></i>Save
                        </Button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <Form.Group className="mg-b-20 ms-4">
                        <Form.Check defaultChecked type="checkbox" />
                        <span
                          className="tx-13"
                          style={{ fontFamily: "poppins" }}
                        >
                          I SURELY DIDN’T SIT FOR UGANDA ADVANCED CERTIFICATE OF
                          EDUCATION (UACE) EXAMINATIONS
                        </span>
                        <Col md={12}>
                          <div className="">
                            <div className="panel panel-primary tabs-style-2">
                              <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey="first"
                              >
                                <Nav
                                  variant="pills"
                                  className="nav panel-tabs main-nav-line"
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                    }}
                                  >
                                    <Nav.Item>
                                      <Nav.Link
                                        eventKey="first"
                                        style={{ fontFamily: "poppins" }}
                                      >
                                        SEARCH RESULT
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link
                                        eventKey="second"
                                        style={{ fontFamily: "poppins" }}
                                      >
                                        I CAN’T FIND MY RESULT
                                      </Nav.Link>
                                    </Nav.Item>
                                  </div>
                                </Nav>
                                <Tab.Content className="">
                                  <Tab.Pane eventKey="first">
                                    <div
                                      className="example p-2"
                                      style={{ marginTop: 5 }}
                                    >
                                      <Row>
                                        <Col md={6}>
                                          <div className=" ">
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              A LEVEL INDEX NUMBER
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                  fontFamily: "poppins",
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>

                                        <Col md={6}>
                                          <div className="">
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              A LEVEL YEAR OF SITTING
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                  fontFamily: "poppins",
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                    <div
                                      className="btn-list"
                                      style={{
                                        display: "flex",
                                        marginTop: 10,
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <Button
                                        variant="success"
                                        className="mx-1 button-icon mb-1"
                                        style={{
                                          backgroundColor: "#2d2f8f",
                                          // width: '100px',
                                          // height: '50px'
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        <i className="fe fe-search me-2"></i>
                                        SEARCH
                                      </Button>
                                    </div>
                                  </Tab.Pane>

                                  <Tab.Pane eventKey="second">
                                    <div
                                      className="example p-2"
                                      style={{ marginTop: 5 }}
                                    >
                                      <Row>
                                        <Form.Label
                                          className="mg-b-0"
                                          style={{
                                            fontSize: 14,
                                            paddingLeft: 12,
                                            fontFamily: "poppins",
                                          }}
                                        >
                                          SCHOOL NAME
                                          <span
                                            className="mg-l-2"
                                            style={{
                                              color: "red",
                                              marginLeft: 5,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            *
                                          </span>
                                        </Form.Label>

                                        <Col md={12} className="">
                                          <Form.Control
                                            type="text"
                                            style={{ fontSize: 14 }}
                                          />
                                        </Col>
                                        <Col md={6}>
                                          <div
                                            className=" "
                                            style={{
                                              marginLeft: -11,
                                            }}
                                          >
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              INDEX NUMBER
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                  fontFamily: "poppins",
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>

                                        <Col md={6}>
                                          <div
                                            className=""
                                            style={{
                                              marginRight: -11,
                                            }}
                                          >
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              YEAR OF SITTING
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                  fontFamily: "poppins",
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                    <div
                                      className="btn-list"
                                      style={{
                                        display: "flex",
                                        marginTop: 10,
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <Button
                                        variant="success"
                                        className="mx-1 button-icon mb-1"
                                        style={{
                                          backgroundColor: "#2d2f8f",
                                          // width: '100px',
                                          // height: '50px'
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        <i className="fe fe-save me-2"></i>SAVE
                                      </Button>
                                    </div>
                                  </Tab.Pane>
                                </Tab.Content>
                              </Tab.Container>
                            </div>
                          </div>
                        </Col>
                      </Form.Group>
                    </Tab.Pane>

                    <Tab.Pane eventKey="fifth">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <Form.Group className="mg-b-20 ms-4">
                        <Form.Check defaultChecked type="checkbox" />
                        <span
                          className="tx-13"
                          style={{ fontFamily: "poppins" }}
                        >
                          I SURELY DIDN’T SIT FOR UGANDA CERTIFICATE OF
                          EDUCATION (UCE) EXAMINATIONS
                        </span>
                        <Col md={12}>
                          <div className="">
                            <div className="panel panel-primary tabs-style-2">
                              <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey="first"
                              >
                                <Nav
                                  variant="pills"
                                  className="nav panel-tabs main-nav-line"
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "100%",
                                    }}
                                  >
                                    <Nav.Item>
                                      <Nav.Link
                                        eventKey="first"
                                        style={{ fontFamily: "poppins" }}
                                      >
                                        SEARCH RESULT
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link
                                        eventKey="second"
                                        style={{ fontFamily: "poppins" }}
                                      >
                                        I CAN’T FIND MY RESULT
                                      </Nav.Link>
                                    </Nav.Item>
                                  </div>
                                </Nav>
                                <Tab.Content className="">
                                  <Tab.Pane eventKey="first">
                                    <div
                                      className="example p-2"
                                      style={{ marginTop: 5 }}
                                    >
                                      <Row>
                                        <Col md={6}>
                                          <div className=" ">
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              A LEVEL INDEX NUMBER
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                  fontFamily: "poppins",
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>

                                        <Col md={6}>
                                          <div className="">
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                              }}
                                            >
                                              A LEVEL YEAR OF SITTING
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                    <div
                                      className="btn-list"
                                      style={{
                                        display: "flex",
                                        marginTop: 10,
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <Button
                                        variant="success"
                                        className="mx-1 button-icon mb-1"
                                        style={{
                                          backgroundColor: "#2d2f8f",
                                          // width: '100px',
                                          // height: '50px'
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        <i className="fe fe-search me-2"></i>
                                        SEARCH
                                      </Button>
                                    </div>
                                  </Tab.Pane>

                                  <Tab.Pane eventKey="second">
                                    <div
                                      className="example p-2"
                                      style={{ marginTop: 5 }}
                                    >
                                      <Row>
                                        <Form.Label
                                          className="mg-b-0"
                                          style={{
                                            fontSize: 14,
                                            paddingLeft: 12,
                                            fontFamily: "poppins",
                                          }}
                                        >
                                          SCHOOL NAME
                                          <span
                                            className="mg-l-2"
                                            style={{
                                              color: "red",
                                              marginLeft: 5,
                                            }}
                                          >
                                            *
                                          </span>
                                        </Form.Label>

                                        <Col md={12} className="">
                                          <Form.Control
                                            type="text"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          />
                                        </Col>
                                        <Col md={6}>
                                          <div
                                            className=" "
                                            style={{ marginLeft: -11 }}
                                          >
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                              }}
                                            >
                                              INDEX NUMBER
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                  fontFamily: "poppins",
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>

                                        <Col md={6}>
                                          <div
                                            className=""
                                            style={{
                                              marginRight: -11,
                                            }}
                                          >
                                            <Form.Label
                                              className="mg-b-0"
                                              style={{
                                                fontSize: 14,
                                                paddingLeft: 12,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              YEAR OF SITTING
                                              <span
                                                className="mg-l-2"
                                                style={{
                                                  color: "red",
                                                  marginLeft: 5,
                                                  fontFamily: "poppins",
                                                }}
                                              >
                                                *
                                              </span>
                                            </Form.Label>
                                            <Col md={12} className="">
                                              <Form.Control
                                                type="text"
                                                style={{
                                                  fontSize: 14,
                                                  fontFamily: "poppins",
                                                }}
                                              />
                                            </Col>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                    <div
                                      className="btn-list"
                                      style={{
                                        display: "flex",
                                        marginTop: 10,
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <Button
                                        variant="success"
                                        className="mx-1 button-icon mb-1"
                                        style={{
                                          backgroundColor: "#2d2f8f",
                                          // width: '100px',
                                          // height: '50px'
                                          fontFamily: "poppins",
                                        }}
                                      >
                                        <i className="fe fe-save me-2"></i>SAVE
                                      </Button>
                                    </div>
                                  </Tab.Pane>
                                </Tab.Content>
                              </Tab.Container>
                            </div>
                          </div>
                        </Col>
                      </Form.Group>
                    </Tab.Pane>

                    <Tab.Pane eventKey="sixth">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      {/* <Card className="custom-card" id="dismiss-alerts"> */}

                      <div className="text-wrap">
                        <div className="example">
                          {showdata3.map((dis) => (
                            <Alert
                              style={{
                                fontFamily: "poppins",
                              }}
                              key={Math.random()}
                              variant={dis.color}
                              className={dis.class}
                            >
                              Attach here all your relevant document(s) to
                              support your application.
                              <Button
                                className="close"
                                variant=""
                                onClick={() => {
                                  handleRemove3(dis.id);
                                }}
                              >
                                <span
                                  className={`text-${dis.color}`}
                                  aria-hidden="true"
                                >
                                  &times;
                                </span>
                              </Button>
                            </Alert>
                          ))}
                          <Col md={12} xl={12} xs={12} sm={12}>
                            <Card.Body>
                              <Row className="row-sm">
                                <Col sm={12} md={12} lg={12}>
                                  <div>
                                    <FilePond
                                      className="mt-3 mb-3"
                                      style={{
                                        fontFamily: "poppins",
                                      }}
                                      allowMultiple={true}
                                      maxFiles={10}
                                      onupdatefiles={setFiles}
                                      server="/api"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <div
                                className="btn-list"
                                style={{
                                  display: "flex",
                                  marginTop: 10,
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="success"
                                  className="mx-1 button-icon mb-1"
                                  style={{
                                    backgroundColor: "#2d2f8f",
                                    // width: '100px',
                                    // height: '50px'
                                  }}
                                >
                                  <i className="fe fe-save me-2"></i>SAVE
                                </Button>
                              </div>
                            </Card.Body>
                          </Col>
                        </div>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="thirtenth">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <div
                        style={{
                          marginLeft: -11,
                          marginRight: -11,
                        }}
                      >
                        <Form.Label
                          className="mg-b-0"
                          style={{ fontSize: 14, paddingLeft: 12 }}
                        >
                          Institution Name
                          <span
                            className="mg-l-2"
                            style={{
                              color: "red",
                              marginLeft: 5,
                            }}
                          >
                            *
                          </span>
                        </Form.Label>
                        <Col md={12} className="">
                          <Form.Control type="text" style={{ fontSize: 14 }} />
                        </Col>
                      </div>
                      <div className="example p-2" style={{ marginTop: 5 }}>
                        <Row>
                          <Col md={6}>
                            <div className=" ">
                              <Row
                                className="row-xs align-items-center mg-b-5"
                                style={{ borderRadius: 0 }}
                              >
                                <Col md={4}>
                                  <Form.Label
                                    className="mg-b-0 text-sm"
                                    style={{ fontSize: 14 }}
                                  >
                                    Award Obtained
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Award Type
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Award Duration
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control style={{ fontSize: 12 }} />
                                </Col>
                              </Row>
                              <Row className="row-xs align-items-center mg-b-5">
                                <Col md={4} className="">
                                  <Form.Label
                                    className="mg-b-0"
                                    style={{ fontSize: 14 }}
                                  >
                                    Award Body
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control style={{ fontSize: 12 }} />
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Classification{" "}
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Grade(CGPA)
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Start Date
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  {/* <Form.Control
                                    type="text"
                                    style={{ fontSize: 14 }}
                                  /> */}
                                                                    <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />

                                </Col>
                              </Row>
                              <Row className="row-xs align-items-center mg-b-5">
                                <Col md={4} className="">
                                  <Form.Label
                                    className="mg-b-0"
                                    style={{ fontSize: 14 }}
                                  >
                                    End Date
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  {/* <Form.Control
                                    type="text"
                                    style={{ fontSize: 14 }}
                                  /> */}
                                                                    <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />

                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{ marginLeft: 20 }}>
                        <Form.Check defaultChecked type="checkbox" />
                        <span className="tx-13">
                          I DID NOT GO THROUGH THE COLLEGE SYSTEM DURING MY
                          EDUCATION JOURNEY. 
                        </span>
                      </div>

                      <div
                        className="btn-list"
                        style={{
                          display: "flex",
                          marginTop: 10,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          variant="outline-primary"
                          className="mx-1 button-icon mb-1"
                        >
                          <i className="fe fe-plus me-2"></i>ADD
                        </Button>
                        <Button
                          variant="success"
                          className="mx-1 button-icon mb-1"
                          style={{
                            backgroundColor: "#2d2f8f",
                            // width: '100px',
                            // height: '50px'
                          }}
                        >
                          <i className="fe fe-save me-2"></i>Save
                        </Button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="forteen">
                    <Col md={12} xl={12} xs={12} sm={12}>
                          <Card>
                            <Card.Body>
                              <div
                                style={{
                                  marginLeft: -11,
                                  marginRight: -11,
                                }}
                              >
                                <Form.Label
                                  className="mg-b-0"
                                  style={{
                                    fontSize: 14,
                                    paddingLeft: 12,
                                    fontFamily: "poppins",
                                  }}
                                >
                                  Degree or equivalent
                                  <span
                                    className="mg-l-2"
                                    style={{
                                      color: "red",
                                      marginLeft: 5,
                                    }}
                                  >
                                    *
                                  </span>
                                </Form.Label>
                                <Col md={12} className="">
                                  <Form.Control
                                    type="text"
                                    style={{
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  />
                                </Col>
                              </div>
                              <div
                                className="example p-2"
                                style={{ marginTop: 5 }}
                              >
                                <Row>
                                  <Col md={6}>
                                    <div className=" ">
                                      <Row
                                        className="row-xs align-items-center mg-b-5"
                                        style={{ borderRadius: 0 }}
                                      >
                                        <Col md={4}>
                                          <Form.Label
                                            className="mg-b-0 text-sm"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Start Date
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
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
                                                                            <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />

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
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            End Date{" "}
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
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
                                                                            <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />

                                        </Col>
                                      </Row>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <div
                                className="example p-2"
                                style={{ marginTop: 5 }}
                              >
                                <Row>
                                  <Col md={6}>
                                    <div className=" ">
                                      <Row
                                        className="row-xs align-items-center mg-b-5"
                                        style={{ borderRadius: 0 }}
                                      >
                                        <Col md={4}>
                                          <Form.Label
                                            className="mg-b-0 text-sm"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Division
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
                                          </Form.Label>
                                        </Col>
                                        <Col
                                          md={8}
                                          className="mg-t-5 mg-md-t-0"
                                        >
                                          {/* <Form.Control
                                            type="phone"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          /> */}
                                         <Form.Control
                                            type="address"
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
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Institution{" "}
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
                                          </Form.Label>
                                        </Col>
                                        <Col
                                          md={8}
                                          className="mg-t-5 mg-md-t-0"
                                        >
                                          <Form.Control
                                            type="address"
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
                           
                              <div
                                className="btn-list"
                                style={{
                                  display: "flex",
                                  marginTop: 10,
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="success"
                                  className="mx-1 button-icon mb-1"
                                  style={{
                                    backgroundColor: "#2d2f8f",
                                    // width: '100px',
                                    // height: '50px'
                                  }}
                                >
                                  <i className="fe fe-save me-2"></i>Save
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixteen">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <Row>
                        <Col md={12}>
                          <Card.Title
                            as="h3"
                            style={{
                              fontFamily: "poppins",
                            }}
                          >
                            Reasearch And Working Experience
                          </Card.Title>
                          <Card.Body
                            style={{
                              marginLeft: -23,
                              marginRight: -23,
                              marginTop: -23,
                            }}
                          >
                            <SunEditor />
                          </Card.Body>
                        </Col>
                        <Col md={12}>
                          <Card.Title
                            as="h3"
                            style={{
                              fontFamily: "poppins",
                            }}
                          >
                            Employment record
                          </Card.Title>
                          <Card.Body
                            style={{
                              marginLeft: -23,
                              marginRight: -23,
                              marginTop: -23,
                            }}
                          >
                            <SunEditor />
                          </Card.Body>
                        </Col>
                        <Col md={12} xl={12} xs={12} sm={12}>
                          <Card>
                            <Card.Body>
                              <p
                                className="mg-b-20"
                                style={{
                                  fontFamily: "poppins",
                                }}
                              >
                                Have you ever tried the program you are applying
                                for anywhere else? YES/NO (Remove as necessary)
                              </p>
                              <Row>
                                <Col lg={3}>
                                  <Form.Check
                                    type="checkbox"
                                    id="checkbox"
                                    label="YES"
                                    style={{
                                      fontFamily: "poppins",
                                    }}
                                  />
                                </Col>
                                <Col lg={3}>
                                  <Form.Check
                                    type="checkbox"
                                    id="checkbox"
                                    label="NO"
                                    style={{
                                      fontFamily: "poppins",
                                    }}
                                  />
                                </Col>
                                <p
                                  className="mg-b-20"
                                  style={{
                                    fontFamily: "poppins",
                                  }}
                                >
                                  If Yes, Provide us with some relevant
                                  information regarding your application to the
                                  former institution.
                                </p>
                              </Row>
                              <div
                                style={{
                                  marginLeft: -11,
                                  marginRight: -11,
                                }}
                              >
                                <Form.Label
                                  className="mg-b-0"
                                  style={{
                                    fontSize: 14,
                                    paddingLeft: 12,
                                    fontFamily: "poppins",
                                  }}
                                >
                                  Institution Name
                                  <span
                                    className="mg-l-2"
                                    style={{
                                      color: "red",
                                      marginLeft: 5,
                                    }}
                                  >
                                    *
                                  </span>
                                </Form.Label>
                                <Col md={12} className="">
                                  <Form.Control
                                    type="text"
                                    style={{
                                      fontSize: 14,
                                      fontFamily: "poppins",
                                    }}
                                  />
                                </Col>
                              </div>
                              <div
                                className="example p-2"
                                style={{ marginTop: 5 }}
                              >
                                <Row>
                                  <Col md={6}>
                                    <div className=" ">
                                      <Row
                                        className="row-xs align-items-center mg-b-5"
                                        style={{ borderRadius: 0 }}
                                      >
                                        <Col md={4}>
                                          <Form.Label
                                            className="mg-b-0 text-sm"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Start Date
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
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
                                                                            <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />

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
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            End Date{" "}
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
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
                                                                            <InputMask className='form-control' mask="99/99/9999" placeholder="MM/DD/YYYY" />

                                        </Col>
                                      </Row>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <Row className="row-sm mg-t-20">
                                <div className="col-lg">
                                  <Form.Control
                                    as="textarea"
                                    className="mb-3"
                                    type="text"
                                    placeholder="Reason for not completing"
                                    rows="3"
                                    style={{
                                      fontFamily: "poppins",
                                    }}
                                  />
                                </div>
                              </Row>
                              <div
                                className="example p-2"
                                style={{ marginTop: 5 }}
                              >
                                <Row>
                                  <Col md={6}>
                                    <div className=" ">
                                      <Row
                                        className="row-xs align-items-center mg-b-5"
                                        style={{ borderRadius: 0 }}
                                      >
                                        <Col md={4}>
                                          <Form.Label
                                            className="mg-b-0 text-sm"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Sponsor name
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
                                          </Form.Label>
                                        </Col>
                                        <Col
                                          md={8}
                                          className="mg-t-5 mg-md-t-0"
                                        >
                                          {/* <Form.Control
                                            type="phone"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          /> */}
                                         <Form.Control
                                            type="address"
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
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Address{" "}
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
                                          </Form.Label>
                                        </Col>
                                        <Col
                                          md={8}
                                          className="mg-t-5 mg-md-t-0"
                                        >
                                          <Form.Control
                                            type="address"
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
                              <div
                                className="example p-2"
                                style={{ marginTop: 5 }}
                              >
                                <Row>
                                  <Col md={6}>
                                    <div className=" ">
                                      <Row
                                        className="row-xs align-items-center mg-b-5"
                                        style={{ borderRadius: 0 }}
                                      >
                                        <Col md={4}>
                                          <Form.Label
                                            className="mg-b-0 text-sm"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Telephone
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
                                          </Form.Label>
                                        </Col>
                                        <Col
                                          md={8}
                                          className="mg-t-5 mg-md-t-0"
                                        >
                                          {/* <Form.Control
                                            type="phone"
                                            style={{
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          /> */}
                                          <PhoneInput
                                  containerStyle={{
                                    
                                    minWidth: '100%'
                                   
                                  
                                  }}
                                  inputStyle={{

                                    minWidth: '100%'
                                  }}
                                    country={"ug"}
                                    // value={this.state.phone}
                                    // onChange={(phone) =>
                                      // this.setState({ phone })
                                    // }
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
                                              fontSize: 14,
                                              fontFamily: "poppins",
                                            }}
                                          >
                                            Email{" "}
                                            <span
                                              className="mg-l-2"
                                              style={{
                                                color: "red",
                                                marginLeft: 5,
                                                fontFamily: "poppins",
                                              }}
                                            >
                                              *
                                            </span>
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
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <div
                                className="btn-list"
                                style={{
                                  display: "flex",
                                  marginTop: 10,
                                  justifyContent: "flex-end",
                                }}
                              >
                                <Button
                                  variant="success"
                                  className="mx-1 button-icon mb-1"
                                  style={{
                                    backgroundColor: "#2d2f8f",
                                    // width: '100px',
                                    // height: '50px'
                                  }}
                                >
                                  <i className="fe fe-save me-2"></i>Save
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seventh">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <div className="example p-2">
                        <Row>
                          <Col md={6}>
                            <div className=" ">
                              <Row className="row-xs align-items-center mg-b-5">
                                <Col md={4}>
                                  <Form.Label
                                    className="mg-b-0 text-sm"
                                    style={{ fontSize: 14 }}
                                  >
                                    Full Name
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Email
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    type="email"
                                    style={{ fontSize: 14 }}
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Address{" "}
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Phone
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  {/* <Form.Control
                                    type="text"
                                    style={{ fontSize: 14 }}
                                  /> */}
                                  <PhoneInput
                                  containerStyle={{
                                    
                                    minWidth: '100%'
                                   
                                  
                                  }}
                                  inputStyle={{

                                    minWidth: '100%'
                                  }}
                                    country={"ug"}
                                    // value={this.state.phone}
                                    // onChange={(phone) =>
                                      // this.setState({ phone })
                                    // }
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div
                        className="btn-list"
                        style={{
                          display: "flex",
                          marginTop: 10,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          variant="outline-primary"
                          className="mx-1 button-icon mb-1"
                        >
                          <i className="fe fe-plus me-2"></i>ADD
                        </Button>
                        <Button
                          variant="success"
                          className="mx-1 button-icon mb-1"
                          style={{
                            backgroundColor: "#2d2f8f",
                            // width: '100px',
                            // height: '50px'
                          }}
                        >
                          <i className="fe fe-save me-2"></i>Save
                        </Button>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="eighth">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <div className="example p-2">
                        <Row>
                          <Col md={6}>
                            <div className=" ">
                              <Row className="row-xs align-items-center mg-b-5">
                                <Col md={4}>
                                  <Form.Label
                                    className="mg-b-0 text-sm"
                                    style={{ fontSize: 14 }}
                                  >
                                    District/State
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Email
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    type="email"
                                    style={{ fontSize: 14 }}
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Sub-county{" "}
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Village
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    type="text"
                                    style={{ fontSize: 14 }}
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div
                        className="btn-list"
                        style={{
                          display: "flex",
                          marginTop: 10,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          variant="outline-primary"
                          className="mx-1 button-icon mb-1"
                        >
                          <i className="fe fe-plus me-2"></i>ADD
                        </Button>
                        <Button
                          variant="success"
                          className="mx-1 button-icon mb-1"
                          style={{
                            backgroundColor: "#2d2f8f",
                            // width: '100px',
                            // height: '50px'
                          }}
                        >
                          <i className="fe fe-save me-2"></i>Save
                        </Button>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="nineth">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <div className="example p-2">
                        <Row>
                          <Col md={6}>
                            <div className=" ">
                              <Row className="row-xs align-items-center mg-b-5">
                                <Col md={4}>
                                  <Form.Label
                                    className="mg-b-0 text-sm"
                                    style={{ fontSize: 14 }}
                                  >
                                    Blood Type
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Disabiity
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    type="text"
                                    style={{ fontSize: 14 }}
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
                                    style={{ fontSize: 13 }}
                                  >
                                    Emergency Contact{" "}
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  {/* <Form.Control
                                    type="text"
                                    style={{ fontSize: 14 }}
                                  /> */}
                                  <PhoneInput
                                  containerStyle={{
                                    
                                    minWidth: '100%'
                                   
                                  
                                  }}
                                  inputStyle={{

                                    minWidth: '100%'
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
                                    style={{ fontSize: 14 }}
                                  >
                                    Illnesses
                                    <span
                                      className="mg-l-2"
                                      style={{
                                        color: "red",
                                        marginLeft: 5,
                                      }}
                                    >
                                      *
                                    </span>
                                  </Form.Label>
                                </Col>
                                <Col md={8} className="mg-t-5 mg-md-t-0">
                                  <Form.Control
                                    type="text"
                                    style={{ fontSize: 14 }}
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div
                        className="btn-list"
                        style={{
                          display: "flex",
                          marginTop: 10,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          variant="outline-primary"
                          className="mx-1 button-icon mb-1"
                        >
                          <i className="fe fe-plus me-2"></i>ADD
                        </Button>
                        <Button
                          variant="success"
                          className="mx-1 button-icon mb-1"
                          style={{
                            backgroundColor: "#2d2f8f",
                            // width: '100px',
                            // height: '50px'
                          }}
                        >
                          <i className="fe fe-save me-2"></i>Save
                        </Button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tenth">
                      <div
                        style={{
                          marginLeft: -20,
                          marginRight: -20,
                        }}
                      >
                        <Row>
                          <Col lg={12} md={12}>
                            <Card.Body>
                              {/* <!-- accordion --> */}

                              <Accordion
                                defaultActiveKey="1"
                                flush
                                className="border coloured-accordion"
                              >
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>
                                    Before applying, abide by the rules
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    No student is allowed to register for more
                                    than one University programme at the same
                                    time. Breach of this regulation leads to
                                    automatic cancellation of admission to the
                                    University. Cases of impersonation,
                                    falsification of documents or giving
                                    false/incomplete information whenever
                                    discovered either at registration or
                                    afterwards, will lead to automatic
                                    cancellation of admission. Copies (not
                                    originals) of academic documents should be
                                    attached to each Application Form. The
                                    copies for the Degree certificate(s) and
                                    Academic Transcript(s) should be certified.
                                    Applicants themselves, should request their
                                    referees to submit the reports directly to
                                    the Academic Registrar, Nkumba University.
                                    The University does not request for
                                    referees' reports on behalf of applicants.
                                    (Optional) International Applicants only:
                                    Candidates whose first language is not
                                    English or who did not go through Education
                                    System with English as the medium of
                                    instruction, will be required to prove that
                                    they have sufficient command of the English
                                    language to cope with Postgraduate Studies.
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Card.Body>
                          </Col>
                        </Row>
                      </div>
                      <div className="text-wrap">
                        <div className="example">
                          {showdata3.map((dis) => (
                            <Alert
                              key={Math.random()}
                              variant={dis.color}
                              className={dis.class}
                              style={{
                                marginLeft: -10,
                                marginRight: -10,
                              }}
                            >
                              Please provide aunthentic Information. If Parents
                              are deceased provide next of kin
                              <Button
                                className="close"
                                variant=""
                                onClick={() => {
                                  handleRemove3(dis.id);
                                }}
                              >
                                <span
                                  className={`text-${dis.color}`}
                                  aria-hidden="true"
                                >
                                  &times;
                                </span>
                              </Button>
                            </Alert>
                          ))}
                          <div
                            className="example p-2"
                            style={{
                              marginRight: -10,
                              marginLeft: -10,
                              marginBottom: -10,
                              marginTop: -10,
                            }}
                          >
                            <Row>
                              <Col md={6}>
                                <div className=" ">
                                  <Row className="row-xs align-items-center mg-b-5">
                                    <Col md={4}>
                                      <Form.Label
                                        className="mg-b-0 text-sm"
                                        style={{ fontSize: 14 }}
                                      >
                                        Parent Name
                                        <span
                                          className="mg-l-2"
                                          style={{
                                            color: "red",
                                            marginLeft: 5,
                                          }}
                                        >
                                          *
                                        </span>
                                      </Form.Label>
                                    </Col>
                                    <Col md={8} className="mg-t-5 mg-md-t-0">
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
                                        style={{ fontSize: 14 }}
                                      >
                                        Address
                                        <span
                                          className="mg-l-2"
                                          style={{
                                            color: "red",
                                            marginLeft: 5,
                                          }}
                                        >
                                          *
                                        </span>
                                      </Form.Label>
                                    </Col>
                                    <Col md={8} className="mg-t-5 mg-md-t-0">
                                      <Form.Control
                                        type="address"
                                        style={{ fontSize: 14 }}
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
                                        style={{ fontSize: 14 }}
                                      >
                                        Contact{" "}
                                        <span
                                          className="mg-l-2"
                                          style={{
                                            color: "red",
                                            marginLeft: 5,
                                          }}
                                        >
                                          *
                                        </span>
                                      </Form.Label>
                                    </Col>
                                    <Col md={8} className="mg-t-5 mg-md-t-0">
                                      {/* <Form.Control
                                        type="text"
                                        style={{ fontSize: 14 }}
                                      /> */}
                                      <PhoneInput
                                  containerStyle={{
                                    
                                    minWidth: '100%'
                                   
                                  
                                  }}
                                  inputStyle={{

                                    minWidth: '100%'
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
                                        style={{ fontSize: 14 }}
                                      >
                                        Email
                                        <span
                                          className="mg-l-2"
                                          style={{
                                            color: "red",
                                            marginLeft: 5,
                                          }}
                                        >
                                          *
                                        </span>
                                      </Form.Label>
                                    </Col>
                                    <Col md={8} className="mg-t-5 mg-md-t-0">
                                      <Form.Control
                                        type="email"
                                        style={{ fontSize: 14 }}
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                      <div
                        className="btn-list"
                        style={{
                          display: "flex",
                          marginTop: 10,
                          justifyContent: "flex-end",
                        }}
                      >
                        <Button
                          variant="outline-primary"
                          className="mx-1 button-icon mb-1"
                        >
                          <i className="fe fe-plus me-2"></i>ADD
                        </Button>
                        <Button
                          variant="success"
                          className="mx-1 button-icon mb-1"
                          style={{
                            backgroundColor: "#2d2f8f",
                            // width: '100px',
                            // height: '50px'
                          }}
                        >
                          <i className="fe fe-save me-2"></i>Save
                        </Button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eleventh"></Tab.Pane>
                  </Tab.Content>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Tab.Container>
      </Row>
    </div>
  );
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
