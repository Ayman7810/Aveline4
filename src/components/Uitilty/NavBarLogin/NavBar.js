/** @format */

import React, { useState } from "react";
import {
  IoCloseOutline,
  IoMenuOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoHomeOutline,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoHome,
  IoMan,
  IoWoman,
  IoWine,
  IoCreate,
  IoLogIn,
  IoDiamond,
} from "react-icons/io5";
import logo from "../../../images/logo/logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleSubmenu = (id) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      {isModalOpen && (
        <div className="overlay">
          <div className="modal" data-modal>
            <div
              className="modal-close-overlay"
              data-modal-overlay
              onClick={toggleModal}></div>
            <div className="modal-content">
              <button
                className="modal-close-btn"
                data-modal-close
                onClick={toggleModal}>
                <IoCloseOutline />
              </button>
              <div className="newsletter-img">
                <img
                  src="./assets/images/newsletter.png"
                  alt="اشترك في النشرة الإخبارية"
                  width="400"
                  height="400"
                />
              </div>
              <div className="newsletter">
                <form action="#">
                  <div className="newsletter-header">
                    <h3 className="newsletter-title">
                      اشترك في النشرة الإخبارية.
                    </h3>
                    <p className="newsletter-desc">
                      اشترك في <b>أنون</b> للحصول على أحدث المنتجات وتحديثات
                      الخصومات.
                    </p>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="email-field"
                    placeholder="عنوان البريد الإلكتروني"
                    required
                  />
                  <button type="submit" className="btn-newsletter">
                    اشترك
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoLinkedin />
                </a>
              </li>
            </ul>
            <div className="header-alert-news">
              <p>
                <b>شحن مجاني</b> هذا الأسبوع للطلبات فوق - $55
              </p>
            </div>
            <div className="header-top-actions">
              <select name="language">
                <option value="en-US">اللغة</option>
                <option value="es-ES">العربية</option>
                <option value="fr">الانجليزية</option>
              </select>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <Link to="/" className="header-logo">
              <img src={logo} alt="متجري" width="150" height="50" />
            </Link>
            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="أدخل اسم المنتج..."
              />
              <button className="search-btn">
                <IoSearchOutline />
              </button>
            </div>
            <div className="header-user-actions">
              <Dropdown className="dropdown-wrapper">
                <Dropdown.Toggle
                  className="action-btn"
                  variant="link"
                  id="dropdown-basic">
                  <IoPersonOutline />
                  <span className="dropdown-arrow"></span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "#000" }}>
                      تسجيل الدخول
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to="/Regester"
                      style={{ textDecoration: "none", color: "#000" }}>
                      إنشاء حساب
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <button className="action-btn">
                <IoHeartOutline />
                <span className="count">10</span>
              </button>
              <button className="action-btn">
                <Link to="/cart">
                  <IoBagHandleOutline color="#333" />
                </Link>
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>

        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <Link to="/" className="menu-title">
                  الرئيسية
                </Link>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  الفئات
                </a>

                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">الإلكترونيات</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">سطح المكتب</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">لاب توب</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">كاميرا</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">تابلت</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">سماعات</a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">للرجال</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">رسمية</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">غير رسمية</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">رياضية</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">سترة</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">نظارات شمسية</a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">للنساء</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">رسمية</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">غير رسمية</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">عطور</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">مستحضرات تجميل</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">حقائب</a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">الإلكترونيات</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">ساعة ذكية</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">تلفاز ذكي</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">لوحة مفاتيح</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">فأرة</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">ميكروفون</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  للرجال
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">قميص</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  للنساء
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">فستان وبدلة</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  المجوهرات
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">أقراط</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">خواتم مزدوجة</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">قلادة</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">أساور</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  العطور
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">عطر ملابس</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">مزيل العرق</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">عطر زهري</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">معطر هواء</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  مدونة
                </a>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  عروض ساخنة
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mobile-bottom-navigation">
          <button className="action-btn" onClick={toggleMobileMenu}>
            <IoMenuOutline />
          </button>
          <button className="action-btn">
            <Link to="/cart" style={{ textDecoration: "none", color: "#333" }}>
              <IoBagHandleOutline />
            </Link>
            <span className="count">5</span>
          </button>
          <button className="action-btn">
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
              <IoHomeOutline />
            </Link>
          </button>
          <button className="action-btn">
            <IoHeartOutline />
            <span className="count">0</span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <nav className="mobile-navigation-menu has-scrollbar active">
              <div className="menu-top-mobile">
                <h2 className="menu-title">القائمة</h2>
                <button className="menu-close-btn" onClick={toggleMobileMenu}>
                  <IoCloseOutline />
                </button>
              </div>
              <ul className="mobile-menu-category-list text-end">
                <li className="menu-category">
                  <Link to="/" className="menu-title mb-3">
                    <IoHome />
                    الرئيسية
                  </Link>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("men")}>
                    <p className="menu-title">
                      <IoMan />
                      للرجال
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["men"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["men"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["men"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        قميص
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        شورت وجينز
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أحذية أمان
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        محفظة
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("women")}>
                    <p className="menu-title">
                      <IoWoman />
                      للنساء
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["women"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["women"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["women"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        فستان وبدلة
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أقراط
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        قلادة
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        عدة مكياج
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("العطور")}>
                    <p className="menu-title">
                      <IoWine />
                      العطور
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["العطور"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["العطور"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["العطور"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        عطر ملابس
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        مزيل العرق
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        عطر زهري
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        معطر هواء
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <button
                    className="accordion-menu"
                    onClick={() => toggleSubmenu("المجوهرات")}>
                    <p className="menu-title">
                      <IoDiamond />
                      المجوهرات
                    </p>
                    <div>
                      <ion-icon
                        name="add-outline"
                        className={`add-icon ${
                          openSubmenus["المجوهرات"] ? "hidden" : ""
                        }`}></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className={`remove-icon ${
                          openSubmenus["المجوهرات"] ? "" : "hidden"
                        }`}></ion-icon>
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      openSubmenus["المجوهرات"] ? "active" : ""
                    }`}>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أقراط
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        خواتم مزدوجة
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        قلادة
                      </a>
                    </li>
                    <li className="submenu-category">
                      <a href="#" className="submenu-title">
                        أساور
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <Link to="/Regester" className="menu-title">
                    <IoCreate />
                    انشاء حساب
                  </Link>
                </li>

                <li className="menu-category">
                  <Link to="/login" className="menu-title">
                    <IoLogIn />
                    تسجيل الدخول
                  </Link>
                </li>
              </ul>
              <div className="menu-bottom">
                <ul className="menu-social-container">
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoFacebook style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoTwitter style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoInstagram style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoLinkedin style={{ color: "#ff8f9c" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
