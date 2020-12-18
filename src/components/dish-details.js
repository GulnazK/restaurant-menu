import React,{ useState,useEffect } from 'react';
import {useParams} from 'react-router-dom'
import dishes from "../dishes";

const DishDetails = () => {
    const {id} = useParams()
    const [meal, setMeal] = useState({})
    useEffect(() => {
        setMeal(dishes.find(el => el.id === +id))
    },[id])
    return (
        <div className="container">
            <div className="row row-wrapper">
                <div className="col-md-5">
                    <img src={meal.image} alt="" className="w-100"/>
                </div>
                <div className="col-md-7 mt-5">
                    <h2>{meal.title}</h2>
                    <p className="">Description:{meal.description}</p>
                    <div>Price:{meal.price}$</div>
                    <button className="dish-btn">ДОБАВИТЬ В ЗАКАЗ</button>
                </div>
            </div>
        </div>
    );
};

export default DishDetails;