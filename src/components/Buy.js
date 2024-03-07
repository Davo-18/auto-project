import buy from './buy.css'
import photo from "./div.component-image__image.png"
import iconss from './SVGicon2.png'




const Buy = () => {


    return (
        <div className="App__buy">
            <h1 style={{fontSize: 40, position: 'relative', left: 400, top: 40}}>МЫ ВЫКУПАЕМ ЛЮБЫЕ АВТОМОБИЛИ</h1>
            <div className='text__buy' style={{position: 'relative', top: 50, textAlign: 'left', left: -100}}>
            <p>Отечественные</p>
            <p>Иномарки</p>
            <p>Бюджетные или дорогие</p>
            <p>Требующие ремонта(двигателя, коробки или кузовного ремонта)</p>
            <p>После ДТП</p>
            <p>Кредитные, залоговые, с ограничениями или всё вместе.</p>
            </div>
            <button style={{position: 'relative', left: 600, top: 120}}>ПРОДАТЬ АВТО</button>
            <div className='border__green'>
            <img src={iconss} style={{position: 'relative', top: -415, left: 60}}/>
            <img src={iconss} style={{position: 'relative', top: -350, left: 20}}/>
            <img src={iconss} style={{position: 'relative', top: -285, left: -20}}/>
            <img src={iconss} style={{position: 'relative', top: -220, left: -60}}/>
            <img src={iconss} style={{position: 'relative', top: -155, left: -100}}/>
            <img src={iconss} style={{position: 'relative', top: -90, left: -140}}/>
            </div>
            <img src={photo} style={{position: 'relative', left: 500, top: -300}}/>


        
        </div>
    )
}

export default Buy ;