import '../App.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Interface from './Interface';

export default function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  return (
    <div>
      {!localStorage.getItem("authToken") ? (
        <div className="d-flex">
          <Interface />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="btn bg-danger text-white mx-2 logout" onClick={handleLogout}>Logout</div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card p-2 bg-dark border">
                  <div className="card-body">
                    <h5 className="card-title">BTECH</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                    <Link to="/btech" className="card-link">Card link</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card p-2 bg-dark border">
                  <div className="card-body">
                    <h5 className="card-title">BBA</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                    <Link to="/bba" className="card-link">Card link</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card p-2 bg-dark border">
                  <div className="card-body">
                    <h5 className="card-title">BCA</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                    <Link to="/bca" className="card-link">Card link</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card p-2 bg-dark border">
                  <div className="card-body">
                    <h5 className="card-title">B.COM</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                    <Link to="/bcom" className="card-link">Card link</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
