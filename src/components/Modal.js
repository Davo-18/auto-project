import modal from './Modal.css'

const Modal = ({active, setActive, children}) => {


                    

    return(
        <div className={active ? "App_modal active" : "App_modal"} onClick={() => setActive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            {children}
        </div>
        </div>



    )
}


export default Modal;