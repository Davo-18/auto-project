import React, {useState, useEffect} from 'react'
import Modal from './Modal'
import line from './icon.png'
import cars from './iconcars.png'
import "./about.css"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { send } from 'emailjs-com'


 

const About = ({}) => {

    let [modalactive, setModalActive] = useState(false)

    const update = (e) => {
        e.preventDefault()
    }

    const [value, setValue] = useState()
    
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'SERVICE ID',
            'TEMPLATE ID',
            toSend,
            'User ID'
          )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    

    

    return(

        <div className="App__about" style={{}}>
            <h1 className='about_head'>СЭКОНОМЬТЕ ВРЕМЯ И НЕРВЫ НА ПРОДАЖЕ<br/>
СВОЕГО АВТОМОБИЛЯ</h1>
        <form style={{width: 550, height: 580, marginLeft: 1150, marginTop: 70}} onSubmit={onSubmit}>
            <img src={cars} style={{position: 'relative', left: -250, top: 50}}/>
            <h4 style={{fontSize: 30, position: 'relative', left: 60, top: -60}}>Выкупим уже сегодня за 1 ЧАС!</h4>
            <p style={{position: 'relative', left: 65, fontSize: 20, width: 500, top: -100, fontWeight: 'normal'}}>Узнайте за сколько мы купим ваш автомобиль</p>
            <div className='inputs__form' style={{position: 'relative', top: -80}}>
            <label for="mark" style={{marginLeft: -200, position: 'relative', left: -95}}>Марка и модель авто</label>
            <input name="mark" id="mark" type="text" value={toSend.mark}
    onChange={handleChange} placeholder="M5 F90"/>
            <label for="mark1" style={{marginLeft: -460}}>Год выпуска</label>
            <input id="mark1" type="date" defaultValue="2024-05-17" value={toSend.mark1}
    onChange={handleChange}/>
            <label for="mark2" style={{marginLeft: -480}}>Ваше имя</label>
            <input id="mark2" type="text" value={toSend.mark2}
    onChange={handleChange}/>
            <label for="mark3" style={{marginLeft: -385}}>Ваш номер телефона *</label>
            <PhoneInput  placeholder="Введите номер телефона" value={value} onChange={setValue} id="mark3"/>
           
            </div>
            <button  type="submit" onClick={() => setModalActive(true)}  style={{marginLeft: 25, marginTop: -150, width: 520}}><a href="#" style={{color: 'white'}}>ОСТАВИТЬ ЗАЯВКУ</a></button>
        </form>
        <div className="plus__company"  style={{marginTop: -610, marginLeft: -1100}}>
        <h4 style={{marginLeft: -30, fontSize: 18}}>Бесплатный выезд</h4>
        <p style={{marginLeft: 520}}>Наш специалист приедет на осмотр и оценку<br/>
автомобиля в удобное для вас время и место<br/>
<span style={{marginLeft: -165}}>совершенно бесплатно</span></p>
        <h4 style={{marginLeft: -5, fontSize: 18}}>Бесплатный эвакуатор</h4>
        <p style={{marginLeft: 530}}>Если автомобиль не на ходу и требует ремонта</p>
        <h4 style={{marginLeft: -50, fontSize: 18}}>Бесплатное такси</h4>
        <p style={{marginLeft: 450}}>После оформления всех документов</p>
        <h4 style={{marginLeft: -20, fontSize: 18}}>Полная прозрачность</h4>
        <p style={{marginLeft: 480}}>Оформление документов на выкуп авто в<br/>
<span style={{marginLeft: 25}}>соответствии с законом</span>. Продажа защищена<br/>
<span style={{marginLeft: -210}}>юридически</span></p>
        <h4 style={{fontSize: 18}}>Моментальная выплата</h4>
        <p style={{marginLeft: 490}}>Оплатим в любой, удобной для вас форме,<br/><span style={{marginLeft: -20}}>наличными</span> или банковским переводом</p>
        </div>
        <div className='line__icons'  style={{}}>
        <img src={line} style={{fontSize: 10, position: 'relative', top: -550, left: -620}}/>
        <img src={line} style={{fontSize: 10, position: 'relative', top: -415, left: -650}}/>
        <img src={line} style={{fontSize: 10, position: 'relative', top: -320, left: -680}}/>
        <img src={line} style={{fontSize: 10, position: 'relative', top: -225, left: -710}}/>
        <img src={line} style={{fontSize: 10, position: 'relative', top: -90, left: -740}}/>
        </div>
        <Modal active={modalactive} setActive={setModalActive}  onClick={update}>
                <div className="form__modal">
                <h3 style={{fontSize: 30}}>Оформить заявку</h3>
                <label for="first"style={{marginLeft: -200, position: 'relative', left: 500, fontSize: 25}}>Марка и модель авто*</label>
                <input style={{position: 'relative', top: 50, left: -80}} type="text" id="first"  size="67" placeholder="M5 F90"/>
                <label for="second" style={{ position: 'relative', left: -310, fontSize: 25, top: 100}}>Ваш номер телефона*</label>
                <PhoneInput  placeholder="Введите номер телефона" value={value} onChange={setValue} id="second" style={{position: 'relative', top: 110, left: 0}}/>
                {/* <input placeholder='+7' type="number" id="second" style={{position: 'relative', top: 140, left: -750}}/> */}
                <button style={{position: 'relative', top: 150, left: 520}}><a href="#" style={{color: 'white'}}>Отправить</a></button>
                </div>
        </Modal>
        </div>
    )
};


export default About;