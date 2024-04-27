import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { redirect } from "react-router-dom";

function Driver() {
  const [driverList, useDriverList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/drivers")
      .then((response) => response.json())
      .then((json) => useDriverList(json.data));
  }, []);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const payload = {
    name,
    age,
    id_number: idNumber,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios.post("http://localhost:8000/api/v1/drivers", payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/v1/drivers/${id}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Header />
      <div className="margin-bottom-20">
        <div className="panel panel-info">
          <div className="panel-heading">Input Driver</div>
          <div className="panel-body">
            <div className="form-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label className="col-md-2"> Name </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Age </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      name="age"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> ID Number </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      value={idNumber}
                      onChange={(e) => {
                        setIdNumber(e.target.value);
                      }}
                      name="id_number"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Save"
                      className="btn btn-primary"
                    />
                    <input
                      type="reset"
                      value="Reset"
                      className="btn btn-danger"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="margin-bottom-20">
        <div className="panel panel-default">
          <div className="panel-heading">Data</div>
          <div className="panel-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>ID Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {driverList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.id_number}</td>
                    <td>
                      <button className="btn btn-warning">Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>30</td>
                  <td>1234567890</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete()}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Driver;
