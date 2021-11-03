import React from "react";
import logo from "../assets/images/img-logo.png";

function Navbar() {
  return (
    <header id="home">
      {/* Start Navigation */}
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        {/* Start Top Search */}
        <div className="container">
          <div className="row">
            <div className="top-search">
              <div className="input-group">
                <form action="#">
                  <input type="text" name="text" className="form-control" placeholder="Search" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Top Search */}
        <div className="container">
          {/* Start Atribute Navigation */}
          <div className="attr-nav">
            <ul>
              <li className="search" title="Translate website content" id="google_translate_element"></li>
            </ul>
          </div>
          {/* End Atribute Navigation */}
          {/* Start Header Navigation */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand" href="test.ginicoe.html">
              <img src={logo} className="logo logo-display" alt="Logo" />
              <img src={logo} className="logo logo-scrolled" alt="Logo" />
            </a>
          </div>
          {/* End Header Navigation */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Solutions
                  <i class="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="1.html">Consumers</a>
                  </li>
                  <li>
                    <a href="2.html">Merchants</a>
                  </li>
                  <li>
                    <a href="3.html">Financial Institutions</a>
                  </li>
                  <li>
                    <a href="4.html">Government</a>
                  </li>
                  <li>
                    <a href="5.html">HealthCare</a>
                  </li>
                  <li>
                    <a href="6.html">Education</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Pricing
                  <i class="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="1.html"> Consumers</a>
                  </li>
                  <li>
                    <a href="2.html"> Merchants</a>
                  </li>
                  <li>
                    <a href="3.html"> Financial Institutions</a>
                  </li>
                  <li>
                    <a href="4.html"> Government</a>
                  </li>
                  <li>
                    <a href="5.html"> HealthCare</a>
                  </li>
                  <li>
                    <a href="6.html"> Education</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="register.html">Signup</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* Start Side Menu */}
        <div className="side">
          <a href="#" className="close-side">
            <i className="fa fa-times" />
          </a>
          <div className="widget">
            <ul>
              <li>
                <a href="home.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle " data-toggle="dropdown">
                  Solutions
                  <i class="fas fa-chevron-down"></i>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a href="1.html">Consumers</a>
                  </li>
                  <li>
                    <a href="2.html">Merchants</a>
                  </li>
                  <li>
                    <a href="3.html">Financial Institutions</a>
                  </li>
                  <li>
                    <a href="4.html">Government</a>
                  </li>
                  <li>
                    <a href="5.html">HealthCare</a>
                  </li>
                  <li>
                    <a href="6.html">Education</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle " data-toggle="dropdown">
                  Pricing
                <i class="fas fa-chevron-down"></i>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a href="1.html">Consumers</a>
                  </li>
                  <li>
                    <a href="2.html">Merchants</a>
                  </li>
                  <li>
                    <a href="3.html">Financial Institutions</a>
                  </li>
                  <li>
                    <a href="4.html">Government</a>
                  </li>
                  <li>
                    <a href="5.html">HealthCare</a>
                  </li>
                  <li>
                    <a href="6.html">Education</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="register.html">Signup</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Side Menu */}
      </nav>
      {/* End Navigation */}
    </header>
  );
}

export default Navbar;
