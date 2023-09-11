import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ListUser() {
  const userDetails_URL = process.env.REACT_APP_USER_URL ;
  const domain_URL = process.env.REACT_APP_DOMAIN_URL;

  const [userDetail, setUserDetail] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(domain_URL+userDetails_URL+"/allusers");
      setUserDetail(response.data);
    } catch (err) {
      console.log("userDetails_URL", err);
      toast(err.response.data.message || "Error fetching users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // delete user
  const [show, setShow] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState("");
  const [deleteUserName, setDeleteUserName] = useState("");

  const deleteUser = () => {
    setShow(false);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h3 className=" d-flex justify-content-center mt-4 mb-4">
            User Details
          </h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">UserName</th>                
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Mobile No.</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {userDetail &&
                userDetail.map((data, index) => (
                  <tr key={index}>                   
                    <td>{data.username}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.mobileNo}</td>
                    <td>{data.gender}</td>
                  
                    {/* <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-light btn-round mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Delete"
                          onClick={() => {
                            setShow(true);
                            setDeleteUserId(data._id);
                            setDeleteUserName(data.username);
                          }}
                        >
                          <i className="bi bi-trash" />
                        </button>
                      </div>
                    </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {deleteUserName && (
          <Modal.Body>
            Are you really want to delete {deleteUserName} and {deleteUserId}?
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListUser;
