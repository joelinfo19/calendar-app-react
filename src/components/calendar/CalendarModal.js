import React, {useState} from "react"
//React-modal library
import Modal from 'react-modal';
// import DatePicker from 'react-date-picker';
import DateTimePicker from 'react-datetime-picker';
import moment from "moment";

//Styles for body
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const now=moment().minutes(0).seconds(0).add(1,'hours')
const after= now.clone().add(1,'hours')
export const CalendarModal=()=>{
    // const [isOpen,setIsOpen]=useState(true);
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(after.toDate());

    const closeModal=()=>{
        // setIsOpen(false)
    }
    const handleStartDate=(e)=>{
        setDateStart(e)
    }
    const handleEndDate=(e)=>{
        setDateEnd(e)
    }
    return (
        <Modal
            isOpen={true}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className={"modal"}
            overlayClassName={" modal-fondo"}
        >

            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker onChange={handleStartDate} value={dateStart}  className="form-control"/>
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDate}
                        value={dateEnd}
                        className="form-control"
                        minDate={dateStart}
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                        >
                        </textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>


        </Modal>
    )
}
