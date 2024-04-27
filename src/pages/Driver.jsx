import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

function Driver() {

  const [driverList, useDriverList] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/drivers')
      .then(response => response.json())
      .then(json => useDriverList(json.data))
  }, [])

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [idNumber, setIdNumber] = useState('')

  const payload = {
    name,
    age,
    id_number : idNumber
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    axios.post('http://localhost:8000/api/v1/drivers', payload, {
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then(res => console.log(res))
    
  }

  return (
    <>
      <Header />
      <div class="margin-bottom-20">
        <div class="panel panel-info">
          <div class="panel-heading">Input Driver</div>
          <div class="panel-body">
            <div class="form-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group row">
                  <label class="col-md-2"> Name </label>
                  <div class="col-md-10">
                    <input class="form-control" name="name" value={name} onChange={e => {setName(e.target.value)}} />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-2"> Age </label>
                  <div class="col-md-10">
                    <input class="form-control" value={age} onChange={e => {setAge(e.target.value)}} name="age" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-2"> ID Number </label>
                  <div class="col-md-10">
                    <input class="form-control" value={idNumber} onChange={e => {setIdNumber(e.target.value)}} name="id_number" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <input type="submit" value="Save" class="btn btn-primary" />
                    <input type="reset" value="Reset" class="btn btn-danger" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="margin-bottom-20">
        <div class="panel panel-default">
          <div class="panel-heading">Data</div>
          <div class="panel-body">
            <table class="table table-bordered">
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
                {
                  driverList.map((item,index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.id_number}</td>
                    </tr>
                  ))
                }
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>30</td>
                  <td>1234567890</td>
                  <td>
                    <button class="btn btn-warning">Edit</button>
                    <button class="btn btn-danger">Delete</button>
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
