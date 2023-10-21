/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './thumbnails.css'

export default function Thumbnails({ foods }) {
  return (
    <>
      {
        foods.map(food => (
          <div class={`carousel-item ${food.id == 0 ? "active" : ""}`} key={food.id} >
          <div class="card">
              <div class="img-wrapper"><img src={food.imgUrl} class="d-block w-100" alt="..."/> </div>
              <div class="card-body">
                  <h5 class="card-title">{food.name}</h5>
                  <p class="card-text">{food.describe}</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      </div>
        ))
      }
    </>
  )
}
