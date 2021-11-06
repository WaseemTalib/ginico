import React, { useEffect } from "react";
import './style.css';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Tab1 from "../../components/tabs/tab1";
import Tab2 from "../../components/tabs/tab2";
import Tab3 from "../../components/tabs/tab3";
import Tab4 from "../../components/tabs/tab4";
import Tab5 from "../../components/tabs/tab5";
import Tab6 from "../../components/tabs/tab6";
import Tab7 from "../../components/tabs/tab7";
import Tab8 from "../../components/tabs/tab8";
import Tab9 from "../../components/tabs/tab9";
import Tab10 from "../../components/tabs/tab10";
import Tab11 from "../../components/tabs/tab11";
import Tab12 from "../../components/tabs/tab12";

function Index() {
  const openCity = (evt, cityName) => {
    console.log(evt);
    console.log(cityName);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
  useEffect(() => {
    // // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
  }, []);

  const myFunction = () => {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <div>
      <Navbar />
      <div className="default-padding">
        <div className="form-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="white-popup-block-form">
                  <h4 class="title">CONSUMER Forms</h4>
                  <div className="form-signin" action id="login-form">
                    <div className="login-wrap">
                      <div className="user-login-info">
                        <div>
                          <button onClick={myFunction} className="btn btn-success form-button" id="button">
                            Show Form Sections
                          </button>
                          <div className="tab" id="myDIV">
                            <button className="tablinks" onClick={(event) => openCity(event, "tab1")} id="defaultOpen">
                              Your Pedigree Info
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab2")}>
                              Communication Channels
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab3")}>
                              Neighborhood
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab4")}>
                              Employment Information
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab5")}>
                              I Want To Protect These Charge Cards
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab6")}>
                              Facial Images Upload
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab7")}>
                              Head &amp; Face Info
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab8")}>
                              Head Tattoos, Scars, and other distinguishing identifiers
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab9")}>
                              Twins
                            </button>
                            <hr className="hr" />
                            <button className="tablinks" onClick={(event) => openCity(event, "tab10")}>
                              Medical Info
                            </button>
                            <hr className="hr" />
                            <button className="tabLinks" onClick={(event) => openCity(event, "tab11")}>
                              Family &amp; Medical History
                            </button>
                            <hr className="hr" />
                            <button className="tabLinks" onClick={(event) => openCity(event, "tab12")}>
                              Travel Information
                            </button>
                          </div>
                          {/* TABS END */}

                          <div id="tab1" className="tabcontent">
                            <Tab1 />
                          </div>

                          <div id="tab2" className="tabcontent">
                            <Tab2 />
                          </div>
                          <div id="tab3" className="tabcontent">
                            <Tab3 />
                          </div>
                          <div id="tab4" className="tabcontent">
                            <Tab4 />
                          </div>
                          <div id="tab5" className="tabcontent">
                            <Tab5 />
                          </div>
                          <div id="tab6" className="tabcontent">
                            <Tab6 />
                          </div>
                          <div id="tab7" className="tabcontent">
                            <Tab7 />
                          </div>
                          <div id="tab8" className="tabcontent">
                            <Tab8 />
                          </div>
                          <div id="tab9" className="tabcontent">
                            <Tab9 />
                          </div>
                          <div id="tab10" className="tabcontent">
                            <Tab10 />
                          </div>
                          <div id="tab11" className="tabcontent">
                            <Tab11 />
                          </div>
                          <div id="tab12" className="tabcontent">
                            <Tab12 />
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
      <Footer />
    </div>
  );
}

export default Index;
