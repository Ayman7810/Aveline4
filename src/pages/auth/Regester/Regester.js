/** @format */

import React from "react";
import img from "../../../images/abaya/14.jpg";

import "./style.css";

import { Fade, Roll } from "react-reveal";
import NavBar from "../../../components/Uitilty/NavBarLogin/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../../components/Uitilty/Footer/Footer";
const RegesterPage = () => {
  return (
    <>
    <NavBar />
    <Fade>
      <div>
        <div className="section-title mt-4">
          <h2>أنشاء حساب</h2>
        </div>
        <div className="wrapper">
          <main className="authentication-content">
            <div className="container-fluid">
              <div className="authentication-card">
                <div
                  className="card shadow rounded-0 overflow-hidden"
                  style={{ direction: "ltr" }}>
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-4 p-sm-5 text-end">
                        <p className="card-text mb-5">
                          ! قم بإنشاء حساب واحصل على الدعم الاستشاري
                        </p>
                        <form className="form-body">
                          <div className="d-grid">
                            <a
                              tabIndex="0"
                              className="btn btn-white radius-30 border rounded-pill"
                              dir="rtl">
                              <span className="d-flex justify-content-center align-items-center">
                                <i
                                  className="fa fa-google ms-2"
                                  style={{ color: "rgb(240, 128, 128)" }}></i>
                                <span>أنشاء حساب عبر جوجل</span>
                              </span>
                            </a>
                          </div>
                          <div className="login-separater text-center mb-4">
                            <span>أنشاء حساب عبر الايميل</span>
                            <hr />
                          </div>
                          <div className="row g-3">
                            <div className="col-12">
                              <label htmlFor="inputName" className="form-label">
                                الاسم
                              </label>
                              <div className="ms-auto position-relative">
                                <div className="position-absolute top-50 translate-middle-y search-icon px-3"></div>
                                <input
                                  type="text"
                                  className="form-control radius-30 ps-5"
                                  id="inputName"
                                  dir="rtl"
                                  placeholder="ادخل الاسم"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <label
                                htmlFor="inputEmailAddress"
                                className="form-label">
                                الايميل
                              </label>
                              <div className="ms-auto position-relative">
                                <div className="position-absolute top-50 translate-middle-y search-icon px-3"></div>
                                <input
                                  type="email"
                                  className="form-control radius-30 ps-5"
                                  id="inputEmailAddress"
                                  dir="rtl"
                                  placeholder="ادخل الايميل"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <label
                                htmlFor="inputPassword"
                                className="form-label">
                                كلمة المرور
                              </label>
                              <div className="ms-auto position-relative">
                                <div className="position-absolute top-50 translate-middle-y search-icon px-3"></div>
                                <input
                                  type="password"
                                  className="form-control radius-30 ps-5"
                                  id="inputPassword"
                                  dir="rtl"
                                  placeholder="ادخل كلمة المرور"
                                />
                              </div>
                            </div>
                            <div className="col-5 d-flex">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexSwitchCheckChecked"
                                />
                              </div>
                            </div>

                            <div className="col-12 ">
                              <div className="d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary radius-30"
                                  style={{
                                    background: "rgb(240, 128, 128)",
                                    border: "none",
                                  }}>
                                  أنشاء حساب
                                </button>
                              </div>
                            </div>
                            <div className="col-12 ">
                              <p className="mb-0">
                                {" "}
                                لديك حساب من قبل اضغط
                                <Link to='/login' className="mx-2 moveLink">
                                تسجيل الدخول
                                </Link>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 bg-login d-flex  justify-content-center">
                      <Roll>
                        <img src={img} className="img-fluid" alt="" />
                      </Roll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fade>
    <Footer/>
    </>
  );
};

export default RegesterPage;
