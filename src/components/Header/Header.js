/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


export default function Header() {
  const user = {
    name : 'String'
  };

  const logout = () => {}

  return (
    <header class="header">
        <div class="header-container">
          <div class="follow">
            <h3>Follow us on:</h3>
            <span><i class="bi bi-facebook"></i></span>
            <span><i class="bi bi-skype"></i></span>
            <span><i class="bi bi-instagram"></i></span>
            <span><i class="bi bi-twitter"></i></span>
          </div>
          <div class="banner">
            <Link to="/" class="logo">DXC Cuisine</Link>

            <div class="dropdown ">
              <button class="btn btn-outline-second dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                BROWSE
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search"/>
              <button class="btn btn-primary" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </div>
          
            <nav>
              <ul>
                {user ?
                (
                  <li class="menu_container">
                    <Link to="/profile">{user.name}</Link>
                    <div class="menu">
                      <Link to="/profile">Profile</Link>
                      <Link to="/orders">Oders</Link>
                      <a href='#' onClick={logout}>Logout</a>
                    </div>
                  </li>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </ul>
            </nav>
          </div>
        </div>
    </header>
  );
}
