import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ingredientData from "../Data/ingredients.json";

export const MaindishPage = (props) => {

    const location = useLocation();
    const { firstIngredient, secondIngredient } = location.state;


    return(
        <div className='dishpage' style={{ 'background-color': ingredientData[firstIngredient].background_color}}>
            <div className='dishtitle'>
                {ingredientData[firstIngredient].name.split(" ")[1]}을 요리해볼까요?
            </div>
            <div className='explain'>
                오늘의 {ingredientData[firstIngredient].name.split(" ")[1]}을 가장 잘 설명하는 <br/>
                단어를 선택해 요리해봅시다
            </div>
            <img key='img1' className="ingredientImg" src={ingredientData[firstIngredient].image} alt="ingredient"/>
            <div className='buttonHolder'>
                {
                    ingredientData[firstIngredient].keywords.map((word, i) => (
                        <Link to='/subdish' state = {{firstIngredient:firstIngredient, secondIngredient:secondIngredient, firstword: i }} className='wordBtn'>
                            {word}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}