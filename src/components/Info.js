import React, {useState} from 'react'
import "./info.css"
import Modal from './Modal'



const Info = () => {

    const update = (e) => {
        e.preventDefault()
    }

    const [modalactive, setModalActive] = useState(true)

    return (
        <div className="App__car" style={{width: 1920, height: 845}}>
            <div className='but__cars' style={{position: 'relative', top: 175}}>
            <p style={{fontSize: 60, color: 'white'}} className='buy'>ВЫКУПИМ ВАШ АВТОМОБИЛЬ<br/>
                <span style={{marginLeft: -210}}>УЖЕ СЕГОДНЯ</span> <span style={{color: 'red'}}>ДОРОГО!</span></p>
            <p style={{color: 'green', marginLeft: -240, fontSize: 26, marginTop: -60}}>В среднем на 50 000 ₽ дороже любого предложения</p>
            <div className='white' style={{marginLeft: -500}}>
            <p>До 99% от рыночной стоимости</p>
            <p style={{marginLeft: 120}}>Расчёт на месте наличными или на карту</p>
            <p style={{marginLeft: 60}}>100% безопасность и чистота сделки</p>
            </div>
            </div>
            <button onClick={() => setModalActive(true)} style={{marginTop: 180}}>ЗАЯВКА НА ВЫКУП</button>
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

export default Info;