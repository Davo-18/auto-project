import './Feedback.css';
import done from './icondone.png'


const Feedback = () => {


    return(
        <div className="App_feedback" style={{position: 'relative', left: -20}}>
            <h1 style={{position: 'relative', left:350  ,fontSize: 40, }}>ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ ИМЕННО К НАМ</h1>
        
            <div className='feedback__mark' style={{backgroundColor: 'white', marginRight: 300, padding: 15, marginTop: 30}}>
            <h4 style={{fontSize: 22, marginLeft: -40}}>Мы</h4>
            <div className='text__our' style={{position: 'relative', left: 50}}>
            <p>Оцениваем по телефону и, если цена вас устраивает, назначаем время и место встречи</p>
            <p>Грамотно оформляем все документы, фиксируем дату продажи в договоре, вам не придут штрафы и налоги</p>
            <p>Выплачиваем деньги сразу после озвучивания цены, находясь у вашего авто</p>
            </div>
            <img src={done} style={{position: 'relative', left: -510, top: -140}}/>
            <img src={done} style={{position: 'relative', left: -550, top: -100}}/>
            <img src={done} style={{position: 'relative', left: -590, top: -50}}/>
            </div>




        </div>
    )
}

export default Feedback;