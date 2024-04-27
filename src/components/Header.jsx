import React from "react";

function Header(){
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Bamri</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="/home">Home</a></li>
              <li><a href="/order">Order</a></li>
              <li><a href="/driver">Driver</a></li>
              <li><a href="/bus">Bus</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/login">log out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;