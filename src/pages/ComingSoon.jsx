import React from "react";

function ComingSoon() {
  return (
    <>
      <div
        className="container-fluid bg-primary bg-opacity-10"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/assets/images/wlcm21.png"
            alt="welcome2udaipur"
            className="img-fluid w-25"
          />
          <img
            src="/assets/images/Coming-Soon.png"
            className="img-fluid "
            alt="coming-soon"
          />
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
