import React, {useState, useEffect} from 'react'
import line from './icon.png'
import cars from './iconcars.png'
import "./about.css"

const About = ({}) => {
     
    const [mark, setMark] = useState('')
    const [phone, setPhone] = useState('')
    const [markDirty, setMarkDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [markError, setMarkError] = useState('Марка автомобиля не может быть пустой')
    const [phoneError, setPhoneError] = useState('Номер телефона не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
    if(markError || phoneError ){
        setFormValid(false)
    } else{
        setFormValid(true)
    }
    }, [markError, phoneError])

    const markHandler = (e) => {
        setMark(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return 
        if(!re.test(String(e.target.value).toLowerCase())){
            setMarkDirty("Некорректная марка")
        } else{
            setMarkDirty("")
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        if(e.target.value.length  === 10){
            setPhoneError("Неверный номер")
            if(!e.target.value){
                setPhoneError("Номер телефона не может быть пустым")
            } 
        } else{
            setPhoneError("")
        }

    }

    const Blur = (e) => {
            switch (e.target.value){
                case "mark": 
                    setMarkDirty(true)
                    break
                case "phone": 
                    setPhoneDirty(true)
                break

            }
    }


    const Reload = (event) => {
            event.preventdefault()
    }

    return(
        <div className="App__about" style={{}}>
            <h1 className='about_head'>СЭКОНОМЬТЕ ВРЕМЯ И НЕРВЫ НА ПРОДАЖЕ<br/>
СВОЕГО АВТОМОБИЛЯ</h1>
        <form style={{width: 550, height: 580, marginLeft: 1150, marginTop: 70}}>
            <img src={cars} style={{position: 'relative', left: -250, top: 50}}/>
            <h4 style={{fontSize: 30, position: 'relative', left: 60, top: -60}}>Выкупим уже сегодня за 1 ЧАС!</h4>
            <p style={{position: 'relative', left: 65, fontSize: 20, width: 500, top: -100, fontWeight: 'normal'}}>Узнайте за сколько мы купим ваш автомобиль</p>
            <div className='inputs__form' style={{position: 'relative', top: -80}}>
            <label for="mark" style={{marginLeft: -395}}>Марка и модель авто</label>
            <input onChange={e => markHandler(e) } value={mark} name="mark" id="mark" type="text" onBlurHandler={(e) => Blur(e)}/>
            {(markDirty && markError) && <div style={{color: 'red'}}>{markError}</div>}
            <label for="mark1" style={{marginLeft: -460}}>Год выпуска</label>
            <input id="mark1" type="date"/>
            <label for="mark2" style={{marginLeft: -480}}>Ваше имя</label>
            <input id="mark2" type="text"/>
            <label for="mark3" style={{marginLeft: -385}}>Ваш номер телефона *</label>
            <input onChange={e => phoneHandler(e)} value={phone} name="phone" id="mark3" type="number" onBlurHandler={(e) => Blur(e)}/>
            {(phoneDirty && setPhoneDirty) && <div style={{color: 'red'}}>{phoneError}</div>}
            </div>
            <button disabled={!formValid} type="submit" onClick={{}} style={{marginLeft: 25, marginTop: -150, width: 520}}>ОСТАВИТЬ ЗАЯВКУ</button>
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

        </div>
    )
};

export default About;