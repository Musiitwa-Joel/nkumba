import React, { useState, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import styles from "./Switcher.module.scss";
import * as SwitcherData from "./Data/SwitcherData";
import { connect } from "react-redux";
import {
  SwitcherAction,
  changePrimaryColor,
  darkPrimaryColor,
  transparentPrimaryColor,
  transparentBackground,
  BGImagePrimaryColor,
} from "../../CommonFileComponents/redux/action";

// BG PRIMARY Images

import bg1 from "../../../assets/img/media/bg-img1.jpg";
import bg2 from "../../../assets/img/media/bg-img2.jpg";
import bg3 from "../../../assets/img/media/bg-img3.jpg";
import bg4 from "../../../assets/img/media/bg-img4.jpg";
import { Dropdown, Modal } from "react-bootstrap";

import buynow1 from "../../../assets/img/photos/16.jpg";
import buynow3 from "../../../assets/img/photos/15.jpg";
import buynow2 from "../../../assets/img/photos/14.jpg";
// import free from '../../../assets/img/free.png';
// import moneyback from '../../../assets/img/money-bag.png';

const Switcher = ({
  SwitcherAction,
  changePrimaryColor,
  darkPrimaryColor,
  transparentPrimaryColor,
  transparentBackground,
  BGImagePrimaryColor,
}) => {
  useEffect(() => {
    SwitcherData.localStorageBackUp();
  });

  const [Basic, setShow1] = useState(false);

  let viewDemoShow = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(true);
        break;
    }
  };
  let viewDemoClose = (modal) => {
    switch (modal) {
      case "Basic":
        setShow1(false);
        break;
    }
  };
  return (
    <div className={styles.Switcher}>
      {/* <!-- Switcher --> */}
      <div className="switcher-wrapper">
        <div className="demo_changer">
          <div className="form_holder sidebar-right1">
            <Scrollbars className="hor-scroll">
              <div className="row">
                <div className="predefined_styles">
                  <div className="swichermainleft text-center">
                    <div className="p-3 d-grid gap-2">
                      <a
                        href="https://react.spruko.com/valex/"
                        className="btn ripple btn-primary mt-0"
                      >
                        View Demo
                      </a>
                      {/* <Link to='#' onClick={() => viewDemoShow("Basic")} className="btn ripple btn-info">Buy Now</Link> */}

                      {/* <!-- buynow modal --> */}

                      <Modal
                        className="buynow buynow-btn"
                        size="lg"
                        show={Basic}
                      >
                        <Modal.Body className="p-0 overflow-hidden">
                          <div
                            className="modal-content-demo cover-image py-5"
                            style={{ backgroundImage: `url(${buynow1})` }}
                          >
                            <div className="row justify-content-center py-4 px-0 mx-3  Licenses-img">
                              <h3
                                className=" text-center mb-4 text-white"
                                style={{ zIndex: 1 }}
                              >
                                Licenses
                              </h3>
                              <button
                                aria-label="Close"
                                onClick={() => viewDemoClose("Basic")}
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card  border-0 regular-license">
                                  <div
                                    className="card-body imag-list cover-image"
                                    style={{
                                      backgroundImage: `url(${buynow2})`,
                                    }}
                                  >
                                    <div className="text-white">
                                      {/* <img src={free} alt="" className="w-55 free-img" /> */}
                                      <div className="text-center">
                                        <div className="tx-26">
                                          <span className="font-weight-medium ">
                                            Regular
                                          </span>{" "}
                                          Licenses
                                        </div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">
                                          You{" "}
                                          <span className="text-success font-weight-semibold">
                                            can't charge{" "}
                                          </span>{" "}
                                          from your <br />
                                          <span className="op-8">
                                            End Product End Users
                                          </span>{" "}
                                        </p>
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            className="btn w-lg mt-1"
                                            variant="info"
                                            id="dropdown-basic"
                                          >
                                            Buy Now
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu
                                            className="py-0"
                                            style={{ marginTop: "0px" }}
                                          >
                                            <Dropdown.Item
                                              className="border-bottom px-3"
                                              target="_blank"
                                              href="https://themeforest.net/user/spruko/portfolio"
                                            >
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-weight-semibold">
                                                  Buy Now
                                                </p>
                                                <span className="tx-12 op-7 ">
                                                  6 months support
                                                </span>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="px-3"
                                              target="_blank"
                                              href="https://themeforest.net/user/spruko/portfolio"
                                            >
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-weight-semibold">
                                                  Buy Now
                                                </p>
                                                <span className="tx-12 op-7 ">
                                                  12 months support
                                                </span>
                                              </div>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card border-0 ">
                                  <div
                                    className="imag-list card-body cover-image"
                                    style={{
                                      backgroundImage: `url(${buynow3})`,
                                    }}
                                  >
                                    <div className="text-white">
                                      {/* <img
                                        src={moneyback}
                                        alt=""
                                        className="w-55 free-img"
                                      /> */}
                                      <div className="text-center">
                                        <div className="tx-26">
                                          <span className="font-weight-medium ">
                                            Extended
                                          </span>{" "}
                                          Licenses
                                        </div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">
                                          You{" "}
                                          <span className="text-warning font-weight-semibold">
                                            can charge
                                          </span>{" "}
                                          from your <br />
                                          <span className="op-8">
                                            End Product End Users
                                          </span>
                                        </p>
                                        <Dropdown>
                                          <Dropdown.Toggle
                                            className="btn w-lg mt-1"
                                            variant="info"
                                            id="dropdown-basic"
                                          >
                                            Buy Now
                                          </Dropdown.Toggle>
                                          <Dropdown.Menu
                                            className="py-0"
                                            style={{ marginTop: "0px" }}
                                          >
                                            <Dropdown.Item
                                              className="border-bottom px-3"
                                              target="_blank"
                                              href="https://themeforest.net/user/spruko/portfolio"
                                            >
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-weight-semibold">
                                                  Buy Now
                                                </p>
                                                <span className="tx-12 op-7 ">
                                                  6 months support
                                                </span>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                              className="px-3"
                                              target="_blank"
                                              href="https://themeforest.net/user/spruko/portfolio"
                                            >
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-weight-semibold">
                                                  Buy Now
                                                </p>
                                                <span className="tx-12 op-7 ">
                                                  12 months support
                                                </span>
                                              </div>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="license-view"
                                style={{ zIndex: 1 }}
                              >
                                <a
                                  href="https://spruko.com/licenses"
                                  target="_blank"
                                  className="modal-title text-center mb-3 tx-14 text-white"
                                >
                                  View license details
                                </a>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                      {/* <!-- End buynow modal --> */}
                      <a
                        href="https://themeforest.net/user/spruko/portfolio"
                        className="btn ripple btn-danger"
                      >
                        Our Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="swichermainleft text-center">
                    <h4>LTR AND RTL VERSIONS</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">LTR</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch25"
                              id="myonoffswitch54"
                              className="onoffswitch2-checkbox"
                              onClick={() => SwitcherAction("LTR")}
                              defaultChecked
                            />
                            <label
                              htmlFor="myonoffswitch54"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">RTL</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch25"
                              id="myonoffswitch55"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("RTL");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch55"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft switcher-nav">
                    <h4>Navigation Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Vertical Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="myonoffswitch34"
                              className="onoffswitch2-checkbox"
                              onClick={() => SwitcherAction("Verticalmenu")}
                              defaultChecked
                            />
                            <label
                              htmlFor="myonoffswitch34"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizantal Click Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="myonoffswitch35"
                              className="onoffswitch2-checkbox"
                              onClick={() =>
                                SwitcherAction("horizontalclickmenu")
                              }
                            />
                            <label
                              htmlFor="myonoffswitch35"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizantal Hover Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="myonoffswitch111"
                              className="onoffswitch2-checkbox"
                              onClick={() =>
                                SwitcherAction("Horizontalhovermenu")
                              }
                            />
                            <label
                              htmlFor="myonoffswitch111"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Light Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="myonoffswitch1"
                              onClick={() => SwitcherAction("LightTheme")}
                              className="onoffswitch2-checkbox"
                              defaultChecked
                            />
                            <label
                              htmlFor="myonoffswitch1"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Primary</span>
                          <div className="">
                            <input
                              className="wd-25 ht-25 input-color-picker color-primary-light"
                              defaultValue="#0162e8"
                              id="colorID"
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id7="transparentcolor"
                              name="lightPrimary"
                              onChange={(ele) => {
                                changePrimaryColor(ele.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Dark Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="myonoffswitch2"
                              onClick={() => {
                                SwitcherAction("DarkTheme");
                              }}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch2"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Primary</span>
                          <div className="">
                            <input
                              className="wd-25 ht-25 input-dark-color-picker color-primary-dark"
                              defaultValue="#0162e8"
                              id="darkPrimaryColorID"
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id3="primary"
                              data-id8="transparentcolor"
                              name="darkPrimary"
                              onChange={(ele) => {
                                darkPrimaryColor(ele.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Transparent Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2 mb-3">
                          <span className="me-auto">Transparent Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="myonoffswitchTransparent"
                              onClick={() => {
                                SwitcherAction("Transparent");
                              }}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitchTransparent"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Transparent Primary</span>
                          <div className="">
                            <input
                              className="wd-30 ht-30 input-transparent-color-picker color-primary-transparent"
                              defaultValue="#0162e8"
                              id="transparentPrimaryColorID"
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id3="primary"
                              data-id4="primary"
                              data-id9="transparentcolor"
                              name="tranparentPrimary"
                              onChange={(ele) => {
                                transparentPrimaryColor(ele.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">
                            Transparent Background
                          </span>
                          <div className="">
                            <input
                              className="wd-30 ht-30 input-transparent-color-picker color-bg-transparent"
                              defaultValue="#0162e8"
                              id="transparentBgColorID"
                              type="color"
                              data-id5="body"
                              data-id6="theme"
                              data-id9="transparentcolor"
                              name="transparentBackground"
                              onChange={(ele) => {
                                transparentBackground(ele.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Transparent Bg-Image Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">BG-Image Primary</span>
                          <div className="">
                            <input
                              className="wd-30 ht-30 input-transparent-color-picker color-primary-transparent"
                              defaultValue="#0162e8"
                              id="transparentBgImgPrimaryColorID"
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id3="primary"
                              data-id4="primary"
                              data-id9="transparentcolor"
                              name="tranparentPrimary"
                              onChange={(ele) => {
                                BGImagePrimaryColor(ele.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="switch-toggle">
                          <Link
                            className="bg-img1"
                            onClick={() => {
                              SwitcherAction("BG-Image-1");
                            }}
                            to="#"
                          >
                            <img src={bg1} id="bgimage1" alt="switch-img" />
                          </Link>
                          <Link
                            className="bg-img2"
                            onClick={() => {
                              SwitcherAction("BG-Image-2");
                            }}
                            to="#"
                          >
                            <img src={bg2} id="bgimage2" alt="switch-img" />
                          </Link>
                          <Link
                            className="bg-img3"
                            onClick={() => {
                              SwitcherAction("BG-Image-3");
                            }}
                            to="#"
                          >
                            <img src={bg3} id="bgimage3" alt="switch-img" />
                          </Link>
                          <Link
                            className="bg-img4"
                            onClick={() => {
                              SwitcherAction("BG-Image-4");
                            }}
                            to="#"
                          >
                            <img src={bg4} id="bgimage4" alt="switch-img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft leftmenu-styles">
                    <h4>Leftmenu Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch3"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("LightMenu");
                              }}
                              defaultChecked
                            />
                            <label
                              htmlFor="myonoffswitch3"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Color Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch4"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("ColorMenu");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch4"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch5"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("DarkMenu");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch5"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Gradient Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch25"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("GradientMenu");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch25"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft header-styles">
                    <h4>Header Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch6"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("Lightheader");
                              }}
                              defaultChecked
                            />
                            <label
                              htmlFor="myonoffswitch6"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Color Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch7"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("Colorheader");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch7"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch8"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("Darkheader");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch8"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Gradient Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch26"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("gradientheader");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch26"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Skin Modes</h4>
                    <div className="switch_section">
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Default Body</span>
                        <div className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitchBody"
                            id="myonoffswitch07"
                            className="onoffswitch2-checkbox"
                            onClick={() => {
                              SwitcherAction("DefaultBody");
                            }}
                            defaultChecked="true"
                          />
                          <label
                            htmlFor="myonoffswitch07"
                            className="onoffswitch2-label"
                          ></label>
                        </div>
                      </div>
                      <div className="switch-toggle d-flex">
                        <span className="me-auto">Body Style1</span>
                        <div className="onoffswitch2">
                          <input
                            type="radio"
                            name="onoffswitchBody"
                            id="myonoffswitch06"
                            className="onoffswitch2-checkbox"
                            onClick={() => {
                              SwitcherAction("BodyStyle1");
                              localStorage.setItem("BodyStyle1", "true");
                            }}
                          />
                          <label
                            htmlFor="myonoffswitch06"
                            className="onoffswitch2-label"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft vertical-images">
                    <h4>Leftmenu Bg-Image</h4>
                    <div className="skin-body light-pattern">
                      <button
                        type="button"
                        id="leftmenuimage1"
                        onClick={() => {
                          SwitcherData.leftsideBGImg1("leftbgimage1"),
                            localStorage.setItem("sidebar-img", "leftbgimage1");
                        }}
                        className="bg1 wscolorcode1 blackborder"
                      ></button>
                      <button
                        type="button"
                        id="leftmenuimage2"
                        onClick={() => {
                          SwitcherData.leftsideBGImg1("leftbgimage2"),
                            localStorage.setItem("sidebar-img", "leftbgimage2");
                        }}
                        className="bg2 wscolorcode1 blackborder"
                      ></button>
                      <button
                        type="button"
                        id="leftmenuimage3"
                        onClick={() => {
                          SwitcherData.leftsideBGImg1("leftbgimage3"),
                            localStorage.setItem("sidebar-img", "leftbgimage3");
                        }}
                        className="bg3 wscolorcode1 blackborder"
                      ></button>
                      <button
                        type="button"
                        id="leftmenuimage4"
                        onClick={() => {
                          SwitcherData.leftsideBGImg1("leftbgimage4"),
                            localStorage.setItem("sidebar-img", "leftbgimage4");
                        }}
                        className="bg4 wscolorcode1 blackborder"
                      ></button>
                      <button
                        type="button"
                        id="leftmenuimage5"
                        onClick={() => {
                          SwitcherData.leftsideBGImg1("leftbgimage5"),
                            localStorage.setItem("sidebar-img", "leftbgimage5");
                        }}
                        className="bg5 wscolorcode1 blackborder"
                      ></button>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Layout Width Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Full Width</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch4"
                              id="myonoffswitch9"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("FullWidth");
                              }}
                              defaultChecked
                            />
                            <label
                              htmlFor="myonoffswitch9"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Boxed</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch4"
                              id="myonoffswitch10"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("Boxed");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch10"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft switcher-layout">
                    <h4>Layout Positions</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Fixed</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch5"
                              id="myonoffswitch11"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("Fixed");
                              }}
                              defaultChecked
                            />
                            <label
                              htmlFor="myonoffswitch11"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Scrollable</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch5"
                              id="myonoffswitch12"
                              className="onoffswitch2-checkbox"
                              onClick={() => {
                                SwitcherAction("Scrollable");
                              }}
                            />
                            <label
                              htmlFor="myonoffswitch12"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Reset All Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section my-4">
                        <button
                          className="btn btn-danger btn-block"
                          onClick={() => {
                            SwitcherAction("ResetAll");
                          }}
                          type="button"
                        >
                          Reset All
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
      </div>
      {/* <!-- End Switcher --> */}
    </div>
  );
};

Switcher.defaultProps = {};

const mapStateToProps = (state) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, {
  SwitcherAction,
  changePrimaryColor,
  darkPrimaryColor,
  transparentPrimaryColor,
  transparentBackground,
  BGImagePrimaryColor,
})(Switcher);
