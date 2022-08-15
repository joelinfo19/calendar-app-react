import {useDispatch} from "react-redux";
import {eventDeleted, startEventDeleted} from "../../actions/events";


export const DeleteEventFab=()=>{
    const dispatch =useDispatch()
    const handleDelete=()=>{
        dispatch(startEventDeleted())
    }

    return(
        <button onClick={handleDelete}
            className="btn btn-danger fab-danger"
        >
            <i className="fas fa-trash"></i>
            <span>Delete event</span>

        </button>

        )
}
