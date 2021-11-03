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
                  <h4 className="title">IMAGE UPLOAD</h4>
                  <div className="form-signin" action id="login-form">
                    <div className="login-wrap">
                      <div className="user-login-info">
                        <div className="box">
                          <div className="js--image-preview" />
                          <div className="upload-options">
                            <label>
                              <input type="file" className="image-upload" accept="image/*" />
                            </label>
                          </div>
                        </div>
                        <br />
                        <br />
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
