import './Feedback2.css';
import chat from './25858316.png'


const Feedback2 = () => {


    return(
        <div className="App_feedback2" style={{position: 'relative', top: -200}}>
            <h1 style={{marginLeft: 900, position: 'relative', left: 400, textAlign: 'left', fontSize: 40}}>Узнайте стоимость вашего автомобиля
в WhatsApp или Telegram за 5 минут:</h1>
<p style={{fontSize: 22, marginLeft: 1000, position: 'relative', left: 300, textAlign: 'left'}}>Добавьте наш номер +7 (901) 581-76-25 или нажмите на кнопки ниже</p>
<div className="button_link">
<button type="submit" style={{fontSize: 12, position: 'relative', left: 20}}><a href="whatsapp://send?phone=+79015817625" style={{textDecoration: 'none', color: 'white'}}>Стоимость в WhatsApp</a></button>
<button className='second_btn' style={{fontSize: 12, position: 'relative', left: 650}}><a href="https://t.me/@ArmDavid777" style={{textDecoration: 'none', color: 'white'}}>Стоимость в Telegram</a></button>
</div>
<p style={{marginLeft: 1100, textAlign: 'left', position: 'relative', left:210}}>Сообщите марку, модель, год выпуска.
Прикрепите несколько фотографий и мы озвучим стоимость выкупа вашего автомобиля</p>
<img src={chat} style={{position: 'relative', top: -520, height: 550, left: -300}}/>

        </div>

    )

}


export default Feedback2;