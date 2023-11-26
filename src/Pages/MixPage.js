import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import ingredientData from "../Data/ingredients.json";

export const MixPage = (props) => {

    const location = useLocation();
    const { firstIngredient, secondIngredient } = location.state;

    return(
        <>
            <div className='title'>
                재료를 다 골랐군요! <br/>
                이제 요리를 시작해볼까요?
            </div>
            <div className='foodholder'>
                <img key='img1' className="ingredientMixImg" src={ingredientData[firstIngredient].image} alt="ingredient"/>
                <img key='img2' className="ingredientMixImg" src={ingredientData[secondIngredient].image} alt="ingredient"/>
            </div>
            <Link to = {'/maindish'} state = {{firstIngredient: firstIngredient, secondIngredient: secondIngredient}}  className='selectbutton'>
                요리 시작!
            </Link>
        </>
    )
}