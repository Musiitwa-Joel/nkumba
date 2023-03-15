import React, { useState } from "react";
import styles from "./Indexpage.module.scss";
import Pageheader from "../Layouts/Pageheader/Pageheader";
import { Card, Col, Nav, Row, Tab, Form, Collapse, FormControl, Button, Table } from "react-bootstrap";
import Select from "react-select";
// import { Single, disabled, Inline, multiDisabled, MultiDropdown, Groupeddata, multi } from './Data/FormAdvancedData';
// import { stateValue } from './Data/dataFormValidation';
// import { stateValue } from '../Forms/FormValidation/Data/dataFormValidation'



const Tabs = () => {
  //Show Code variables

  const [i, seti] = useState(false);
  const [i2, seti2] = useState(false);
  const [i3, seti3] = useState(false);
  const [i4, seti4] = useState(false);
  const [i5, seti5] = useState(false);

  const stateValue = [
    { value: "Tuition", label: "Tuition" },
    { value: "Voting", label: "Voting" }
]

  return (
    <div className={styles.Tabs}>
      <Pageheader titles="Elements" active="Tabs" />
      {/* <!-- container --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col xl={12}>
          {/* <!-- div --> */}
          <Card className="mg-b-20" id="tabs-style3">
            <Card.Body style={{}}>
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
                              <i className="fa fa-laptop me-2"></i> Set
                              Constraint
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">
                              <i className="fa fa-cube me-2"></i>View
                              Constraints
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

							<Row style={{marginBottom: 100}}>
							<Col xl={3} className="mb-3">
										<Form.Label>Select Constraint</Form.Label>
										<Select classNamePrefix="Select" options={stateValue} placeholder='Choose Constraint' />
										<Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
									</Col>
									<Col xl={3} className="mb-3">
										<Form.Label>Percentage</Form.Label>
										<Form.Control type="text" placeholder="Choose a percentage" required isValid />
										<Form.Control.Feedback type="invalid">Choose percentage</Form.Control.Feedback>
									</Col>
									<div style={{marginBottom: 15, marginTop: 23}}>

									<Col>
									<Button>Set</Button>
									</Col>
									</div>
						  
							</Row>
                          
						 
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
						<div className="border p-3 table-responsive">
                                                        <Table className="mb-0 table-bordered border-top mb-0">
                                                          <thead>
                                                            <tr>
                                                              <th>
                                                                Constraint Name
                                                              </th>
                                                              <th>
                                                                Constraint(%)
                                                              </th>
                                                              <th>Set by</th>
                                                              <th>Date</th>
                                                            
                                                            </tr>
                                                          </thead>
                                                          <tbody>
                                                            <tr>
                                                              <th scope="row">
                                                                Tuition
                                                              </th>
                                                              <td>
                                                                0
                                                              </td>
                                                              <td>
                                                                Jude Lubega
                                                              </td>
                                                              <td>14/02/2023</td>
                                                          
                                                            </tr>
                                                            <tr>
                                                              <th scope="row">
                                                               Voting
                                                              </th>
                                                              <td>
                                                                20
                                                              </td>
                                                              <td>
                                                                Jude Lubega
                                                              </td>
                                                              <td>19/07/2023</td>
                                                           
                                                            </tr>
                                                          </tbody>
                                                        </Table>
                                                      </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    // <!-- /row -->
    // <!-- Container closed -->
  );
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
