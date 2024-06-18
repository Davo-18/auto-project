import React, {useState} from 'react'
import Modal from './Modal'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Haval from './Haval.jpg'
import Haval2 from './72962780.png'
import Haval3 from './125d9005c610ed471498c08695ae8af1.jpeg'
import './cars.css'




const Cars = () => {
    const update = (e) => {
        e.preventDefault()
    }

    const [modalactive, setModalActive] = useState(false)
    const [value, setValue] = useState()

return(
    <div className='Cars_price'>
        <h1 style={{position: 'relative', left: 350, top: -50, fontSize: 40}}>ПОКУПКА АВТОМОБИЛЯ</h1>
        <h4 className="cars_h4" style={{fontSize: 25, marginLeft: 405}}>Haval Jolion New</h4>
        <img src={Haval} className="Haval" width={500} style={{position: 'relative', left: -500, top: -40}}/>
        <div className='main__car' style={{position: 'relative', top: -300}}>
        <div className='cars_p'>
        <p>Скидка по кредиту 70000р</p>
        <p>КАСКО в подарок</p>
        <p>Гарантия 5 лет</p>
        </div>
        <div className='cars_p2'>
        <p style={{fontSize: 25}}>цена от 1 364 200₽</p>
        <p style={{position: 'relative', top: -25}}>в кредит <span style={{color: 'aqua'}}>от 16240₽/мес.</span></p>
        </div>
        <div className='cars_btn1'>
        <button onClick={() => setModalActive(true)} className="second_btn2"  style={{position: 'relative', left: -250}}><a href="#" style={{color: 'white'}}>Зафиксировать предложение</a></button>
        <button onClick={() => setModalActive(true)} className='second_btn22' style={{position: 'relative', left: 860}}><a href="#" style={{color: 'white'}}>В кредит от 4.9%</a></button>
        </div>
        </div>
        <div className='cars__haval7'>
        <h4 className="cars_h4" style={{fontSize: 25, marginLeft: 405}}>Haval F7x New</h4>
        <img src={Haval2} className="Haval" width={500} style={{position: 'relative', left: -500, top: -110}}/>
        <div className='main__car7' style={{position: 'relative', top: -420, left: 15}}>
        <div className='cars_p'>
        <p>Скидка по кредиту 70000р</p>
        <p>КАСКО в подарок</p>
        <p>Гарантия 5 лет</p>
        </div>
        <div className='cars_p2'>
        <p style={{fontSize: 25}}>цена от 1 649 200 ₽</p>
        <p style={{position: 'relative', top: -25}}>в кредит <span style={{color: 'aqua'}}>от 19 633 ₽/мес.</span></p>
        </div>
        <div className='cars_btn'>
        <button onClick={() => setModalActive(true)} className="second_btn2"  style={{position: 'relative', left: -250}}><a href="#" style={{color: 'white'}}>Зафиксировать предложение</a></button>
        <button onClick={() => setModalActive(true)} className='second_btn22' style={{position: 'relative', left: 860}}><a href="#" style={{color: 'white'}}>В кредит от 4.9%</a></button>
        </div>
        </div>
        </div>
        <div className='cars__haval7' style={{position: 'relative', top: -730}}>
        <h4 className="cars_h4" style={{fontSize: 25, marginLeft: 335}}>Haval H9</h4>
        <img src={Haval3} className="Haval" width={500} style={{position: 'relative', left: -500, top: -110}}/>
        <div className='main__car7' style={{position: 'relative', top: -420, left: 15}}>
        <div className='cars_p'>
        <p>Скидка по кредиту 70000р</p>
        <p>КАСКО в подарок</p>
        <p>Гарантия 5 лет</p>
        </div>
        <div className='cars_p2'>
        <p style={{fontSize: 25}}>цена от 2 569 200 ₽</p>
        <p style={{position: 'relative', top: -25}}>в кредит <span style={{color: 'aqua'}}>от 30 586 ₽/мес.</span></p>
        </div>
        <div className='cars_btn'>
        <button onClick={() => setModalActive(true)} className="second_btn2" style={{position: 'relative', left: -250}}><a href="#" style={{color: 'white'}}>Зафиксировать предложение</a></button>
        <button onClick={() => setModalActive(true)} className='second_btn22' style={{position: 'relative', left: 860}}><a href="#" style={{color: 'white'}}>В кредит от 4.9%</a></button>
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
        </div>
        </div>
       
    </div>
)

}


export default Cars;

