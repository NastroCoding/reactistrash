import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function Order() {

  const [orderList, setOrderList] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/orders")
      .then((response) => response.json())
      .then((json) => setOrderList(json.data))
  }, []);

  return (
    <>
      <Header />
      <div className="margin-bottom-20">
        <div className="panel panel-info">
          <div className="panel-heading">Input Schedule</div>
          <div className="panel-body">
            <div className="form-body">
              <form>
                <div className="form-group row">
                  <label className="col-md-2"> Bus ID </label>
                  <div className="col-md-10">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Driver ID </label>
                  <div className="col-md-10">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Contact Name </label>
                  <div className="col-md-10">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Contact Phone </label>
                  <div className="col-md-10">
                    <input className="form-control" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Start Rent Date </label>
                  <div className="col-md-10">
                    <input className="form-control" type="date" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-2"> Total Rent Days </label>
                  <div className="col-md-10">
                    <input className="form-control" type="number" />
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
                  <th>Bus Type</th>
                  <th>Driver Name</th>
                  <th>Contact Name</th>
                  <th>Contact Phone</th>
                  <th>Start Rent Date</th>
                  <th>Total Rent Days</th>
                  <th>Total Rent Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item,index) => (
                  <tr key={index}>
                    <td>{item.bus.brand}</td>
                    <td>{item.driver.name}</td>
                    <td>{item.contact_name}</td>
                    <td>{item.contact_phone}</td>
                    <td>{item.start_rent_date}</td>
                    <td>{item.total_rent_days}</td>
                    <td>{item.total_rent_days*item.bus.price_per_day}</td>
                  </tr>
                ))}
                <tr>
                  <td>Fuso</td>
                  <td>Ahmad Fulan</td>
                  <td>John Doe</td>
                  <td>1234567890</td>
                  <td>2020-01-01</td>
                  <td>3</td>
                  <td>3000000</td>
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

export default Order;
