/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useReducer } from 'react'
import { getAll } from '../../services/foodService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';


const initialState = { foods: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'FOOD_LOADED':
            return { ...state, foods: action.payload };
        default:
            return state;
    }
};

export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { foods } = state;

    useEffect(() => {
        getAll().then(foods => dispatch({ type: 'FOOD_LOADED', payload: foods }));
    }, [foods]);


    return (
        <>
            <h3>Popular Food</h3>
            <p>Hello, we'are DXC Cuisine, your premium food delivery service at DXC VietNam. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!</p>

            <div id="carouselExampleControls" class="carousel">
                <div class="carousel-inner">
                    <Thumbnails foods={foods} />
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
