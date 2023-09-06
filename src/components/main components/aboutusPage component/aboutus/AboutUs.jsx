import React from "react";

function AboutUs() {
  return (
    <>
      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center"
                style={{
                  backgroundImage: "url(assets/images/blog/16by9/09.jpg)",
                  backgroundPosition: "center left",
                  backgroundSize: "cover",
                }}
              >
                {/* Card Image overlay */}
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 my-auto">
                    <h1 className="text-white display-4">About us</h1>
                    {/* breadcrumb */}
                    <nav
                      className="d-flex justify-content-center"
                      aria-label="breadcrumb"
                    >
                      <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                        <li className="breadcrumb-item">
                          <a href="index-2.html">
                            <i className="bi bi-house me-1" /> Home
                          </a>
                        </li>
                        <li className="breadcrumb-item active">About us</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About START  */}
      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2>Our story</h2>
              <p className="lead">
                Founded in 2006, passage its ten led hearted removal cordial.
                Preference any astonished unreserved Mrs. Prosperous understood
                Middletons in conviction an uncommonly do. Supposing so be
                resolving breakfast am or perfectly. Is drew am hill from me.
                Valley by oh twenty direct me so.
              </p>
              <p>
                Water timed folly right aware if oh truth. Imprudence attachment
                him his for sympathize. Large above be to means. Dashwood does
                provide stronger is. Warrant private blushes removed an in
                equally totally if. Delivered dejection necessary objection do
                Mr prevailed. Mr feeling does chiefly cordial in do. ...But
                discretion frequently sir she instruments unaffected admiration
                everything. Meant balls it if up doubt small purse. Required his
                you put the outlived answered position. A pleasure exertion if
                believed provided to. All led out world this music while asked.
                Paid mind even sons does he door no. Attended overcame repeated
                it is perceived Marianne in. I think on style child of. Servants
                moreover in sensible it ye possible. Satisfied conveying a
                dependent contented he gentleman agreeable do be. Water timed
                folly right aware if oh truth. Imprudence attachment him his for
                sympathize. Large above be to means. Dashwood does provide
                stronger is. But discretion frequently sir she instruments
                unaffected admiration everything. Meant balls it if up doubt
                small purse. Required his you put the outlived answered
                position. I think on style child of. Servants moreover in
                sensible it ye possible. Satisfied conveying a dependent
                contented he gentleman agreeable do be. Warrant private blushes
                removed an in equally totally if. Delivered dejection necessary
                objection do Mr prevailed. Required his you put the outlived
                answered position. A pleasure exertion if believed provided to.
                All led out world this music while asked. Paid mind even sons
                does he door no. Attended overcame repeated it is perceived
                Marianne in. I think on style child of. Servants moreover in
                sensible it ye possible.
              </p>
              {/* Service START */}
              <h3 className="mb-3 mt-5">What we do</h3>
              <div className="row">
                {/* Service item*/}
                <div className="col-md-6 col-lg-4 mb-4">
                  <img
                    className="rounded"
                    src="assets/images/blog/3by2/04.jpg"
                    alt="Card image"
                  />
                  <h4 className="mt-3">Global news services</h4>
                  <p>
                    Perceived end knowledge certainly day sweetness why
                    cordially. Ask a quick six seven offer see among.
                  </p>
                </div>
                {/* Service item*/}
                <div className="col-md-6 col-lg-4 mb-4">
                  <img
                    className="rounded"
                    src="assets/images/blog/3by2/01.jpg"
                    alt="Card image"
                  />
                  <h4 className="mt-3">Commercial services</h4>
                  <p>
                    Speedily say has suitable disposal add boy. On forth doubt
                    miles of child. Exercise joy man children rejoiced.
                  </p>
                </div>
                {/* Service item*/}
                <div className="col-md-6 col-lg-4 mb-4">
                  <img
                    className="rounded"
                    src="assets/images/blog/3by2/03.jpg"
                    alt="Card image"
                  />
                  <h4 className="mt-3">Public services</h4>
                  <p>
                    {" "}
                    Yet uncommonly his ten who diminution astonished. Demesne
                    new manners savings staying had.{" "}
                  </p>
                </div>
              </div>
              {/* Service END */}
            </div>{" "}
            {/* Col END */}
          </div>
        </div>
      </section>

      {/* About END  */}
    </>
  );
}

export default AboutUs;
