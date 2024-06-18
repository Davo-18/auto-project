import React, {useState} from 'react'
import "./info.css"
import Modal from './Modal'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


const Info = () => {

    const update = (e) => {
        e.preventDefault()
    }

    const [modalactive, setModalActive] = useState(true)
    const [value, setValue] = useState()

    return (
        <div className="App__car" style={{width: 1920, height: 845}}>
            <div className='but__cars' style={{position: 'relative', top: 175}}>
                <div className='change'>
            <p style={{fontSize: 60, color: 'white'}} className='buy'>ВЫКУПИМ ВАШ АВТОМОБИЛЬ<br/>
                <span style={{marginLeft: -210}}>УЖЕ СЕГОДНЯ</span> <span style={{color: 'white'}}>ДОРОГО!</span></p>
                </div>
            <p style={{color: 'green', marginLeft: -240, fontSize: 26, marginTop: -60}}>В среднем на 50 000 ₽ дороже любого предложения</p>
            <div className='white' style={{marginLeft: -500}}>
            <p>До 99% от рыночной стоимости</p>
            <p style={{marginLeft: 120}} className='second_p'>Расчёт на месте наличными или на карту</p>
            <p style={{marginLeft: 60}} className='third_p'>100% безопасность и чистота сделки</p>
            </div>
            </div>
            <button onClick={() => setModalActive(true)} style={{marginTop: 180}}><a href="#" style={{color: 'white'}}>ЗАЯВКА НА ВЫКУП</a></button>
            <Modal active={modalactive} setActive={setModalActive}  onClick={update} className="modal__car">
                <div className="form__modal">
                <h3 style={{fontSize: 30}}>Оформить заявку</h3>
                <label className="first_label" for="first" style={{marginLeft: -200, position: 'relative', left: 500, fontSize: 25}}>Марка и модель авто*</label>
                <input  className="first_label1" style={{position: 'relative', top: 50, left: -80}} type="text" id="first" size="67"  placeholder="M5 F90"/>
                <label  for="second" style={{ position: 'relative', left: -310, fontSize: 25, top: 100}}>Ваш номер телефона*</label>
                <PhoneInput  placeholder="Введите номер телефона" value={value} onChange={setValue} id="second" style={{position: 'relative', top: 110, left: 0}}/>
                {/* <input placeholder='+7' type="number" id="second" style={{position: 'relative', top: 140, left: -750}}/> */}
                <button style={{position: 'relative', top: 150, left: 520}}><a href="#" style={{color: 'white'}}>Отправить</a></button>
                </div>
            </Modal>

        </div>
      


    )
}

export default Info;