import React from 'react'
import men from './div.component-image.png'
import men2 from './div.component-imagemen2.png'
import girl from './div.component-imagegirl.png'

import './reviews.css'



const Reviews = () => {



    return(
        <div className="App__reviews" style={{position: 'relative', top: 50}}>
            <h1 style={{marginTop: 15, marginLeft: 680, fontSize :40}}>ОТЗЫВЫ О НАС</h1>
            <div className='reviews__all'>
            <div className='header__rev'>
            <h4>
Наталья, Volkswagen Polo</h4>

<h4>
Виктор, Kia Seltos</h4>

<h4 className='third_h1'>
Илья, Mazda 6</h4>


</div>

<div className='text__rev' style={{fontWeight: 'normal', textAlign: 'left', marginTop: -35}}>
<p style={{fontWeight: 'normal', position: 'relative', left: 16}}>Обращалась впервые. Очень все
понравилось. По телефону Сергей
предложил цену, выше рыночной.
Приехал на место, сразу деньги отдал
наличными, все прошло очень быстро.
Все понравилось, буду рекомендовать
знакомым, спасибо за качественный
сервис!</p>
<p style={{fontWeight: 'normal', position: 'relative', left: -110}}>Отличный сервис, осмотр машины
занял 30 мин, торги прошли тоже в
районе 20-30 мин‚ оформление
документов 15-20 мин и все, машина
продана. Спасибо Вам большое!</p>

<p className='third' style={{fontWeight: 'normal', position: 'relative', left: -170}}>Сергей приехал сам к нам, осмотрел
машину и сразу предложил цену ту, что
говорил по телефону. Никакого обмана,
все честно</p>


</div>
<img  className="img_main1" src={men} style={{position: 'relative', top: -170, left: 100}}/>
<img className="img_main" src={men2} style={{position: 'relative', top: -170, left: 630}}/>
<img className="img_main1" src={girl} style={{position: 'relative', top: -170, left: -680}}/>
    </div>


        </div>
    )
}


export default Reviews; 