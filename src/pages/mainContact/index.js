import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Index() {
  return (
    <div>
      <Navbar />
      <div className="default-padding">
        <div className="form-area">
          <div className="container">
            {/*<img src="../images/Banner.png" > */}
            <div className="row">
              <div className="col-lg-6">
                <div className="white-popup-block-form">
                  <h4 className="title">Main Contact</h4>
                  <div className="form-signin" action id="login-form">
                    <div className="login-wrap">
                      <div className="user-login-info">
                        <form className="form-horizontal" method="POST" action="http://test.ginicoe.com/login">
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">First Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="f_name"
                                onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="First Name"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Middle Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="m_name"
                                onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                placeholder="Middle Name"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Last Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="l_name"
                                onkeypress="return (event.charCode > 64 && 
	event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)"
                                defaultValue
                                placeholder="Last Name"
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Telephone Number</label>
                              <input type="text" className="form-control" name="telephone" placeholder="Telephone Number" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Toll Free Number </label>
                              <input type="text" className="form-control" name="toll_number" placeholder="Toll Free Number" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Fax Number</label>
                              <input type="text" className="form-control" name="fax_number" placeholder="Fax Number" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Mobile / Cell Phone</label>
                              <input type="text" className="form-control" name="cell_number" placeholder="Mobile / Cell Phone" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Email Address</label>
                              <input type="email" className="form-control" name="email_address" placeholder="Please Enter Email Address" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label">Federal Tax ID</label>
                              <input
                                type="text"
                                className="form-control"
                                name="federal_tax"
                                placeholder="Federal Tax ID"
                                onkeypress="return restrictAlphabets(event)"
                                pattern="(.){9,9}"
                                maxLength={9}
                                required
                                autofocus
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What is your work email address? </label>
                              <input type="text" className="form-control" name="zip" defaultValue placeholder="Email Address" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What is your Entity's Website </label>
                              <input type="text" className="form-control" name="zip" defaultValue placeholder="Entity's Website" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-md-12">
                              <label className=" control-label"> What is your email address? </label>
                              <input type="text" className="form-control" name="zip" defaultValue placeholder="Email Address" onkeypress="return restrictAlphabets(event)" required autoFocus />
                            </div>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-danger form-button" name="form-button" style={{ float: "left" }}>
                              Save and Return Later
                            </button>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-success form-button" name="form-button" id="suc">
                              Save and Continue
                            </button>
                          </div>
                        </form>
                        {/* <p class="link-bottom">Not a member yet? <a href="register.html">Register now</a></p>
                         */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
