import footer from './footer.css'


const Footer = () => {



    return(
        <div className="App__footer" >
            <div className='footer' style={{position: 'relative', top: 80}}>
            <a href="tel: +79015817625" style={{color: 'white', fontSize: 30, textAlign: 'left', position: 'relative', left: -565, top: 150}}>+79015817625</a>
            <p style={{color: 'white', position: 'relative', top: 170, left: 280, textAlign: 'left'}}>Мы работаем всегда 24/7. Звоните, пишите или оставьте свою заявку<br/>на сайте и в кратчайшее время мы Вам перезвоним!</p>
            <h4 style={{color: '#21a038', fontSize: 30, position: 'relative', left: -580, top: 150}}>АВТОВЫКУП</h4>
            </div>
            
            
            
        </div>
    )
}

export default Footer