import React from 'react';
import line from './icon.png'
import img from './div.icon-wrap.png'
import done from './icondone.png'
import number2 from './div.icon-wrapsecond.png'
import number3 from './div.iconthird.png'
import number4 from './div.icon-wrapfour.png'



import './Get.css'

const Get = () => {



    return(

        <div className='App__process'>
            <h1 className="h1__get" style={{marginLeft: 700, fontSize: 40}}>КАК ПРОИСХОДИТ ПРОЦЕСС ВЫКУПА АВТО</h1>
            <div className="form__process" style={{marginTop: 90, position: 'relative', left: 200, top: -50}}>
                <div className='numberslogo'>
                <img src={img} style={{position: 'relative', left: -570, top: 160}}/>
                <img src={number2} style={{position: 'relative', left: -610, top: 250}}/>
                <img src={number3} style={{position: 'relative', left: -650, top: 340}}/>
                <img src={number4} style={{position: 'relative', left: -690, top: 430}}/>
                </div>
                <div className='gray'>
                <img  src={done} style={{position: 'relative', left: -650, top: 50}} / ><h3>Мы экономим ваше время</h3>
                <p className='nike__logo' style={{marginLeft: -550}}>Вся процедура занимает не более 1 часа</p>
                <h4>Заявка</h4>
                <p style={{marginLeft: -555}}>Оформляете заявку на нашем сайте<br/>
<span style={{marginLeft: -80}}>или звоните по телефону</span></p>
                <h4>Оценка</h4>
                <p style={{marginLeft: -470}}>Наш специалист приезжает к вам для оценки и<br/><span style={{marginLeft: -195}}>осмотра автомобиля</span></p>
                <h4 style={{marginLeft: -1120}}>Документы</h4>
                <p style={{marginLeft: -540}}>Оформляем договор купли-продажи и<br/><span style={{marginLeft: 55}}>подготавливаем все необходимые документы</span></p>
                <h4 style={{marginLeft: -1160}}>Расчет</h4>
                <p style={{marginLeft: -460}}>Вы получаете деньги сразу на месте, наличными,<br/><span style={{marginLeft: -262}}>либо на карту</span></p>
                </div>
            </div>

            <div className='pay__info' style={{marginLeft: 600, position: 'relative', top: -50}}>
                <h4 style={{marginLeft: 520}}>Стоимость по телефону</h4>
                <img src={line} style={{fontSize: 10, position: 'relative', left: 480, top: -45}}/>
                <p style={{position: 'relative', left: 520, marginTop: -50,}}>Первичную стоимость за выкуп авто, мы даем по телефону после заполненной<br/>и отправленной заявки.<br/>Эксперт по выкупу при общении с вами спросит ряд уточняющих<br/>моментов и после огласит максимально точную цену за<br/>выкуп вашего авто</p>
                <h4 style={{marginLeft: 520}}>Бесплатный выезд специалиста</h4>
                <img src={line} style={{fontSize: 10, position: 'relative', left: 480, top: -45}}/>
                <p style={{position: 'relative', left: 520, marginTop: -50}} >При встрече с оценщиком и осмотре автомобиля, вы<br/>получаете точную цену за машину и принимаете решение.<br/>Наши клиенты уходят от нас довольными и с деньгами за<br/>удачную сделку без хлопот</p>
            </div>

        </div>
    )
}


export default Get;
