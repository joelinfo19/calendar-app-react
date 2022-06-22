import React, {useState} from "react"
//React-modal library
import Modal from 'react-modal';
// import DatePicker from 'react-date-picker';
import DateTimePicker from 'react-datetime-picker';
import moment from "moment";
import Swal from "sweetalert2";

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
    const [isOpen,setIsOpen]=useState(true);
    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(after.toDate());
    const [titleValid,setTitleValid]=useState(true)
    //This is to manage a form
    const [formValues,setFormValues]=useState({
        title:'Evento',
        notes:'',
        start:now.toDate(),
        end:after.toDate(),
    })


    const {notes,title,start,end} =formValues
    const handleInputChange=({target})=>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })

    }
    const closeModal=()=>{
        setIsOpen(false)
    }
    const handleStartDate=(e)=>{
        setDateStart(e)
        setFormValues({
            ...formValues,
            start:e
        })
    }
    const handleEndDate=(e)=>{
        setDateEnd(e)
        setFormValues({
            ...formValues,
            end:e
        })
    }
    //button{type=submit}-->this in a form because I can to call in form with {onSubmit=handleSubmitForm}
    const handleSubmitForm=(e)=>{
        e.preventDefault()
        const momentStart=moment(start);
        const momentEnd=moment(end);
        if(momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error','The end date should be greater than init date',"error")
        }
        if(title.trim().length<2){
            return setTitleValid(false)
        }
        setTitleValid(true)
        // closeModal()
    }
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className={"modal"}
            overlayClassName={" modal-fondo"}
        >

            <h1> Nuevo evento </h1>
            <hr />
            <form className="container"
                  onSubmit={handleSubmitForm}
            >

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
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
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
                            value={notes}
                            onChange={handleInputChange}
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
