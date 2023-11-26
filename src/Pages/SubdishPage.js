import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ingredientData from "../Data/ingredients.json";

export const SubdishPage = (props) => {

    const location = useLocation();
    const { firstIngredient, secondIngredient, firstword } = location.state;


    return(
        <div className='dishpage' style={{ 'background-color': ingredientData[secondIngredient].background_color}}>
            <div className='dishtitle'>
                {ingredientData[secondIngredient].name.split(" ")[1]}을 요리해볼까요?
            </div>
            <div className='explain'>
                오늘의 {ingredientData[secondIngredient].name.split(" ")[1]}을 가장 잘 설명하는 <br/>
                단어를 선택해 요리해봅시다
            </div>
            <img key='img1' className="ingredientImg" src={ingredientData[secondIngredient].image} alt="ingredient"/>
            <div className='buttonHolder'>
                {
                    ingredientData[secondIngredient].keywords.map((word, i) => (
                        <Link to='/cookfinish' state = {{firstIngredient:firstIngredient, secondIngredient:secondIngredient, firstword: firstword, secondword: i }} className='wordBtn'>
                            {word}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}