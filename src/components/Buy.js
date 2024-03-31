import React, {useState} from 'react'
import buy from './buy.css'
import photo from "./div.component-image__image.png"
import iconss from './SVGicon2.png'
import Modal from './Modal'




const Buy = () => {

    let  [modalactive, setModalActive] = useState(false)
    
    const update = (e) => {
        e.preventDefault()
    }

    return (
        <div className="App__buy">
            <h1  className='buyh1' style={{fontSize: 40, position: 'relative', left: 400, top: 40}}>МЫ ВЫКУПАЕМ ЛЮБЫЕ АВТОМОБИЛИ</h1>
            <div className='textBuy' style={{position: 'relative', top: 50, textAlign: 'left', left: -100}}>
            <p>Отечественные</p>
            <p>Иномарки</p>
            <p>Бюджетные или дорогие</p>
            <p>Требующие ремонта(двигателя, коробки или кузовного ремонта)</p>
            <p>После ДТП</p>
            <p>Кредитные, залоговые, с ограничениями или всё вместе.</p>
            </div>
            <button  onClick={() => setModalActive(true)} className="but__buy" style={{position: 'relative', left: 600, top: 120}}>ПРОДАТЬ АВТО</button>
            <div className='border__green'>
            <img src={iconss} style={{position: 'relative', top: -415, left: 60}}/>
            <img src={iconss} style={{position: 'relative', top: -350, left: 20}}/>
            <img src={iconss} style={{position: 'relative', top: -285, left: -20}}/>
            <img src={iconss} style={{position: 'relative', top: -220, left: -60}}/>
            <img src={iconss} style={{position: 'relative', top: -155, left: -100}}/>
            <img src={iconss} style={{position: 'relative', top: -90, left: -140}}/>
            </div>
            <img src={photo} style={{position: 'relative', left: 500, top: -300}}/>
            <Modal active={modalactive} setActive={setModalActive}  onClick={update}>
                <div className="form__modal">
                <h3 style={{fontSize: 30}}>Оформить заявку</h3>
                <label for="first" style={{marginLeft: -200, position: 'relative', left: -300, fontSize: 25}}>Марка и модель авто*</label>
                <input style={{position: 'relative', top: 50, left: -555}} type="text" id="first"/>
                <label for="second" style={{ position: 'relative', left: -498, fontSize: 25, top: 100}}>Ваш номер телефона*</label>
                <input placeholder='+7' type="number" id="second" style={{position: 'relative', top: 140, left: -750}}/>
                <button style={{position: 'relative', top: 230, left: 250}}>Отправить</button>
                </div>
        </Modal>


        
        </div>
    )
}

export default Buy ;