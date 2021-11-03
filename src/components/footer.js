import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-light">
        <div className="container">
          <div className="row">
            <div className="f-items default-padding">
              {/* Single Item */}
              <div className="col-md-4 equal-height item">
                <div className="f-item">
                  <h4>About</h4>
                  <p>
                    We prevent identity theft and fraud. We protect our customers against data breaches, hacks, data loses, synthetic id fraud, new application fraud, account takeover (ATO) fraud,
                    scams, mishandling, 3rd party breaches, large threat surfaces, unauthorized access, and more.
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 equal-height item">
                <div className="f-item link">
                  <h4>Solutions</h4>
                  <ul>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <a href="1.html"> Consumers</a>
                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <a href="2.html"> Merchants</a>
                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <a href="3.html"> Financial Institutions</a>
                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <a href="4.html"> Government</a>
                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <a href="5.html"> HealthCare</a>
                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <a href="6.html"> Education</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 equal-height item">
                <div className="f-item twitter-widget">
                  <h4>Contact</h4>
                  <div className="twitter-item">
                    <div className="twitter-content">
                      <p>
                        <b>Address : </b> Ginicoe Operations, P.O. Box 12521
                        <br />
                        East Cleveland, Ohio 44112.
                        <br />
                        <b>E-mail : </b> support@ginicoe.com
                        <br />
                        <b>Phone : </b>347 - 464 - 9144
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
        {/* Start Footer Bottom */}
        <div className="footer-bottom bg-dark text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  © Copyright 2021. All Rights Reserved by <a href="#">Ginicoe</a>
                </p>
              </div>
              <div className="col-md-6 text-right link">
                <ul>{/* //privacy staff */}</ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>
      {/* End Footer */}
      <div className="modal fade" id="Modal">
        <div className="modal-dialog">
          <div className="modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
