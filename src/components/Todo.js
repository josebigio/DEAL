import Modal from './Modal'
import {useState} from 'react'


function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    function handleClick() {
        console.log("clicked")
        setModalIsOpen(true)
    }

    function handleClose() {
        setModalIsOpen(false)
    }

    return (
        <div>
            This is a Todo
            <button onClick={handleClick}>This is a button</button>
            {modalIsOpen && <Modal onCancel={handleClose}/>}
        </div>
    )

}

export default Todo;