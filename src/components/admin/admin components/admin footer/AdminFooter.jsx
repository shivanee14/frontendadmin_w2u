import React from "react";

function AdminFooter() {
  return (
    <>
      <footer className="mt-5 bg-dark">
        <div className="container">
          <div className="card card-body bg-dark">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6">
                {/* Copyright */}
                <div className="text-center text-md-start text-primary-hover">
                  Copyright © 2023 Welcome2Udaipur &nbsp; &nbsp;
                </div>
              </div>
              <div className="col-lg-6 d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                <ul className="nav text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a style={{color: "#92959d"}} className="nav-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pe-0" href="#">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AdminFooter;