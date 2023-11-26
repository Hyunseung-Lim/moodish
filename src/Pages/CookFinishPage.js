import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ingredientData from "../Data/ingredients.json";
import dishData from "../Data/dish_each.json";

export const CookFinishPage = (props) => {

    const location = useLocation();
    const { firstIngredient, secondIngredient, firstword, secondword } = location.state;
    const [ dish, setDish ] = useState(0);
    const [ dishInfo, setDishInfo ] = useState("");

    useEffect(() => {
        const dishNum = 5 * firstIngredient + (firstIngredient<=secondIngredient ? secondIngredient - 1: secondIngredient) ; 
        setDish(dishNum);
        setDishInfo(dishData[dishNum].d1 + ingredientData[firstIngredient].keywords[firstword] + dishData[dishNum].d2 + ingredientData[secondIngredient].keywords[secondword] + dishData[dishNum].d3);
    }, []);

    function NewlineText({ text }) {
        const newText = text.split('\n').map((item, i) => {
          return <span key={i}>{item}<br/></span>;
        });
      
        return <div className="dishInfo" >{newText}</div>;
    }

    return(
        <>
            <div className='dishtitle'>
                요리가 완성되었어요! <br/>
                오늘의 기분은 어떤 맛인가요?
            </div>
            <div className='explain'>
                요리에 담긴 여러 가지 감정들의 맛을 느끼며 오늘 하루를 곱씹고, 감정을 소화해보세요
            </div>
            <img className="dishImg" src={dishData[dish].image} alt="dish"/>
            <NewlineText text={dishInfo} />
            <div className="dishName">
                {dishData[dish].name}
            </div>
        </>
    )
}