import React, { useState } from "react";

function PasswordUpdate() {
  // password hide and show toggle
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <div className="card border">
        <div className="card-header border-bottom p-3">
          <h5 className="card-header-title mb-0">Update password</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Current password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter current password"
            />
          </div>
          {/* New password */}
          <div className="mb-3">
            <label className="form-label" id="psw-strength-message">
              Enter new password{" "}
            </label>
            <div className="input-group">
              <input
                className="form-control fakepassword"
                type={passwordShown ? "text" : "password"}
                id="psw-input"
                placeholder="Enter new password"
              />
              <span className="input-group-text p-0" onClick={togglePassword}>
                {passwordShown ? (
                  <i className="far fa-eye cursor-pointer p-2 w-40px "></i>
                ) : (
                  <i className="far fa-eye-slash cursor-pointer p-2 w-40px"></i>
                )}
              </span>
            </div>
            <div className="rounded mt-1" id="psw-strength" />
          </div>
          {/* New password */}
          <div>
            <label className="form-label">Confirm new password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm new password"
            />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button type="button" className="btn btn-primary">
              Change password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordUpdate;
