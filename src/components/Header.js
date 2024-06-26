import React from 'react';
import mainlogo from './Link.png'
import mainlogo11 from './Link1.png'
import mainlogo2 from './SVG.png'
import './Header.css';

const Header = () => {
    


    return(
        <div className='App'>
            <h1 className="main__header" style={{marginTop: 70, color: '#21a038'}}>АВТОСАЛОН</h1>
            <div className="contacts" style={{marginTop: -100, marginLeft: 600}}>
            <a href="tel:+79015817625" style={{color: "black"}}>+79015817625</a>
            <p style={{position: 'relative', left: 200}}>Мы работаем всегда 24/7. Звоните, пишите<br/>
                или оставьте свою заявку на сайте и в<br/>
                кратчайшее время мы Вам перезвоним!</p>
            <div className='logo_head' style={{marginLeft: 500, marginTop: -70}}>
            <a href="https://t.me/@ArmDavid777"><img src={mainlogo} style={{position: 'relative', right: 10}}/></a>
            <a href="whatsapp://send?phone=+79015817625"><img src={mainlogo11}/></a>
            </div>
            <img className="phone" src={mainlogo2} style={{marginLeft: -150, position: 'relative', top: -95}}/>
            </div>


        </div>
         
    )
}

export default Header;