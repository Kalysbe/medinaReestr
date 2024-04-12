/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { React, useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../../redux/slices/auth';
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

import logo from "assets/images/logo.png"

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import MobileMenu from './mobileMenu';
function DefaultNavbar({ transparent, light, action }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);


  const onClickLogout = () => {
    if (window.confirm('Вы правда хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token')
    }
  };
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth, 'login')
  const newLocal = "../";
  return (
    <header className="header">

      <div data-elementor-type="wp-post" data-elementor-id={2106} className="elementor elementor-2106">
        <div className="elementor-inner">
          <div className="elementor-section-wrap">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-8a246b1 elementor-section-full_width header-layout3 elementor-section-height-default elementor-section-height-default" data-id="8a246b1" data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-aaf515f" data-id="aaf515f" data-element_type="column">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-e48c633 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e48c633" data-element_type="section" data-settings="{' background_background':'classic'}">
                          <Container>
                            <div className="elementor-row ds">
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7031ac8" data-id="7031ac8" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-6cca13f elementor-widget elementor-widget-text-editor" data-id="6cca13f" data-element_type="widget" data-widget_type="text-editor.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-text-editor elementor-clearfix">
                                          <div className="header-links style-white">
                                            <ul>
                                              <li className="d-none d-xxl-inline-block">
                                                <i className="fal fa-map-marker-alt" />Раззакова
                                                32, Бишкек
                                              </li>
                                              <li><i className="far fa-clock" />Пн
                                                – Пт: 9:00 – 18:00</li>
                                              <li><i className="far fa-envelope" /><a href="mailto:example@TechBiz.com">adbsolution@gmail.com</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-55d5c69 elementor-hidden-mobile" data-id="55d5c69" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-6c082ea elementor-widget__width-auto elementor-widget-tablet__width-auto elementor-widget elementor-widget-heading" data-id="6c082ea" data-element_type="widget" data-widget_type="heading.default">
                                      <div className="elementor-widget-container">
                                        <span className="elementor-heading-title elementor-size-default">
                                          Подпишитесь на нас:</span>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-6a6b52a elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="6a6b52a" data-element_type="widget" data-widget_type="social-icons.default">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-social-icons-wrapper elementor-grid">
                                          <span className="elementor-grid-item">
                                            <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-repeater-item-f6ef4b2" href="http://www.facebook.com" target="_blank">
                                              <span className="elementor-screen-only">Facebook-f</span>
                                              <i className="fab fa-facebook-f" />
                                            </a>
                                          </span>

                                          <span className="elementor-grid-item">
                                            <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-repeater-item-a7ac71f" href="http://www.linkedin.com" target="_blank">
                                              <span className="elementor-screen-only">Linkedin-in</span>
                                              <i className="fab fa-linkedin-in" />
                                            </a>
                                          </span>

                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Container>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-8edf5e6 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="8edf5e6" data-element_type="section" style={{backgroundColor:'#fff'}}>
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-row">
                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fa9d704" data-id="fa9d704" data-element_type="column">
                    <div className="elementor-column-wrap elementor-element-populated">
                      <div className="elementor-widget-wrap">
                        <section className="elementor-section elementor-inner-section elementor-element elementor-element-be813d9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="be813d9" data-element_type="section">
                          <Container>
                            <div className="elementor-row">
                              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b99aabf" data-id="b99aabf" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-28599e5 vs-logo elementor-widget elementor-widget-techbizimage" data-id="28599e5" data-element_type="widget" data-widget_type="techbizimage.default">
                                      <div className="elementor-widget-container">
                                        {/* Advertisement Image */}
                                        <div className="techbiz_img "><a href="/"><img src={logo} alt="logo5" /> </a></div>
                                        {/* End Advertisement Image */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-db87129" data-id="db87129" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-052837e elementor-widget elementor-widget-techbizmegamenu" data-id="052837e" data-element_type="widget" data-widget_type="techbizmegamenu.default">
                                      <div className="elementor-widget-container">
                                        <nav className="main-menu menu-style1 d-none d-lg-block">
                                          <ul id="menu-primary-menu">
                                            <li id="menu-item-101" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-101">
                                              <Link to='/'>Главная</Link>
                                            </li>
                                            <li id="menu-item-105" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-105">
                                              <a href="#">Сервисы</a>
                                              <ul className="sub-menu">
                                                <li id="menu-item-96" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-96">
                                                  <a>Расчет налога</a>
                                                  <ul className="sub-menu">
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="/taxhome">Жилое здание, сооружение и помещение</Link>
                                                    </li>
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="/taxnohome">Нежилое здание, сооружение и помещение</Link>
                                                    </li>
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="/taxplace">Земли насел. пунктов и несельхоз назнач.</Link>
                                                    </li>
                                                    <li id="menu-item-102" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                                                      <Link to="/taxcar">Транспортное средство</Link>
                                                    </li>
                                                    {/* <li id="menu-item-95" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
                                                <a>Service
                                                  Details</a>
                                              </li> */}
                                                  </ul>
                                                </li>
                                                <li id="menu-item-90" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90">
                                                  <a>Заполнению декларации</a>
                                                </li>
                                              </ul>
                                            </li>

                                            <li id="menu-item-94" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94">
                                              <Link to='/blog'>Новости</Link>
                                            </li>
                                            <li id="menu-item-88" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-88">
                                              <Link to='/contacts'>Контакты</Link>
                                            </li>
                                          </ul>
                                        </nav>
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-d4956a1 elementor-widget-tablet__width-auto elementor-widget elementor-widget-techbizmobilemenu"
                                      data-id="d4956a1" data-element_type="widget"
                                      data-widget_type="techbizmobilemenu.default">
                                      <div className="elementor-widget-container">
                                        {/* <MobileMenu/> */}


                                        <MobileMenu />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-dfe9be1 elementor-hidden-tablet elementor-hidden-mobile" data-id="dfe9be1" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-element-99562d2 elementor-widget__width-auto d-none d-xxl-inline-block elementor-widget elementor-widget-techbizbutton" data-id="99562d2" data-element_type="widget" data-widget_type="techbizbutton.default">
                                      <div className="elementor-widget-container">
                                        {/* Button */}
                                        <div className="btn-wrapper left">
                                          {/* <a className="vs-btn">Войти<i className="far fa-arrow-right" /></a> */}


                                          {isAuth ? (
                                            <>
                                              <MDButton variant="contained" color="info">
                                                <Link to='/dashboard' style={{color:'#fff'}}>Кабинет</Link>
                                              </MDButton>
                                            </>
                                          ) : (
                                            <>
                                              <Link to='/login' className="vs-btn">Войти<i className="far fa-arrow-right" /></Link>
                                            </>
                                          )}
                                        </div>{/* End Button */}
                                      </div>
                                    </div>
                                    <div className="elementor-element elementor-element-4fa0521 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-techbizoffcanvas" data-id="4fa0521" data-element_type="widget" data-widget_type="techbizoffcanvas.default">
                                      <div className="elementor-widget-container">

                                        <div className="sidemenu-wrapper d-none d-lg-block">
                                          <div className="sidemenu-content">
                                            <button className="closeButton sideMenuCls"><i className="far fa-times" /></button>
                                            <div id="block-13" className="widget widget_block">
                                              <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                                                <div className="wp-block-group__inner-container">
                                                  <figure className="wp-block-image size-full footer-logo">
                                                    <img decoding="async" src="../images/logo.png" alt="" className="wp-image-1902" />
                                                  </figure>
                                                  <p>Исключаются новые
                                                    передовые сценарии,
                                                    которые
                                                    переопределяют линию
                                                    спроса на
                                                    перспективные
                                                    электронные рынки.
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            {/* <div id="block-14" className="widget widget_block">
  <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"><div className="wp-block-group__inner-container">
      <h3 className="widget_title wp-block-heading">Gallery Posts</h3>
      <figure className="wp-block-gallery has-nested-images columns-default is-cropped wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex">
        <figure className="wp-block-image size-large is-style-default"><img decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-1.jpg" alt="" className="wp-image-738" /></figure>
        <figure className="wp-block-image size-large"><img decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-2.jpg" alt="" className="wp-image-737" /></figure>
        <figure className="wp-block-image size-large"><img decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-3.jpg" alt="" className="wp-image-736" /></figure>
        <figure className="wp-block-image size-large"><img loading="lazy" decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-4.jpg" alt="" className="wp-image-735" /></figure>
        <figure className="wp-block-image size-large"><img loading="lazy" decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-5.jpg" alt="" className="wp-image-734" /></figure>
        <figure className="wp-block-image size-large"><img loading="lazy" decoding="async" width={89} height={89} src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/09/gal-1-6.jpg" alt="" className="wp-image-733" /></figure>
      </figure>
    </div></div>
</div> */}
                                            <div id="block-15" className="widget widget_block">
                                              <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                                                <div className="wp-block-group__inner-container">
                                                  <h3 className="widget_title wp-block-heading">
                                                    График Работы</h3>
                                                  <div className="footer-schedule">
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <th>Пн
                                                            -
                                                            Пт:
                                                          </th>
                                                          <td>9:00
                                                            -
                                                            18:00
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <th>Суббота:
                                                          </th>
                                                          <td>9:00
                                                            -
                                                            16:00
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Container>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
