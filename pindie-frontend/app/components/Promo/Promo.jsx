'use client';
import Styles from './Promo.module.css'
import { useEffect, useState } from "react"

export const Promo = () => {

 

  const handleButtonClick = () => {
    setCodeIsVisible(true);
  }

  const [CodeIsVisible, setCodeIsVisible] = useState(false)

  useEffect (() =>{
    let timeout;
    if (CodeIsVisible) {
      timeout = setTimeout(()=>
      {setCodeIsVisible(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [CodeIsVisible]);

    return (  
        <section className={Styles["promo"]}>
    <div className={Styles["description"]}>
      <h2 className={Styles["title"]}>Твой промо-код</h2>
      <p className={Styles["description"]}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
      <button  className={`button ${Styles["promo__button"]}` } onClick={handleButtonClick} >
      {CodeIsVisible? <span className={Styles["promo-code"]}>WEBTEENS10</span>: <span className={Styles["promo-code"]}>Получить код</span>}
      </button>
    </div>
    <img src="./images/promo-illustration.svg" alt="Собака" className={Styles["image"]}/>
  </section>
  )
}
