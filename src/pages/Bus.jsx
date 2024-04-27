import React from "react";
import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";

function Bus() {

  const [busList, setBusList] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:8000/api/v1/buses", {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((json) => setBusList(json.data))
  }, []);

  return (
    <>
        <Header />
      <div className="margin-bottom-20">
        <div className="panel panel-info">
          <div className="panel-heading">Input Bus</div>
          <div className="panel-body">
            <div className="form-body">
              <form>
                <div className="form-group row">
                  <label className="col-md-2"> Plat Number </label>
                  <div className="col-md-10">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Brand </label>
                  <div className="col-md-10">
                    <select className="form-control">
                      <option>Mercedes</option>
                      <option>Fuso</option>
                      <option>Volvo</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Seat </label>
                  <div className="col-md-10">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Price Per Day </label>
                  <div className="col-md-10">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <input type="submit" value="Save" className="btn btn-primary" />
                    <input type="reset" value="Reset" className="btn btn-danger" />
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
                  <th>Plat Number</th>
                  <th>Brand</th>
                  <th>Seat</th>
                  <th>Price Per Day</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  busList.map((item,index) => (
                    <tr key={index}>
                      <td>{item.plate_number}</td>
                      <td>{item.brand}</td>
                      <td>{item.seat}</td>
                      <td>{item.price_per_day}</td>
                    </tr>
                  ))
                }
                <tr>
                  <td>AB 1234 CD</td>
                  <td>Mercedes</td>
                  <td>20</td>
                  <td>1000000</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
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

export default Bus