import React, {useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ingredientData from "../Data/ingredients.json";
import "./pages.css";

export const IngredientPage = (props) => {

    const [currentStage, setCurrentStage] = useState(1);
    const [firstIngredient, setFirstIngredient] = useState(0);
    const [initSecond, setInitSecond] = useState(0);
    const [secondIngredient, setSecondIngredient] = useState(0);

    const fristSettings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => setFirstIngredient(current)
    };

    const secondSettings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slickGoTo: initSecond,
        afterChange: current => setSecondIngredient(current)
    };
    
    function setSecondStage() {
        setCurrentStage(2);
        setSecondIngredient(initSecond);
        if (firstIngredient === 0) {
            setInitSecond(1);
        }
        else {
            setInitSecond(0);
        }
    }

    return(
        <>
            <div className='ingredientpage'>
                <div className='title'>
                    오늘 Moodish의 <br/>
                    주재료 골라볼까요?
                </div>
                {currentStage === 1 ?
                    <>
                        <Slider key='1' {...fristSettings}>
                            {
                                ingredientData.map(data =>                                 
                                    <div className='ingredientcard'>
                                        <div className='name' style={{ color: data.color}}>{data.name}</div>
                                        <div className='description'>{data.description}</div>
                                    </div>
                                )
                            }
                        </Slider>
                        <img key='img1' className="ingredientImg" src={ingredientData[firstIngredient].image} alt="ingredient"/>
                        <button className='selectbutton' onClick={setSecondStage}>주재료 선택!</button>
                    </>
                    :
                    <>
                        <Slider key='2' {...secondSettings}>
                                {
                                ingredientData.filter((item, i) => i !== firstIngredient).map(data => 
                                    <div className='ingredientcard'>
                                        <div className='name' style={{ color: data.color}}>{data.name}</div>
                                        <div className='description'>{data.description}</div>
                                    </div>
                                )
                            }
                        </Slider>
                        <img key='img2' className="ingredientImg" src={ingredientData.filter((item, i) => i !== firstIngredient)[secondIngredient].image} alt="ingredient"/>
                        <button className='selectbutton' onClick={setSecondStage}>부재료 선택!</button>
                    </>
                }
            </div>
        </>
    )
}